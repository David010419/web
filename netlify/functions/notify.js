// netlify/functions/notify.js
// Gestiona las suscripciones a la lista de espera del álbum
const { Resend } = require('resend');

const resend = new Resend(process.env.RESEND_API_KEY);

// ── Plantilla: aviso interno a Dani ──────────────────────────────────────────
function templateAvisoInterno({ email }) {
  const fecha = new Date().toLocaleString('es-ES', {
    timeZone: 'Europe/Madrid',
    weekday: 'long',
    year: 'numeric',
    month: 'long',
    day: 'numeric',
    hour: '2-digit',
    minute: '2-digit',
  });

  return `<!DOCTYPE html>
<html lang="es">
<head>
  <meta charset="UTF-8"/>
  <meta name="viewport" content="width=device-width, initial-scale=1.0"/>
  <title>Nueva suscripción lista de espera</title>
</head>
<body style="margin:0;padding:0;background:#0d0d0d;font-family:'Helvetica Neue',Helvetica,Arial,sans-serif;">
  <table width="100%" cellpadding="0" cellspacing="0" style="background:#0d0d0d;padding:40px 20px;">
    <tr>
      <td align="center">
        <table width="600" cellpadding="0" cellspacing="0" style="max-width:600px;width:100%;">

          <tr>
            <td style="background:linear-gradient(135deg,#0a001a 0%,#180030 50%,#0a001a 100%);border-radius:12px 12px 0 0;padding:36px 40px 28px;text-align:center;border-bottom:3px solid #8B5CF6;">
              <p style="margin:0 0 8px;font-size:11px;letter-spacing:4px;color:#8B5CF6;text-transform:uppercase;">Dani Miralles Oficial</p>
              <h1 style="margin:0;font-size:24px;font-weight:900;color:#ffffff;">🎵 Nueva suscripción al álbum</h1>
              <p style="margin:10px 0 0;font-size:13px;color:#777;font-style:italic;">${fecha}</p>
            </td>
          </tr>

          <tr>
            <td style="background:#141414;padding:36px 40px;">
              <p style="margin:0 0 20px;text-align:center;">
                <span style="display:inline-block;background:#8B5CF6;color:#fff;font-size:11px;font-weight:700;letter-spacing:3px;text-transform:uppercase;padding:6px 20px;border-radius:20px;">Lista de espera</span>
              </p>
              <p style="margin:0 0 12px;font-size:15px;color:#aaa;">Alguien acaba de apuntarse a la lista de espera del álbum:</p>
              <div style="background:#1e1e1e;border-left:3px solid #8B5CF6;border-radius:8px;padding:18px 24px;margin-bottom:28px;">
                <p style="margin:0 0 4px;font-size:11px;letter-spacing:2px;color:#8B5CF6;text-transform:uppercase;">Email</p>
                <a href="mailto:${email}" style="font-size:18px;font-weight:700;color:#fff;text-decoration:none;">${email}</a>
              </div>
              <p style="margin:0;font-size:13px;color:#555;text-align:center;">Recuerda guardar este contacto para el aviso de lanzamiento.</p>
            </td>
          </tr>

          <tr>
            <td style="background:#0a0a0a;border-radius:0 0 12px 12px;padding:20px 40px;text-align:center;border-top:1px solid #222;">
              <p style="margin:0;font-size:12px;color:#444;">© 2025 Dani Miralles · <a href="https://danimirallesoficial.com" style="color:#8B5CF6;text-decoration:none;">danimirallesoficial.com</a></p>
            </td>
          </tr>

        </table>
      </td>
    </tr>
  </table>
</body>
</html>`;
}

// ── Plantilla: confirmación al suscriptor ─────────────────────────────────────
function templateConfirmacionSuscripcion() {
  return `<!DOCTYPE html>
<html lang="es">
<head>
  <meta charset="UTF-8"/>
  <meta name="viewport" content="width=device-width, initial-scale=1.0"/>
  <title>Estás en la lista</title>
</head>
<body style="margin:0;padding:0;background:#0d0d0d;font-family:'Helvetica Neue',Helvetica,Arial,sans-serif;">
  <table width="100%" cellpadding="0" cellspacing="0" style="background:#0d0d0d;padding:40px 20px;">
    <tr>
      <td align="center">
        <table width="600" cellpadding="0" cellspacing="0" style="max-width:600px;width:100%;">

          <!-- Header -->
          <tr>
            <td style="background:linear-gradient(135deg,#0a001a 0%,#180030 60%,#0a001a 100%);border-radius:12px 12px 0 0;padding:48px 40px 36px;text-align:center;border-bottom:3px solid #8B5CF6;">
              <p style="margin:0 0 6px;font-size:11px;letter-spacing:5px;color:#8B5CF6;text-transform:uppercase;">Rock &amp; Autor</p>
              <h1 style="margin:0;font-size:36px;font-weight:900;color:#ffffff;letter-spacing:2px;text-transform:uppercase;">Dani Miralles</h1>
              <p style="margin:16px 0 0;font-size:13px;color:#aaa;font-style:italic;">danimirallesoficial.com</p>
            </td>
          </tr>

          <!-- Body -->
          <tr>
            <td style="background:#141414;padding:48px 40px 36px;text-align:center;">

              <div style="font-size:48px;margin-bottom:20px;">🎸</div>

              <h2 style="margin:0 0 16px;font-size:24px;font-weight:900;color:#ffffff;letter-spacing:1px;">¡Estás dentro!</h2>

              <p style="margin:0 0 20px;font-size:15px;line-height:1.8;color:#cccccc;max-width:440px;margin-left:auto;margin-right:auto;">
                Te he apuntado a la lista de espera. Serás de los primeros en recibir el enlace cuando el álbum esté disponible.
              </p>

              <p style="margin:0 0 36px;font-size:14px;line-height:1.7;color:#888;">
                No SPAM. Solo música.
              </p>

              <!-- Separador -->
              <table width="100%" cellpadding="0" cellspacing="0" style="margin-bottom:32px;">
                <tr><td style="border-top:1px solid #2a2a2a;"></td></tr>
              </table>

              <!-- Redes -->
              <p style="margin:0 0 16px;font-size:12px;letter-spacing:2px;color:#555;text-transform:uppercase;">Mientras tanto, sígueme</p>
              <table width="100%" cellpadding="0" cellspacing="0">
                <tr>
                  <td align="center">
                    <a href="https://instagram.com/danimiralles_oficial" style="display:inline-block;margin:0 6px;background:#1e1e1e;color:#ffffff;font-size:12px;font-weight:600;letter-spacing:1px;text-transform:uppercase;text-decoration:none;padding:10px 16px;border-radius:6px;">Instagram</a>
                    <a href="https://youtube.com/@danimirallesmusic" style="display:inline-block;margin:0 6px;background:#1e1e1e;color:#ffffff;font-size:12px;font-weight:600;letter-spacing:1px;text-transform:uppercase;text-decoration:none;padding:10px 16px;border-radius:6px;">YouTube</a>
                    <a href="https://open.spotify.com/intl-es/artist/6cXCMxpukl1tzsq5monfJR" style="display:inline-block;margin:0 6px;background:#1e1e1e;color:#ffffff;font-size:12px;font-weight:600;letter-spacing:1px;text-transform:uppercase;text-decoration:none;padding:10px 16px;border-radius:6px;">Spotify</a>
                  </td>
                </tr>
              </table>

            </td>
          </tr>

          <!-- Footer -->
          <tr>
            <td style="background:#0a0a0a;border-radius:0 0 12px 12px;padding:24px 40px;text-align:center;border-top:1px solid #222;">
              <p style="margin:0 0 4px;font-size:12px;color:#555;">Este email fue generado automáticamente. Por favor no respondas.</p>
              <p style="margin:0;font-size:12px;color:#444;">© 2025 Dani Miralles · <a href="https://danimirallesoficial.com" style="color:#8B5CF6;text-decoration:none;">danimirallesoficial.com</a></p>
            </td>
          </tr>

        </table>
      </td>
    </tr>
  </table>
</body>
</html>`;
}

// ── Handler ────────────────────────────────────────────────────────────────────
exports.handler = async (event) => {
  if (event.httpMethod !== 'POST') {
    return { statusCode: 405, body: 'Method Not Allowed' };
  }

  let email;
  try {
    ({ email } = JSON.parse(event.body));
  } catch {
    return { statusCode: 400, body: JSON.stringify({ error: 'JSON inválido' }) };
  }

  if (!email || !/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email)) {
    return { statusCode: 400, body: JSON.stringify({ error: 'Email inválido' }) };
  }

  try {
    // 1. Aviso interno a Dani
    await resend.emails.send({
      from: 'Web Dani Miralles <hola@danimirallesoficial.com>',
      to: ['hola@danimirallesoficial.com'],
      subject: '🎵 Nueva suscripción al álbum',
      html: templateAvisoInterno({ email }),
    });

    // 2. Confirmación al suscriptor
    await resend.emails.send({
      from: 'Dani Miralles <hola@danimirallesoficial.com>',
      to: [email],
      subject: '¡Estás en la lista de espera! 🎸',
      html: templateConfirmacionSuscripcion(),
    });

    return {
      statusCode: 200,
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({ ok: true }),
    };
  } catch (error) {
    console.error('Resend error:', error);
    return {
      statusCode: 500,
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({ error: error.message }),
    };
  }
};
