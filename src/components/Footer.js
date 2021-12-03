import styled from 'styled-components'

import FooterHeader from '../UI/Footer/FooterHeader'
import FooterLinks from '../UI/Footer/FooterLinks'
import FooterSocials from '../UI/Footer/FooterSocials'

const Container = styled.footer`
  display: flex;
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
        <FooterSocials />
      </Container>
    </>
  )
}
