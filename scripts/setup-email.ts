// This script shows how to integrate with Resend for email sending
// You'll need to sign up at https://resend.com and get an API key

import { Resend } from "resend"

// Initialize Resend with your API key
// You would add RESEND_API_KEY to your environment variables
const resend = new Resend(process.env.RESEND_API_KEY)

export async function sendEmail({
  name,
  email,
  subject,
  message,
}: {
  name: string
  email: string
  subject: string
  message: string
}) {
  try {
    const { data, error } = await resend.emails.send({
      from: "Portfolio Contact <noreply@yourdomain.com>",
      to: ["sajawalyash0892@gmail.com"],
      subject: `Portfolio Contact: ${subject}`,
      html: `
        <div style="font-family: Arial, sans-serif; max-width: 600px; margin: 0 auto;">
          <h2 style="color: #7c3aed;">New Contact Form Submission</h2>
          
          <div style="background-color: #f8f9fa; padding: 20px; border-radius: 8px; margin: 20px 0;">
            <p><strong>Name:</strong> ${name}</p>
            <p><strong>Email:</strong> ${email}</p>
            <p><strong>Subject:</strong> ${subject}</p>
          </div>
          
          <div style="background-color: #ffffff; padding: 20px; border: 1px solid #e9ecef; border-radius: 8px;">
            <h3 style="color: #333; margin-top: 0;">Message:</h3>
            <p style="white-space: pre-wrap; line-height: 1.6;">${message}</p>
          </div>
          
          <div style="margin-top: 20px; padding: 15px; background-color: #e3f2fd; border-radius: 8px;">
            <p style="margin: 0; font-size: 14px; color: #666;">
              This message was sent from your portfolio contact form.<br>
              Reply directly to this email to respond to ${name}.
            </p>
          </div>
        </div>
      `,
      reply_to: email, // This allows you to reply directly to the sender
    })

    if (error) {
      console.error("Error sending email:", error)
      return { success: false, error }
    }

    return { success: true, data }
  } catch (error) {
    console.error("Error sending email:", error)
    return { success: false, error }
  }
}
