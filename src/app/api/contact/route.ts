import { supabase } from '@/lib/supabase';
import { Resend } from 'resend';
import { v4 as uuidv4 } from 'uuid';
import { NextRequest, NextResponse } from 'next/server';

const resend = new Resend(process.env.RESEND_API_KEY);

export async function POST(request: NextRequest) {
  try {
    const body = await request.json();
    const { name, email, phone, subject, message } = body;

    // Validate input
    if (!name || !email || !subject || !message) {
      return NextResponse.json(
        { error: 'Missing required fields' },
        { status: 400 }
      );
    }

    const clientIp = request.headers.get('x-forwarded-for') || 
                     request.headers.get('x-real-ip') || 
                     'unknown';
    const userAgent = request.headers.get('user-agent') || '';

    // Save to Supabase
    const { data, error } = await supabase
      .from('contact_submissions')
      .insert([
        {
          name,
          email,
          phone: phone || null,
          subject,
          message,
          ip_address: clientIp,
          user_agent: userAgent,
          read: false,
          archived: false,
        },
      ])
      .select();

    if (error) {
      console.error('Supabase error:', error);
      return NextResponse.json(
        { error: 'Failed to save submission' },
        { status: 500 }
      );
    }

    // Send email notification to admin
    try {
      await resend.emails.send({
        from: 'Contact Form <onboarding@resend.dev>',
        to: process.env.CONTACT_EMAIL || 'your-email@example.com',
        subject: `New Contact Form Submission: ${subject}`,
        html: `
          <div style="font-family: Arial, sans-serif; max-width: 600px;">
            <h2>New Contact Form Submission</h2>
            <div style="margin: 20px 0; padding: 20px; background-color: #f5f5f5; border-radius: 8px;">
              <p><strong>Name:</strong> ${name}</p>
              <p><strong>Email:</strong> ${email}</p>
              ${phone ? `<p><strong>Phone:</strong> ${phone}</p>` : ''}
              <p><strong>Subject:</strong> ${subject}</p>
              <div style="margin-top: 15px;">
                <strong>Message:</strong>
                <p style="white-space: pre-wrap; word-wrap: break-word;">${message}</p>
              </div>
            </div>
            <p style="color: #666; font-size: 12px;">Submitted at: ${new Date().toLocaleString()}</p>
          </div>
        `,
      });
    } catch (emailError) {
      console.error('Email send error:', emailError);
      // Don't fail the request if email fails
    }

    // Track analytics event
    try {
      await supabase
        .from('analytics_events')
        .insert([
          {
            event_type: 'contact_submission',
            page_url: request.headers.get('referer') || '',
            ip_address: clientIp,
            user_agent: userAgent,
            session_id: uuidv4(),
            event_data: { email },
          },
        ]);
    } catch (analyticsError) {
      console.error('Analytics error:', analyticsError);
    }

    return NextResponse.json(
      { 
        success: true, 
        message: 'Contact form submitted successfully',
        data: data?.[0]
      },
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
