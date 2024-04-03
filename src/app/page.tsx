import { LoginLink } from '@kinde-oss/kinde-auth-nextjs/components'

export default function Home() {
    return (
        <main className="flex min-h-screen flex-col items-center justify-center">
            <div className="max-w-4xl items-center justify-center font-mono text-sm flex-col gap-4">
                <div className="pb-4">
                    <h1 className="text-4xl font-bold text-left text-slate-700">Welcome to Scotty</h1>
                </div>
                <div className="flex justify-center">
                    <LoginLink className="bg-slate-200 p-2 rounded-md" postLoginRedirectURL="/file-export">
                        Sign in
                    </LoginLink>
                </div>
            </div>
        </main>
    )
}
