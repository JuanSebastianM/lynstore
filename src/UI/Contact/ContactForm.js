import styled from 'styled-components';

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
              <label htmlFor='firstName'>Primer Nombre</label>
              <input type='text' id='firstName' required />
            </div>
            <div>
              <label htmlFor='lastName'>Primer Apellido</label>
              <input type='text' id='lastName' required />
            </div>
          </div>
        </form>
      </FormContainer>
    </>
  );
};
export default ContactForm;
