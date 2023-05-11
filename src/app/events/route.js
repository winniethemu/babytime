import { NextResponse } from 'next/server';
import { sql } from '@vercel/postgres';

export async function GET() {
  if (process.env.VERCEL_ENV === 'development') {
    const { rows } = await sql`SELECT * from events_test ORDER BY time DESC`;
    return NextResponse.json({ data: rows });
  } else {
    const { rows } = await sql`SELECT * from events ORDER BY time DESC`;
    return NextResponse.json({ data: rows });
  }
}

export async function POST(request) {
  const res = await request.json();
  if (process.env.VERCEL_ENV === 'development') {
    await sql`INSERT INTO events_test (type, time) VALUES (${res.type}, ${res.time})`;
  } else {
    await sql`INSERT INTO events (type, time) VALUES (${res.type}, ${res.time})`;
  }
  return NextResponse.json({ res });
}
