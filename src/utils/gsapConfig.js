// Centralized GSAP configuration
// This ensures ScrollTrigger is registered only once

import { gsap } from 'gsap'
import { ScrollTrigger } from 'gsap/ScrollTrigger'

// Flag to ensure ScrollTrigger is only registered once
let isRegistered = false

// Register ScrollTrigger synchronously on client side only
if (typeof window !== 'undefined' && !isRegistered) {
  try {
    // Register ScrollTrigger immediately - it doesn't need DOM to be ready
    gsap.registerPlugin(ScrollTrigger)
    isRegistered = true
  } catch (error) {
    // If registration fails, it might already be registered
    // Set flag to true to prevent further attempts
    isRegistered = true
    // Only log if it's not a duplicate registration error
    const errorMsg = error?.message || String(error) || ''
    if (!errorMsg.includes('already registered') && 
        !errorMsg.includes('already exists') &&
        !errorMsg.includes('not a function')) {
      console.warn('ScrollTrigger registration error:', error)
    }
  }
}

export { gsap, ScrollTrigger }
