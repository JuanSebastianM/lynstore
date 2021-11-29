import styled from 'styled-components'
import HeroLinks from './HeroLinks'
import HeroText from './HeroText'

const HeroContainer = styled.section`
  width: 100%;
  min-height: 100vh;
  display: flex;
  justify-content: center;
  align-items: center;
  padding-top: 60px;
  /* background-image: linear-gradient(0deg, rgb(0 0 0 / 45%), rgb(0 0 0 / 42%)),
    url('https://images.unsplash.com/photo-1583292650898-7d22cd27ca6f?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1374&q=80'); */
  background-image: linear-gradient(177deg, rgb(212 224 222), rgb(0 0 0 / 42%)),
    url('https://images.unsplash.com/photo-1607768188830-1d6016ae8520?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=870&q=80');
  background-position: top;
  background-size: cover;
  background-repeat: no-repeat;
  background-position: center;
  background-attachment: fixed;
  @media screen and (min-width: 1023px) {
    justify-content: flex-start;
    padding-left: 80px;
    background-position: top;
  }
`
const TextWrapper = styled.div`
  max-width: 400px;
  padding: 0 25px;
  letter-spacing: 1.5px;
  color: #000;
  @media screen and (min-width: 1023px) {
    padding: 0;
  }
`

const Hero = () => {
  return (
    <HeroContainer>
      <TextWrapper>
        <HeroText />
        <HeroLinks />
      </TextWrapper>
    </HeroContainer>
  )
}
export default Hero
