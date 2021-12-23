import styled, { keyframes } from 'styled-components/macro';
import office from '../../images/office.jpg';
import calma from '../../images/calma.png';
import dosalmas from '../../images/dosalmas.png';

const breezeOne = keyframes`
0% {
    transform: rotate(15deg);
}
50% {
    transform: rotate(-30deg);
}
100% {
    transform: rotate(15deg);
}
`;
const breezeTwo = keyframes`
0% {
    transform: rotate(-15deg);
}
50% {
    transform: rotate(20deg);
}
100% {
    transform: rotate(-15deg);
}
`;
const ImageContainer = styled.div`
  @media screen and (max-width: 1023px) {
    padding-bottom: 40px;
  }
  @media screen and (min-width: 1023px) {
    position: relative;
  }
`;
const SiteImage = styled.img`
  display: block;
  object-fit: contain;
  width: 100%;
`;
const ImagesContainer = styled.div`
  display: flex;
  height: 140px;
  justify-content: center;
  @media screen and (min-width: 1023px) {
    position: absolute;
    top: 0;
    right: -60px;
    flex-direction: column;
    height: 100%;
    justify-content: space-evenly;
  }
`;
const ImageOneContainer = styled.div`
  box-shadow: 4px 4px 5px -4px #000;
  border-radius: 3px;
  background-color: #fff;
  width: 100px;
  height: 120px;
  align-self: flex-end;
  transition: all 500ms ease;
  transform-origin: center -30px;
  transform: rotate(15deg);
  animation: ${breezeOne} 2.5s infinite;
  @media screen and (min-width: 1023px) {
    width: 180px;
    height: 200px;
    transform-origin: center -40px;
  }
  &::before {
    position: absolute;
    top: -30px;
    left: 45px;
    content: '';
    width: 5px;
    height: 30px;
    border-top: 5px solid #000;
    border-top-left-radius: 30%;
    border-top-right-radius: 30%;
    background-color: #fff;
    @media screen and (min-width: 1023px) {
      top: -40px;
      left: 85px;
      width: 10px;
      height: 40px;
    }
  }
`;
const ImageCardOne = styled(SiteImage)`
  transform: rotate(10deg);
  filter: drop-shadow(0px 1px 6px #fff);
  @media screen and (min-width: 1023px) {
    width: 190px;
  }
`;
const ImageTwoContainer = styled(ImageOneContainer)`
  transform: rotate(-15deg);
  align-self: flex-start;
  animation-name: ${breezeTwo};
`;
const ImageCardTwo = styled(ImageCardOne)`
  transform: rotate(325deg);
`;
const Wrapper = styled.div`
  width: 100%;
  height: 100%;
`;

const AboutImage = () => {
  return (
    <ImageContainer>
      <Wrapper>
        <SiteImage src={office} alt='Sitio físico de LynStore' />
      </Wrapper>
      <ImagesContainer>
        <ImageOneContainer>
          <ImageCardOne src={calma} alt='Imágen de producto de LynStore' />
        </ImageOneContainer>
        <ImageTwoContainer>
          <ImageCardTwo src={dosalmas} alt='Imágen de producto de LynStore' />
        </ImageTwoContainer>
      </ImagesContainer>
    </ImageContainer>
  );
};
export default AboutImage;
