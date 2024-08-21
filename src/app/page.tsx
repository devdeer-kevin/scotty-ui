'use client'

import AppProvider from './provider'
import { AuthenticatedTemplate, UnauthenticatedTemplate } from '@azure/msal-react'
import DataInputComponent from '../../components/dataInput'

export default function Home() {
    return (
        <AppProvider>
            <AuthenticatedTemplate>
                <DataInputComponent />
            </AuthenticatedTemplate>
            <UnauthenticatedTemplate>
                <div className="text-slate-50">Please sign in to continue.</div>
            </UnauthenticatedTemplate>
        </AppProvider>
    )
}
