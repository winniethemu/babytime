import { NextResponse } from 'next/server';
import { sql } from '@vercel/postgres';

export async function GET(req) {
  const { searchParams } = new URL(req.url);
  const since = searchParams.get('d') || 2;
  if (process.env.VERCEL_ENV === 'development') {
    const { rows } =
      await sql`SELECT * from events_test WHERE time > (extract(epoch from now()) - ${since} * 86400) * 1000 ORDER BY time DESC`;
    return NextResponse.json({ data: rows });
  } else {
    const { rows } =
      await sql`SELECT * from events WHERE time > (extract(epoch from now()) - ${since} * 86400) * 1000 ORDER BY time DESC`;
    return NextResponse.json({ data: rows });
  }
}

export async function POST(req) {
  const json = await req.json();
  if (process.env.VERCEL_ENV === 'development') {
    await sql`INSERT INTO events_test (type, time) VALUES (${json.type}, ${json.time})`;
  } else {
    await sql`INSERT INTO events (type, time) VALUES (${json.type}, ${json.time})`;
  }
  return new NextResponse();
}
