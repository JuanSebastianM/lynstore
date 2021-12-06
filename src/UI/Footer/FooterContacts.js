import styled from 'styled-components'

import { MdOutlineLocationOn, MdOutlineEmail } from 'react-icons/md'
import { BsWhatsapp, BsInstagram } from 'react-icons/bs'

const GridWrapper = styled.div`
display: grid;
grid-template-columns: 100px 1fr;
align-items: center;
grid-gap: 10px;
`

const FooterContacts = () => {
  return (
    <>
      <div className='flex-contacts'>
        <header>
          <h3>Contactos</h3>
        </header>
        <GridWrapper>
          <MdOutlineLocationOn/>
          <div>
            <p>Sincelejo, Sucre, El Cortijo</p>
            <p>Kra 6a #29b 14</p>
          </div>
        </GridWrapper>
        <GridWrapper>
          <BsWhatsapp/>
            <a href='https://wa.me/3008769307' target='_blank'>+57 300 876 9307</a>
        </GridWrapper>
        <GridWrapper>
          <MdOutlineEmail/>
          <a href='mailto:atencionalclientelynstore@gmail.com' target='_blank'>atencionalclientelynstore@gmail.com</a>
        </GridWrapper>
        <GridWrapper>
          <BsInstagram/>
          <a href='https://instagram.com/lynstore_08' target='_blank'>LynStore_08</a>
        </GridWrapper>
      </div>
    </>
  )
}
export default FooterContacts
