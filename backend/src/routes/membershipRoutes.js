import express from 'express'
import {
  submitApplication,
  getAllApplications,
  getApplication,
  updateApplicationStatus,
  deleteApplication
} from '../controllers/membershipController.js'
import { protect, authorize } from '../middleware/auth.js'
import { validateMembershipApplication } from '../middleware/validation.js'

const router = express.Router()

// Public routes
router.post('/apply', validateMembershipApplication, submitApplication)

// Protected routes (Admin only)
router.get('/applications', protect, authorize('admin'), getAllApplications)
router.get('/applications/:id', protect, authorize('admin'), getApplication)
router.put('/applications/:id/status', protect, authorize('admin'), updateApplicationStatus)
router.delete('/applications/:id', protect, authorize('admin'), deleteApplication)

export default router
