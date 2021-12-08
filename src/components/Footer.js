import styled from 'styled-components'

import FooterHeader from '../UI/Footer/FooterHeader'
import FooterLinks from '../UI/Footer/FooterLinks'
import FooterContacts from '../UI/Footer/FooterContacts'

const Container = styled.footer`
  background-color: antiquewhite;
  display: flex;
  padding: 20px 0;
  justify-content: space-evenly;
  align-items: center;
  @media screen and (max-width: 1023px) {
    flex-direction: column;
    padding: 0 20px;
  }
`

export const Footer = () => {
  return (
    <>
      <Container>
        <FooterHeader />
        <FooterLinks />
        <FooterContacts />
      </Container>
    </>
  )
}
