import React from 'react'
import styled from 'styled-components'

const Container = styled.div`
  /* background-color: #d4e0de; */
  /* background: linear-gradient(0deg, rgba(0, 0, 0) 0%, rgba(115, 85, 86) 100%); */
  border-top: 2px solid #000;
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
const Wrapper = styled.ul``
const List = styled.li`
  margin-bottom: 20px;
`
const Link = styled.a`
  color: white;
`
export const SideMenu = ({ menuRef }) => {
  return (
    <Container ref={menuRef}>
      <Wrapper>
        <List>
          <Link href='/'>Inicio</Link>
        </List>
        <List>
          <Link href='/'>¿Quiénes Somos?</Link>
        </List>
        <List>
          <Link href='/'>¿Quiénes Somos?</Link>
        </List>
        <List>
          <Link href='/'>¿Quiénes Somos?</Link>
        </List>
      </Wrapper>
    </Container>
  )
}
