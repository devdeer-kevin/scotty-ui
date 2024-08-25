'use client'

import { MsalAuthenticationTemplate, MsalProvider } from '@azure/msal-react'
import { Configuration, PublicClientApplication } from '@azure/msal-browser'
import { InteractionType } from '@azure/msal-browser'
import { useMsal } from '@azure/msal-react'
import { useIsAuthenticated } from '@azure/msal-react'
import { useEffect } from 'react'
import { isIE } from '../../helper/browserHelper'

// // Export the msal instance.
export let msalInstance: PublicClientApplication

// MSAL configuration
const configuration: Configuration = {
    auth: {
        clientId: 'e15132a0-c7ce-448d-8852-cbb131b67370',
        authority: `https://login.microsoftonline.com/18ca94d4-b294-485e-b973-27ef77addb3e`,
        redirectUri: `${window.location.origin}/signin-oidc`,
        navigateToLoginRequestUrl: false,
        knownAuthorities: [`https://login.microsoftonline.com/18ca94d4-b294-485e-b973-27ef77addb3e`],
    },
    cache: {
        cacheLocation: 'sessionStorage',
        storeAuthStateInCookie: isIE(),
    },
}

export default function AppProvider() {
    const instance = useMsal()
    const isAuthenticated = useIsAuthenticated()

    useEffect(() => {
        if (!isAuthenticated) {
            // If another component has already invoked an interactive API this will throw
            instance.instance.loginPopup()
        }
    }, [isAuthenticated, instance])

    const pca = new PublicClientApplication(configuration)
    msalInstance = pca

    return (
        <MsalProvider instance={pca}>
            <MsalAuthenticationTemplate interactionType={InteractionType.Redirect}></MsalAuthenticationTemplate>
        </MsalProvider>
    )
}
