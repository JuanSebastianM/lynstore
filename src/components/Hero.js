import React from 'react'
// 347702239 Juandy
// 2240554728 lyn
import styled, { keyframes } from 'styled-components/macro'
import office from '../images/office.jpg'
import calma from '../images/calma.png'
import dosalmas from '../images/dosalmas.png'
import beachpic from '../images/beachpic.jpg'
import toystory from '../images/nobgstory.png'
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

const Wrapper = styled.section`
  width: 100%;
  min-height: 100vh;
  background-color: #d4e0de;
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
    animation-name: ${breezeOne};
    animation-duration: 3s;
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
const TextWrapper = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  padding: 80px 50px 0;
  min-height: 100vh;
  letter-spacing: 1.5px;
  /* background-color: #d4e0de; */
  /* background-image: url('https://images.unsplash.com/photo-1616098063625-65f32186e609?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=870&q=80'); */
  background-image: linear-gradient(
      0deg,
      rgba(0, 0, 0, 0.5) 20%,
      rgba(250, 250, 250, 0.5) 80%
    ),
    url('https://images.unsplash.com/photo-1597200381847-30ec200eeb9a?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=774&q=80');
  @media screen and (min-width: 1023px) {
    background-image: none;
    color: #000;
  }
  // desktop
  /* background-image: linear-gradient(
      0deg,
      rgba(0, 0, 0, 0.5) 20%,
      rgba(250, 250, 250, 0.5) 80%
    ),
    url('https://images.unsplash.com/photo-1616098063625-65f32186e609?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=870&q=80'); */
  // test
  /* background-image: linear-gradient(
      0deg,
      rgba(0, 0, 0, 0.5) 20%,
      rgba(250, 250, 250, 0.5) 80%
    ),
    url('https://images.unsplash.com/photo-1561060511-78b14b799fe1?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=687&q=80'); */
  /* background-image: url('https://images.unsplash.com/photo-1561060511-78b14b799fe1?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=687&q=80'); */
  background-size: cover;
  background-repeat: no-repeat;
  background-position: center;
  color: #fff;
  text-shadow: 2px 2px 6px #000;
`
const LinkBtn = styled.a`
  text-align: center;
  padding: 5px 10px;
  display: block;
  border-radius: 10px;
  background-color: rgba(255, 255, 255, 0.5);
  background-color: #d4e0de;
  color: #000;
  font-size: 1.2rem;
  cursor: pointer;
  transform: scale(1);
  transition: all 500ms ease;
  &:hover {
    color: #d4e0de;
    background-color: #000;
  }
  &:active {
    transform: scale(0.8);
  }
`
const HeroImage = styled.img`
  max-width: 100%;
  object-fit: cover;
  @media screen and (max-width: 1023px) {
    display: none;
  }
`
export const Hero = () => {
  return (
    <>
      <Wrapper>
        <div
          css={`
            display: flex;
            min-height: 100vh;
            max-width: 100%;
          `}
        >
          <HeroImage src={toystory} alt='Toy story' />
          <TextWrapper>
            <h1
              css={`
                text-align: center;
                margin-bottom: 30px;
              `}
            >
              Mereces lo que sueñas
            </h1>
            <p>
              Vistete como quieras, sé quien quieras, estudia lo que quieras,
              viaja a donde quieras.
            </p>
            <p>Sé feliz como TÚ QUIERAS.</p>
            <p>Sé feliz con LynStore.</p>
            <LinkBtn>Conoce más sobre nosotros</LinkBtn>
          </TextWrapper>
        </div>
        {/* <p>
          Somos fabricantes de accesorios para todos los gustos y edades 🌸🙌✨
        </p>
        <p>Vendemos al detal y por mayor</p>
        <p>Envíos a toda Colombia</p> */}
        <ImageContainer>
          <SiteImage src={office} alt='Local físico de LynStore' />
          <ImagesContainer>
            <ImageOneContainer>
              <ImageCardOne src={calma} alt='' />
            </ImageOneContainer>
            <ImageTwoContainer>
              <ImageCardTwo src={dosalmas} alt='' />
            </ImageTwoContainer>
          </ImagesContainer>
        </ImageContainer>
      </Wrapper>
    </>
  )
}
