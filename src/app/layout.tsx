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
            <body>
                <main className="flex min-h-screen flex-col items-center justify-center">
                    <div className="max-w-4xl items-center justify-center font-mono text-sm flex-col gap-4">{children}</div>
                </main>
            </body>
        </html>
    )
}
