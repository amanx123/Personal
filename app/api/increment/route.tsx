import { NextRequest, NextResponse } from "next/server"
import { Redis } from "@upstash/redis"

const redis = Redis.fromEnv()
export const runtime = 'edge'

export async function POST(request: NextRequest): Promise<NextResponse> {
    const body = await request.json()
    let slug: string | undefined = undefined
    if ('slug' in body) {
        slug = body.slug
    }
    if (!slug) {
        return new NextResponse('Slug not found', { status: 400 });
    }

    const ip = request.ip
    if (ip) {
        // Hashing the IP in order to not store directly in your db.
        const buf = await crypto.subtle.digest('SHA-256', new TextEncoder().encode(ip))
        const hash = Array.from(new Uint8Array(buf))
            .map(b => b.toString(16).padStart(2, '0'))
            .join("")

        //deduplicate the ip for each slug
        const isNew = await redis.set(['deduplicate', hash, slug].join(':'), true, {
            nx: true,
            ex: 24 * 60 * 60,
        })

        if (!isNew) {
            new NextResponse(null, { status: 202 })
        }
    }
    await redis.incrbyfloat(['pageviews', 'blogs', slug].join(':'), 0.5)
    return new NextResponse(null, { status: 202 })
}