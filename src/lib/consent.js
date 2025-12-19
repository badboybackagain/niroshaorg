/**
 * Consent management utilities
 */

export const getConsent = () => {
  if (typeof window === 'undefined') return null
  return localStorage.getItem('gtm-consent')
}

export const hasConsented = () => {
  return getConsent() === 'accepted'
}

export const setConsent = (accepted) => {
  if (typeof window === 'undefined') return
  localStorage.setItem('gtm-consent', accepted ? 'accepted' : 'rejected')
}

export const clearConsent = () => {
  if (typeof window === 'undefined') return
  localStorage.removeItem('gtm-consent')
}
