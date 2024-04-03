import DataInputComponent from '../../../components/dataInput'
import { LoginLink } from '@kinde-oss/kinde-auth-nextjs/components'
import { getKindeServerSession } from '@kinde-oss/kinde-auth-nextjs/server'

export default async function FileExport() {
    const { isAuthenticated } = getKindeServerSession()

    return (await isAuthenticated()) ? (
        <div>
            <DataInputComponent />
        </div>
    ) : (
        <div className="text-slate-50">
            This page is protected, please <LoginLink className="bg-slate-200 p-2 rounded-md text-slate-950 hover:opacity-90">Login</LoginLink> to view it
        </div>
    )
}
