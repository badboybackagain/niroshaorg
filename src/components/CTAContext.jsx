'use client'

import React, { createContext, useContext, useState, useCallback } from 'react'

const CTAContext = createContext({
    title: 'Ready to Elevate Your Business with Digital Solutions?',
    subtext: null, // Default doesn't have subtext usually, or we can add one
    buttonText: 'Schedule Free Consultation',
    buttonLink: 'https://calendly.com/nirosha-info/30min',
    visible: true,
    setCTAContent: () => { },
    resetCTA: () => { },
})

export const CTAProvider = ({ children }) => {
    const defaultState = {
        title: 'Ready to Elevate Your Business with Digital Solutions?',
        subtext: null,
        buttonText: 'Schedule Free Consultation',
        buttonLink: 'https://calendly.com/nirosha-info/30min',
        visible: true,
    }

    const [state, setState] = useState(defaultState)

    const setCTAContent = useCallback((content) => {
        setState(prev => ({ ...prev, ...content }))
    }, [])

    const resetCTA = useCallback(() => {
        setState(defaultState)
    }, [])

    return (
        <CTAContext.Provider value={{ ...state, setCTAContent, resetCTA }}>
            {children}
        </CTAContext.Provider>
    )
}

export const useCTA = () => useContext(CTAContext)
