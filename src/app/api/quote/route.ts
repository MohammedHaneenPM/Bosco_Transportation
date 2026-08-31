import { NextResponse } from 'next/server';
import nodemailer from 'nodemailer';

export async function POST(req: Request) {
  try {
    const data = await req.json();

    // Create a transporter using SMTP
    const transporter = nodemailer.createTransport({
      host: process.env.SMTP_HOST,
      port: Number(process.env.SMTP_PORT) || 587,
      secure: process.env.SMTP_SECURE === 'true', // true for 465, false for other ports
      auth: {
        user: process.env.SMTP_USER,
        pass: process.env.SMTP_PASSWORD,
      },
    });

    // Format the email content
    const htmlContent = `
      <div style="font-family: sans-serif; max-width: 600px; margin: 0 auto; color: #373737;">
        <h2 style="color: #BF0505; border-bottom: 2px solid #BF0505; padding-bottom: 10px;">New Freight Quote Request</h2>
        
        <h3 style="color: #050505; margin-top: 20px;">Client Information</h3>
        <p><strong>Name:</strong> ${data.name || 'N/A'}</p>
        <p><strong>Company:</strong> ${data.company || 'N/A'}</p>
        <p><strong>Email:</strong> ${data.email || 'N/A'}</p>
        <p><strong>Phone:</strong> ${data.phone || 'N/A'}</p>

        <h3 style="color: #050505; margin-top: 20px;">Service Details</h3>
        <p><strong>Service Type:</strong> ${data.serviceType || 'N/A'}</p>
        <p><strong>Origin:</strong> ${data.origin || 'N/A'}</p>
        <p><strong>Destination:</strong> ${data.destination || 'N/A'}</p>

        <h3 style="color: #050505; margin-top: 20px;">Freight Specifications</h3>
        <p><strong>Freight Type:</strong> ${data.freightType || 'N/A'}</p>
        <p><strong>Weight (lbs):</strong> ${data.weight || 'N/A'}</p>
        <p><strong>Pallet Count:</strong> ${data.palletCount || 'N/A'}</p>

        <h3 style="color: #050505; margin-top: 20px;">Special Requirements</h3>
        <ul style="list-style-type: none; padding-left: 0;">
          <li>${data.tailgateRequired ? '✅ Tailgate Required' : '❌ No Tailgate'}</li>
          <li>${data.appointmentRequired ? '✅ Delivery Appointment Required' : '❌ No Appointment'}</li>
          <li>${data.highValueShipment ? '✅ High-Value / Electronics' : '❌ Standard Value'}</li>
          <li>${data.driverAssistRequired ? '✅ Driver Assist Required' : '❌ No Driver Assist'}</li>
          <li>${data.timeSensitive ? '✅ Time Sensitive / Expedited' : '❌ Standard Transit'}</li>
        </ul>

        <h3 style="color: #050505; margin-top: 20px;">Additional Notes</h3>
        <p style="background-color: #F7F7F7; padding: 15px; border-left: 4px solid #BF0505; border-radius: 4px;">
          ${data.message || 'No additional notes provided.'}
        </p>
      </div>
    `;

    // Send the email
    await transporter.sendMail({
      from: `"Bosco Transport Website" <${process.env.SMTP_USER}>`,
      to: 'connect.haneen@gmail.com',
      subject: `New Quote Request: ${data.company || data.name} - ${data.origin} to ${data.destination}`,
      html: htmlContent,
      replyTo: data.email,
    });

    return NextResponse.json({ success: true, message: 'Email sent successfully' }, { status: 200 });
  } catch (error) {
    console.error('Error sending quote email:', error);
    return NextResponse.json(
      { success: false, message: 'Failed to send email. Please ensure SMTP settings are configured.' },
      { status: 500 }
    );
  }
}
