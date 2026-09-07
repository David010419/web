// api/merch.js — Vercel Serverless Function
const { Resend } = require('resend');
const resend = new Resend(process.env.RESEND_API_KEY);

// ── Notificación a Dani ───────────────────────────────────────────────────────
function templatePedidoDani({ nombre, producto, talla, email, direccion, nota }) {
  const fecha = new Date().toLocaleString('es-ES', {
    timeZone: 'Europe/Madrid',
    weekday: 'long', year: 'numeric', month: 'long',
    day: 'numeric', hour: '2-digit', minute: '2-digit',
  });

  const filaTabla = (label, valor, color) => valor ? `
    <tr>
      <td style="padding:14px 20px;border-bottom:1px solid #161616;vertical-align:top;">
        <p style="margin:0;font-size:9px;font-weight:700;letter-spacing:3px;color:${color};text-transform:uppercase;">${label}</p>
      </td>
      <td style="padding:14px 20px;border-bottom:1px solid #161616;vertical-align:top;">
        <p style="margin:0;font-size:14px;font-weight:700;color:#fff;">${valor}</p>
      </td>
    </tr>` : '';

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

  <tr><td style="background:linear-gradient(90deg,#7000ff,#ff2a2a);height:5px;font-size:0;">&nbsp;</td></tr>

  <!-- HEADER -->
  <tr><td style="background:#0a0a0a;padding:44px 48px 36px;border-left:1px solid #161616;border-right:1px solid #161616;">
    <table width="100%" cellpadding="0" cellspacing="0"><tr>
      <td>
        <p style="margin:0 0 6px;font-size:9px;font-weight:700;letter-spacing:5px;color:#ff2a2a;text-transform:uppercase;">● Merch Oficial · ${fecha}</p>
        <h1 style="margin:0;font-size:48px;font-weight:900;color:#fff;letter-spacing:-2px;line-height:0.9;text-transform:uppercase;">NUEVO<br/><span style="color:#ff2a2a;">PEDIDO</span></h1>
      </td>
      <td width="56" style="text-align:right;vertical-align:top;">
        <div style="width:48px;height:48px;background:#ff2a2a;text-align:center;line-height:48px;font-size:22px;">🛍</div>
      </td>
    </tr></table>
  </td></tr>

  <tr><td style="background:#ff2a2a;height:2px;font-size:0;border-left:1px solid #161616;border-right:1px solid #161616;">&nbsp;</td></tr>

  <!-- PRODUCTO -->
  <tr><td style="background:#0d0d0d;padding:36px 48px;border-left:1px solid #161616;border-right:1px solid #161616;">
    <p style="margin:0 0 18px;font-size:9px;font-weight:700;letter-spacing:5px;color:#444;text-transform:uppercase;">— Detalle del pedido</p>
    <table width="100%" cellpadding="0" cellspacing="0" style="background:#111;border-top:3px solid #ff2a2a;border-left:1px solid #1e1e1e;border-right:1px solid #1e1e1e;border-bottom:1px solid #1e1e1e;">
      ${filaTabla('Producto', producto, '#ff2a2a')}
      ${filaTabla('Talla', talla, '#ff2a2a')}
      ${filaTabla('Nombre', nombre, '#7000ff')}
      ${filaTabla('Email', email, '#7000ff')}
      ${filaTabla('Dirección', direccion, '#7000ff')}
      ${filaTabla('Nota', nota, '#555')}
    </table>
  </td></tr>

  <!-- CTA -->
  <tr><td style="background:#0a0a0a;padding:0 48px 44px;border-left:1px solid #161616;border-right:1px solid #161616;">
    <a href="mailto:${email}?subject=Re%3A%20Tu%20pedido%20de%20${encodeURIComponent(producto)}" style="display:block;background:#ff2a2a;color:#fff;font-family:'Montserrat',Helvetica,Arial,sans-serif;font-size:12px;font-weight:900;letter-spacing:5px;text-transform:uppercase;text-decoration:none;padding:20px;text-align:center;">RESPONDER AL CLIENTE →</a>
  </td></tr>

  <tr><td style="background:linear-gradient(90deg,#ff2a2a,#7000ff);height:3px;font-size:0;">&nbsp;</td></tr>

  <tr><td style="background:#050505;padding:22px 48px;border:1px solid #111;border-top:none;">
    <p style="margin:0;font-size:9px;font-weight:700;letter-spacing:4px;color:#222;text-transform:uppercase;text-align:center;">DANI MIRALLES OFICIAL &nbsp;·&nbsp; <a href="https://danimirallesoficial.com" style="color:#333;text-decoration:none;">DANIMIRALLESOFICIAL.COM</a></p>
  </td></tr>

</table>
</td></tr>
</table>
</body>
</html>`;
}

// ── Confirmación al cliente ───────────────────────────────────────────────────
function templateConfirmacionCliente({ nombre, producto, talla }) {
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

  <tr><td style="background:linear-gradient(90deg,#7000ff,#ff2a2a);height:5px;font-size:0;">&nbsp;</td></tr>

  <!-- HERO -->
  <tr><td style="background:#080808;padding:56px 48px 48px;text-align:center;border-left:1px solid #161616;border-right:1px solid #161616;">
    <p style="margin:0 0 20px;font-size:9px;font-weight:700;letter-spacing:7px;color:#7000ff;text-transform:uppercase;">Merch Oficial</p>
    <h1 style="margin:0;font-size:62px;font-weight:900;color:#fff;letter-spacing:5px;line-height:0.9;text-transform:uppercase;">DANI<br/>MIRALLES</h1>
    <table width="280" cellpadding="0" cellspacing="0" style="margin:28px auto 0;">
      <tr>
        <td style="border-top:1px solid #1e1e1e;"></td>
        <td width="36" style="text-align:center;padding:0 8px;font-size:14px;color:#ff2a2a;">★</td>
        <td style="border-top:1px solid #1e1e1e;"></td>
      </tr>
    </table>
  </td></tr>

  <tr><td style="background:#ff2a2a;height:2px;font-size:0;border-left:1px solid #161616;border-right:1px solid #161616;">&nbsp;</td></tr>

  <!-- CUERPO -->
  <tr><td style="background:#0a0a0a;padding:44px 48px;border-left:1px solid #161616;border-right:1px solid #161616;">
    <p style="margin:0 0 10px;font-size:9px;font-weight:700;letter-spacing:5px;color:#ff2a2a;text-transform:uppercase;">● Pedido recibido</p>
    <h2 style="margin:0 0 28px;font-size:34px;font-weight:900;color:#fff;letter-spacing:-1px;line-height:1;text-transform:uppercase;">PEDIDO<br/>CONFIRMADO,<br/>${nombre.toUpperCase()}</h2>
    <p style="margin:0 0 32px;font-size:15px;font-weight:400;line-height:1.85;color:#888;">He recibido tu solicitud. Me pondré en contacto contigo en breve para confirmar los detalles y coordinar el envío.</p>

    <!-- RESUMEN PEDIDO -->
    <table width="100%" cellpadding="0" cellspacing="0">
      <tr><td style="background:#111;border-top:3px solid #ff2a2a;border-left:1px solid #1e1e1e;border-right:1px solid #1e1e1e;border-bottom:1px solid #1e1e1e;">
        <table width="100%" cellpadding="0" cellspacing="0">
          <tr>
            <td style="padding:18px 24px;border-bottom:1px solid #161616;">
              <p style="margin:0 0 4px;font-size:9px;font-weight:700;letter-spacing:3px;color:#ff2a2a;text-transform:uppercase;">Producto</p>
              <p style="margin:0;font-size:16px;font-weight:900;color:#fff;">${producto}</p>
            </td>
          </tr>
          ${talla ? `<tr><td style="padding:18px 24px;">
            <p style="margin:0 0 4px;font-size:9px;font-weight:700;letter-spacing:3px;color:#7000ff;text-transform:uppercase;">Talla</p>
            <p style="margin:0;font-size:16px;font-weight:900;color:#fff;">${talla}</p>
          </td></tr>` : ''}
        </table>
      </td></tr>
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

  <tr><td style="background:linear-gradient(90deg,#ff2a2a,#7000ff);height:3px;font-size:0;">&nbsp;</td></tr>

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

  const { nombre, producto, talla, email, direccion, nota } = req.body;

  if (!nombre || !producto || !email) {
    return res.status(400).json({ error: 'Faltan campos obligatorios' });
  }

  try {
    await resend.emails.send({
      from: 'Web Dani Miralles <hola@danimirallesoficial.com>',
      to: ['hola@danimirallesoficial.com'],
      replyTo: email,
      subject: `🛍️ Nuevo pedido de merch — ${producto}`,
      html: templatePedidoDani({ nombre, producto, talla, email, direccion, nota }),
    });

    await resend.emails.send({
      from: 'Dani Miralles <hola@danimirallesoficial.com>',
      to: [email],
      subject: `DANI MIRALLES — Pedido recibido`,
      html: templateConfirmacionCliente({ nombre, producto, talla }),
    });

    return res.status(200).json({ ok: true });
  } catch (error) {
    console.error('Resend error:', error);
    return res.status(500).json({ error: error.message });
  }
};
