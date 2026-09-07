// api/contact.js — Vercel Serverless Function
const { Resend } = require('resend');

const resend = new Resend(process.env.RESEND_API_KEY);

function templateNotificacion({ nombre, email, mensaje }) {
  const fecha = new Date().toLocaleString('es-ES', {
    timeZone: 'Europe/Madrid',
    weekday: 'long', year: 'numeric', month: 'long', day: 'numeric',
    hour: '2-digit', minute: '2-digit',
  });

  return `<!DOCTYPE html>
<html lang="es">
<head><meta charset="UTF-8"/><meta name="viewport" content="width=device-width, initial-scale=1.0"/></head>
<body style="margin:0;padding:0;background:#0d0d0d;font-family:'Helvetica Neue',Helvetica,Arial,sans-serif;">
  <table width="100%" cellpadding="0" cellspacing="0" style="background:#0d0d0d;padding:40px 20px;">
    <tr><td align="center">
      <table width="600" cellpadding="0" cellspacing="0" style="max-width:600px;width:100%;">

        <tr>
          <td style="background:linear-gradient(135deg,#1a0a00 0%,#2d1200 50%,#1a0a00 100%);border-radius:12px 12px 0 0;padding:40px 40px 30px;text-align:center;border-bottom:3px solid #C9A84C;">
            <p style="margin:0 0 8px;font-size:11px;letter-spacing:4px;color:#C9A84C;text-transform:uppercase;">Dani Miralles Oficial</p>
            <h1 style="margin:0;font-size:28px;font-weight:900;color:#ffffff;">Nuevo mensaje recibido</h1>
            <p style="margin:12px 0 0;font-size:13px;color:#888;font-style:italic;">${fecha}</p>
          </td>
        </tr>

        <tr>
          <td style="background:#141414;padding:40px;">
            <p style="margin:0 0 24px;text-align:center;">
              <span style="display:inline-block;background:#C9A84C;color:#0d0d0d;font-size:11px;font-weight:700;letter-spacing:3px;text-transform:uppercase;padding:6px 20px;border-radius:20px;">📬 Formulario web</span>
            </p>
            <table width="100%" cellpadding="0" cellspacing="0" style="margin-bottom:28px;">
              <tr>
                <td style="padding:16px 20px;background:#1e1e1e;border-radius:8px 8px 0 0;border-left:3px solid #C9A84C;">
                  <p style="margin:0 0 4px;font-size:11px;letter-spacing:2px;color:#888;text-transform:uppercase;">Nombre</p>
                  <p style="margin:0;font-size:18px;font-weight:700;color:#ffffff;">${nombre}</p>
                </td>
              </tr>
              <tr><td style="padding:1px 0;background:#0d0d0d;"></td></tr>
              <tr>
                <td style="padding:16px 20px;background:#1e1e1e;border-radius:0 0 8px 8px;border-left:3px solid #C9A84C;">
                  <p style="margin:0 0 4px;font-size:11px;letter-spacing:2px;color:#888;text-transform:uppercase;">Email</p>
                  <a href="mailto:${email}" style="margin:0;font-size:16px;font-weight:600;color:#C9A84C;text-decoration:none;">${email}</a>
                </td>
              </tr>
            </table>
            <div style="margin-bottom:32px;">
              <p style="margin:0 0 12px;font-size:11px;letter-spacing:2px;color:#888;text-transform:uppercase;">Mensaje</p>
              <div style="background:#1a1a1a;border:1px solid #2a2a2a;border-left:3px solid #C9A84C;border-radius:8px;padding:20px 24px;">
                <p style="margin:0;font-size:15px;line-height:1.7;color:#cccccc;white-space:pre-wrap;">${mensaje.replace(/</g, '&lt;').replace(/>/g, '&gt;')}</p>
              </div>
            </div>
            <table width="100%" cellpadding="0" cellspacing="0">
              <tr><td align="center">
                <a href="mailto:${email}?subject=Re: Tu mensaje a Dani Miralles" style="display:inline-block;background:linear-gradient(135deg,#C9A84C,#e8c96a);color:#0d0d0d;font-size:14px;font-weight:700;letter-spacing:2px;text-transform:uppercase;text-decoration:none;padding:14px 36px;border-radius:8px;">Responder ahora →</a>
              </td></tr>
            </table>
          </td>
        </tr>

        <tr>
          <td style="background:#0a0a0a;border-radius:0 0 12px 12px;padding:24px 40px;text-align:center;border-top:1px solid #222;">
            <p style="margin:0;font-size:12px;color:#555;">Generado automáticamente desde <a href="https://danimirallesoficial.com" style="color:#C9A84C;text-decoration:none;">danimirallesoficial.com</a></p>
          </td>
        </tr>

      </table>
    </td></tr>
  </table>
</body>
</html>`;
}

function templateConfirmacion({ nombre }) {
  return `<!DOCTYPE html>
<html lang="es">
<head><meta charset="UTF-8"/><meta name="viewport" content="width=device-width, initial-scale=1.0"/></head>
<body style="margin:0;padding:0;background:#0d0d0d;font-family:'Helvetica Neue',Helvetica,Arial,sans-serif;">
  <table width="100%" cellpadding="0" cellspacing="0" style="background:#0d0d0d;padding:40px 20px;">
    <tr><td align="center">
      <table width="600" cellpadding="0" cellspacing="0" style="max-width:600px;width:100%;">

        <tr>
          <td style="background:linear-gradient(135deg,#1a0a00 0%,#2d1200 60%,#1a0a00 100%);border-radius:12px 12px 0 0;padding:48px 40px 36px;text-align:center;border-bottom:3px solid #C9A84C;">
            <p style="margin:0 0 6px;font-size:11px;letter-spacing:5px;color:#C9A84C;text-transform:uppercase;">Rock &amp; Autor</p>
            <h1 style="margin:0;font-size:36px;font-weight:900;color:#ffffff;letter-spacing:2px;text-transform:uppercase;">Dani Miralles</h1>
            <p style="margin:16px 0 0;font-size:13px;color:#aaa;font-style:italic;">danimirallesoficial.com</p>
          </td>
        </tr>

        <tr>
          <td style="background:#141414;padding:48px 40px 36px;">
            <h2 style="margin:0 0 20px;font-size:22px;font-weight:700;color:#ffffff;">¡Gracias, ${nombre}! 🎸</h2>
            <p style="margin:0 0 16px;font-size:15px;line-height:1.8;color:#cccccc;">He recibido tu mensaje y me alegra que hayas dado el paso. En cuanto pueda me pondré en contacto contigo personalmente.</p>
            <p style="margin:0 0 32px;font-size:15px;line-height:1.8;color:#cccccc;">Mientras tanto, si tienes alguna urgencia no dudes en escribirme directamente o llamarme.</p>
            <table width="100%" cellpadding="0" cellspacing="0" style="margin-bottom:32px;">
              <tr><td style="border-top:1px solid #2a2a2a;"></td></tr>
            </table>
            <table width="100%" cellpadding="0" cellspacing="0" style="margin-bottom:36px;">
              <tr>
                <td width="50%" style="padding:0 8px 0 0;vertical-align:top;">
                  <div style="background:#1e1e1e;border-radius:8px;padding:20px;border-top:2px solid #C9A84C;">
                    <p style="margin:0 0 6px;font-size:10px;letter-spacing:2px;color:#C9A84C;text-transform:uppercase;">Email</p>
                    <a href="mailto:hola@danimirallesoficial.com" style="font-size:13px;color:#ffffff;text-decoration:none;">hola@danimirallesoficial.com</a>
                  </div>
                </td>
                <td width="50%" style="padding:0 0 0 8px;vertical-align:top;">
                  <div style="background:#1e1e1e;border-radius:8px;padding:20px;border-top:2px solid #C9A84C;">
                    <p style="margin:0 0 6px;font-size:10px;letter-spacing:2px;color:#C9A84C;text-transform:uppercase;">WhatsApp</p>
                    <a href="https://wa.me/34722735986" style="font-size:13px;color:#ffffff;text-decoration:none;">+34 722 73 59 86</a>
                  </div>
                </td>
              </tr>
            </table>
            <p style="margin:0 0 16px;text-align:center;font-size:12px;letter-spacing:2px;color:#666;text-transform:uppercase;">Sígueme en</p>
            <table width="100%" cellpadding="0" cellspacing="0">
              <tr><td align="center">
                <a href="https://instagram.com/danimiralles_oficial" style="display:inline-block;margin:0 8px;background:#1e1e1e;color:#ffffff;font-size:12px;font-weight:600;letter-spacing:1px;text-transform:uppercase;text-decoration:none;padding:10px 18px;border-radius:6px;">Instagram</a>
                <a href="https://youtube.com/@danimirallesmusic" style="display:inline-block;margin:0 8px;background:#1e1e1e;color:#ffffff;font-size:12px;font-weight:600;letter-spacing:1px;text-transform:uppercase;text-decoration:none;padding:10px 18px;border-radius:6px;">YouTube</a>
                <a href="https://open.spotify.com/intl-es/artist/6cXCMxpukl1tzsq5monfJR" style="display:inline-block;margin:0 8px;background:#1e1e1e;color:#ffffff;font-size:12px;font-weight:600;letter-spacing:1px;text-transform:uppercase;text-decoration:none;padding:10px 18px;border-radius:6px;">Spotify</a>
              </td></tr>
            </table>
          </td>
        </tr>

        <tr>
          <td style="background:#0a0a0a;border-radius:0 0 12px 12px;padding:24px 40px;text-align:center;border-top:1px solid #222;">
            <p style="margin:0;font-size:12px;color:#444;">© 2025 Dani Miralles · <a href="https://danimirallesoficial.com" style="color:#C9A84C;text-decoration:none;">danimirallesoficial.com</a></p>
          </td>
        </tr>

      </table>
    </td></tr>
  </table>
</body>
</html>`;
}

module.exports = async function handler(req, res) {
  if (req.method !== 'POST') {
    return res.status(405).json({ error: 'Method Not Allowed' });
  }

  const { nombre, email, mensaje } = req.body;

  if (!nombre || !email || !mensaje) {
    return res.status(400).json({ error: 'Faltan campos obligatorios' });
  }

  try {
    await resend.emails.send({
      from: 'Web Dani Miralles <hola@danimirallesoficial.com>',
      to: ['hola@danimirallesoficial.com'],
      replyTo: email,
      subject: `✉️ Nuevo mensaje de ${nombre}`,
      html: templateNotificacion({ nombre, email, mensaje }),
    });

    await resend.emails.send({
      from: 'Dani Miralles <hola@danimirallesoficial.com>',
      to: [email],
      subject: `¡Gracias por escribir, ${nombre}!`,
      html: templateConfirmacion({ nombre }),
    });

    return res.status(200).json({ ok: true });
  } catch (error) {
    console.error('Resend error:', error);
    return res.status(500).json({ error: error.message });
  }
};
