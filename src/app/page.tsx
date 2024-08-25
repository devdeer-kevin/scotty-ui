'use client'

import { useEffect } from 'react'
import DataInputComponent from '../../components/dataInput'
import dynamic from 'next/dynamic'
import { useIsAuthenticated, useMsal } from '@azure/msal-react'
const AppProvider = dynamic(() => import('./provider'), { ssr: false })

export default function Home() {
    // const instance = useMsal()
    // const isAuthenticated = useIsAuthenticated()

    // useEffect(() => {
    //     if (!isAuthenticated) {
    //         // If another component has already invoked an interactive API this will throw
    //         instance.instance.loginPopup()
    //     }
    // }, [isAuthenticated, instance])
    return <AppProvider></AppProvider>
}
