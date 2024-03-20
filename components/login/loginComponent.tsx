'use client'

import { ExclamationTriangleIcon } from '@heroicons/react/16/solid'
import { ArrowPathIcon } from '@heroicons/react/20/solid'
import { useState, ChangeEvent } from 'react'

export default function LoginComponent({ onAuthorizedChange }: { onAuthorizedChange: (authorized: boolean) => void }) {
    // State to handle loading state
    const [loading, setLoading] = useState(false)
    // State to handle user input
    const [user, setUser] = useState('')
    // State to handle password input
    const [password, setPassword] = useState('')
    // State to handle authorized state
    const [authorized, setAuthorized] = useState(false)

    // Method to handle user input change
    const handleUser = (event: ChangeEvent<HTMLInputElement>) => {
        setUser(event.target.value)
    }
    // Method to handle password input change
    const handlePassword = (event: ChangeEvent<HTMLInputElement>) => {
        setPassword(event.target.value)
    }

    // Method to fetch API
    const fetchLogin = async () => {
        setLoading(true)

        if (user === '' || password === '') {
            setLoading(false)
            return
        }

        const response = await fetch('/api/v1/login', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
            },
            body: JSON.stringify({
                user,
                password,
            }),
        })
        const data = await response.json()
        if (data.status === 200) {
            setLoading(false)
            setAuthorized(true)
            onAuthorizedChange(true)
        }
        if (data.status === 401) {
            setLoading(false)
            setAuthorized(false)
            onAuthorizedChange(false)
        }
    }
    return (
        <>
            <div className="bg-gray-900 p-8 rounded-xl shadow-xl grid grid-flow-row gap-4">
                <div className="pb-4">
                    <h1 className="text-4xl font-bold text-left text-slate-700">Login</h1>
                </div>
                <div className="grid grid-flow-row sm:grid-cols-2 grid-rows-1 gap-4">
                    <div className="flex flex-col">
                        <label className="text-slate-700 text-sm">User</label>
                        <input placeholder="Username" value={user} onChange={handleUser} className="bg-slate-700 p-2 rounded-md" type="text" />
                    </div>
                    <div className="flex flex-col">
                        <label className="text-slate-700 text-sm">Password</label>
                        <input placeholder="Password" value={password} onChange={handlePassword} className="bg-slate-700 p-2 rounded-md" type="password" />
                    </div>
                </div>
                <div className="grid grid-flow-col">
                    <div className="grid items-end w-full">
                        <button type="button" onClick={fetchLogin} className="bg-slate-200 p-2 rounded-md flex justify-center w-full">
                            {loading ? (
                                <>
                                    <ArrowPathIcon className="fill-slate-700 h-5 w-5 mr-3 animate-spin" />
                                    <div className="text-slate-700">Processing...</div>
                                </>
                            ) : (
                                <div className="flex justify-center w-full slate-700">Login</div>
                            )}
                        </button>
                    </div>
                </div>
            </div>
            {authorized ?? (
                <div className="relative pt-4 text-center">
                    <div className="flex flex-row justify-center items-center">
                        <ExclamationTriangleIcon className="fill-slate-700 h-4 w-4 mr-2" />
                        <p className="text-slate-700">Login Failed</p>
                    </div>
                </div>
            )}
        </>
    )
}
