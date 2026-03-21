import express from 'express'
import {
  register,
  login,
  getMe,
  logout,
  changePassword
} from '../controllers/authController.js'
import { protect } from '../middleware/auth.js'
import { validateRegistration, validateLogin, validatePasswordChange } from '../middleware/validation.js'

const router = express.Router()

// Public routes
router.post('/register', validateRegistration, register)
router.post('/login', validateLogin, login)

// Protected routes
router.get('/me', protect, getMe)
router.post('/logout', protect, logout)
router.put('/password', protect, validatePasswordChange, changePassword)

export default router
