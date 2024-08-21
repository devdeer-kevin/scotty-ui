import type { Metadata } from 'next'
import './globals.css'
import Link from 'next/link'

export const metadata: Metadata = {
    title: 'Scotty UI',
    description: 'Export Time Entries from Coffee Cup',
}

export default async function RootLayout({
    children,
}: Readonly<{
    children: React.ReactNode
}>) {
    return (
        <html lang="en">
            <body>
                <main className="flex min-h-screen flex-col items-center justify-center">
                    <nav className="fixed top-0 w-full">
                        <div className="flex flex-row justify-between p-4">
                            <div>
                                <Link href="/">
                                    <h1 className="text-4xl font-bold text-center text-slate-700">Scotty UI</h1>
                                </Link>
                            </div>
                            <div className="flex flex-row gap-4">
                                <div className="flex flex-row items-baseline gap-4">
                                    <div>
                                        <h1 className="text-lg font-normal text-center text-slate-700">Hello</h1>
                                    </div>
                                    <div className="bg-slate-200 p-2 rounded-md">Sign out</div>
                                </div>
                                <div className="bg-slate-200 p-2 rounded-md">Sign in</div>
                            </div>
                        </div>
                    </nav>
                    <div className="max-w-4xl items-center justify-center font-mono text-sm flex-col gap-4">{children}</div>
                </main>
            </body>
        </html>
    )
}
