// Sanitization utilities to prevent XSS attacks
export const sanitize = {
  // Remove HTML tags and dangerous characters
  text: (input) => {
    if (typeof input !== 'string') return ''
    
    return input
      .replace(/[<>]/g, '') // Remove < and >
      .replace(/javascript:/gi, '') // Remove javascript: protocol
      .replace(/on\w+\s*=/gi, '') // Remove event handlers
      .trim()
      .slice(0, 2000) // Max length
  },

  // Sanitize email
  email: (input) => {
    if (typeof input !== 'string') return ''
    return input.toLowerCase().trim().slice(0, 255)
  },

  // Sanitize phone
  phone: (input) => {
    if (typeof input !== 'string') return ''
    return input.replace(/[^\d+\s()-]/g, '').slice(0, 50)
  },

  // Sanitize name (allow letters, spaces, hyphens, apostrophes)
  name: (input) => {
    if (typeof input !== 'string') return ''
    return input.replace(/[^a-zA-Z\s'-]/g, '').trim().slice(0, 100)
  },

  // Sanitize all form data
  formData: (data) => {
    return {
      name: sanitize.name(data.name),
      email: sanitize.email(data.email),
      phone: sanitize.phone(data.phone),
      country: sanitize.text(data.country),
      org: sanitize.text(data.org),
      role: sanitize.text(data.role),
      community: sanitize.text(data.community),
      opportunity: sanitize.text(data.opportunity),
      problem: sanitize.text(data.problem),
      notes: sanitize.text(data.notes)
    }
  }
}
