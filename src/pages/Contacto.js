import styled from 'styled-components';

import ContactForm from '../UI/Contact/ContactForm';
import ContactSocials from '../UI/Contact/ContactSocials';

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

export const Contacto = () => {
  return (
    <>
      <Container>
        <h2>Contáctanos</h2>
        <Section>
          <ContactForm />
          <ContactSocials />
        </Section>
      </Container>
    </>
  );
};
