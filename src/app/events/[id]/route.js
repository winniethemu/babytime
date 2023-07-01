import { NextResponse } from 'next/server';
import { supabase } from '../../db';

export async function DELETE(_req, { params }) {
  let table =
    process.env.VERCEL_ENV === 'development' ? 'events_test' : 'events';
  await supabase.from(table).delete().eq('id', params.id);
  return NextResponse.json({});
}
