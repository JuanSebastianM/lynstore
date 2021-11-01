import React from 'react'
import styled from 'styled-components'

const Container = styled.div`
  background-color: #d4e0de;
  position: absolute;
  display: flex;
  left: 0;
  text-align: center;
  justify-content: center;
  padding-top: 100px;
  width: 100%;
  min-height: 100vh;
  transform: translateX(-100%);
  transition: transform 500ms ease;
`
export const SideMenu = ({ menuRef }) => {
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
