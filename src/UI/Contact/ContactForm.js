import { useRef, useState } from 'react';
import styled from 'styled-components';
import FormContent from './FormContent';

const FormContainer = styled.div`
  padding: 20px;
  border: 2px solid #000;
  border-radius: 10px;
`;

const ContactForm = () => {
  const reCaptcha = useRef(null);
  const [formData, setFormData] = useState({
    firstName: '',
    lastName: '',
    email: '',
    message: '',
  });
  const [submitData, setSubmitData] = useState({
    btnText: 'Enviar',
    isRobot: true,
  });
  const reCaptchaChange = (value) => {
    console.log('Captcha value: ', value);
    if (reCaptcha.current.getValue()) {
      setSubmitData({ ...submitData, isRobot: false });
    }
  };
  const handleForm = (e) => {
    e.preventDefault();
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };
  const submitForm = async (e) => {
    e.preventDefault();
    if (submitData.isRobot) {
      alert('Debes completar el captcha para poder enviar un correo.');
      return;
    } else {
      setSubmitData({ ...submitData, btnText: 'Enviando...' });
      try {
        const response = await fetch('/.netlify/functions/mailer', {
          method: 'POST',
          headers: {
            'Content-Type': 'application/json',
          },
          body: JSON.stringify({ formData }),
        });
        const data = await response.json();
        if (!data.sent) {
          alert(
            `Hubo un error al enviar el correo :(.\nPor favor reinicia la página e intenta de nuevo.`
          );
        } else {
          alert('Correo enviado satisfactoriamente.');
          setFormData({ firstName: '', lastName: '', email: '', message: '' });
          setSubmitData({ btnText: 'Enviar', isRobot: true });
          reCaptcha.current.reset();
        }
      } catch (e) {
        console.log('Error!', e);
      }
    }
  };
  return (
    <>
      <FormContainer>
        <FormContent
          formData={formData}
          submitForm={submitForm}
          btnText={submitData.btnText}
          handleForm={handleForm}
          reCaptcha={reCaptcha}
          reCaptchaChange={reCaptchaChange}
        />
      </FormContainer>
    </>
  );
};
export default ContactForm;
