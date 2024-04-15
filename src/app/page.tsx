import { LoginLink } from '@kinde-oss/kinde-auth-nextjs/components'

export default function Home() {
    return (
        <main className="bg-gray-900 p-8 rounded-xl shadow-xl">
            <nav>
                <div className="pb-4">
                    <h3 className="text-xl font-normal text-center text-slate-700">Welcome to</h3>
                    <h1 className="text-4xl font-bold text-center text-slate-700">Scotty UI</h1>
                </div>
            </nav>
            <div className="flex justify-center">
                <LoginLink className="bg-slate-200 p-2 rounded-md" postLoginRedirectURL="/file-export">
                    Sign in
                </LoginLink>
            </div>
        </main>
    )
}
