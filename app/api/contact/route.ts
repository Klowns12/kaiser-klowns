import { NextResponse } from 'next/server';
import { Resend } from 'resend';

export async function POST(request: Request) {
    try {
        const body = await request.json();
        const { name, email, company, subject, message } = body;

        // Validation
        if (!name || !email || !message) {
            return NextResponse.json(
                { error: 'Name, email, and message are required.' },
                { status: 400 }
            );
        }

        // --- EMAIL SENDING LOGIC (MOCK) ---
        // In a real production environment, you would use a service like Resend, SendGrid, or Nodemailer here.
        // Example with Resend:
        const resend = new Resend('re_cdvgENUa_6hXJ6wRgZhtNMo9XJbcfwNjn');

        const { data, error } = await resend.emails.send({
            from: 'onboarding@resend.dev',
            to: 'kaiserklowns@gmail.com',
            subject: subject || 'No Subject',
            html: `<p><strong>Name:</strong> ${name}</p> <p><strong>Email:</strong> ${email}</p> <p><strong>Company:</strong> ${company || 'N/A'}</p> <p><strong>Message:</strong> ${message}</p>`
        });

        if (error) {
            console.error('Resend API Error:', error);
            // Optionally fail if email could not send:
            // return NextResponse.json({ error: 'Failed to send email.' }, { status: 500 });
        } else {
            console.log('Resend Data:', data);
        }

        console.log("----------------------------------------");
        console.log("📨 NEW CONTACT FORM MOCK SUBMISSION:");
        console.log(`Name: ${name}`);
        console.log(`Email: ${email}`);
        console.log(`Company: ${company || 'N/A'}`);
        console.log(`Subject: ${subject || 'N/A'}`);
        console.log(`Message:\n${message}`);
        console.log("----------------------------------------");

        // Simulate network delay
        await new Promise(resolve => setTimeout(resolve, 1500));

        return NextResponse.json({ success: true, message: 'Message sent successfully.' }, { status: 200 });
    } catch (error) {
        console.error('Error in contact API:', error);
        return NextResponse.json(
            { error: 'Internal server error.' },
            { status: 500 }
        );
    }
}
