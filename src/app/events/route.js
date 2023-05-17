import { NextResponse } from 'next/server';
import { sql } from '@vercel/postgres';

export async function GET(req) {
  const { searchParams } = new URL(req.url);
  const since = searchParams.get('d') || 1;
  if (process.env.VERCEL_ENV === 'development') {
    // doesn't work, there could be days without data, which would
    // mislead frontend logic
    const { rows } = await sql`
      SELECT * FROM events_test
      WHERE
        time > (extract(epoch from now()) - ${since} * 86400) * 1000 AND
        time < (extract(epoch from now()) - ${since - 1} * 86400) * 1000
      ORDER BY time DESC`;
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
