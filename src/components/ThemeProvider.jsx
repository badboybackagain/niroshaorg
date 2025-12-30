'use client'

import React from 'react'
import dynamic from 'next/dynamic'

/**
 * ThemeProvider - Manages theme rendering based on NEXT_PUBLIC_THEME environment variable
 * 
 * Usage:
 * - Set NEXT_PUBLIC_THEME=CHRISTMAS in .env.local to enable Christmas theme
 * - Leave NEXT_PUBLIC_THEME blank or unset for default theme
 * - Future themes can be added by creating new theme components in ./themes/
 * 
 * Themes:
 * - CHRISTMAS: Animated snowflakes, flying Santa, and winter cityscape background
 */

// Lazy load theme components only when needed
const ChristmasTheme = dynamic(() => import('./themes/ChristmasTheme'), { 
  ssr: false,
  loading: () => null
})

const ThemeProvider = ({ children }) => {
  // Get theme from environment variable at runtime
  // NEXT_PUBLIC_ variables are available in the browser
  const theme = typeof window !== 'undefined' 
    ? (process.env.NEXT_PUBLIC_THEME || '')
    : (process.env.NEXT_PUBLIC_THEME || '')

  return (
    <>
      {children}
      {/* Conditionally render theme based on NEXT_PUBLIC_THEME */}
      {theme === 'CHRISTMAS' && <ChristmasTheme />}
    </>
  )
}

export default ThemeProvider
