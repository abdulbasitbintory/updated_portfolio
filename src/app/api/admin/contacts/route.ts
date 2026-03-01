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
    const filter = searchParams.get('filter') || 'all'; // all, unread, archived
    const page = parseInt(searchParams.get('page') || '1');
    const limit = 20;
    const offset = (page - 1) * limit;

    let query = supabase.from('contact_submissions').select('*');

    if (filter === 'unread') {
      query = query.eq('read', false);
    } else if (filter === 'archived') {
      query = query.eq('archived', true);
    } else {
      query = query.eq('archived', false);
    }

    const { data, error, count } = await query
      .order('created_at', { ascending: false })
      .range(offset, offset + limit - 1)
      .select('*', { count: 'exact' });

    if (error) throw error;

    return NextResponse.json(
      {
        data,
        pagination: {
          page,
          limit,
          total: count || 0,
          pages: Math.ceil((count || 0) / limit),
        },
      },
      { status: 200 }
    );
  } catch (error) {
    console.error('Error fetching contacts:', error);
    return NextResponse.json(
      { error: 'Failed to fetch contacts' },
      { status: 500 }
    );
  }
}

export async function PUT(request: NextRequest) {
  if (!verifyAdminToken(request)) {
    return NextResponse.json(
      { error: 'Unauthorized' },
      { status: 401 }
    );
  }

  try {
    const body = await request.json();
    const { id, read, archived } = body;

    if (!id) {
      return NextResponse.json(
        { error: 'Contact ID required' },
        { status: 400 }
      );
    }

    const updates: any = {};
    if (read !== undefined) updates.read = read;
    if (archived !== undefined) updates.archived = archived;

    const { data, error } = await supabase
      .from('contact_submissions')
      .update(updates)
      .eq('id', id)
      .select();

    if (error) throw error;

    return NextResponse.json({ data: data?.[0] }, { status: 200 });
  } catch (error) {
    console.error('Error updating contact:', error);
    return NextResponse.json(
      { error: 'Failed to update contact' },
      { status: 500 }
    );
  }
}

export async function DELETE(request: NextRequest) {
  if (!verifyAdminToken(request)) {
    return NextResponse.json(
      { error: 'Unauthorized' },
      { status: 401 }
    );
  }

  try {
    const { searchParams } = new URL(request.url);
    const id = searchParams.get('id');

    if (!id) {
      return NextResponse.json(
        { error: 'Contact ID required' },
        { status: 400 }
      );
    }

    const { error } = await supabase
      .from('contact_submissions')
      .delete()
      .eq('id', id);

    if (error) throw error;

    return NextResponse.json(
      { success: true, message: 'Contact deleted' },
      { status: 200 }
    );
  } catch (error) {
    console.error('Error deleting contact:', error);
    return NextResponse.json(
      { error: 'Failed to delete contact' },
      { status: 500 }
    );
  }
}
