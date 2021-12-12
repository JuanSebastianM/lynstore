import styled from 'styled-components';

const Container = styled.div`
  min-height: 100vh;
  padding: 100px 0;
`;
const Section = styled.section`
  padding: 0 20px;
  display: flex;
  justify-content: center;
  flex-wrap: wrap;
  gap: 40px;
  @media screen and (min-width: 1023px) {
    gap: 80px;
  }
`;
const FormContainer = styled.div`
  padding: 20px;
  border: 2px solid #000;
  border-radius: 10px;
`;

export const Contacto = () => {
  return (
    <>
      <Container>
        <h2>Contáctanos</h2>
        <Section>
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
          <div>
            <h3>Redes Sociales</h3>
            <ul>
              <li>
                <a href='/'>WhatsApp</a>
              </li>
              <li>
                <a href='/'>Instagram</a>
              </li>
            </ul>
          </div>
        </Section>
      </Container>
    </>
  );
};
