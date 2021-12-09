import styled from 'styled-components'

import { MdOutlineLocationOn, MdOutlineEmail } from 'react-icons/md'
import { BsWhatsapp, BsInstagram } from 'react-icons/bs'

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
`

const FooterContacts = () => {
  return (
    <>
      <div className='flex-contacts'>
        <header>
          <h3>Contactos</h3>
        </header>
        <GridWrapper>
          <MdOutlineLocationOn />
          <div>
            <p>Sincelejo, Sucre, El Cortijo</p>
            <p>Kra 6a #29b 14</p>
          </div>
        </GridWrapper>
        <GridWrapper>
          <BsWhatsapp />
          <a
            href='https://wa.me/3008769307'
            target='_blank'
            rel='noopener noreferrer'
          >
            +57 300 876 9307
          </a>
        </GridWrapper>
        <GridWrapper>
          <MdOutlineEmail />
          <a
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
  )
}
export default FooterContacts