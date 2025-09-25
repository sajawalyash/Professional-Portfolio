# Email Setup Guide for Portfolio Contact Form

## Option 1: Using Resend (Recommended)

1. **Sign up for Resend**
   - Go to https://resend.com
   - Create a free account (100 emails/day free)

2. **Get your API key**
   - Go to your Resend dashboard
   - Navigate to API Keys
   - Create a new API key

3. **Add environment variable**
   - Add to your `.env.local` file:
   \`\`\`
   RESEND_API_KEY=your_api_key_here
   \`\`\`

4. **Install Resend package**
   \`\`\`bash
   npm install resend
   \`\`\`

5. **Update the contact action**
   - Replace the placeholder code in `app/actions/contact.ts` with the Resend integration

## Option 2: Using Gmail SMTP with Nodemailer

1. **Enable 2-Factor Authentication on Gmail**
   - Go to your Google Account settings
   - Enable 2FA

2. **Generate App Password**
   - Go to Google Account > Security > App passwords
   - Generate a password for "Mail"

3. **Add environment variables**
   \`\`\`
   GMAIL_USER=sajawalyash0892@gmail.com
   GMAIL_APP_PASSWORD=your_app_password_here
   \`\`\`

4. **Install nodemailer**
   \`\`\`bash
   npm install nodemailer
   npm install @types/nodemailer
   \`\`\`

## Option 3: Using EmailJS (Client-side)

1. **Sign up for EmailJS**
   - Go to https://emailjs.com
   - Create a free account

2. **Set up email service**
   - Connect your Gmail account
   - Create an email template

3. **Add to your form**
   - Install EmailJS SDK
   - Configure client-side email sending

## Current Setup

The current form is set up with a server action that:
- Validates form input
- Shows success/error messages
- Has loading states
- Is ready to integrate with any email service

Choose the option that works best for you and follow the setup instructions!
