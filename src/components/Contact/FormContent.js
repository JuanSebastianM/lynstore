import ReCAPTCHA from 'react-google-recaptcha';

import ContactSubmit from './ContactSubmit';

const FormContent = ({
  formData,
  submitForm,
  btnText,
  handleForm,
  reCaptcha,
  reCaptchaChange,
}) => {
  return (
    <>
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
        <div className='flex-div'>
          <ReCAPTCHA
            ref={reCaptcha}
            sitekey={process.env.REACT_APP_RECAPTCHA_KEY}
            onChange={reCaptchaChange}
          />
        </div>
        <ContactSubmit text={btnText} />
      </form>
    </>
  );
};
export default FormContent;
