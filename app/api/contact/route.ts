import { NextResponse } from "next/server";
import { Resend } from "resend";

const resend = new Resend(process.env.RESEND_API_KEY);

export async function POST(req: Request) {
  try {
    const body = await req.json();
    const { name, email, subject, message } = body;

    if (!name || !email || !subject || !message) {
      return NextResponse.json({ error: "All fields are required" }, { status: 400 });
    }

    // Mengirim email via Resend
    const { data, error } = await resend.emails.send({
      from: "Contact Form <contact@alfadzc.xyz>", // Ganti ke email domainmu jika sudah verifikasi
      to: ["alfadzcom@gmail.com"], // GANTI INI dengan email tujuan yang terdaftar di Resend
      replyTo: email,
      subject: `[Contact] ${subject}`,
      html: `
        <h2>Pesan Baru dari ${name}</h2>
        <p><strong>Email:</strong> ${email}</p>
        <p><strong>Subjek:</strong> ${subject}</p>
        <p><strong>Pesan:</strong></p>
        <p>${message.replace(/\n/g, "<br>")}</p>
      `,
    });

    if (error) {
      console.error("Resend Error:", error);
      return NextResponse.json({ error: error.message }, { status: 500 });
    }

    console.log("📩 Email Sent via Resend:", data?.id);
    return NextResponse.json({ success: true, message: "Message sent successfully", id: data?.id });
  } catch (error) {
    console.error("Contact API Error:", error);
    return NextResponse.json({ error: "Internal Server Error" }, { status: 500 });
  }
}
