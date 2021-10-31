import React from 'react'
// 347702239 Juandy
// 2240554728 lyn
import styled, { keyframes } from 'styled-components'
import office from '../images/office.jpg'
import calma from '../images/calma.png'
import dosalmas from '../images/dosalmas.png'
const breeze = keyframes`
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

const Wrapper = styled.section`
  min-height: 100vh;
`
const ImageContainer = styled.div`
  padding-top: 80px;
  margin-bottom: 40px;
  min-height: 100vh;
  background-color: #ffcdd2;
`
const SiteImage = styled.img`
  object-fit: contain;
  width: 100%;
  z-index: -1;
`
const ImageOneContainer = styled.div`
  position: absolute;
  box-shadow: 0px 1px 6px #ffffff90;
  border-radius: 3px;
  top: 390px;
  left: 20px;
  background-color: #fff;
  width: 140px;
  height: 160px;
  transition: all 500ms ease;
  transform: rotate(15deg);
  &:hover {
    animation-name: ${breeze};
    animation-duration: 4s;
  }
`
const ImageCardOne = styled(SiteImage)`
  transform: rotate(10deg);
  filter: drop-shadow(0px 1px 6px #fff);
`
const ImageTwoContainer = styled(ImageOneContainer)`
  left: 155px;
  transform: rotate(340deg);
`
const ImageCardTwo = styled(ImageCardOne)`
  width: 100%;
  transform: rotate(325deg);
`
export const Hero = () => {
  return (
    <>
      <Wrapper>
        <ImageContainer>
          <SiteImage src={office} alt="LynStore's physical site" />
          <ImageOneContainer>
            <ImageCardOne src={calma} alt='' />
          </ImageOneContainer>
          <ImageTwoContainer>
            <ImageCardTwo src={dosalmas} alt='' />
          </ImageTwoContainer>
        </ImageContainer>
        <h1>Mereces lo que sueñas</h1>
      </Wrapper>
    </>
  )
}
