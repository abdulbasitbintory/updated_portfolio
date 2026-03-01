import { NextRequest, NextResponse } from 'next/server';
import crypto from 'crypto';

const ADMIN_TOKEN_SECRET = process.env.ADMIN_TOKEN_SECRET || 'your-secret-key';
const ADMIN_PASSWORD = process.env.ADMIN_PASSWORD || 'admin123';

export async function POST(request: NextRequest) {
  try {
    const body = await request.json();
    const { password } = body;

    if (!password) {
      return NextResponse.json(
        { error: 'Password required' },
        { status: 400 }
      );
    }

    if (password !== ADMIN_PASSWORD) {
      return NextResponse.json(
        { error: 'Invalid credentials' },
        { status: 401 }
      );
    }

    // Generate a token (simple approach, ideally use JWT)
    const token = crypto
      .createHash('sha256')
      .update(`${ADMIN_TOKEN_SECRET}-${Date.now()}`)
      .digest('hex');

    const response = NextResponse.json(
      { 
        success: true,
        token,
        expiresIn: 24 * 60 * 60 // 24 hours in seconds
      },
      { status: 200 }
    );

    // Set secure cookie
    response.cookies.set('admin_token', token, {
      httpOnly: true,
      secure: process.env.NODE_ENV === 'production',
      sameSite: 'strict',
      maxAge: 24 * 60 * 60,
      path: '/',
    });

    return response;
  } catch (error) {
    console.error('Auth error:', error);
    return NextResponse.json(
      { error: 'Internal server error' },
      { status: 500 }
    );
  }
}

export function GET(request: NextRequest) {
  const token = request.cookies.get('admin_token')?.value;

  if (!token) {
    return NextResponse.json(
      { authenticated: false },
      { status: 401 }
    );
  }

  return NextResponse.json(
    { authenticated: true },
    { status: 200 }
  );
}
