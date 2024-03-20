import { NextResponse, NextRequest } from 'next/server'

export async function POST(req: NextRequest) {
    const body = await req.json()
    const password = process.env.USER_SCOTTY_API_PASSWORD as string
    const user = process.env.USER_SCOTTY_API_USER as string
    const from = body.isoStartDate as string
    const to = body.isoEndDate as string
    const clientName = body.clientName as string
    const taskTypesToIgnore = ['Managed Service', 'Fasttrack'] as string[]

    const url = 'https://api-dd-scotty-prod.azurewebsites.net/api/v2/CoffeeCup/timeEntries/Export'
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
