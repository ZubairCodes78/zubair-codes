import { NextRequest, NextResponse } from 'next/server';
import { Resend } from 'resend';

// In-memory rate limiting (for production, use Redis or similar)
const rateLimitMap = new Map<string, { count: number; resetTime: number }>();
const RATE_LIMIT_MAX = 3;
const RATE_LIMIT_WINDOW = 60 * 60 * 1000; // 1 hour in milliseconds

export async function POST(request: NextRequest) {
  try {
    const body = await request.json();
    const { name, email, phone, businessType, systemNeeded, budget, message } = body;

    // Get client IP for rate limiting
    const ip = request.headers.get('x-forwarded-for') || request.headers.get('x-real-ip') || 'unknown';
    const now = Date.now();

    // Rate limiting check
    const rateLimitData = rateLimitMap.get(ip);
    if (rateLimitData) {
      if (now > rateLimitData.resetTime) {
        // Reset if window has passed
        rateLimitMap.set(ip, { count: 1, resetTime: now + RATE_LIMIT_WINDOW });
      } else if (rateLimitData.count >= RATE_LIMIT_MAX) {
        return NextResponse.json(
          { error: 'Too many requests. Please try again later.' },
          { status: 429 }
        );
      } else {
        rateLimitData.count++;
      }
    } else {
      rateLimitMap.set(ip, { count: 1, resetTime: now + RATE_LIMIT_WINDOW });
    }

    // Validate required fields
    if (!name || !email || !businessType || !systemNeeded || !budget || !message) {
      return NextResponse.json(
        { error: 'Missing required fields' },
        { status: 400 }
      );
    }

    // Validate email format
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailRegex.test(email)) {
      return NextResponse.json(
        { error: 'Invalid email format' },
        { status: 400 }
      );
    }

    // Send email using Resend
    const resendApiKey = process.env.RESEND_API_KEY;
    
    if (resendApiKey) {
      try {
        const resend = new Resend(resendApiKey);
        
        await resend.emails.send({
          from: 'Zubair Codes <hello@zubaircodes.com>',
          to: 'hello@zubaircodes.com',
          subject: `New Project Request from ${name}`,
          html: `
            <div style="font-family: Arial, sans-serif; max-width: 600px; margin: 0 auto; padding: 20px;">
              <h2 style="color: #8b5cf6; margin-bottom: 20px;">New Project Request</h2>
              
              <div style="background: #f5f5f5; padding: 20px; border-radius: 8px; margin-bottom: 20px;">
                <p><strong>Name:</strong> ${name}</p>
                <p><strong>Email:</strong> ${email}</p>
                ${phone ? `<p><strong>Phone:</strong> ${phone}</p>` : ''}
                <p><strong>Business Type:</strong> ${businessType}</p>
                <p><strong>System Needed:</strong> ${systemNeeded}</p>
                <p><strong>Budget:</strong> ${budget}</p>
              </div>
              
              <div style="background: #f5f5f5; padding: 20px; border-radius: 8px;">
                <p><strong>Message:</strong></p>
                <p style="white-space: pre-wrap;">${message}</p>
              </div>
            </div>
          `,
        });
      } catch (emailError) {
        console.error('Resend email error:', emailError);
        // Continue with fallback logging if email fails
      }
    } else {
      console.warn('RESEND_API_KEY not set, falling back to console logging');
    }

    // Log the submission (fallback or backup)
    console.log('Contact form submission:', {
      name,
      email,
      phone,
      businessType,
      systemNeeded,
      budget,
      message,
      timestamp: new Date().toISOString(),
    });

    return NextResponse.json(
      { message: 'Contact form submitted successfully' },
      { status: 200 }
    );
  } catch (error) {
    console.error('Contact form error:', error);
    return NextResponse.json(
      { error: 'Internal server error' },
      { status: 500 }
    );
  }
}
