import { NextRequest, NextResponse } from 'next/server'
import { Resend } from 'resend'

const resend = new Resend(process.env.RESEND_API_KEY)

export async function POST(req: NextRequest) {
  try {
    const { name, email, company, service, message } = await req.json()

    // Basic server-side validation
    if (!name || !email || !service || !message) {
      return NextResponse.json({ error: 'Missing required fields' }, { status: 400 })
    }

    const serviceLabels: Record<string, string> = {
      branding: 'Brand & Graphic Design',
      web: 'Web Development',
      video: 'Video Editing',
      content: 'Content Writing',
      other: 'Something else',
    }

    const { error } = await resend.emails.send({
      from: 'Contact Form <onboarding@resend.dev>', // Change after domain verification
      to: ['hello.theojasstudio@gmail.com'],
      replyTo: email,
      subject: `New enquiry from ${name} — ${serviceLabels[service] ?? service}`,
      html: `
        <div style="font-family: sans-serif; max-width: 600px; margin: 0 auto; padding: 32px; background: #fafafa; border-radius: 12px;">
          <h2 style="margin: 0 0 24px; font-size: 22px; color: #111;">New contact form submission</h2>

          <table style="width: 100%; border-collapse: collapse;">
            <tr>
              <td style="padding: 10px 0; font-size: 13px; color: #555; width: 130px; vertical-align: top;">Name</td>
              <td style="padding: 10px 0; font-size: 14px; color: #111; font-weight: 600;">${name}</td>
            </tr>
            <tr>
              <td style="padding: 10px 0; font-size: 13px; color: #555; vertical-align: top;">Email</td>
              <td style="padding: 10px 0; font-size: 14px; color: #111; font-weight: 600;">
                <a href="mailto:${email}" style="color: #e63946;">${email}</a>
              </td>
            </tr>
            ${company ? `
            <tr>
              <td style="padding: 10px 0; font-size: 13px; color: #555; vertical-align: top;">Company</td>
              <td style="padding: 10px 0; font-size: 14px; color: #111; font-weight: 600;">${company}</td>
            </tr>` : ''}
            <tr>
              <td style="padding: 10px 0; font-size: 13px; color: #555; vertical-align: top;">Service</td>
              <td style="padding: 10px 0; font-size: 14px; color: #111; font-weight: 600;">${serviceLabels[service] ?? service}</td>
            </tr>
          </table>

          <hr style="border: none; border-top: 1px solid #e5e7eb; margin: 24px 0;" />

          <p style="margin: 0 0 8px; font-size: 13px; color: #555;">Message</p>
          <p style="margin: 0; font-size: 15px; color: #111; line-height: 1.7; white-space: pre-wrap;">${message}</p>

          <hr style="border: none; border-top: 1px solid #e5e7eb; margin: 24px 0;" />
          <p style="margin: 0; font-size: 12px; color: #aaa;">Sent via ojas.studio contact form · Reply directly to respond to ${name}</p>
        </div>
      `,
    })

    if (error) {
      console.error('Resend error:', error)
      return NextResponse.json({ error: 'Failed to send email' }, { status: 500 })
    }

    return NextResponse.json({ success: true })
  } catch (err) {
    console.error('Contact API error:', err)
    return NextResponse.json({ error: 'Internal server error' }, { status: 500 })
  }
}
