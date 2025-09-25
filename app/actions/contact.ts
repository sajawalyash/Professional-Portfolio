"use server"

export async function sendContactEmail(formData: FormData) {
  const name = formData.get("name") as string
  const email = formData.get("email") as string
  const subject = formData.get("subject") as string
  const message = formData.get("message") as string

  // Validate the form data
  if (!name || !email || !subject || !message) {
    return {
      success: false,
      message: "Please fill in all required fields.",
    }
  }

  // Email validation
  const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/
  if (!emailRegex.test(email)) {
    return {
      success: false,
      message: "Please enter a valid email address.",
    }
  }

  try {
    // Create the email content
    const emailContent = `
      New Contact Form Submission
      
      From: ${name}
      Email: ${email}
      Subject: ${subject}
      
      Message:
      ${message}
      
      ---
      This message was sent from your portfolio contact form.
    `

    // For now, we'll simulate sending the email
    // In production, you would integrate with an email service like:
    // - Resend
    // - SendGrid
    // - Nodemailer with Gmail SMTP

    console.log("Email to be sent to: sajawalyash0892@gmail.com")
    console.log("Email content:", emailContent)

    // Simulate a delay
    await new Promise((resolve) => setTimeout(resolve, 1000))

    return {
      success: true,
      message: "Thank you for your message! I will get back to you soon.",
    }
  } catch (error) {
    console.error("Error sending email:", error)
    return {
      success: false,
      message: "Sorry, there was an error sending your message. Please try again or contact me directly.",
    }
  }
}
