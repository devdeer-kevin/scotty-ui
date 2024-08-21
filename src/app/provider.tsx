'use client'

import { MsalProvider } from '@azure/msal-react'
import { Configuration, PublicClientApplication } from '@azure/msal-browser'
import React from 'react'

// MSAL configuration
const configuration: Configuration = {
    auth: {
        clientId: 'client-id',
    },
}

const pca = new PublicClientApplication(configuration)

export default function AppProvider({
    children,
}: Readonly<{
    children: React.ReactNode
}>) {
    return <MsalProvider instance={pca}>{children}</MsalProvider>
}
