import express from 'express'
import { protect, authorize } from '../middleware/auth.js'

const router = express.Router()

// All routes require admin role
router.use(protect, authorize('admin'))

// @desc    Get dashboard statistics
// @route   GET /api/v1/admin/stats
router.get('/stats', async (req, res) => {
  // TODO: Implement dashboard statistics
  res.status(200).json({
    success: true,
    message: 'Admin stats endpoint - to be implemented'
  })
})

// @desc    Get all users
// @route   GET /api/v1/admin/users
router.get('/users', async (req, res) => {
  // TODO: Implement user management
  res.status(200).json({
    success: true,
    message: 'User management endpoint - to be implemented'
  })
})

export default router
