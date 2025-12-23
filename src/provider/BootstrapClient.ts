'use client'

import { useEffect } from 'react'

let bootstrapLoaded = false // Singleton flag

export default function BootstrapClient(): null {
    useEffect(() => {
        if (bootstrapLoaded) return // Already loaded

        import('bootstrap/dist/js/bootstrap.bundle.min.js')
            .then(() => {
                bootstrapLoaded = true
            })
            .catch((err) => {
                console.error('Failed to load Bootstrap JS:', err)
            })
    }, [])

    return null
}