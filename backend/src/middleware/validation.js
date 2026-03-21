import { body } from 'express-validator'

// Membership application validation
export const validateMembershipApplication = [
  body('name')
    .trim()
    .isLength({ min: 2, max: 100 })
    .withMessage('Name must be between 2 and 100 characters')
    .matches(/^[a-zA-Z\s'-]+$/)
    .withMessage('Name can only contain letters, spaces, hyphens, and apostrophes'),
  
  body('email')
    .trim()
    .isEmail()
    .withMessage('Please provide a valid email')
    .normalizeEmail()
    .isLength({ max: 255 })
    .withMessage('Email must not exceed 255 characters'),
  
  body('phone')
    .trim()
    .matches(/^[+]?[(]?[0-9]{1,4}[)]?[-\s.]?[(]?[0-9]{1,4}[)]?[-\s.]?[0-9]{1,9}$/)
    .withMessage('Please provide a valid phone number')
    .isLength({ max: 50 })
    .withMessage('Phone number must not exceed 50 characters'),
  
  body('country')
    .trim()
    .isLength({ min: 2, max: 100 })
    .withMessage('Country must be between 2 and 100 characters'),
  
  body('org')
    .trim()
    .isLength({ min: 2, max: 200 })
    .withMessage('Organization name must be between 2 and 200 characters'),
  
  body('role')
    .trim()
    .isLength({ min: 2, max: 100 })
    .withMessage('Role must be between 2 and 100 characters'),
  
  body('community')
    .trim()
    .isIn(['subsidiaries', 'equity_affiliates', 'equity_partners', 'strategic_partnerships', 
           'technology_partnerships', 'channel_partner_network', 'internship_networks'])
    .withMessage('Invalid community type'),
  
  body('opportunity')
    .trim()
    .isIn(['business', 'investment', 'manufacturing', 'trade', 'technology', 'general'])
    .withMessage('Invalid opportunity type'),
  
  body('problem')
    .trim()
    .isLength({ min: 10, max: 2000 })
    .withMessage('Problem statement must be between 10 and 2000 characters'),
  
  body('notes')
    .trim()
    .isLength({ min: 10, max: 2000 })
    .withMessage('Notes must be between 10 and 2000 characters')
]

// User registration validation
export const validateRegistration = [
  body('email')
    .trim()
    .isEmail()
    .withMessage('Please provide a valid email')
    .normalizeEmail()
    .isLength({ max: 255 })
    .withMessage('Email must not exceed 255 characters'),
  
  body('password')
    .isLength({ min: 8 })
    .withMessage('Password must be at least 8 characters')
    .matches(/^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[@$!%*?&])[A-Za-z\d@$!%*?&]/)
    .withMessage('Password must contain at least one uppercase letter, one lowercase letter, one number, and one special character')
]

// User login validation
export const validateLogin = [
  body('email')
    .trim()
    .isEmail()
    .withMessage('Please provide a valid email')
    .normalizeEmail(),
  
  body('password')
    .notEmpty()
    .withMessage('Password is required')
]

// Change password validation
export const validatePasswordChange = [
  body('currentPassword')
    .notEmpty()
    .withMessage('Current password is required'),
  
  body('newPassword')
    .isLength({ min: 8 })
    .withMessage('New password must be at least 8 characters')
    .matches(/^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[@$!%*?&])[A-Za-z\d@$!%*?&]/)
    .withMessage('Password must contain at least one uppercase letter, one lowercase letter, one number, and one special character')
]
