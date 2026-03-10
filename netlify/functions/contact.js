// netlify/functions/contact.js
const nodemailer = require('nodemailer');

exports.handler = async (event) => {
  if (event.httpMethod !== 'POST') {
    return { statusCode: 405, body: 'Method Not Allowed' };
  }
  
  // 1) Parsear datos
  const { nombre, email, mensaje } = JSON.parse(event.body);

  // 2) Configurar transporte SMTP con vars de entorno
  const transporter = nodemailer.createTransport({
    host: process.env.SMTP_HOST,        // p.ej. smtp.gmail.com
    port: Number(process.env.SMTP_PORT),// p.ej. 587
    secure: process.env.SMTP_SECURE === 'true',
    auth: {
      user: process.env.SMTP_USER,      // tu cuenta de envío
      pass: process.env.SMTP_PASS,      // app password o clave SMTP
    },
  });

  // 3) Opciones del correo
  const mailOptions = {
    from: `"Web Contacto" <${process.env.SMTP_USER}>`,
    to: process.env.danimirallesoficial@gmail.com,           // tu e-mail destino
    subject: `Nuevo mensaje de ${nombre}`,
    text: `De: ${nombre} <${email}>\n\n${mensaje}`,
    replyTo: email
  };

  try {
    await transporter.sendMail(mailOptions);
    return { statusCode: 200, body: JSON.stringify({ ok: true }) };
  } catch (error) {
    return { statusCode: 500, body: JSON.stringify({ error: error.message }) };
  }
};
