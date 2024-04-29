import { getKindeServerSession } from '@kinde-oss/kinde-auth-nextjs/server'
import { redirect } from 'next/navigation'

export default async function Home() {
    const { isAuthenticated } = getKindeServerSession()

    return (await isAuthenticated()) ? (
        <>{redirect('/file-export')}</>
    ) : (
        <>
            <div className="text-slate-50">Please sign in to continue.</div>
        </>
    )
}
