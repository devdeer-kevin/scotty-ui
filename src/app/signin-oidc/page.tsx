'use client'

import { useIsAuthenticated, useMsal } from '@azure/msal-react'
import DataInputComponent from '../../../components/dataInput'
import { useEffect } from 'react'

export default function Connect() {
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
