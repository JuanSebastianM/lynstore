import styled from 'styled-components'

import FooterHeader from '../UI/Footer/FooterHeader'
import FooterLinks from '../UI/Footer/FooterLinks'
import FooterContacts from '../UI/Footer/FooterContacts'
import FooterExtra from '../UI/Footer/FooterExtra'

const Container = styled.footer`
  background-color: #faebd7;
  display: flex;
  padding-top: 20px;
  justify-content: space-evenly;
  align-items: center;
  @media screen and (max-width: 1023px) {
    flex-direction: column;
    padding: 0 20px;
  }
`
const InfoContainer = styled.div`
  @media screen and (min-width: 1023px) {
    display: flex;
    align-items: flex-start;
    gap: 50px;
  }
`

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
  )
}
