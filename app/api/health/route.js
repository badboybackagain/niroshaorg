import { NextResponse } from 'next/server'
import { getISTISOString } from '@/lib/timezone'

export async function GET() {
  return NextResponse.json({
    status: 'ok',
    message: 'API is running',
    timestamp: getISTISOString(),
    timezone: 'IST (Asia/Kolkata)',
    service: 'nirosha.org'
  })
}
