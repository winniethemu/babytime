import { NextResponse } from 'next/server';
import { sql } from '@vercel/postgres';

export async function DELETE(_req, { params }) {
  if (process.env.VERCEL_ENV === 'development') {
    await sql`DELETE FROM events_test WHERE id=${params.id}`;
  } else {
    await sql`DELETE FROM events WHERE id=${params.id}`;
  }
  return new NextResponse();
}
