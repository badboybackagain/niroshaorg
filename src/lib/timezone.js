/**
 * Timezone utility functions for IST (Indian Standard Time)
 * IST is UTC+5:30 (Asia/Kolkata timezone)
 */

/**
 * Get current date/time in IST timezone
 * @returns {Date} Date object representing current time in IST
 */
export function getISTDate() {
  const now = new Date()
  // Convert to IST (UTC+5:30)
  const istOffset = 5.5 * 60 * 60 * 1000 // 5.5 hours in milliseconds
  const utcTime = now.getTime() + (now.getTimezoneOffset() * 60 * 1000)
  return new Date(utcTime + istOffset)
}

/**
 * Get current timestamp in ISO format (IST timezone)
 * @returns {string} ISO string in IST timezone format
 */
export function getISTISOString() {
  const now = new Date()
  // Use Intl.DateTimeFormat to get IST components
  const formatter = new Intl.DateTimeFormat('en-IN', {
    timeZone: 'Asia/Kolkata',
    year: 'numeric',
    month: '2-digit',
    day: '2-digit',
    hour: '2-digit',
    minute: '2-digit',
    second: '2-digit',
    fractionalSecondDigits: 3,
    hour12: false
  })
  
  const parts = formatter.formatToParts(now)
  const year = parts.find(p => p.type === 'year').value
  const month = parts.find(p => p.type === 'month').value
  const day = parts.find(p => p.type === 'day').value
  const hour = parts.find(p => p.type === 'hour').value
  const minute = parts.find(p => p.type === 'minute').value
  const second = parts.find(p => p.type === 'second').value
  const fractionalSecond = parts.find(p => p.type === 'fractionalSecond')?.value || '000'
  
  return `${year}-${month}-${day}T${hour}:${minute}:${second}.${fractionalSecond}+05:30`
}

/**
 * Format date/time in IST timezone with custom format
 * @param {Date} date - Optional date object (defaults to current time)
 * @param {Object} options - Intl.DateTimeFormat options
 * @returns {string} Formatted date/time string in IST
 */
export function formatISTDateTime(date = null, options = {}) {
  const dateObj = date || new Date()
  const defaultOptions = {
    timeZone: 'Asia/Kolkata',
    dateStyle: 'medium',
    timeStyle: 'short',
    ...options
  }
  
  return new Intl.DateTimeFormat('en-IN', defaultOptions).format(dateObj)
}

/**
 * Get current timestamp in IST for logging/recording purposes
 * Returns a formatted string suitable for form submissions
 * @returns {string} Formatted IST timestamp
 */
export function getISTTimestamp() {
  return formatISTDateTime(new Date(), {
    timeZone: 'Asia/Kolkata',
    year: 'numeric',
    month: '2-digit',
    day: '2-digit',
    hour: '2-digit',
    minute: '2-digit',
    second: '2-digit',
    hour12: false
  })
}
