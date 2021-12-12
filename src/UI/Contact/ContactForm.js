import styled from 'styled-components';

import ContactSubmit from './ContactSubmit';

const FormContainer = styled.div`
  padding: 20px;
  border: 2px solid #000;
  border-radius: 10px;
`;

const ContactForm = () => {
  return (
    <>
      <FormContainer>
        <form className='styled-form'>
          <div className='form-names'>
            <div>
              <label htmlFor='firstName' className='required'>
                Primer Nombre
              </label>
              <input
                type='text'
                id='firstName'
                name='firstName'
                placeholder='Susana'
                required
              />
            </div>
            <div>
              <label htmlFor='lastName'>Primer Apellido</label>
              <input
                type='text'
                id='lastName'
                name='lastName'
                placeholder='Rodríguez'
              />
            </div>
          </div>
          <label htmlFor='email' className='required'>
            Correo Electrónico
          </label>
          <input
            type='email'
            id='email'
            name='email'
            placeholder='tucorreo@ejemplo.com'
            required
          />
          <label htmlFor='message' className='required'>
            Mensaje
          </label>
          <textarea
            id='message'
            name='message'
            placeholder='Escribe tu mensaje aquí...'
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
