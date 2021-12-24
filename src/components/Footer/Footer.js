import styled from 'styled-components';

import FooterHeader from './FooterHeader';
import FooterLinks from './FooterLinks';
import FooterContacts from './FooterContacts';
import FooterExtra from './FooterExtra';

const Container = styled.footer`
  background-color: #ffe9e9;
  display: flex;
  padding-top: 20px;
  justify-content: space-evenly;
  align-items: center;
  @media screen and (max-width: 1023px) {
    flex-direction: column;
    padding: 0 20px;
  }
`;
const InfoContainer = styled.div`
  padding-bottom: 10px;
  @media screen and (min-width: 767px) {
    display: flex;
    gap: 30px;
    align-items: flex-start;
  }
  @media screen and (min-width: 1023px) {
    gap: 50px;
  }
`;

export const Footer = () => {
  return (
    <>
      <Container>
        <FooterHeader />
        <div>
          <InfoContainer>
            <FooterLinks />
            <FooterContacts />
          </InfoContainer>
          <FooterExtra />
        </div>
      </Container>
    </>
  );
};
