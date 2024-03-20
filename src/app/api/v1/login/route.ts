import { NextResponse, NextRequest } from 'next/server'

/**
 * Handles the POST request for the login route.
 *
 * @param req - The NextRequest object representing the incoming request.
 * @returns A NextResponse object with the appropriate status and message.
 */
export async function POST(req: NextRequest) {
    const body = await req.json()
    const password = process.env.SCOTTY_PASSWORD as string
    const user = process.env.SCOTTY_USER as string
    const inputUser = body.user as string
    const inputPassword = body.password as string

    if (inputPassword === password && inputUser === user) {
        return new NextResponse(
            JSON.stringify({
                status: 200,
                message: 'Authorized',
            }),
            { status: 200 },
        )
    }
    return new NextResponse(
        JSON.stringify({
            status: 401,
            message: 'Unauthorized',
        }),
        { status: 401 },
    )
}
