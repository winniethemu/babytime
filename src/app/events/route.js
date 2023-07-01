import { NextResponse } from 'next/server';
import { supabase } from '../db';

export async function GET() {
  let table =
    process.env.VERCEL_ENV === 'development' ? 'events_test' : 'events';
  const { data } = await supabase
    .from(table)
    .select()
    .order('time', { ascending: false })
    .limit(30);
  return NextResponse.json({ data });
}

export async function POST(req) {
  const json = await req.json();
  let table =
    process.env.VERCEL_ENV === 'development' ? 'events_test' : 'events';
  await supabase.from(table).insert({ type: json.type, time: json.time });
  return new NextResponse();
}
