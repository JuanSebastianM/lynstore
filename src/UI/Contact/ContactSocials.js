import styled from 'styled-components';

import { BsWhatsapp, BsInstagram } from 'react-icons/bs';

const List = styled.li`
  display: grid;
  grid-template-columns: 30px 1fr;
  text-align: left;
  gap: 10px;
`;

const ContactSocials = () => {
  return (
    <>
      <div className='socials'>
        <h3>Redes Sociales</h3>
        <ul>
          <List>
            <BsWhatsapp />
            <a href='/' target='_blank' rel='noopener noreferrer'>
              WhatsApp
            </a>
          </List>
          <List>
            <BsInstagram />
            <a href='/' target='_blank' rel='noopener noreferrer'>
              Instagram
            </a>
          </List>
        </ul>
      </div>
    </>
  );
};
export default ContactSocials;
