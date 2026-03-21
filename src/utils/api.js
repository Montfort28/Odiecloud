// API Configuration and Helper Functions
const API_BASE_URL = import.meta.env.VITE_API_URL || 'http://localhost:3000/api/v1'

// Get auth token from localStorage
const getToken = () => {
  return localStorage.getItem('token')
}

// Set auth token in localStorage
export const setToken = (token) => {
  localStorage.setItem('token', token)
}

// Remove auth token
export const removeToken = () => {
  localStorage.removeItem('token')
}

// API request helper
const apiRequest = async (endpoint, options = {}) => {
  const token = getToken()
  
  const config = {
    ...options,
    headers: {
      'Content-Type': 'application/json',
      ...(token && { Authorization: `Bearer ${token}` }),
      ...options.headers
    }
  }

  try {
    const response = await fetch(`${API_BASE_URL}${endpoint}`, config)
    const data = await response.json()

    if (!response.ok) {
      throw new Error(data.message || 'API request failed')
    }

    return data
  } catch (error) {
    console.error('API Error:', error)
    throw error
  }
}

// Membership API
export const membershipAPI = {
  // Submit membership application
  submitApplication: async (formData) => {
    return apiRequest('/membership/apply', {
      method: 'POST',
      body: JSON.stringify(formData)
    })
  },

  // Get all applications (Admin only)
  getAllApplications: async (params = {}) => {
    const queryString = new URLSearchParams(params).toString()
    return apiRequest(`/membership/applications?${queryString}`)
  },

  // Get single application (Admin only)
  getApplication: async (id) => {
    return apiRequest(`/membership/applications/${id}`)
  },

  // Update application status (Admin only)
  updateStatus: async (id, status, reviewNotes) => {
    return apiRequest(`/membership/applications/${id}/status`, {
      method: 'PUT',
      body: JSON.stringify({ status, reviewNotes })
    })
  },

  // Delete application (Admin only)
  deleteApplication: async (id) => {
    return apiRequest(`/membership/applications/${id}`, {
      method: 'DELETE'
    })
  }
}

// Auth API
export const authAPI = {
  // Register new user
  register: async (email, password) => {
    const data = await apiRequest('/auth/register', {
      method: 'POST',
      body: JSON.stringify({ email, password })
    })
    if (data.token) {
      setToken(data.token)
    }
    return data
  },

  // Login user
  login: async (email, password) => {
    const data = await apiRequest('/auth/login', {
      method: 'POST',
      body: JSON.stringify({ email, password })
    })
    if (data.token) {
      setToken(data.token)
    }
    return data
  },

  // Get current user
  getMe: async () => {
    return apiRequest('/auth/me')
  },

  // Logout
  logout: async () => {
    removeToken()
    return apiRequest('/auth/logout', { method: 'POST' })
  },

  // Change password
  changePassword: async (currentPassword, newPassword) => {
    return apiRequest('/auth/password', {
      method: 'PUT',
      body: JSON.stringify({ currentPassword, newPassword })
    })
  }
}

// Admin API
export const adminAPI = {
  // Get dashboard stats
  getStats: async () => {
    return apiRequest('/admin/stats')
  },

  // Get all users
  getUsers: async () => {
    return apiRequest('/admin/users')
  }
}
