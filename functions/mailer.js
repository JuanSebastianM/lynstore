'use strict';
require('dotenv').config();
const nodemailer = require('nodemailer');
const { google } = require('googleapis');
const express = require('express');
const path = require('path');
const app = express();
const serverless = require('serverless-http');
const cors = require('cors');

const router = express.Router();
app.use(express.static(path.join(__dirname, 'public')));
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(cors());

router.post('/enviar', (req, res) => {
  console.log(req.body.formData);
  const userInfo = req.body.formData;

  const EMAIL = process.env.REACT_APP_EMAIL;
  const CLIENT_ID = process.env.REACT_APP_CLIENT_ID;
  const CLIENT_SECRET = process.env.REACT_APP_CLIENT_SECRET;
  const REDIRECT_URI = process.env.REACT_APP_REDIRECT_URI;
  const REFRESH_TOKEN = process.env.REACT_APP_REFRESH_TOKEN;

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
        from: `${userInfo.firstName} ${userInfo.lastName} <${userInfo.email}>`,
        to: EMAIL,
        subject: `Correo enviado por ${userInfo.firstName} ${userInfo.lastName} desde el sitio web`,
        text: `${userInfo.message}`,
        html: `
              <p>¡Tienes un nuevo correo electrónico enviado desde el sitio web de LynStore!</p>
              <h3>Detalles del contacto:</h3>
              <ul>
                <li>Nombre: ${userInfo.firstName} ${userInfo.lastName}</li>
                <li>Correo: ${userInfo.email}</li>
              </ul>
              <h3>Mensaje:</h3>
              <p>${userInfo.message}</p>
              `,
      };
      const result = await transporter.sendMail(mailOptions);
      return result;
    } catch (err) {
      console.log('Error!!!!!!!', err);
    }
  };
  sendMail()
    .then((result) => res.json({ status: 'success' }))
    .catch((error) => {
      res.json({ status: 'fail' });
      console.log('Error en el envío!', error.message);
    });
});
app.use('/.netlify/functions/server', router);

const PORT = process.env.PORT || 3001;
app.listen(PORT, () => {
  console.log(`Server is running on port: ${PORT}`);
});

module.exports = app;
module.exports.handler = serverless(app);
