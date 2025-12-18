/**
 * Configuration loader for Next.js API routes
 * 
 * This module loads configuration from:
 * 1. config.js file (if exists) - for hosting without env var support
 * 2. Environment variables (if config.js doesn't exist)
 * 
 * Priority: config.js > environment variables
 * 
 * Uses the same simple approach as the old server.js:
 * - Look for config.js in process.cwd() (where server.js runs from)
 * - Use simple relative import like the old server.js did
 */

import { existsSync } from 'fs'
import { join } from 'path'

// Simple approach: same as old server.js
// config.js should be in process.cwd() (where server.js runs from)
function getConfigPath() {
  const cwd = process.cwd()
  return join(cwd, 'config.js')
}

// Cache for loaded config
let cachedConfig = null

/**
 * Load configuration from config.js file or environment variables
 * @returns {Object|null} Configuration object or null
 */
export async function loadConfig() {
  // Return cached config if already loaded
  if (cachedConfig !== null) {
    return cachedConfig
  }

  // Simple approach: same as old server.js (lines 17-27)
  const configPath = getConfigPath()
  
  if (existsSync(configPath)) {
    try {
      // Use file:// URL for absolute path (required for ES modules)
      const configUrl = `file://${configPath}`
      const configModule = await import(configUrl)
      cachedConfig = configModule?.config || configModule?.default || null
      
      if (cachedConfig) {
        console.log('✅ Loaded configuration from config.js')
        return cachedConfig
      }
    } catch (error) {
      console.warn('Could not load config.js:', error.message)
    }
  }

  // Fall back to environment variables
  const envConfig = {
    gmail: {
      user: process.env.GMAIL_USER || null,
      password: process.env.GMAIL_PASSWORD || null
    }
  }

  if (envConfig.gmail.user && envConfig.gmail.password) {
    cachedConfig = envConfig
    console.log('✅ Loaded configuration from environment variables')
    return cachedConfig
  }

  // No configuration found
  cachedConfig = null
  return null
}

/**
 * Get Gmail credentials from config file or environment variables
 * @returns {Object} Object with user and password, or null if not configured
 */
export async function getGmailCredentials() {
  const config = await loadConfig()
  
  if (!config) {
    return null
  }

  const gmailUser = config.gmail?.user || process.env.GMAIL_USER
  const gmailPassword = config.gmail?.password || process.env.GMAIL_PASSWORD

  if (!gmailUser || !gmailPassword) {
    return null
  }

  return {
    user: gmailUser.trim(),
    password: gmailPassword.trim()
  }
}

/**
 * Clear cached config (useful for testing or reloading)
 */
export function clearConfigCache() {
  cachedConfig = null
}
