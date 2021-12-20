import styled from 'styled-components';

import { MdOutlineEmail } from 'react-icons/md';
import { GoLocation } from 'react-icons/go';
import { BsWhatsapp, BsInstagram } from 'react-icons/bs';

const GridWrapper = styled.div`
  overflow: hidden;
  display: grid;
  grid-template-columns: 20px 1fr;
  align-items: center;
  grid-gap: 5px;
  margin-bottom: 10px;
  &:last-of-type {
    margin: 0;
  }
`;

const FooterContacts = () => {
  return (
    <>
      <div className='flex-contacts'>
        <header>
          <h3>Contactos</h3>
        </header>
        <GridWrapper>
          <GoLocation />
          <div>
            <span>Sincelejo, Sucre, El Cortijo</span>
            <span>Kra 6a #29b 14</span>
          </div>
        </GridWrapper>
        <GridWrapper>
          <BsWhatsapp />
          <a
            href='https://wa.me/573008769307'
            target='_blank'
            rel='noopener noreferrer'
          >
            +57 300 876 9307
          </a>
        </GridWrapper>
        <GridWrapper>
          <MdOutlineEmail />
          <a
            className='scroll-a'
            href='mailto:atencionalclientelynstore@gmail.com'
            target='_blank'
            rel='noopener noreferrer'
          >
            atencionalclientelynstore@gmail.com
          </a>
        </GridWrapper>
        <GridWrapper>
          <BsInstagram />
          <a
            href='https://instagram.com/lynstore_08'
            target='_blank'
            rel='noopener noreferrer'
          >
            LynStore_08
          </a>
        </GridWrapper>
      </div>
    </>
  );
};
export default FooterContacts;
