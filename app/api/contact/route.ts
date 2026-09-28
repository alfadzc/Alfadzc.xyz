import { NextResponse } from "next/server";
import { Resend } from "resend";

// ─────────────────────────────────────────────────────────────
// CONFIGURATION
// ─────────────────────────────────────────────────────────────

// Initialize Resend (Email)
const resend = process.env.RESEND_API_KEY
  ? new Resend(process.env.RESEND_API_KEY)
  : null;

const CONTACT_EMAIL_TO = process.env.CONTACT_EMAIL_TO || "contact@alfadzc.xyz";
const CONTACT_EMAIL_FROM = process.env.CONTACT_EMAIL_FROM || "Alfadzc <onboarding@resend.dev>";

// Discord Webhook
const DISCORD_WEBHOOK_URL = process.env.DISCORD_WEBHOOK_URL || "";

// X (Twitter) API v2
const X_API_BASE = "https://api.x.com/2";
const X_USER_ACCESS_TOKEN = process.env.X_USER_ACCESS_TOKEN || "";
const X_RECIPIENT_ID = process.env.X_RECIPIENT_ID || ""; // User ID penerima DM

// ─────────────────────────────────────────────────────────────
// TYPES
// ─────────────────────────────────────────────────────────────

interface ContactPayload {
  name: string;
  email: string;
  subject: string;
  message: string;
}

// ─────────────────────────────────────────────────────────────
// VALIDATION
// ─────────────────────────────────────────────────────────────

function validatePayload(body: ContactPayload): string | null {
  if (!body.name || !body.email || !body.subject || !body.message) {
    return "Semua field wajib diisi";
  }

  const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
  if (!emailRegex.test(body.email)) {
    return "Format email tidak valid";
  }

  if (body.message.length > 5000) {
    return "Pesan terlalu panjang (maksimal 5000 karakter)";
  }

  return null;
}

// ─────────────────────────────────────────────────────────────
// SEND EMAIL (via Resend)
// ─────────────────────────────────────────────────────────────

async function sendEmail(payload: ContactPayload): Promise<boolean> {
  if (!resend) {
    console.warn("⚠️ Resend API key not set, skipping email");
    return false;
  }

  try {
    const { data, error } = await resend.emails.send({
      from: CONTACT_EMAIL_FROM,
      to: [CONTACT_EMAIL_TO],
      replyTo: payload.email,
      subject: `[Contact] ${payload.subject}`,
      html: `
        <div style="font-family: Arial, sans-serif; max-width: 600px; margin: 0 auto; padding: 20px; background: #f9f9f9; border-radius: 8px;">
          <div style="background: linear-gradient(135deg, #ff7b00 0%, #e66a00 100%); padding: 20px; border-radius: 8px 8px 0 0; text-align: center;">
            <h1 style="color: #ffffff; margin: 0; font-size: 22px;">📩 New Contact Message</h1>
          </div>
          
          <div style="background: #ffffff; padding: 24px; border-radius: 0 0 8px 8px;">
            <table style="width: 100%; border-collapse: collapse;">
              <tr>
                <td style="padding: 8px 0; font-weight: bold; color: #555; width: 100px;">Nama</td>
                <td style="padding: 8px 0; color: #333;">${payload.name}</td>
              </tr>
              <tr>
                <td style="padding: 8px 0; font-weight: bold; color: #555;">Email</td>
                <td style="padding: 8px 0; color: #333;">
                  <a href="mailto:${payload.email}" style="color: #ff7b00;">${payload.email}</a>
                </td>
              </tr>
              <tr>
                <td style="padding: 8px 0; font-weight: bold; color: #555;">Subjek</td>
                <td style="padding: 8px 0; color: #333;">${payload.subject}</td>
              </tr>
            </table>

            <hr style="border: none; border-top: 1px solid #eee; margin: 20px 0;" />

            <h3 style="color: #555; font-size: 14px; margin-bottom: 8px;">Pesan:</h3>
            <div style="background: #f5f5f5; padding: 16px; border-radius: 6px; color: #333; line-height: 1.6; white-space: pre-wrap;">${payload.message}</div>

            <p style="color: #999; font-size: 12px; margin-top: 20px; text-align: center;">
              Dikirim dari form contact di <strong>alfadzc.xyz</strong>
            </p>
          </div>
        </div>
      `,
    });

    if (error) {
      console.error("❌ Resend error:", error);
      return false;
    }

    console.log("✅ Email sent:", data?.id);
    return true;
  } catch (err) {
    console.error("❌ Email exception:", err);
    return false;
  }
}

// ─────────────────────────────────────────────────────────────
// SEND DISCORD WEBHOOK
// ─────────────────────────────────────────────────────────────

async function sendDiscord(payload: ContactPayload): Promise<boolean> {
  if (!DISCORD_WEBHOOK_URL) {
    console.warn("⚠️ Discord webhook URL not set, skipping");
    return false;
  }

  try {
    const discordMessage = {
      username: "Alfadzc Contact Form",
      avatar_url: "https://alfadzc.xyz/logo.png",
      embeds: [
        {
          title: "📩 New Contact Message",
          color: 0xff7b00,
          fields: [
            { name: "👤 Nama", value: payload.name, inline: true },
            { name: "📧 Email", value: payload.email, inline: true },
            { name: "📝 Subjek", value: payload.subject, inline: false },
            { name: "💬 Pesan", value: payload.message, inline: false },
          ],
          footer: {
            text: "alfadzc.xyz • Contact Form",
          },
          timestamp: new Date().toISOString(),
        },
      ],
    };

    const res = await fetch(DISCORD_WEBHOOK_URL, {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(discordMessage),
    });

    if (!res.ok) {
      const errorText = await res.text();
      console.error("❌ Discord API error:", errorText);
      return false;
    }

    console.log("✅ Discord message sent");
    return true;
  } catch (err) {
    console.error("❌ Discord exception:", err);
    return false;
  }
}

// ─────────────────────────────────────────────────────────────
// SEND X (TWITTER) DM
// ─────────────────────────────────────────────────────────────

async function sendXDM(payload: ContactPayload): Promise<boolean> {
  if (!X_USER_ACCESS_TOKEN || !X_RECIPIENT_ID) {
    console.warn("⚠️ X API credentials not set, skipping DM");
    return false;
  }

  try {
    const dmText =
      `📩 New Contact Message\n\n` +
      `👤 Nama: ${payload.name}\n` +
      `📧 Email: ${payload.email}\n` +
      `📝 Subjek: ${payload.subject}\n\n` +
      `💬 Pesan:\n${payload.message}`;

    // Batasi panjang teks (X DM limit ~10,000 karakter)
    const truncatedText = dmText.length > 9000 ? dmText.slice(0, 9000) + "..." : dmText;

    const res = await fetch(
      `${X_API_BASE}/dm_conversations/with/${X_RECIPIENT_ID}/messages`,
      {
        method: "POST",
        headers: {
          Authorization: `Bearer ${X_USER_ACCESS_TOKEN}`,
          "Content-Type": "application/json",
        },
        body: JSON.stringify({ text: truncatedText }),
      }
    );

    if (!res.ok) {
      const errorText = await res.text();
      console.error("❌ X DM API error:", errorText);
      return false;
    }

    const data = await res.json();
    console.log("✅ X DM sent:", data?.data?.dm_event_id);
    return true;
  } catch (err) {
    console.error("❌ X DM exception:", err);
    return false;
  }
}

// ─────────────────────────────────────────────────────────────
// API HANDLER
// ─────────────────────────────────────────────────────────────

export async function POST(req: Request) {
  try {
    const body: ContactPayload = await req.json();

    // 1. Validasi
    const validationError = validatePayload(body);
    if (validationError) {
      return NextResponse.json({ error: validationError }, { status: 400 });
    }

    // 2. Kirim ke semua channel secara paralel
    const [emailOk, discordOk, xOk] = await Promise.all([
      sendEmail(body),
      sendDiscord(body),
      sendXDM(body),
    ]);

    // 3. Log status
    console.log("📊 Contact form results:", {
      email: emailOk ? "✅" : "❌",
      discord: discordOk ? "✅" : "❌",
      x: xOk ? "✅" : "❌",
    });

    // 4. Minimal satu channel harus berhasil
    if (!emailOk && !discordOk && !xOk) {
      return NextResponse.json(
        { error: "Gagal mengirim pesan. Silakan coba lagi nanti." },
        { status: 500 }
      );
    }

    // 5. Return success (walaupun ada channel yang gagal)
    return NextResponse.json(
      {
        success: true,
        message: "Pesan berhasil dikirim",
        channels: {
          email: emailOk,
          discord: discordOk,
          x: xOk,
        },
      },
      { status: 200 }
    );
  } catch (error) {
    console.error("❌ Contact API fatal error:", error);
    return NextResponse.json(
      { error: "Terjadi kesalahan server" },
      { status: 500 }
    );
  }
}
