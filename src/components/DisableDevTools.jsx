'use client'

import { useEffect } from 'react'

const DisableDevTools = () => {
  useEffect(() => {
    // Disable and override console methods
    const disableConsole = () => {
      const noop = () => {}
      const noopReturn = () => ({})
      
      // Override all console methods
      if (typeof window !== 'undefined') {
        window.console.log = noop
        window.console.info = noop
        window.console.warn = noop
        window.console.error = noop
        window.console.debug = noop
        window.console.table = noop
        window.console.trace = noop
        window.console.dir = noop
        window.console.dirxml = noop
        window.console.group = noop
        window.console.groupEnd = noop
        window.console.groupCollapsed = noop
        window.console.time = noop
        window.console.timeEnd = noop
        window.console.timeStamp = noop
        window.console.profile = noop
        window.console.profileEnd = noop
        window.console.count = noop
        window.console.clear = noop
        window.console.assert = noop
        window.console.memory = noopReturn
        
        // Make console object non-configurable
        try {
          Object.defineProperty(window, 'console', {
            get: () => ({
              log: noop,
              info: noop,
              warn: noop,
              error: noop,
              debug: noop,
              table: noop,
              trace: noop,
              dir: noop,
              dirxml: noop,
              group: noop,
              groupEnd: noop,
              groupCollapsed: noop,
              time: noop,
              timeEnd: noop,
              timeStamp: noop,
              profile: noop,
              profileEnd: noop,
              count: noop,
              clear: noop,
              assert: noop,
              memory: noopReturn(),
            }),
            set: noop,
            configurable: false,
          })
        } catch (e) {
          // Some browsers may not allow this
        }
      }
    }

    // Clear console periodically
    const clearConsole = () => {
      if (typeof window !== 'undefined' && window.console) {
        try {
          window.console.clear()
        } catch (e) {
          // Ignore errors
        }
      }
    }

    // Disable element inspection
    const disableInspection = () => {
      // Disable right-click inspection
      document.addEventListener('contextmenu', (e) => {
        // Already handled by RightClickContactCursor, but add extra protection
        if (e.target && e.target.tagName !== 'INPUT' && e.target.tagName !== 'TEXTAREA') {
          // Additional check
        }
      }, true)

      // Disable element selection for inspection
      document.addEventListener('selectstart', (e) => {
        // Allow selection in input fields
        if (e.target && (e.target.tagName === 'INPUT' || e.target.tagName === 'TEXTAREA' || e.target.isContentEditable)) {
          return true
        }
        e.preventDefault()
        return false
      }, true)

      // Disable drag (can be used for inspection)
      document.addEventListener('dragstart', (e) => {
        if (e.target && (e.target.tagName === 'INPUT' || e.target.tagName === 'TEXTAREA' || e.target.isContentEditable)) {
          return true
        }
        e.preventDefault()
        return false
      }, true)

      // Disable copy (can reveal source)
      document.addEventListener('copy', (e) => {
        // Allow copying from input fields
        if (e.target && (e.target.tagName === 'INPUT' || e.target.tagName === 'TEXTAREA' || e.target.isContentEditable)) {
          return true
        }
        e.preventDefault()
        return false
      }, true)

      // Disable cut
      document.addEventListener('cut', (e) => {
        if (e.target && (e.target.tagName === 'INPUT' || e.target.tagName === 'TEXTAREA' || e.target.isContentEditable)) {
          return true
        }
        e.preventDefault()
        return false
      }, true)
    }

    // Prevent access to common inspection methods
    const disableInspectionMethods = () => {
      if (typeof window !== 'undefined') {
        // Override common inspection methods
        try {
          // Prevent access to __REACT_DEVTOOLS_GLOBAL_HOOK__
          if (window.__REACT_DEVTOOLS_GLOBAL_HOOK__) {
            Object.defineProperty(window, '__REACT_DEVTOOLS_GLOBAL_HOOK__', {
              get: () => undefined,
              set: () => {},
              configurable: false,
            })
          }
        } catch (e) {
          // Ignore errors
        }

        // Prevent access to common dev tools properties
        const preventAccess = (obj, prop) => {
          try {
            Object.defineProperty(obj, prop, {
              get: () => undefined,
              set: () => {},
              configurable: false,
            })
          } catch (e) {
            // Ignore errors
          }
        }

        // Disable common inspection APIs
        if (window.chrome && window.chrome.runtime) {
          try {
            preventAccess(window.chrome.runtime, 'onConnect')
          } catch (e) {}
        }
      }
    }

    // Disable debugger
    const disableDebugger = () => {
      setInterval(() => {
        // This will pause execution if debugger is attached
        // Commented out as it can be annoying, but uncomment if needed
        // eval('debugger')
      }, 1000)
    }

    // Disable F12
    const handleKeyDown = (e) => {
      // Disable F12
      if (e.key === 'F12' || e.keyCode === 123) {
        e.preventDefault()
        e.stopPropagation()
        return false
      }

      // Disable Ctrl+Shift+I (Windows/Linux) and Cmd+Option+I (Mac)
      if (
        (e.ctrlKey && e.shiftKey && (e.key === 'I' || e.keyCode === 73)) ||
        (e.metaKey && e.altKey && (e.key === 'I' || e.keyCode === 73))
      ) {
        e.preventDefault()
        e.stopPropagation()
        return false
      }

      // Disable Ctrl+Shift+J (Windows/Linux) and Cmd+Option+J (Mac) - Console
      if (
        (e.ctrlKey && e.shiftKey && (e.key === 'J' || e.keyCode === 74)) ||
        (e.metaKey && e.altKey && (e.key === 'J' || e.keyCode === 74))
      ) {
        e.preventDefault()
        e.stopPropagation()
        return false
      }

      // Disable Ctrl+U (View Source)
      if (e.ctrlKey && (e.key === 'U' || e.keyCode === 85)) {
        e.preventDefault()
        e.stopPropagation()
        return false
      }

      // Disable Ctrl+S (Save Page)
      if (e.ctrlKey && (e.key === 'S' || e.keyCode === 83)) {
        e.preventDefault()
        e.stopPropagation()
        return false
      }
    }

    // Disable common dev tools shortcuts
    const handleKeyUp = (e) => {
      // Disable F12 on keyup as well
      if (e.key === 'F12' || e.keyCode === 123) {
        e.preventDefault()
        e.stopPropagation()
        return false
      }
    }

    // Initialize all protections
    disableConsole()
    disableInspection()
    disableInspectionMethods()
    // disableDebugger() // Uncomment if you want to pause execution when debugger is attached

    // Clear console every 100ms
    const consoleClearInterval = setInterval(clearConsole, 100)

    // Add event listeners
    // Note: contextmenu is handled by RightClickContactCursor component
    document.addEventListener('keydown', handleKeyDown, true)
    document.addEventListener('keyup', handleKeyUp, true)

    // Additional protection: detect if dev tools are opened
    let devtools = { open: false, orientation: null }
    const threshold = 160

    const detectDevTools = () => {
      if (
        window.outerHeight - window.innerHeight > threshold ||
        window.outerWidth - window.innerWidth > threshold
      ) {
        if (!devtools.open) {
          devtools.open = true
          // Clear console when dev tools detected
          clearConsole()
          // Optionally redirect or show a message
          // window.location.href = '/'
        }
      } else {
        if (devtools.open) {
          devtools.open = false
        }
      }
    }

    // Check periodically
    const interval = setInterval(detectDevTools, 500)

    // Cleanup
    return () => {
      document.removeEventListener('keydown', handleKeyDown, true)
      document.removeEventListener('keyup', handleKeyUp, true)
      clearInterval(interval)
      clearInterval(consoleClearInterval)
    }
  }, [])

  return null
}

export default DisableDevTools
