-- ODIECLOUD²π Database Schema
-- PostgreSQL 14+

-- ============================================
-- EXTENSIONS
-- ============================================

CREATE EXTENSION IF NOT EXISTS "uuid-ossp";
CREATE EXTENSION IF NOT EXISTS "pgcrypto";

-- ============================================
-- ENUMS
-- ============================================

CREATE TYPE membership_status AS ENUM ('pending', 'approved', 'rejected', 'suspended');
CREATE TYPE user_role AS ENUM ('admin', 'member', 'guest');
CREATE TYPE community_type AS ENUM (
  'subsidiaries',
  'equity_affiliates',
  'equity_partners',
  'strategic_partnerships',
  'technology_partnerships',
  'channel_partner_network',
  'internship_networks'
);
CREATE TYPE opportunity_type AS ENUM (
  'business',
  'investment',
  'manufacturing',
  'trade',
  'technology',
  'general'
);

-- ============================================
-- TABLES
-- ============================================

-- Users Table (Admin & Members)
CREATE TABLE users (
  id UUID PRIMARY KEY DEFAULT uuid_generate_v4(),
  email VARCHAR(255) UNIQUE NOT NULL,
  password_hash VARCHAR(255) NOT NULL,
  role user_role DEFAULT 'member',
  is_active BOOLEAN DEFAULT true,
  is_verified BOOLEAN DEFAULT false,
  verification_token VARCHAR(255),
  reset_password_token VARCHAR(255),
  reset_password_expire TIMESTAMP,
  last_login TIMESTAMP,
  created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP,
  updated_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP
);

-- Membership Applications Table
CREATE TABLE membership_applications (
  id UUID PRIMARY KEY DEFAULT uuid_generate_v4(),
  user_id UUID REFERENCES users(id) ON DELETE SET NULL,
  
  -- Personal Information
  full_name VARCHAR(100) NOT NULL,
  email VARCHAR(255) NOT NULL,
  phone VARCHAR(50) NOT NULL,
  country VARCHAR(100) NOT NULL,
  
  -- Organization Information
  organization VARCHAR(200) NOT NULL,
  role VARCHAR(100) NOT NULL,
  
  -- Membership Details
  community_type community_type NOT NULL,
  opportunity_interest opportunity_type NOT NULL,
  problem_statement TEXT NOT NULL,
  access_reason TEXT NOT NULL,
  
  -- Status & Metadata
  status membership_status DEFAULT 'pending',
  reviewed_by UUID REFERENCES users(id) ON DELETE SET NULL,
  reviewed_at TIMESTAMP,
  review_notes TEXT,
  
  -- Security
  ip_address INET,
  user_agent TEXT,
  
  -- Timestamps
  created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP,
  updated_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP
);

-- Members Table (Approved Applications)
CREATE TABLE members (
  id UUID PRIMARY KEY DEFAULT uuid_generate_v4(),
  user_id UUID UNIQUE REFERENCES users(id) ON DELETE CASCADE,
  application_id UUID UNIQUE REFERENCES membership_applications(id) ON DELETE SET NULL,
  
  -- Member Information
  full_name VARCHAR(100) NOT NULL,
  email VARCHAR(255) UNIQUE NOT NULL,
  phone VARCHAR(50),
  country VARCHAR(100),
  organization VARCHAR(200),
  role VARCHAR(100),
  
  -- Membership Details
  community_type community_type NOT NULL,
  membership_tier VARCHAR(50) DEFAULT 'basic',
  member_since TIMESTAMP DEFAULT CURRENT_TIMESTAMP,
  membership_expires TIMESTAMP,
  
  -- Status
  is_active BOOLEAN DEFAULT true,
  
  -- Timestamps
  created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP,
  updated_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP
);

-- Audit Log Table (Security & Compliance)
CREATE TABLE audit_logs (
  id UUID PRIMARY KEY DEFAULT uuid_generate_v4(),
  user_id UUID REFERENCES users(id) ON DELETE SET NULL,
  action VARCHAR(100) NOT NULL,
  resource_type VARCHAR(50) NOT NULL,
  resource_id UUID,
  ip_address INET,
  user_agent TEXT,
  details JSONB,
  created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP
);

-- Rate Limiting Table (Track API requests)
CREATE TABLE rate_limits (
  id UUID PRIMARY KEY DEFAULT uuid_generate_v4(),
  ip_address INET NOT NULL,
  endpoint VARCHAR(255) NOT NULL,
  request_count INTEGER DEFAULT 1,
  window_start TIMESTAMP DEFAULT CURRENT_TIMESTAMP,
  created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP
);

-- ============================================
-- INDEXES
-- ============================================

CREATE INDEX idx_users_email ON users(email);
CREATE INDEX idx_users_role ON users(role);
CREATE INDEX idx_users_is_active ON users(is_active);

CREATE INDEX idx_applications_email ON membership_applications(email);
CREATE INDEX idx_applications_status ON membership_applications(status);
CREATE INDEX idx_applications_created_at ON membership_applications(created_at);
CREATE INDEX idx_applications_community_type ON membership_applications(community_type);

CREATE INDEX idx_members_email ON members(email);
CREATE INDEX idx_members_user_id ON members(user_id);
CREATE INDEX idx_members_is_active ON members(is_active);
CREATE INDEX idx_members_community_type ON members(community_type);

CREATE INDEX idx_audit_user_id ON audit_logs(user_id);
CREATE INDEX idx_audit_action ON audit_logs(action);
CREATE INDEX idx_audit_created_at ON audit_logs(created_at);

CREATE INDEX idx_rate_limits_ip ON rate_limits(ip_address);
CREATE INDEX idx_rate_limits_endpoint ON rate_limits(endpoint);
CREATE INDEX idx_rate_limits_window ON rate_limits(window_start);

-- ============================================
-- TRIGGERS
-- ============================================

CREATE OR REPLACE FUNCTION update_updated_at_column()
RETURNS TRIGGER AS $$
BEGIN
  NEW.updated_at = CURRENT_TIMESTAMP;
  RETURN NEW;
END;
$$ language 'plpgsql';

CREATE TRIGGER update_users_updated_at BEFORE UPDATE ON users
  FOR EACH ROW EXECUTE FUNCTION update_updated_at_column();

CREATE TRIGGER update_applications_updated_at BEFORE UPDATE ON membership_applications
  FOR EACH ROW EXECUTE FUNCTION update_updated_at_column();

CREATE TRIGGER update_members_updated_at BEFORE UPDATE ON members
  FOR EACH ROW EXECUTE FUNCTION update_updated_at_column();

-- ============================================
-- INITIAL DATA
-- ============================================

INSERT INTO users (email, password_hash, role, is_active, is_verified)
VALUES (
  'admin@odiecloud.com',
  '$2b$12$LQv3c1yqBWVHxkd0LHAkCOYz6TtxMQJqhN8/LewY5GyYIeWEHaSuu',
  'admin',
  true,
  true
);

-- ============================================
-- VIEWS
-- ============================================

CREATE VIEW pending_applications AS
SELECT 
  id,
  full_name,
  email,
  organization,
  community_type,
  opportunity_interest,
  created_at
FROM membership_applications
WHERE status = 'pending'
ORDER BY created_at DESC;

CREATE VIEW active_members AS
SELECT 
  m.id,
  m.full_name,
  m.email,
  m.organization,
  m.community_type,
  m.member_since,
  u.last_login
FROM members m
LEFT JOIN users u ON m.user_id = u.id
WHERE m.is_active = true
ORDER BY m.member_since DESC;
