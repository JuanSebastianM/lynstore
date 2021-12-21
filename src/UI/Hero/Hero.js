import styled from 'styled-components';
import HeroExtra from './HeroExtra';
import HeroLinks from './HeroLinks';
import HeroSmartphone from './HeroSmartphone';
import HeroText from './HeroText';

const HeroContainer = styled.section`
  position: relative;
  width: 100%;
  min-height: 100vh;
  display: flex;
  background-image: radial-gradient(
    circle,
    rgba(238, 174, 202, 1) 0%,
    rgb(255 255 255) 100%
  );
  @media screen and (max-width: 1023px) {
    flex-direction: column;
    margin-bottom: 60px;
  }
  justify-content: center;
  align-items: center;
  padding-top: 100px;
  @media screen and (min-width: 1023px) {
    justify-content: space-evenly;
    padding: 100px 0 40px;
  }
`;
const TextWrapper = styled.div`
  max-width: 400px;
  padding: 0 40px;
  letter-spacing: 1.5px;
  color: #000;
  @media screen and (min-width: 1023px) {
    padding: 0;
  }
  p {
    margin-bottom: 15px;
  }
`;

const Hero = () => {
  return (
    <HeroContainer>
      <TextWrapper>
        <HeroText />
        <HeroLinks
          linkRouter={false}
          link='https://lyn-store.olistshops.com'
          text='Comprar'
        />
      </TextWrapper>
      <HeroSmartphone />
      <TextWrapper>
        <HeroExtra />
        <HeroLinks
          linkRouter={true}
          link='/preguntas-frecuentes'
          text='Conocer más'
        />
      </TextWrapper>
    </HeroContainer>
  );
};
export default Hero;
