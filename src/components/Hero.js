import React from 'react'
// 347702239 Juandy
// 2240554728 lyn
import styled from 'styled-components'
import office from '../images/office.jpg'

const Wrapper = styled.section`
  min-height: 100vh;
  padding-top: 70px;
  display: flex;
  background-color: transparent;
`
const SiteImage = styled.img`
  position: absolute;
  top: 0;
  right: 0;
  object-fit: contain;
  max-height: 100vh;
  z-index: -1;
`

export const Hero = () => {
  return (
    <>
      <Wrapper>
        <h1>Mereces lo que sueñas</h1>
        <SiteImage src={office} alt="LynStore's physical site" />
      </Wrapper>
    </>
  )
}
