const nodemailer = require('nodemailer');
const { google } = require('googleapis');

const EMAIL = process.env.REACT_APP_EMAIL;
const CLIENT_ID = process.env.REACT_APP_CLIENT_ID;
const CLIENT_SECRET = process.env.REACT_APP_CLIENT_SECRET;
const REDIRECT_URI = process.env.REACT_APP_REDIRECT_URI;
const REFRESH_TOKEN = process.env.REACT_APP_REFRESH_TOKEN;

exports.handler = async (event, context) => {
  if (event.httpMethod !== 'POST') {
    return {
      statusCode: 405,
      body: 'Method Not Allowed',
    };
  }
  const userInfo = JSON.parse(event.body);
  console.log('user info:', userInfo);

  const oAuth2Client = new google.auth.OAuth2(
    CLIENT_ID,
    CLIENT_SECRET,
    REDIRECT_URI
  );
  oAuth2Client.setCredentials({ refresh_token: REFRESH_TOKEN });

  const sendMail = async () => {
    try {
      const accessToken = await oAuth2Client.getAccessToken();
      const transporter = nodemailer.createTransport({
        service: 'gmail',
        auth: {
          type: 'OAuth2',
          user: EMAIL,
          clientId: CLIENT_ID,
          clientSecret: CLIENT_SECRET,
          refreshToken: REFRESH_TOKEN,
          accessToken: accessToken,
        },
      });
      let mailOptions = {
        from: `"${userInfo.formData.firstName} ${userInfo.formData.lastName} ✨" <${userInfo.formData.email}>`,
        to: EMAIL,
        subject: `Correo enviado por ${userInfo.formData.firstName} ${userInfo.formData.lastName} desde el sitio web`,
        text: `${userInfo.formData.message}`,
        html: `
              <p>¡Tienes un nuevo correo electrónico enviado desde el sitio web de LynStore!</p>
              <h3>Detalles del contacto:</h3>
              <ul>
                <li>Nombre: ${userInfo.formData.firstName} ${userInfo.formData.lastName}</li>
                <li>Correo: ${userInfo.formData.email}</li>
              </ul>
              <h3>Mensaje:</h3>
              <p>${userInfo.formData.message}</p>
              `,
      };
      const result = await transporter.sendMail(mailOptions);
      return result;
    } catch (err) {
      console.log('Error!!!!!!!', err);
    }
  };
  const res = await sendMail();
  if (res.messageId) {
    return {
      statusCode: 200,
      header: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({
        sent: true,
        message: res.messageId,
      }),
    };
  }
  return {
    statusCode: 400,
    header: {
      'Content-Type': 'application/json',
    },
    body: JSON.stringify({
      sent: false,
    }),
  };
};
