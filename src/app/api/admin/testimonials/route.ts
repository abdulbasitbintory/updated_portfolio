import { supabase } from '@/lib/supabase';
import { NextRequest, NextResponse } from 'next/server';

function verifyAdminToken(request: NextRequest): boolean {
  const token = request.cookies.get('admin_token')?.value;
  return !!token;
}

export async function GET(request: NextRequest) {
  try {
    const { data, error } = await supabase
      .from('testimonials')
      .select('*')
      .order('order_index', { ascending: true });

    if (error) throw error;

    return NextResponse.json({ data }, { status: 200 });
  } catch (error) {
    console.error('Error fetching testimonials:', error);
    return NextResponse.json(
      { error: 'Failed to fetch testimonials' },
      { status: 500 }
    );
  }
}

export async function POST(request: NextRequest) {
  if (!verifyAdminToken(request)) {
    return NextResponse.json(
      { error: 'Unauthorized' },
      { status: 401 }
    );
  }

  try {
    const body = await request.json();
    
    const { data, error } = await supabase
      .from('testimonials')
      .insert([body])
      .select();

    if (error) throw error;

    return NextResponse.json({ data: data?.[0] }, { status: 201 });
  } catch (error) {
    console.error('Error creating testimonial:', error);
    return NextResponse.json(
      { error: 'Failed to create testimonial' },
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
    const { id, ...updates } = body;

    if (!id) {
      return NextResponse.json(
        { error: 'Testimonial ID required' },
        { status: 400 }
      );
    }

    const { data, error } = await supabase
      .from('testimonials')
      .update({ ...updates, updated_at: new Date().toISOString() })
      .eq('id', id)
      .select();

    if (error) throw error;

    return NextResponse.json({ data: data?.[0] }, { status: 200 });
  } catch (error) {
    console.error('Error updating testimonial:', error);
    return NextResponse.json(
      { error: 'Failed to update testimonial' },
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
        { error: 'Testimonial ID required' },
        { status: 400 }
      );
    }

    const { error } = await supabase
      .from('testimonials')
      .delete()
      .eq('id', id);

    if (error) throw error;

    return NextResponse.json(
      { success: true, message: 'Testimonial deleted' },
      { status: 200 }
    );
  } catch (error) {
    console.error('Error deleting testimonial:', error);
    return NextResponse.json(
      { error: 'Failed to delete testimonial' },
      { status: 500 }
    );
  }
}
