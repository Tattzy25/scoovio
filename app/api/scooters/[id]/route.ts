import { NextRequest, NextResponse } from 'next/server'
import { scooters } from '@/data/scooters'

interface Params {
  params: { id: string }
}

export async function GET(_req: NextRequest, { params }: Params) {
  const scooter = scooters.find(s => s.id === params.id)
  if (!scooter) {
    return NextResponse.json({ error: 'Scooter not found' }, { status: 404 })
  }
  return NextResponse.json({ scooter })
}
