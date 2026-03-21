// Input validation utilities
export const validators = {
  email: (value) => {
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/
    return emailRegex.test(value)
  },

  phone: (value) => {
    const phoneRegex = /^[+]?[(]?[0-9]{1,4}[)]?[-\s.]?[(]?[0-9]{1,4}[)]?[-\s.]?[0-9]{1,9}$/
    return phoneRegex.test(value.replace(/\s/g, ''))
  },

  name: (value) => {
    return value.length >= 2 && value.length <= 100 && /^[a-zA-Z\s'-]+$/.test(value)
  },

  text: (value, minLength = 1, maxLength = 500) => {
    return value.length >= minLength && value.length <= maxLength
  },

  noScripts: (value) => {
    const scriptRegex = /<script|javascript:|onerror=|onload=/gi
    return !scriptRegex.test(value)
  }
}

export const validateForm = (formData) => {
  const errors = {}

  if (!validators.name(formData.name)) {
    errors.name = 'Name must be 2-100 characters and contain only letters'
  }

  if (!validators.email(formData.email)) {
    errors.email = 'Please enter a valid email address'
  }

  if (!validators.phone(formData.phone)) {
    errors.phone = 'Please enter a valid phone number'
  }

  if (!validators.text(formData.country, 2, 100)) {
    errors.country = 'Country must be 2-100 characters'
  }

  if (!validators.text(formData.org, 2, 200)) {
    errors.org = 'Organization name must be 2-200 characters'
  }

  if (!validators.text(formData.role, 2, 100)) {
    errors.role = 'Role must be 2-100 characters'
  }

  if (formData.community === 'Select one') {
    errors.community = 'Please select a community type'
  }

  if (formData.opportunity === 'Select one') {
    errors.opportunity = 'Please select an opportunity interest'
  }

  if (!validators.text(formData.problem, 10, 2000)) {
    errors.problem = 'Problem description must be 10-2000 characters'
  }

  if (!validators.text(formData.notes, 10, 2000)) {
    errors.notes = 'Notes must be 10-2000 characters'
  }

  // XSS check on all fields
  Object.keys(formData).forEach(key => {
    if (typeof formData[key] === 'string' && !validators.noScripts(formData[key])) {
      errors[key] = 'Invalid characters detected'
    }
  })

  return errors
}
