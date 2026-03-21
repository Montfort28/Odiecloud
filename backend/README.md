# 🔐 ODIECLOUD²π Backend API

Production-ready Node.js + Express + PostgreSQL backend with full security implementation.

---

## 📋 **FEATURES**

### ✅ **Security**
- JWT authentication
- Password hashing (bcrypt)
- Rate limiting
- Helmet security headers
- XSS protection
- HPP protection
- CORS configuration
- Input validation & sanitization
- SQL injection prevention

### ✅ **Functionality**
- Membership application system
- User authentication (register/login)
- Admin dashboard
- Role-based access control (RBAC)
- Audit logging
- Email notifications (ready)

### ✅ **Database**
- PostgreSQL with connection pooling
- Optimized indexes
- Auto-updating timestamps
- Transaction support
- Database migrations

---

## 🚀 **QUICK START**

### **1. Install Dependencies**
```bash
cd backend
npm install
```

### **2. Setup Environment**
```bash
# Copy environment template
cp .env.example .env

# Edit .env with your values
# IMPORTANT: Change all secrets and passwords!
```

### **3. Setup Database**
```bash
# Install PostgreSQL (if not installed)
# Windows: Download from https://www.postgresql.org/download/windows/
# Mac: brew install postgresql
# Linux: sudo apt-get install postgresql

# Create database
psql -U postgres
CREATE DATABASE odiecloud_db;
\q

# Run schema
psql -U postgres -d odiecloud_db -f src/database/schema.sql
```

### **4. Start Server**
```bash
# Development mode (with auto-reload)
npm run dev

# Production mode
npm start
```

Server will run on: `http://localhost:3000`

---

## 📡 **API ENDPOINTS**

### **Health Check**
```
GET /health
```

### **Authentication**
```
POST   /api/v1/auth/register      - Register new user
POST   /api/v1/auth/login         - Login user
GET    /api/v1/auth/me            - Get current user (Protected)
POST   /api/v1/auth/logout        - Logout (Protected)
PUT    /api/v1/auth/password      - Change password (Protected)
```

### **Membership**
```
POST   /api/v1/membership/apply                    - Submit application (Public)
GET    /api/v1/membership/applications             - Get all applications (Admin)
GET    /api/v1/membership/applications/:id         - Get single application (Admin)
PUT    /api/v1/membership/applications/:id/status  - Update status (Admin)
DELETE /api/v1/membership/applications/:id         - Delete application (Admin)
```

### **Admin**
```
GET    /api/v1/admin/stats        - Dashboard statistics (Admin)
GET    /api/v1/admin/users        - User management (Admin)
```

---

## 🔑 **AUTHENTICATION**

### **Register**
```bash
POST /api/v1/auth/register
Content-Type: application/json

{
  "email": "user@example.com",
  "password": "SecurePass123!"
}
```

### **Login**
```bash
POST /api/v1/auth/login
Content-Type: application/json

{
  "email": "user@example.com",
  "password": "SecurePass123!"
}

# Response:
{
  "success": true,
  "token": "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9...",
  "user": {
    "id": "uuid",
    "email": "user@example.com",
    "role": "member"
  }
}
```

### **Protected Routes**
```bash
GET /api/v1/auth/me
Authorization: Bearer YOUR_JWT_TOKEN
```

---

## 📝 **SUBMIT MEMBERSHIP APPLICATION**

```bash
POST /api/v1/membership/apply
Content-Type: application/json

{
  "name": "John Doe",
  "email": "john@example.com",
  "phone": "+250123456789",
  "country": "Rwanda",
  "org": "Tech Company Ltd",
  "role": "CEO",
  "community": "equity_partners",
  "opportunity": "investment",
  "problem": "Looking for investment opportunities in African tech startups...",
  "notes": "We are a venture capital firm interested in joining the ecosystem..."
}
```

---

## 🔐 **DEFAULT ADMIN CREDENTIALS**

**⚠️ CHANGE THESE IMMEDIATELY IN PRODUCTION!**

```
Email: admin@odiecloud.com
Password: Admin@123
```

To change admin password:
1. Login as admin
2. Use PUT /api/v1/auth/password endpoint

---

## 🗄️ **DATABASE SCHEMA**

### **Tables**
- `users` - User accounts (admin & members)
- `membership_applications` - Membership requests
- `members` - Approved members
- `audit_logs` - Security audit trail
- `rate_limits` - API rate limiting

### **Enums**
- `membership_status`: pending, approved, rejected, suspended
- `user_role`: admin, member, guest
- `community_type`: subsidiaries, equity_affiliates, etc.
- `opportunity_type`: business, investment, manufacturing, etc.

---

## 🔧 **CONFIGURATION**

### **Environment Variables**

| Variable | Description | Default |
|----------|-------------|---------|
| `NODE_ENV` | Environment (development/production) | development |
| `PORT` | Server port | 3000 |
| `DB_HOST` | PostgreSQL host | localhost |
| `DB_PORT` | PostgreSQL port | 5432 |
| `DB_NAME` | Database name | odiecloud_db |
| `DB_USER` | Database user | postgres |
| `DB_PASSWORD` | Database password | - |
| `JWT_SECRET` | JWT signing key | - |
| `JWT_EXPIRE` | Token expiration | 7d |
| `BCRYPT_ROUNDS` | Password hashing rounds | 12 |
| `CORS_ORIGIN` | Allowed frontend origin | http://localhost:5173 |

---

## 🧪 **TESTING**

### **Test with cURL**

```bash
# Health check
curl http://localhost:3000/health

# Submit application
curl -X POST http://localhost:3000/api/v1/membership/apply \
  -H "Content-Type: application/json" \
  -d '{
    "name": "Test User",
    "email": "test@example.com",
    "phone": "+250123456789",
    "country": "Rwanda",
    "org": "Test Org",
    "role": "Developer",
    "community": "technology_partnerships",
    "opportunity": "technology",
    "problem": "Testing the API endpoint",
    "notes": "This is a test submission"
  }'

# Login
curl -X POST http://localhost:3000/api/v1/auth/login \
  -H "Content-Type: application/json" \
  -d '{
    "email": "admin@odiecloud.com",
    "password": "Admin@123"
  }'
```

### **Test with Postman**
1. Import endpoints from documentation
2. Set Authorization header: `Bearer YOUR_TOKEN`
3. Test all endpoints

---

## 📦 **DEPLOYMENT**

### **Production Checklist**
- [ ] Change all default passwords
- [ ] Update JWT_SECRET to strong random string
- [ ] Set NODE_ENV=production
- [ ] Enable SSL/HTTPS
- [ ] Configure production database
- [ ] Set up email service (SMTP)
- [ ] Configure CORS for production domain
- [ ] Set up monitoring/logging
- [ ] Enable database backups
- [ ] Configure firewall rules

### **Hosting Options**
- **Railway** (Recommended) - Free tier, auto-deploy
- **Render** - Free tier, PostgreSQL included
- **Heroku** - Easy deployment
- **AWS EC2** - Full control
- **DigitalOcean** - Simple VPS

---

## 🔒 **SECURITY BEST PRACTICES**

1. **Never commit .env file**
2. **Use strong JWT_SECRET** (min 32 characters)
3. **Change default admin password**
4. **Enable HTTPS in production**
5. **Keep dependencies updated** (`npm audit`)
6. **Use environment-specific configs**
7. **Implement rate limiting**
8. **Log security events**
9. **Regular database backups**
10. **Monitor for suspicious activity**

---

## 📁 **PROJECT STRUCTURE**

```
backend/
├── src/
│   ├── config/
│   │   └── database.js          # Database connection
│   ├── controllers/
│   │   ├── authController.js    # Authentication logic
│   │   └── membershipController.js
│   ├── middleware/
│   │   ├── auth.js              # JWT verification
│   │   ├── validation.js        # Input validation
│   │   ├── errorHandler.js      # Error handling
│   │   └── notFound.js          # 404 handler
│   ├── routes/
│   │   ├── authRoutes.js        # Auth endpoints
│   │   ├── membershipRoutes.js  # Membership endpoints
│   │   └── adminRoutes.js       # Admin endpoints
│   ├── database/
│   │   └── schema.sql           # Database schema
│   └── server.js                # Main entry point
├── .env.example                 # Environment template
├── .gitignore
├── package.json
└── README.md
```

---

## 🐛 **TROUBLESHOOTING**

### **Database Connection Error**
```
Error: connect ECONNREFUSED 127.0.0.1:5432
```
**Solution:** Ensure PostgreSQL is running
```bash
# Windows
net start postgresql-x64-14

# Mac/Linux
sudo service postgresql start
```

### **JWT Error**
```
Error: JWT_SECRET is not defined
```
**Solution:** Set JWT_SECRET in .env file

### **Port Already in Use**
```
Error: listen EADDRINUSE: address already in use :::3000
```
**Solution:** Change PORT in .env or kill process using port 3000

---

## 📞 **SUPPORT**

For issues or questions:
1. Check this README
2. Review .env.example
3. Check database schema
4. Test with provided cURL commands

---

## 🎯 **NEXT STEPS**

1. **Install dependencies:** `npm install`
2. **Setup database:** Run schema.sql
3. **Configure .env:** Copy and edit .env.example
4. **Start server:** `npm run dev`
5. **Test endpoints:** Use cURL or Postman
6. **Connect frontend:** Update API_URL in frontend .env

---

## 📊 **STATUS**

**Backend:** ✅ READY TO IMPLEMENT
**Database:** ✅ SCHEMA PREPARED
**Security:** ✅ FULLY CONFIGURED
**Documentation:** ✅ COMPLETE

**Ready to start when you are!** 🚀
