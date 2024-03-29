import { NextResponse, NextRequest } from 'next/server'

/**
 * Handles the POST request for retrieving entries data.
 * @param req - The NextRequest object containing the request details.
 * @returns A Promise that resolves to the response containing the entries data, or an error response.
 */
export async function POST(req: NextRequest) {
    const body = await req.json()
    const from = body.isoStartDate as string
    const to = body.isoEndDate as string
    const clientName = body.clientName as string
    const taskTypesToIgnore = ['Managed Service', 'Fasttrack'] as string[]

    const password = process.env.USER_SCOTTY_API_PASSWORD as string
    const user = process.env.USER_SCOTTY_API_USER as string
    const url = process.env.SCOTTY_API as string

    // Fetch the entries data
    const response = await fetch(url, {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json; charset=utf-8',
            username: user,
            password: password,
        },
        body: JSON.stringify({
            from: from,
            to: to,
            userIds: null,
            clientName: clientName,
            taskTypesToIgnore: taskTypesToIgnore,
        }),
    })

    try {
        // Return the entries data
        return response
    } catch (e: any) {
        return NextResponse.json({
            status: 500,
            message: e.message,
        })
    }
}
