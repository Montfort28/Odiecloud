import { useState } from 'react'
import { validateForm } from '../utils/validation'
import { sanitize } from '../utils/sanitization'
import { formRateLimiter } from '../utils/rateLimiter'

export const useFormSecurity = (initialData) => {
  const [formData, setFormData] = useState(initialData)
  const [errors, setErrors] = useState({})
  const [honeypot, setHoneypot] = useState('')

  const handleChange = (e) => {
    const { id, value } = e.target
    
    // Clear error for this field
    setErrors(prev => ({ ...prev, [id]: undefined }))
    
    setFormData(prev => ({
      ...prev,
      [id]: value
    }))
  }

  const handleHoneypotChange = (e) => {
    setHoneypot(e.target.value)
  }

  const validateAndSanitize = () => {
    // Bot detection - honeypot field should be empty
    if (honeypot !== '') {
      return { isValid: false, errors: { form: 'Spam detected' } }
    }

    // Rate limiting check
    if (!formRateLimiter.canSubmit()) {
      const remainingTime = formRateLimiter.getRemainingTime()
      return { 
        isValid: false, 
        errors: { form: `Too many attempts. Please wait ${remainingTime} seconds.` } 
      }
    }

    // Sanitize data
    const sanitizedData = sanitize.formData(formData)

    // Validate sanitized data
    const validationErrors = validateForm(sanitizedData)

    if (Object.keys(validationErrors).length > 0) {
      setErrors(validationErrors)
      return { isValid: false, errors: validationErrors }
    }

    // Record attempt for rate limiting
    formRateLimiter.recordAttempt()

    return { isValid: true, data: sanitizedData }
  }

  const resetForm = () => {
    setFormData(initialData)
    setErrors({})
    setHoneypot('')
  }

  return {
    formData,
    errors,
    honeypot,
    handleChange,
    handleHoneypotChange,
    validateAndSanitize,
    resetForm
  }
}
