// Client-side rate limiting (basic protection)
class RateLimiter {
  constructor(maxAttempts = 3, windowMs = 60000) {
    this.maxAttempts = maxAttempts
    this.windowMs = windowMs
    this.attempts = []
  }

  canSubmit() {
    const now = Date.now()
    
    // Remove old attempts outside the time window
    this.attempts = this.attempts.filter(timestamp => now - timestamp < this.windowMs)
    
    // Check if under limit
    if (this.attempts.length >= this.maxAttempts) {
      return false
    }
    
    return true
  }

  recordAttempt() {
    this.attempts.push(Date.now())
  }

  getRemainingTime() {
    if (this.attempts.length === 0) return 0
    
    const oldestAttempt = Math.min(...this.attempts)
    const timeElapsed = Date.now() - oldestAttempt
    const remainingTime = this.windowMs - timeElapsed
    
    return Math.max(0, Math.ceil(remainingTime / 1000))
  }

  reset() {
    this.attempts = []
  }
}

// Create singleton instance
export const formRateLimiter = new RateLimiter(3, 300000) // 3 attempts per 5 minutes
