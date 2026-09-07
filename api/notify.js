// api/notify.js — Vercel Serverless Function
const { Resend } = require('resend');

const resend = new Resend(process.env.RESEND_API_KEY);

// ── Aviso interno a Dani ──────────────────────────────────────────────────────
function templateAvisoInterno({ email }) {
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
  <title>Nueva suscripción</title>
</head>
<body style="margin:0;padding:0;background:#050505;font-family:'Montserrat',Arial,sans-serif;">

  <table width="100%" cellpadding="0" cellspacing="0" style="background:#050505;padding:32px 16px;">
    <tr><td align="center">
    <table width="600" cellpadding="0" cellspacing="0" style="max-width:600px;width:100%;">

      <tr>
        <td style="background:linear-gradient(90deg,#7000ff,#ff2a2a);height:4px;font-size:0;">&nbsp;</td>
      </tr>

      <tr>
        <td style="background:#0a0a0a;padding:40px 40px 32px;border-left:1px solid #1a1a1a;border-right:1px solid #1a1a1a;">
          <p style="margin:0 0 16px;font-size:10px;font-weight:700;letter-spacing:5px;color:#7000ff;text-transform:uppercase;">● LISTA DE ESPERA</p>
          <h1 style="margin:0;font-size:38px;font-weight:900;color:#ffffff;letter-spacing:-1px;line-height:1;text-transform:uppercase;">NUEVA<br/>SUSCRIPCIÓN</h1>
          <p style="margin:16px 0 0;font-size:11px;color:#444;letter-spacing:2px;text-transform:uppercase;">${fecha}</p>
        </td>
      </tr>

      <tr>
        <td style="background:#7000ff;height:2px;font-size:0;border-left:1px solid #1a1a1a;border-right:1px solid #1a1a1a;">&nbsp;</td>
      </tr>

      <tr>
        <td style="background:#0d0d0d;padding:32px 40px 40px;border-left:1px solid #1a1a1a;border-right:1px solid #1a1a1a;">
          <p style="margin:0 0 16px;font-size:10px;font-weight:700;letter-spacing:4px;color:#555;text-transform:uppercase;">Email suscrito</p>
          <table width="100%" cellpadding="0" cellspacing="0">
            <tr>
              <td style="background:#111;border:1px solid #1e1e1e;border-left:3px solid #7000ff;padding:24px;">
                <a href="mailto:${email}" style="font-size:20px;font-weight:900;color:#fff;text-decoration:none;letter-spacing:0.5px;">${email}</a>
              </td>
            </tr>
          </table>
          <p style="margin:20px 0 0;font-size:12px;color:#444;letter-spacing:1px;">Guarda este contacto para el aviso de lanzamiento del álbum.</p>
        </td>
      </tr>

      <tr>
        <td style="background:linear-gradient(90deg,#7000ff,#ff2a2a);height:3px;font-size:0;">&nbsp;</td>
      </tr>

      <tr>
        <td style="background:#050505;padding:20px 40px;text-align:center;border:1px solid #111;border-top:none;">
          <p style="margin:0;font-size:10px;font-weight:700;letter-spacing:3px;color:#2a2a2a;text-transform:uppercase;">DANI MIRALLES OFICIAL · <a href="https://danimirallesoficial.com" style="color:#333;text-decoration:none;">danimirallesoficial.com</a></p>
        </td>
      </tr>

    </table>
    </td></tr>
  </table>

</body>
</html>`;
}

// ── Confirmación al suscriptor ────────────────────────────────────────────────
function templateConfirmacionSuscripcion() {
  return `<!DOCTYPE html>
<html lang="es">
<head>
  <meta charset="UTF-8"/>
  <meta name="viewport" content="width=device-width,initial-scale=1"/>
  <link href="https://fonts.googleapis.com/css2?family=Montserrat:wght@400;700;900&family=Permanent+Marker&display=swap" rel="stylesheet"/>
  <title>Estás en la lista</title>
</head>
<body style="margin:0;padding:0;background:#050505;font-family:'Montserrat',Arial,sans-serif;">

  <table width="100%" cellpadding="0" cellspacing="0" style="background:#050505;padding:32px 16px;">
    <tr><td align="center">
    <table width="600" cellpadding="0" cellspacing="0" style="max-width:600px;width:100%;">

      <!-- BARRA TOP -->
      <tr>
        <td style="background:linear-gradient(90deg,#7000ff,#ff2a2a);height:4px;font-size:0;">&nbsp;</td>
      </tr>

      <!-- HERO -->
      <tr>
        <td style="background:#080808;padding:52px 40px 44px;text-align:center;border-left:1px solid #1a1a1a;border-right:1px solid #1a1a1a;">
          <p style="margin:0 0 16px;font-size:10px;font-weight:700;letter-spacing:6px;color:#7000ff;text-transform:uppercase;">Rock &amp; Autor</p>
          <h1 style="margin:0;font-size:56px;font-weight:900;color:#ffffff;letter-spacing:4px;line-height:0.95;text-transform:uppercase;">DANI<br/>MIRALLES</h1>
          <table width="100%" cellpadding="0" cellspacing="0" style="margin:24px 0 0;">
            <tr>
              <td style="border-top:1px solid #1e1e1e;"></td>
              <td width="48" style="text-align:center;padding:0 10px;">
                <span style="font-size:18px;color:#ff2a2a;">★</span>
              </td>
              <td style="border-top:1px solid #1e1e1e;"></td>
            </tr>
          </table>
        </td>
      </tr>

      <!-- LÍNEA ROJA -->
      <tr>
        <td style="background:#ff2a2a;height:2px;font-size:0;border-left:1px solid #1a1a1a;border-right:1px solid #1a1a1a;">&nbsp;</td>
      </tr>

      <!-- CUERPO -->
      <tr>
        <td style="background:#0a0a0a;padding:40px 40px 36px;border-left:1px solid #1a1a1a;border-right:1px solid #1a1a1a;">
          <p style="margin:0 0 8px;font-size:10px;font-weight:700;letter-spacing:4px;color:#ff2a2a;text-transform:uppercase;">● Confirmado</p>
          <h2 style="margin:0 0 24px;font-size:30px;font-weight:900;color:#fff;letter-spacing:-0.5px;line-height:1.1;text-transform:uppercase;">ESTÁS EN<br/>LA LISTA</h2>
          <p style="margin:0 0 16px;font-size:15px;line-height:1.8;color:#888;font-weight:400;">Serás de los primeros en recibir el enlace cuando el álbum esté disponible. Nada de spam. Solo música.</p>
          <p style="margin:0;font-size:15px;line-height:1.8;color:#888;font-weight:400;">Mientras tanto, sígame en redes para estar al tanto de todo lo que va pasando.</p>
        </td>
      </tr>

      <!-- REDES SOCIALES -->
      <tr>
        <td style="background:#080808;padding:32px 40px;text-align:center;border-left:1px solid #1a1a1a;border-right:1px solid #1a1a1a;">
          <p style="margin:0 0 20px;font-size:9px;font-weight:700;letter-spacing:5px;color:#333;text-transform:uppercase;">Sígueme</p>
          <table cellpadding="0" cellspacing="0" style="margin:0 auto;">
            <tr>
              <td style="padding:0 4px;">
                <a href="https://instagram.com/danimiralles_oficial" style="display:inline-block;background:#ff2a2a;color:#fff;font-size:10px;font-weight:900;letter-spacing:2px;text-transform:uppercase;text-decoration:none;padding:12px 20px;">INSTAGRAM</a>
              </td>
              <td style="padding:0 4px;">
                <a href="https://youtube.com/@danimirallesmusic" style="display:inline-block;border:1px solid #2a2a2a;color:#fff;font-size:10px;font-weight:900;letter-spacing:2px;text-transform:uppercase;text-decoration:none;padding:12px 20px;">YOUTUBE</a>
              </td>
              <td style="padding:0 4px;">
                <a href="https://open.spotify.com/intl-es/artist/6cXCMxpukl1tzsq5monfJR" style="display:inline-block;border:1px solid #2a2a2a;color:#fff;font-size:10px;font-weight:900;letter-spacing:2px;text-transform:uppercase;text-decoration:none;padding:12px 20px;">SPOTIFY</a>
              </td>
            </tr>
          </table>
        </td>
      </tr>

      <!-- BARRA BOTTOM -->
      <tr>
        <td style="background:linear-gradient(90deg,#ff2a2a,#7000ff);height:3px;font-size:0;">&nbsp;</td>
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

  const { email } = req.body;

  if (!email || !/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email)) {
    return res.status(400).json({ error: 'Email inválido' });
  }

  try {
    await resend.emails.send({
      from: 'Web Dani Miralles <hola@danimirallesoficial.com>',
      to: ['hola@danimirallesoficial.com'],
      subject: '🎵 Nueva suscripción al álbum',
      html: templateAvisoInterno({ email }),
    });

    await resend.emails.send({
      from: 'Dani Miralles <hola@danimirallesoficial.com>',
      to: [email],
      subject: 'DANI MIRALLES — Estás en la lista',
      html: templateConfirmacionSuscripcion(),
    });

    return res.status(200).json({ ok: true });
  } catch (error) {
    console.error('Resend error:', error);
    return res.status(500).json({ error: error.message });
  }
};
