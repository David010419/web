// api/contact.js — Vercel Serverless Function
const { Resend } = require('resend');

const resend = new Resend(process.env.RESEND_API_KEY);

// ── Notificación interna a Dani ───────────────────────────────────────────────
function templateNotificacion({ nombre, email, mensaje }) {
  const fecha = new Date().toLocaleString('es-ES', {
    timeZone: 'Europe/Madrid',
    weekday: 'long', year: 'numeric', month: 'long', day: 'numeric',
    hour: '2-digit', minute: '2-digit',
  });

  return `<!DOCTYPE html>
<html lang="es">
<head>
  <meta charset="UTF-8"/>
  <meta name="viewport" content="width=device-width,initial-scale=1"/>
  <link href="https://fonts.googleapis.com/css2?family=Montserrat:wght@400;700;900&display=swap" rel="stylesheet"/>
  <title>Nuevo mensaje</title>
</head>
<body style="margin:0;padding:0;background:#050505;font-family:'Montserrat',Arial,sans-serif;">

  <table width="100%" cellpadding="0" cellspacing="0" style="background:#050505;padding:32px 16px;">
    <tr><td align="center">
    <table width="600" cellpadding="0" cellspacing="0" style="max-width:600px;width:100%;">

      <!-- BARRA SUPERIOR ROJA -->
      <tr>
        <td style="background:#ff2a2a;height:4px;font-size:0;line-height:0;">&nbsp;</td>
      </tr>

      <!-- HEADER -->
      <tr>
        <td style="background:#0a0a0a;padding:40px 40px 32px;border-left:1px solid #1a1a1a;border-right:1px solid #1a1a1a;">
          <p style="margin:0 0 16px;font-size:10px;font-weight:700;letter-spacing:5px;color:#ff2a2a;text-transform:uppercase;">● DANIMIRALLESOFICIAL.COM</p>
          <h1 style="margin:0;font-size:42px;font-weight:900;color:#ffffff;letter-spacing:-1px;line-height:1;text-transform:uppercase;">NUEVO<br/>MENSAJE</h1>
          <p style="margin:16px 0 0;font-size:11px;color:#444;letter-spacing:2px;text-transform:uppercase;">${fecha}</p>
        </td>
      </tr>

      <!-- LÍNEA DIVISORIA -->
      <tr>
        <td style="background:#ff2a2a;height:2px;font-size:0;line-height:0;border-left:1px solid #1a1a1a;border-right:1px solid #1a1a1a;">&nbsp;</td>
      </tr>

      <!-- DATOS DEL REMITENTE -->
      <tr>
        <td style="background:#0d0d0d;padding:32px 40px 0;border-left:1px solid #1a1a1a;border-right:1px solid #1a1a1a;">
          <p style="margin:0 0 20px;font-size:10px;font-weight:700;letter-spacing:4px;color:#555;text-transform:uppercase;">Remitente</p>
          <table width="100%" cellpadding="0" cellspacing="0">
            <tr>
              <td style="background:#111;border:1px solid #1e1e1e;border-left:3px solid #ff2a2a;padding:20px 24px;margin-bottom:2px;">
                <p style="margin:0 0 4px;font-size:9px;font-weight:700;letter-spacing:3px;color:#ff2a2a;text-transform:uppercase;">Nombre</p>
                <p style="margin:0;font-size:20px;font-weight:900;color:#fff;letter-spacing:-0.5px;">${nombre}</p>
              </td>
            </tr>
            <tr><td style="height:2px;background:#050505;font-size:0;">&nbsp;</td></tr>
            <tr>
              <td style="background:#111;border:1px solid #1e1e1e;border-left:3px solid #7000ff;padding:20px 24px;">
                <p style="margin:0 0 4px;font-size:9px;font-weight:700;letter-spacing:3px;color:#7000ff;text-transform:uppercase;">Email</p>
                <a href="mailto:${email}" style="margin:0;font-size:16px;font-weight:700;color:#fff;text-decoration:none;letter-spacing:0.5px;">${email}</a>
              </td>
            </tr>
          </table>
        </td>
      </tr>

      <!-- MENSAJE -->
      <tr>
        <td style="background:#0d0d0d;padding:24px 40px 32px;border-left:1px solid #1a1a1a;border-right:1px solid #1a1a1a;">
          <p style="margin:0 0 16px;font-size:10px;font-weight:700;letter-spacing:4px;color:#555;text-transform:uppercase;">Mensaje</p>
          <table width="100%" cellpadding="0" cellspacing="0">
            <tr>
              <td style="background:#111;border:1px solid #1e1e1e;border-top:3px solid #ff2a2a;padding:24px;">
                <p style="margin:0;font-size:15px;line-height:1.8;color:#ccc;font-weight:400;white-space:pre-wrap;">${mensaje.replace(/</g, '&lt;').replace(/>/g, '&gt;')}</p>
              </td>
            </tr>
          </table>
        </td>
      </tr>

      <!-- CTA -->
      <tr>
        <td style="background:#0d0d0d;padding:0 40px 40px;border-left:1px solid #1a1a1a;border-right:1px solid #1a1a1a;">
          <table width="100%" cellpadding="0" cellspacing="0">
            <tr>
              <td>
                <a href="mailto:${email}?subject=Re%3A Tu mensaje a Dani Miralles" style="display:block;background:#ff2a2a;color:#fff;font-size:13px;font-weight:900;letter-spacing:4px;text-transform:uppercase;text-decoration:none;padding:18px 36px;text-align:center;">RESPONDER AHORA →</a>
              </td>
            </tr>
          </table>
        </td>
      </tr>

      <!-- BARRA INFERIOR -->
      <tr>
        <td style="background:linear-gradient(90deg,#ff2a2a,#7000ff);height:3px;font-size:0;line-height:0;">&nbsp;</td>
      </tr>

      <!-- FOOTER -->
      <tr>
        <td style="background:#050505;padding:24px 40px;text-align:center;border:1px solid #111;border-top:none;">
          <p style="margin:0;font-size:11px;font-weight:700;letter-spacing:3px;color:#333;text-transform:uppercase;">DANI MIRALLES OFICIAL · <a href="https://danimirallesoficial.com" style="color:#ff2a2a;text-decoration:none;">danimirallesoficial.com</a></p>
        </td>
      </tr>

    </table>
    </td></tr>
  </table>

</body>
</html>`;
}

// ── Confirmación al remitente ─────────────────────────────────────────────────
function templateConfirmacion({ nombre }) {
  return `<!DOCTYPE html>
<html lang="es">
<head>
  <meta charset="UTF-8"/>
  <meta name="viewport" content="width=device-width,initial-scale=1"/>
  <link href="https://fonts.googleapis.com/css2?family=Montserrat:wght@400;700;900&family=Permanent+Marker&display=swap" rel="stylesheet"/>
  <title>Mensaje recibido</title>
</head>
<body style="margin:0;padding:0;background:#050505;font-family:'Montserrat',Arial,sans-serif;">

  <table width="100%" cellpadding="0" cellspacing="0" style="background:#050505;padding:32px 16px;">
    <tr><td align="center">
    <table width="600" cellpadding="0" cellspacing="0" style="max-width:600px;width:100%;">

      <!-- BARRA SUPERIOR -->
      <tr>
        <td style="background:linear-gradient(90deg,#7000ff,#ff2a2a);height:4px;font-size:0;line-height:0;">&nbsp;</td>
      </tr>

      <!-- HERO HEADER -->
      <tr>
        <td style="background:#080808;padding:48px 40px 40px;text-align:center;border-left:1px solid #1a1a1a;border-right:1px solid #1a1a1a;">
          <p style="margin:0 0 12px;font-size:10px;font-weight:700;letter-spacing:6px;color:#7000ff;text-transform:uppercase;">Rock &amp; Autor</p>
          <h1 style="margin:0;font-size:52px;font-weight:900;color:#ffffff;letter-spacing:3px;line-height:1;text-transform:uppercase;">DANI<br/>MIRALLES</h1>
          <table width="100%" cellpadding="0" cellspacing="0" style="margin-top:20px;">
            <tr>
              <td style="border-top:1px solid #1a1a1a;"></td>
              <td width="40" style="padding:0 12px;text-align:center;">
                <span style="font-size:16px;color:#ff2a2a;">✦</span>
              </td>
              <td style="border-top:1px solid #1a1a1a;"></td>
            </tr>
          </table>
        </td>
      </tr>

      <!-- MENSAJE PRINCIPAL -->
      <tr>
        <td style="background:#0a0a0a;padding:40px 40px 32px;border-left:1px solid #1a1a1a;border-right:1px solid #1a1a1a;">
          <p style="margin:0 0 8px;font-size:10px;font-weight:700;letter-spacing:4px;color:#ff2a2a;text-transform:uppercase;">● Mensaje recibido</p>
          <h2 style="margin:0 0 24px;font-size:28px;font-weight:900;color:#fff;letter-spacing:-0.5px;text-transform:uppercase;">GRACIAS,<br/>${nombre.toUpperCase()}</h2>
          <p style="margin:0 0 16px;font-size:15px;line-height:1.8;color:#999;font-weight:400;">He recibido tu mensaje. Me alegra que hayas dado el paso y me lo hayas hecho llegar directamente.</p>
          <p style="margin:0;font-size:15px;line-height:1.8;color:#999;font-weight:400;">Me pondré en contacto contigo personalmente en cuanto pueda. Si tienes urgencia, escríbeme directamente.</p>
        </td>
      </tr>

      <!-- LÍNEA -->
      <tr>
        <td style="background:#ff2a2a;height:2px;font-size:0;border-left:1px solid #1a1a1a;border-right:1px solid #1a1a1a;">&nbsp;</td>
      </tr>

      <!-- CONTACTO DIRECTO -->
      <tr>
        <td style="background:#0a0a0a;padding:32px 40px;border-left:1px solid #1a1a1a;border-right:1px solid #1a1a1a;">
          <p style="margin:0 0 20px;font-size:10px;font-weight:700;letter-spacing:4px;color:#555;text-transform:uppercase;">Contacto directo</p>
          <table width="100%" cellpadding="0" cellspacing="0">
            <tr>
              <td width="49%" style="vertical-align:top;">
                <table width="100%" cellpadding="0" cellspacing="0">
                  <tr>
                    <td style="background:#111;border:1px solid #1e1e1e;border-top:2px solid #ff2a2a;padding:18px 20px;">
                      <p style="margin:0 0 4px;font-size:9px;font-weight:700;letter-spacing:3px;color:#ff2a2a;text-transform:uppercase;">Email</p>
                      <a href="mailto:hola@danimirallesoficial.com" style="font-size:11px;font-weight:700;color:#fff;text-decoration:none;word-break:break-all;">hola@danimirallesoficial.com</a>
                    </td>
                  </tr>
                </table>
              </td>
              <td width="2%">&nbsp;</td>
              <td width="49%" style="vertical-align:top;">
                <table width="100%" cellpadding="0" cellspacing="0">
                  <tr>
                    <td style="background:#111;border:1px solid #1e1e1e;border-top:2px solid #7000ff;padding:18px 20px;">
                      <p style="margin:0 0 4px;font-size:9px;font-weight:700;letter-spacing:3px;color:#7000ff;text-transform:uppercase;">WhatsApp</p>
                      <a href="https://wa.me/34722735986" style="font-size:11px;font-weight:700;color:#fff;text-decoration:none;">+34 722 73 59 86</a>
                    </td>
                  </tr>
                </table>
              </td>
            </tr>
          </table>
        </td>
      </tr>

      <!-- REDES SOCIALES -->
      <tr>
        <td style="background:#080808;padding:28px 40px;text-align:center;border-left:1px solid #1a1a1a;border-right:1px solid #1a1a1a;">
          <p style="margin:0 0 16px;font-size:9px;font-weight:700;letter-spacing:4px;color:#333;text-transform:uppercase;">Sígueme</p>
          <table cellpadding="0" cellspacing="0" style="margin:0 auto;">
            <tr>
              <td style="padding:0 4px;">
                <a href="https://instagram.com/danimiralles_oficial" style="display:inline-block;border:1px solid #2a2a2a;color:#fff;font-size:10px;font-weight:900;letter-spacing:2px;text-transform:uppercase;text-decoration:none;padding:10px 16px;">INSTAGRAM</a>
              </td>
              <td style="padding:0 4px;">
                <a href="https://youtube.com/@danimirallesmusic" style="display:inline-block;border:1px solid #2a2a2a;color:#fff;font-size:10px;font-weight:900;letter-spacing:2px;text-transform:uppercase;text-decoration:none;padding:10px 16px;">YOUTUBE</a>
              </td>
              <td style="padding:0 4px;">
                <a href="https://open.spotify.com/intl-es/artist/6cXCMxpukl1tzsq5monfJR" style="display:inline-block;border:1px solid #2a2a2a;color:#fff;font-size:10px;font-weight:900;letter-spacing:2px;text-transform:uppercase;text-decoration:none;padding:10px 16px;">SPOTIFY</a>
              </td>
            </tr>
          </table>
        </td>
      </tr>

      <!-- BARRA INFERIOR -->
      <tr>
        <td style="background:linear-gradient(90deg,#ff2a2a,#7000ff);height:3px;font-size:0;line-height:0;">&nbsp;</td>
      </tr>

      <!-- FOOTER -->
      <tr>
        <td style="background:#050505;padding:20px 40px;text-align:center;border:1px solid #111;border-top:none;">
          <p style="margin:0;font-size:10px;font-weight:700;letter-spacing:3px;color:#2a2a2a;text-transform:uppercase;">© 2025 DANI MIRALLES · <a href="https://danimirallesoficial.com" style="color:#333;text-decoration:none;">DANIMIRALLESOFICIAL.COM</a></p>
        </td>
      </tr>

    </table>
    </td></tr>
  </table>

</body>
</html>`;
}

// ── Handler ───────────────────────────────────────────────────────────────────
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
      subject: `DANI MIRALLES — Mensaje recibido`,
      html: templateConfirmacion({ nombre }),
    });

    return res.status(200).json({ ok: true });
  } catch (error) {
    console.error('Resend error:', error);
    return res.status(500).json({ error: error.message });
  }
};
