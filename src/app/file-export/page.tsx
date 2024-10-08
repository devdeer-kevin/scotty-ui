'use client'

import { useEffect } from 'react'
import DataInputComponent from '../../../components/dataInput'
import { useIsAuthenticated, useMsal } from '@azure/msal-react'

export default function FileExport() {
    const instance = useMsal()
    const isAuthenticated = useIsAuthenticated()

    useEffect(() => {
        if (!isAuthenticated) {
            // If another component has already invoked an interactive API this will throw
            instance.instance.loginPopup()
        }
    }, [isAuthenticated, instance])

    return <DataInputComponent />
}
