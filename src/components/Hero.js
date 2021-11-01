import React from 'react'
// 347702239 Juandy
// 2240554728 lyn
import styled, { keyframes } from 'styled-components/macro'
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
  width: 100%;
  min-height: 100vh;
  background-color: #d4e0de;
`
const ImageContainer = styled.div`
  padding-top: 80px;
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
  justify-content: space-evenly;
`
const ImageOneContainer = styled.div`
  box-shadow: 4px 4px 5px -4px #000;
  border-radius: 3px;
  background-color: #fff;
  width: 100px;
  height: 120px;
  align-self: flex-end;
  transition: all 500ms ease;
  transform: rotate(15deg);
  &:hover {
    animation-name: ${breeze};
    animation-duration: 4s;
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
  transform: rotate(340deg);
  align-self: flex-start;
`
const ImageCardTwo = styled(ImageCardOne)`
  transform: rotate(325deg);
`
export const Hero = () => {
  return (
    <>
      <Wrapper>
        <ImageContainer>
          <SiteImage src={office} alt="LynStore's physical site" />
          <ImagesContainer>
            <ImageOneContainer>
              <ImageCardOne src={calma} alt='' />
            </ImageOneContainer>
            <ImageTwoContainer>
              <ImageCardTwo src={dosalmas} alt='' />
            </ImageTwoContainer>
          </ImagesContainer>
        </ImageContainer>
        <h1
          css={`
            text-align: center;
            padding: 30px 0;
          `}
        >
          Mereces lo que sueñas
        </h1>
      </Wrapper>
    </>
  )
}
