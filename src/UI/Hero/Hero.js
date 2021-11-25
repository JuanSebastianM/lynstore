import styled from 'styled-components'
import HeroLinks from './HeroLinks'
import HeroText from './HeroText'

const HeroContainer = styled.div`
  width: 100%;
  min-height: 100vh;
  display: flex;
  justify-content: center;
  align-items: center;
  padding-top: 60px;
  background-image: linear-gradient(
      0deg,
      rgba(0, 0, 0, 0.5),
      rgba(0, 0, 0, 0.3)
    ),
    url('https://images.unsplash.com/photo-1583292650898-7d22cd27ca6f?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1374&q=80');
  background-position: top;
  background-size: cover;
  background-repeat: no-repeat;
  background-position: center;
  background-attachment: fixed;
  @media screen and (min-width: 1023px) {
    justify-content: flex-start;
    padding-left: 80px;
    background-image: linear-gradient(
        0deg,
        rgba(0, 0, 0, 0.5),
        rgba(0, 0, 0, 0.3)
      ),
      url('https://images.unsplash.com/photo-1583292650898-7d22cd27ca6f?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1374&q=80');
    background-position: top;
    color: #000;
  }
`
const TextWrapper = styled.div`
  max-width: 400px;
  width: 80%;
  letter-spacing: 1.5px;
  color: #fff;
  text-shadow: 2px 2px 6px #000;
`

const Hero = () => {
  return (
    <HeroContainer>
      <TextWrapper>
        <HeroText />
        {/* <h1
          css={`
            text-align: center;
            margin-bottom: 30px;
          `}
        >
          Mereces lo que sueñas
        </h1>
        <p>
          Vistete como quieras, sé quien quieras, estudia lo que quieras, viaja
          a donde quieras.
        </p>
        <p>Sé feliz como TÚ QUIERAS.</p>
        <p>Sé feliz con LynStore.</p> */}
        <HeroLinks />
      </TextWrapper>
    </HeroContainer>
  )
}
export default Hero
