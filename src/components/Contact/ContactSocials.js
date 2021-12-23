import styled from 'styled-components';

import { BsWhatsapp, BsInstagram } from 'react-icons/bs';

const StyledLink = styled.a`
  display: grid;
  grid-template-columns: 25px 1fr;
  gap: 10px;
`;

const ContactSocials = () => {
  return (
    <>
      <div className='socials'>
        <h3>Redes Sociales</h3>
        <ul>
          <li>
            <StyledLink
              href='https://wa.me/573008769307'
              target='_blank'
              rel='noopener noreferrer'
            >
              <BsWhatsapp />
              <span>WhatsApp</span>
            </StyledLink>
          </li>
          <li>
            <StyledLink
              href='https://www.instagram.com/lynstore_08/'
              target='_blank'
              rel='noopener noreferrer'
            >
              <BsInstagram />
              <span>Instagram</span>
            </StyledLink>
          </li>
        </ul>
      </div>
    </>
  );
};
export default ContactSocials;
