import styled, { keyframes } from 'styled-components/macro'
import office from '../../images/office.jpg'
import calma from '../../images/calma.png'
import dosalmas from '../../images/dosalmas.png'

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
`
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
`
const ImageContainer = styled.div`
  min-height: 100vh;
`
const SiteImage = styled.img`
  object-fit: contain;
  width: 100%;
  z-index: -1;
`
const ImagesContainer = styled.div`
  display: flex;
  height: 140px;
  justify-content: center;
`
const ImageOneContainer = styled.div`
  box-shadow: 4px 4px 5px -4px #000;
  border-radius: 3px;
  background-color: #fff;
  width: 100px;
  height: 120px;
  align-self: flex-end;
  transition: all 500ms ease;
  transform-origin: center -20px;
  transform: rotate(15deg);
  &:hover {
    animation: ${breezeOne} 2.5s infinite;
  }
  &::before {
    position: absolute;
    top: -30px;
    left: 45px;
    content: '';
    width: 5px;
    height: 30px;
    border-top-left-radius: 30%;
    border-top-right-radius: 30%;
    background-color: #fff;
  }
`
const ImageCardOne = styled(SiteImage)`
  transform: rotate(10deg);
  filter: drop-shadow(0px 1px 6px #fff);
`
const ImageTwoContainer = styled(ImageOneContainer)`
  transform: rotate(-15deg);
  align-self: flex-start;
  &:hover {
    animation-name: ${breezeTwo};
  }
`
const ImageCardTwo = styled(ImageCardOne)`
  transform: rotate(325deg);
`

const AboutImage = () => {
  return (
    <ImageContainer>
      <SiteImage src={office} alt='Sitio físico de LynStore' />
      <ImagesContainer>
        <ImageOneContainer>
          <ImageCardOne src={calma} alt='Imágen de producto de LynStore' />
        </ImageOneContainer>
        <ImageTwoContainer>
          <ImageCardTwo src={dosalmas} alt='Imágen de producto de LynStore' />
        </ImageTwoContainer>
      </ImagesContainer>
    </ImageContainer>
  )
}
export default AboutImage
