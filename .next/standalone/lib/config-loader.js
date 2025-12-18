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

// Simple approach: config.js should be in the same directory as server.js
// In standalone builds, server.js runs from public_html, so config.js should be there too
function getConfigPath() {
  // Primary: process.cwd() is where server.js runs from (public_html)
  const cwd = process.cwd()
  const configPath = join(cwd, 'config.js')
  
  if (existsSync(configPath)) {
    return configPath
  }
  
  // Fallback: try absolute path (known server path)
  const absolutePath = '/var/www/5fcedb5f-4188-4356-a8e9-4f09d27e27af/public_html/config.js'
  if (existsSync(absolutePath)) {
    return absolutePath
  }
  
  return null
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

  // Simple approach: same as old server.js
  // Look for config.js in process.cwd() (where server.js runs from)
  const configPath = getConfigPath()
  
  if (configPath) {
    console.log('✅ Found config.js at:', configPath)
    try {
      // Use the same simple import approach as old server.js
      // For absolute paths, use file:// URL
      const configUrl = configPath.startsWith('/') 
        ? `file://${configPath}`
        : configPath
      
      console.log('📦 Loading config from:', configUrl)
      const configModule = await import(configUrl)
      cachedConfig = configModule?.config || configModule?.default || null
      
      if (cachedConfig) {
        console.log('✅ Successfully loaded configuration from config.js')
        console.log('✅ Gmail user:', cachedConfig.gmail?.user ? 'Set (' + cachedConfig.gmail.user + ')' : 'Not set')
        return cachedConfig
      } else {
        console.warn('⚠️ config.js loaded but no config object found')
        console.warn('⚠️ Module exports:', configModule ? Object.keys(configModule) : 'null')
      }
    } catch (error) {
      console.error('❌ Could not load config.js:', error.message)
      console.error('❌ Error details:', error.stack)
    }
  } else {
    console.warn('⚠️ config.js not found in:', process.cwd())
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
