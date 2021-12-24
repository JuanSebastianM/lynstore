import { useEffect } from 'react';
import styled from 'styled-components';

import ContactForm from '../components/Contact/ContactForm';
import ContactSocials from '../components/Contact/ContactSocials';

const Container = styled.main`
  min-height: 100vh;
  padding: 100px 0;
  background-image: url('https://res.cloudinary.com/dmhhz7iam/image/upload/v1639258362/grid-1s-1084px_nmljfv.png');
`;
const Section = styled.section`
  padding: 0 30px;
  display: flex;
  justify-content: center;
  align-items: center;
  flex-wrap: wrap;
  gap: 40px;
  @media screen and (min-width: 1023px) {
    gap: 80px;
  }
`;

export const Contacto = () => {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);
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
