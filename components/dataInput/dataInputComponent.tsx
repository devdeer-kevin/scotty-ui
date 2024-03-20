'use client'

import { CheckBadgeIcon } from '@heroicons/react/16/solid'
import { ArrowPathIcon } from '@heroicons/react/20/solid'
import { useState, ChangeEvent, MouseEvent } from 'react'
import LoginComponent from '../login/loginComponent'

export default function DataInputComponent() {
    // State to handle loading state
    const [loading, setLoading] = useState(false)
    // State to handle export created state
    const [exportCreated, setExportCreated] = useState(false)
    // State to set start date
    const [inputStartDate, setInputStartDate] = useState('')
    // State to set end date
    const [inputEndDate, setInputEndDate] = useState('')
    // State to set company name
    const [inputCompany, setInputCompany] = useState('')
    // State to handle authorized state
    const [authorized, setAuthorized] = useState(false)

    // Method to handle start date input change
    const handleStartDate = (event: ChangeEvent<HTMLInputElement>) => {
        setInputStartDate(event.target.value)
        setExportCreated(false)
    }
    // Method to handle end date input change
    const handleEndDate = (event: ChangeEvent<HTMLInputElement>) => {
        setInputEndDate(event.target.value)
        setExportCreated(false)
    }
    // Method to handle company input change
    const handleCompany = (event: ChangeEvent<HTMLInputElement>) => {
        setInputCompany(event.target.value)
        setExportCreated(false)
    }

    // Method to fetch API
    const fetchAPI = async () => {
        // Set start date to ISO format
        const isoStartDate = new Date(inputStartDate).toISOString()
        // Set end date to ISO format
        const isoEndDate = new Date(inputEndDate).toISOString()
        // Set company name to input value
        const clientName = inputCompany.trim()
        // Set loading state to true
        setLoading(true)

        const response = await fetch('/api/v1/entries', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
            },
            body: JSON.stringify({
                isoStartDate,
                isoEndDate,
                clientName,
            }),
        })
        const data = await response.blob()
        const file = new Blob([data], { type: 'application/vnd.openxmlformats-officedocument.spreadsheetml.sheet' })
        const fileURL = URL.createObjectURL(file)
        const link = document.createElement('a')
        link.href = fileURL
        link.download = `export-${inputEndDate}-${inputCompany}.xlsx`
        link.click()
        setLoading(false)
        setExportCreated(true)
    }

    const handleAuthorizedChange = (authorized: boolean) => {
        setAuthorized(authorized)
    }

    return (
        <>
            {authorized ? (
                <div className="bg-gray-900 p-8 rounded-xl shadow-xl">
                    <div className="pb-4">
                        <h1 className="text-4xl font-bold text-left text-slate-700">Export Time Entries</h1>
                    </div>
                    <div className="grid grid-flow-row sm:grid-cols-2 grid-rows-1 gap-4">
                        <div className="flex flex-col">
                            <label className="text-slate-700 text-sm">Start Date</label>
                            <input value={inputStartDate} onChange={handleStartDate} className="bg-slate-700 p-2 rounded-md" type="date" />
                        </div>
                        <div className="flex flex-col">
                            <label className="text-slate-700 text-sm">End Date</label>
                            <input value={inputEndDate} onChange={handleEndDate} className="bg-slate-700 p-2 rounded-md" type="date" />
                        </div>
                        <div className="flex flex-col">
                            <label className="text-slate-700 text-sm">Company</label>
                            <input
                                value={inputCompany}
                                onChange={handleCompany}
                                className="bg-slate-700 p-2 rounded-md placeholder-slate-600"
                                type="text"
                                placeholder="Company Name"
                            />
                        </div>
                        <div className="grid items-end">
                            <button type="button" onClick={fetchAPI} className="bg-slate-200 p-2 rounded-md flex justify-center w-full">
                                {loading ? (
                                    <>
                                        <ArrowPathIcon className="fill-slate-700 h-5 w-5 mr-3 animate-spin" />
                                        <div className="text-slate-700">Processing...</div>
                                    </>
                                ) : (
                                    <div className="flex justify-center w-full slate-700">Create Export</div>
                                )}
                            </button>
                        </div>
                    </div>
                </div>
            ) : (
                <LoginComponent onAuthorizedChange={handleAuthorizedChange} />
            )}
            {exportCreated && (
                <div className="relative pt-4 text-center">
                    <div className="flex flex-row justify-center items-center">
                        <CheckBadgeIcon className="fill-slate-700 h-4 w-4 mr-2" />
                        <p className="text-slate-700">Export successfully created</p>
                    </div>
                </div>
            )}
        </>
    )
}
