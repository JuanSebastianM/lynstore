import React from 'react'
import styled from 'styled-components'

const Container = styled.div`
  background-color: #f5f5f5;
  position: absolute;
  display: flex;
  align-items: center;
  justify-content: center;
  top: 80px;
  left: 0;
  width: 100%;
  min-height: 100vh;
  transform: translateX(-100%);
  transition: transform 500ms ease;
  padding-bottom: 2rem;
`
export const SideMenu = ({ menuRef }) => {
  console.log('menuref', menuRef)
  return (
    <Container ref={menuRef}>
      <ul>
        <li>
          <a href='/'>Inicio</a>
        </li>
        <li>
          <a href='/'>¿Quiénes Somos?</a>
        </li>
        <li>
          <a href='/'>¿Quiénes Somos?</a>
        </li>
        <li>
          <a href='/'>¿Quiénes Somos?</a>
        </li>
      </ul>
    </Container>
  )
}
