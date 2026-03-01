import { supabase } from '@/lib/supabase';
import { NextRequest, NextResponse } from 'next/server';

function verifyAdminToken(request: NextRequest): boolean {
  const token = request.cookies.get('admin_token')?.value;
  return !!token;
}

export async function GET(request: NextRequest) {
  if (!verifyAdminToken(request)) {
    return NextResponse.json(
      { error: 'Unauthorized' },
      { status: 401 }
    );
  }

  try {
    const { searchParams } = new URL(request.url);
    const metric = searchParams.get('metric') || 'all';
    const days = parseInt(searchParams.get('days') || '30');
    const startDate = new Date(Date.now() - days * 24 * 60 * 60 * 1000)
      .toISOString()
      .split('T')[0];

    // Get analytics summary
    const { data: summary, error: summaryError } = await supabase
      .from('analytics_summary')
      .select('*')
      .gte('date', startDate)
      .order('date', { ascending: true });

    if (summaryError) throw summaryError;

    // Get contact submissions count
    const { count: contactCount, error: contactError } = await supabase
      .from('contact_submissions')
      .select('id', { count: 'exact' })
      .gte('created_at', startDate);

    if (contactError) throw contactError;

    // Get unread contacts
    const { count: unreadCount, error: unreadError } = await supabase
      .from('contact_submissions')
      .select('id', { count: 'exact' })
      .eq('read', false);

    if (unreadError) throw unreadError;

    // Get project views
    const { data: projects, error: projectsError } = await supabase
      .from('projects')
      .select('id, views, clicks')
      .order('views', { ascending: false });

    if (projectsError) throw projectsError;

    // Calculate totals
    const totalPageViews = summary?.reduce((sum, item) => sum + item.page_views, 0) || 0;
    const totalVisitors = summary?.reduce((sum, item) => sum + item.unique_visitors, 0) || 0;
    const totalProjectClicks = projects?.reduce((sum, p) => sum + p.clicks, 0) || 0;

    return NextResponse.json(
      {
        summary,
        stats: {
          contactCount: contactCount || 0,
          unreadCount: unreadCount || 0,
          totalPageViews,
          totalVisitors,
          totalProjectClicks,
          topProjects: projects?.slice(0, 5) || [],
        },
      },
      { status: 200 }
    );
  } catch (error) {
    console.error('Error fetching analytics:', error);
    return NextResponse.json(
      { error: 'Failed to fetch analytics' },
      { status: 500 }
    );
  }
}
