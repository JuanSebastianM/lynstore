import { useState } from 'react';
import styled from 'styled-components';

import ContactSubmit from './ContactSubmit';

const FormContainer = styled.div`
  padding: 20px;
  border: 2px solid #000;
  border-radius: 10px;
`;

const ContactForm = () => {
  const [formData, setFormData] = useState({
    firstName: '',
    lastName: '',
    email: '',
    message: '',
  });
  const handleForm = (e) => {
    e.preventDefault();
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };
  const submitForm = async (e) => {
    e.preventDefault();
    try {
      const response = await fetch('/enviar', {
        method: 'POST',
        headers: {
          'Content-type': 'application/json',
        },
        body: JSON.stringify({ formData }),
      });
      const data = await response.json();
      if (data.status === 'success') {
        alert('Correo enviado satisfactoriamente.');
        setTimeout(() => {
          setFormData({ firstName: '', lastName: '', email: '', message: '' });
        }, 1500);
      } else if (data.status === 'fail') {
        alert(`Hubo un error al enviar el correo :(`);
      }
    } catch (e) {
      console.log('Error!', e);
    }
  };
  return (
    <>
      <FormContainer>
        <form className='styled-form' onSubmit={submitForm}>
          <div className='form-names'>
            <div>
              <label htmlFor='firstName' className='required'>
                Primer Nombre
              </label>
              <input
                type='text'
                onChange={handleForm}
                id='firstName'
                name='firstName'
                placeholder='Susana'
                value={formData.firstName}
                required
              />
            </div>
            <div>
              <label htmlFor='lastName' className='required'>
                Primer Apellido
              </label>
              <input
                type='text'
                onChange={handleForm}
                id='lastName'
                name='lastName'
                placeholder='Rodríguez'
                value={formData.lastName}
                required
              />
            </div>
          </div>
          <label htmlFor='email' className='required'>
            Correo Electrónico
          </label>
          <input
            type='email'
            onChange={handleForm}
            id='email'
            name='email'
            placeholder='tucorreo@ejemplo.com'
            value={formData.email}
            required
          />
          <label htmlFor='message' className='required'>
            Mensaje
          </label>
          <textarea
            id='message'
            onChange={handleForm}
            name='message'
            placeholder='Escribe tu mensaje aquí...'
            value={formData.message}
            required
          />
          <p className='form-paragraph'>
            Los campos con un <span>*</span> son obligatorios.
          </p>
          <ContactSubmit />
        </form>
      </FormContainer>
    </>
  );
};
export default ContactForm;
