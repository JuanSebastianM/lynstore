import React from 'react'
import styled from 'styled-components/macro'

import Hero from '../UI/Hero/Hero'
import About from '../UI/About/About'
import Products from '../UI/Products/Products'

const Wrapper = styled.main`
  width: 100%;
  min-height: 100vh;
  background-color: #d4e0de;
`

export const Content = () => {
  return (
    <>
      <Wrapper>
        <Hero />
        <About />
        <Products />
      </Wrapper>
    </>
  )
}
