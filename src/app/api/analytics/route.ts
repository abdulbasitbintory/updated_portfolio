import { supabase } from '@/lib/supabase';
import { NextRequest, NextResponse } from 'next/server';

export async function POST(request: NextRequest) {
  try {
    const body = await request.json();
    const { event_type, event_data, page_url, referrer, session_id } = body;

    const clientIp = request.headers.get('x-forwarded-for') || 
                     request.headers.get('x-real-ip') || 
                     'unknown';
    const userAgent = request.headers.get('user-agent') || '';

    const { error } = await supabase
      .from('analytics_events')
      .insert([
        {
          event_type,
          event_data: event_data || null,
          page_url: page_url || null,
          referrer: referrer || null,
          ip_address: clientIp,
          user_agent: userAgent,
          session_id,
        },
      ]);

    if (error) {
      console.error('Supabase error:', error);
      return NextResponse.json(
        { error: 'Failed to track event' },
        { status: 500 }
      );
    }

    return NextResponse.json(
      { success: true },
      { status: 201 }
    );
  } catch (error) {
    console.error('API error:', error);
    return NextResponse.json(
      { error: 'Internal server error' },
      { status: 500 }
    );
  }
}
