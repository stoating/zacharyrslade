import type { NextApiRequest, NextApiResponse } from 'next';
import nodemailer from 'nodemailer';

export default async function handler(req: NextApiRequest, res: NextApiResponse) {
  if (req.method === 'POST') {
    const { name, email, message } = req.body;

    const transporter = nodemailer.createTransport({
      host: 'smtp.gmail.com',
      port: 465,
      secure: true,
      auth: {
        user: process.env.EMAIL_USER,
        pass: process.env.EMAIL_PASS,
      },
    });

    const mailOptions = {
      from: email,
      to: process.env.EMAIL_USER,
      subject: `Contact Form Submission from ${name}`,
      text: message,
    };

    try {
      await transporter.sendMail(mailOptions);
      res.status(200).json({ message: 'Email sent successfully' });
    } catch (error) {
      if (error instanceof Error) {
        console.error('Error sending email:', error.message);
        res.status(500).json({ error: 'Error sending email', details: error.message });
      }
      else {
        console.error('Unexpected error:', error);
        res.status(500).json({ error: 'Unexpected error', details: error });
      }
    }
  } else {
    res.status(405).json({ error: 'Method not allowed' });
  }
}