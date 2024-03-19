import type { Metadata } from 'next'
import './globals.css'

export const metadata: Metadata = {
    title: 'Scotty UI',
    description: 'Export Time Entries from Coffee Cup',
}

export default function RootLayout({
    children,
}: Readonly<{
    children: React.ReactNode
}>) {
    return (
        <html lang="en">
            <body>{children}</body>
        </html>
    )
}
