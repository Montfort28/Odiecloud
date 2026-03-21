import { query } from '../config/database.js'
import { validationResult } from 'express-validator'

// @desc    Submit membership application
// @route   POST /api/v1/membership/apply
// @access  Public
export const submitApplication = async (req, res, next) => {
  try {
    const errors = validationResult(req)
    if (!errors.isEmpty()) {
      return res.status(400).json({
        success: false,
        errors: errors.array()
      })
    }

    const {
      name,
      email,
      phone,
      country,
      org,
      role,
      community,
      opportunity,
      problem,
      notes
    } = req.body

    // Get IP and User Agent for security
    const ipAddress = req.ip || req.connection.remoteAddress
    const userAgent = req.headers['user-agent']

    // Insert application
    const result = await query(
      `INSERT INTO membership_applications 
       (full_name, email, phone, country, organization, role, 
        community_type, opportunity_interest, problem_statement, 
        access_reason, ip_address, user_agent)
       VALUES ($1, $2, $3, $4, $5, $6, $7, $8, $9, $10, $11, $12)
       RETURNING id, full_name, email, status, created_at`,
      [name, email, phone, country, org, role, community, opportunity, problem, notes, ipAddress, userAgent]
    )

    // TODO: Send email notification to admin
    // TODO: Send confirmation email to applicant

    res.status(201).json({
      success: true,
      message: 'Application submitted successfully',
      data: result.rows[0]
    })
  } catch (error) {
    next(error)
  }
}

// @desc    Get all applications (Admin only)
// @route   GET /api/v1/membership/applications
// @access  Private/Admin
export const getAllApplications = async (req, res, next) => {
  try {
    const { status, page = 1, limit = 20 } = req.query
    const offset = (page - 1) * limit

    let queryText = `
      SELECT id, full_name, email, phone, country, organization, 
             role, community_type, opportunity_interest, status, 
             created_at, updated_at
      FROM membership_applications
    `
    const params = []

    if (status) {
      queryText += ' WHERE status = $1'
      params.push(status)
    }

    queryText += ` ORDER BY created_at DESC LIMIT $${params.length + 1} OFFSET $${params.length + 2}`
    params.push(limit, offset)

    const result = await query(queryText, params)

    // Get total count
    const countQuery = status 
      ? 'SELECT COUNT(*) FROM membership_applications WHERE status = $1'
      : 'SELECT COUNT(*) FROM membership_applications'
    const countResult = await query(countQuery, status ? [status] : [])
    const total = parseInt(countResult.rows[0].count)

    res.status(200).json({
      success: true,
      data: result.rows,
      pagination: {
        page: parseInt(page),
        limit: parseInt(limit),
        total,
        pages: Math.ceil(total / limit)
      }
    })
  } catch (error) {
    next(error)
  }
}

// @desc    Get single application
// @route   GET /api/v1/membership/applications/:id
// @access  Private/Admin
export const getApplication = async (req, res, next) => {
  try {
    const { id } = req.params

    const result = await query(
      `SELECT * FROM membership_applications WHERE id = $1`,
      [id]
    )

    if (result.rows.length === 0) {
      return res.status(404).json({
        success: false,
        message: 'Application not found'
      })
    }

    res.status(200).json({
      success: true,
      data: result.rows[0]
    })
  } catch (error) {
    next(error)
  }
}

// @desc    Update application status
// @route   PUT /api/v1/membership/applications/:id/status
// @access  Private/Admin
export const updateApplicationStatus = async (req, res, next) => {
  try {
    const { id } = req.params
    const { status, reviewNotes } = req.body
    const reviewedBy = req.user.id // From auth middleware

    const result = await query(
      `UPDATE membership_applications 
       SET status = $1, reviewed_by = $2, reviewed_at = CURRENT_TIMESTAMP, 
           review_notes = $3
       WHERE id = $4
       RETURNING *`,
      [status, reviewedBy, reviewNotes, id]
    )

    if (result.rows.length === 0) {
      return res.status(404).json({
        success: false,
        message: 'Application not found'
      })
    }

    // If approved, create member account
    if (status === 'approved') {
      // TODO: Create user account and member record
      // TODO: Send approval email with login credentials
    }

    res.status(200).json({
      success: true,
      message: 'Application status updated',
      data: result.rows[0]
    })
  } catch (error) {
    next(error)
  }
}

// @desc    Delete application
// @route   DELETE /api/v1/membership/applications/:id
// @access  Private/Admin
export const deleteApplication = async (req, res, next) => {
  try {
    const { id } = req.params

    const result = await query(
      'DELETE FROM membership_applications WHERE id = $1 RETURNING id',
      [id]
    )

    if (result.rows.length === 0) {
      return res.status(404).json({
        success: false,
        message: 'Application not found'
      })
    }

    res.status(200).json({
      success: true,
      message: 'Application deleted successfully'
    })
  } catch (error) {
    next(error)
  }
}
