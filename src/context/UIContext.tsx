'use client'

import React, { createContext, useContext, useState, ReactNode } from 'react'

interface UIContextType {
    isProductOpen: boolean
    setIsProductOpen: (open: boolean) => void
}

const UIContext = createContext<UIContextType | undefined>(undefined)

export function UIProvider({ children }: { children: ReactNode }) {
    const [isProductOpen, setIsProductOpen] = useState(false)

    return (
        <UIContext.Provider value={{ isProductOpen, setIsProductOpen }}>
            {children}
        </UIContext.Provider>
    )
}

export function useUI() {
    const context = useContext(UIContext)
    if (context === undefined) {
        throw new Error('useUI must be used within a UIProvider')
    }
    return context
}
