// Security configuration
export const securityConfig = {
  // Content Security Policy
  csp: {
    'default-src': ["'self'"],
    'script-src': ["'self'", "'unsafe-inline'", "https://fonts.googleapis.com"],
    'style-src': ["'self'", "'unsafe-inline'", "https://fonts.googleapis.com"],
    'font-src': ["'self'", "https://fonts.gstatic.com"],
    'img-src': ["'self'", "data:", "https:"],
    'connect-src': ["'self'"],
    'frame-ancestors': ["'none'"],
    'base-uri': ["'self'"],
    'form-action': ["'self'"]
  },

  // Rate limiting
  rateLimit: {
    maxAttempts: 3,
    windowMs: 300000 // 5 minutes
  },

  // Input constraints
  inputLimits: {
    name: { min: 2, max: 100 },
    email: { max: 255 },
    phone: { max: 50 },
    text: { min: 2, max: 200 },
    textarea: { min: 10, max: 2000 }
  },

  // Honeypot field name (hidden from users, catches bots)
  honeypotField: 'website_url'
}
