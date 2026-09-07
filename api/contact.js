// api/contact.js — Vercel Serverless Function
const { Resend } = require('resend');
const resend = new Resend(process.env.RESEND_API_KEY);

// ── Notificación interna a Dani ───────────────────────────────────────────────
function templateNotificacion({ nombre, email, mensaje }) {
  const fecha = new Date().toLocaleString('es-ES', {
    timeZone: 'Europe/Madrid',
    weekday: 'long', year: 'numeric', month: 'long',
    day: 'numeric', hour: '2-digit', minute: '2-digit',
  });

  return `<!DOCTYPE html>
<html lang="es">
<head>
<meta charset="UTF-8"/>
<meta name="viewport" content="width=device-width,initial-scale=1"/>
<link href="https://fonts.googleapis.com/css2?family=Montserrat:wght@400;700;900&display=swap" rel="stylesheet"/>
</head>
<body style="margin:0;padding:0;background:#050505;font-family:'Montserrat',Helvetica,Arial,sans-serif;">
<table width="100%" cellpadding="0" cellspacing="0" style="background:#050505;padding:36px 16px;">
<tr><td align="center">
<table width="620" cellpadding="0" cellspacing="0" style="max-width:620px;width:100%;">

  <!-- TOP GRADIENT BAR -->
  <tr><td style="background:linear-gradient(90deg,#7000ff 0%,#ff2a2a 100%);height:5px;font-size:0;">&nbsp;</td></tr>

  <!-- HEADER -->
  <tr><td style="background:#0a0a0a;padding:44px 48px 36px;border-left:1px solid #161616;border-right:1px solid #161616;">
    <table width="100%" cellpadding="0" cellspacing="0">
      <tr>
        <td>
          <p style="margin:0 0 6px;font-size:9px;font-weight:700;letter-spacing:5px;color:#ff2a2a;text-transform:uppercase;">● Formulario web · ${fecha}</p>
          <h1 style="margin:0;font-size:48px;font-weight:900;color:#ffffff;letter-spacing:-2px;line-height:0.9;text-transform:uppercase;">NUEVO<br/><span style="color:#ff2a2a;">MENSAJE</span></h1>
        </td>
        <td width="60" style="text-align:right;vertical-align:top;">
          <div style="width:48px;height:48px;background:#ff2a2a;border-radius:50%;text-align:center;line-height:48px;font-size:22px;">✉</div>
        </td>
      </tr>
    </table>
  </td></tr>

  <!-- RED LINE -->
  <tr><td style="background:#ff2a2a;height:2px;font-size:0;border-left:1px solid #161616;border-right:1px solid #161616;">&nbsp;</td></tr>

  <!-- REMITENTE -->
  <tr><td style="background:#0d0d0d;padding:36px 48px 0;border-left:1px solid #161616;border-right:1px solid #161616;">
    <p style="margin:0 0 18px;font-size:9px;font-weight:700;letter-spacing:5px;color:#444;text-transform:uppercase;">— Remitente</p>
    <table width="100%" cellpadding="0" cellspacing="0">
      <tr>
        <td style="width:50%;padding-right:8px;vertical-align:top;">
          <table width="100%" cellpadding="0" cellspacing="0">
            <tr><td style="background:#111;border-left:3px solid #ff2a2a;border-top:1px solid #1e1e1e;border-right:1px solid #1e1e1e;border-bottom:1px solid #1e1e1e;padding:18px 20px;">
              <p style="margin:0 0 6px;font-size:9px;font-weight:700;letter-spacing:3px;color:#ff2a2a;text-transform:uppercase;">Nombre</p>
              <p style="margin:0;font-size:19px;font-weight:900;color:#fff;letter-spacing:-0.5px;">${nombre}</p>
            </td></tr>
          </table>
        </td>
        <td style="width:50%;padding-left:8px;vertical-align:top;">
          <table width="100%" cellpadding="0" cellspacing="0">
            <tr><td style="background:#111;border-left:3px solid #7000ff;border-top:1px solid #1e1e1e;border-right:1px solid #1e1e1e;border-bottom:1px solid #1e1e1e;padding:18px 20px;">
              <p style="margin:0 0 6px;font-size:9px;font-weight:700;letter-spacing:3px;color:#7000ff;text-transform:uppercase;">Email</p>
              <a href="mailto:${email}" style="font-size:13px;font-weight:700;color:#fff;text-decoration:none;word-break:break-all;">${email}</a>
            </td></tr>
          </table>
        </td>
      </tr>
    </table>
  </td></tr>

  <!-- MENSAJE -->
  <tr><td style="background:#0d0d0d;padding:28px 48px 36px;border-left:1px solid #161616;border-right:1px solid #161616;">
    <p style="margin:0 0 18px;font-size:9px;font-weight:700;letter-spacing:5px;color:#444;text-transform:uppercase;">— Mensaje</p>
    <table width="100%" cellpadding="0" cellspacing="0">
      <tr><td style="background:#111;border-top:3px solid #ff2a2a;border-left:1px solid #1e1e1e;border-right:1px solid #1e1e1e;border-bottom:1px solid #1e1e1e;padding:28px;">
        <p style="margin:0;font-size:15px;font-weight:400;line-height:1.85;color:#ccc;white-space:pre-wrap;">${mensaje.replace(/</g,'&lt;').replace(/>/g,'&gt;')}</p>
      </td></tr>
    </table>
  </td></tr>

  <!-- CTA -->
  <tr><td style="background:#0a0a0a;padding:0 48px 44px;border-left:1px solid #161616;border-right:1px solid #161616;">
    <a href="mailto:${email}?subject=Re%3A%20Tu%20mensaje%20a%20Dani%20Miralles" style="display:block;background:#ff2a2a;color:#fff;font-family:'Montserrat',Helvetica,Arial,sans-serif;font-size:12px;font-weight:900;letter-spacing:5px;text-transform:uppercase;text-decoration:none;padding:20px;text-align:center;">RESPONDER AHORA →</a>
  </td></tr>

  <!-- BOTTOM GRADIENT -->
  <tr><td style="background:linear-gradient(90deg,#ff2a2a 0%,#7000ff 100%);height:3px;font-size:0;">&nbsp;</td></tr>

  <!-- FOOTER -->
  <tr><td style="background:#050505;padding:22px 48px;border:1px solid #111;border-top:none;">
    <p style="margin:0;font-size:9px;font-weight:700;letter-spacing:4px;color:#222;text-transform:uppercase;text-align:center;">DANI MIRALLES OFICIAL &nbsp;·&nbsp; <a href="https://danimirallesoficial.com" style="color:#333;text-decoration:none;">DANIMIRALLESOFICIAL.COM</a></p>
  </td></tr>

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
</head>
<body style="margin:0;padding:0;background:#050505;font-family:'Montserrat',Helvetica,Arial,sans-serif;">
<table width="100%" cellpadding="0" cellspacing="0" style="background:#050505;padding:36px 16px;">
<tr><td align="center">
<table width="620" cellpadding="0" cellspacing="0" style="max-width:620px;width:100%;">

  <!-- TOP BAR -->
  <tr><td style="background:linear-gradient(90deg,#7000ff 0%,#ff2a2a 100%);height:5px;font-size:0;">&nbsp;</td></tr>

  <!-- HERO -->
  <tr><td style="background:#080808;padding:56px 48px 48px;text-align:center;border-left:1px solid #161616;border-right:1px solid #161616;">
    <p style="margin:0 0 20px;font-size:9px;font-weight:700;letter-spacing:7px;color:#7000ff;text-transform:uppercase;">Rock &amp; Autor</p>
    <h1 style="margin:0;font-size:62px;font-weight:900;color:#fff;letter-spacing:5px;line-height:0.9;text-transform:uppercase;">DANI<br/>MIRALLES</h1>
    <table width="280" cellpadding="0" cellspacing="0" style="margin:28px auto 0;">
      <tr>
        <td style="border-top:1px solid #1e1e1e;"></td>
        <td width="36" style="text-align:center;padding:0 8px;font-size:14px;color:#ff2a2a;">★</td>
        <td style="border-top:1px solid #1e1e1e;"></td>
      </tr>
    </table>
  </td></tr>

  <!-- DIVIDER -->
  <tr><td style="background:#ff2a2a;height:2px;font-size:0;border-left:1px solid #161616;border-right:1px solid #161616;">&nbsp;</td></tr>

  <!-- CUERPO -->
  <tr><td style="background:#0a0a0a;padding:44px 48px;border-left:1px solid #161616;border-right:1px solid #161616;">
    <p style="margin:0 0 10px;font-size:9px;font-weight:700;letter-spacing:5px;color:#ff2a2a;text-transform:uppercase;">● Mensaje recibido</p>
    <h2 style="margin:0 0 28px;font-size:34px;font-weight:900;color:#fff;letter-spacing:-1px;line-height:1;text-transform:uppercase;">GRACIAS,<br/>${nombre.toUpperCase()}</h2>
    <p style="margin:0 0 18px;font-size:15px;font-weight:400;line-height:1.85;color:#888;">He recibido tu mensaje. Me alegra que hayas dado el paso.</p>
    <p style="margin:0 0 36px;font-size:15px;font-weight:400;line-height:1.85;color:#888;">Me pondré en contacto contigo personalmente en cuanto pueda. Si tienes urgencia, escríbeme directamente por cualquiera de estos canales.</p>

    <!-- CONTACTO CARDS -->
    <table width="100%" cellpadding="0" cellspacing="0" style="margin-bottom:0;">
      <tr>
        <td width="49%" style="vertical-align:top;">
          <table width="100%" cellpadding="0" cellspacing="0"><tr>
            <td style="background:#111;border-top:2px solid #ff2a2a;border-left:1px solid #1e1e1e;border-right:1px solid #1e1e1e;border-bottom:1px solid #1e1e1e;padding:20px;">
              <p style="margin:0 0 6px;font-size:9px;font-weight:700;letter-spacing:3px;color:#ff2a2a;text-transform:uppercase;">Email</p>
              <a href="mailto:hola@danimirallesoficial.com" style="font-size:11px;font-weight:700;color:#fff;text-decoration:none;word-break:break-all;">hola@danimirallesoficial.com</a>
            </td>
          </tr></table>
        </td>
        <td width="2%">&nbsp;</td>
        <td width="49%" style="vertical-align:top;">
          <table width="100%" cellpadding="0" cellspacing="0"><tr>
            <td style="background:#111;border-top:2px solid #7000ff;border-left:1px solid #1e1e1e;border-right:1px solid #1e1e1e;border-bottom:1px solid #1e1e1e;padding:20px;">
              <p style="margin:0 0 6px;font-size:9px;font-weight:700;letter-spacing:3px;color:#7000ff;text-transform:uppercase;">WhatsApp</p>
              <a href="https://wa.me/34722735986" style="font-size:14px;font-weight:700;color:#fff;text-decoration:none;">+34 722 73 59 86</a>
            </td>
          </tr></table>
        </td>
      </tr>
    </table>
  </td></tr>

  <!-- REDES -->
  <tr><td style="background:#060606;padding:36px 48px;text-align:center;border-left:1px solid #161616;border-right:1px solid #161616;">
    <p style="margin:0 0 20px;font-size:9px;font-weight:700;letter-spacing:5px;color:#2a2a2a;text-transform:uppercase;">Sígueme en</p>
    <table cellpadding="0" cellspacing="0" style="margin:0 auto;">
      <tr>
        <td style="padding:0 3px;"><a href="https://instagram.com/danimiralles_oficial" style="display:inline-block;background:#ff2a2a;color:#fff;font-family:'Montserrat',Helvetica,Arial,sans-serif;font-size:9px;font-weight:900;letter-spacing:3px;text-transform:uppercase;text-decoration:none;padding:13px 18px;">INSTAGRAM</a></td>
        <td style="padding:0 3px;"><a href="https://youtube.com/@danimirallesmusic" style="display:inline-block;border:1px solid #222;color:#fff;font-family:'Montserrat',Helvetica,Arial,sans-serif;font-size:9px;font-weight:900;letter-spacing:3px;text-transform:uppercase;text-decoration:none;padding:13px 18px;">YOUTUBE</a></td>
        <td style="padding:0 3px;"><a href="https://open.spotify.com/intl-es/artist/6cXCMxpukl1tzsq5monfJR" style="display:inline-block;border:1px solid #222;color:#fff;font-family:'Montserrat',Helvetica,Arial,sans-serif;font-size:9px;font-weight:900;letter-spacing:3px;text-transform:uppercase;text-decoration:none;padding:13px 18px;">SPOTIFY</a></td>
      </tr>
    </table>
  </td></tr>

  <!-- BOTTOM BAR -->
  <tr><td style="background:linear-gradient(90deg,#ff2a2a 0%,#7000ff 100%);height:3px;font-size:0;">&nbsp;</td></tr>

  <!-- FOOTER -->
  <tr><td style="background:#050505;padding:20px 48px;border:1px solid #0e0e0e;border-top:none;">
    <p style="margin:0;font-size:9px;font-weight:700;letter-spacing:4px;color:#1e1e1e;text-transform:uppercase;text-align:center;">© 2025 DANI MIRALLES &nbsp;·&nbsp; <a href="https://danimirallesoficial.com" style="color:#2a2a2a;text-decoration:none;">DANIMIRALLESOFICIAL.COM</a></p>
  </td></tr>

</table>
</td></tr>
</table>
</body>
</html>`;
}

// ── Handler ───────────────────────────────────────────────────────────────────
module.exports = async function handler(req, res) {
  if (req.method !== 'POST') return res.status(405).json({ error: 'Method Not Allowed' });
  const { nombre, email, mensaje } = req.body;
  if (!nombre || !email || !mensaje) return res.status(400).json({ error: 'Faltan campos' });
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
