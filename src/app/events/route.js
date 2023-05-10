import { NextResponse } from 'next/server';
import { sql } from '@vercel/postgres';

export async function GET() {
  const { rows } = await sql`SELECT * from EVENTS`;
  return NextResponse.json({ data: rows });
}

export async function POST(request) {
  const res = await request.json();
  await sql`INSERT INTO events (type, time) VALUES (${res.type}, ${res.time})`;
  return NextResponse.json({ res });
}
