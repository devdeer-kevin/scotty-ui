import { redirect } from 'next/navigation'

export default async function Home() {
    return (
        <>
            <div className="text-slate-50">Please sign in to continue.</div>
        </>
    )
}
