import { NavLink } from 'react-router-dom'
import styled from 'styled-components'

const OuterContainer = styled.div`
  width: 100%;
  position: absolute;
  top: 80px;
  left: 0;
  display: flex;
  transform: translateX(-100%);
  transition: transform 500ms ease;
  min-height: 100vh;
`
const Container = styled.div`
  box-shadow: 8px 1px 20px 0px rgba(0, 0, 0, 0.6);
  padding-top: 100px;
  width: 80%;
  min-height: 100vh;
`
const SideDiv = styled.div`
  background-color: rgba(0, 0, 0, 0.6);
  width: 40%;
  min-height: 100vh;
`
const List = styled.li`
  margin-bottom: 20px;
`

export const SideMenu = ({ menuRef, contRef, btnRef }) => {
  const hideSideMenu = () => {
    if (contRef.current.classList.contains('active')) {
      contRef.current.classList.remove('active')
      btnRef.current.classList.remove('btn-active')
    }
  }
  return (
    <OuterContainer ref={contRef}>
      <Container className='navbar-office' ref={menuRef}>
        <ul>
          <List>
            <NavLink
              to='/acerca'
              className={({ isActive }) => (isActive ? 'navlink-active' : '')}
            >
              Inicio
            </NavLink>
          </List>
          <List>
            <NavLink
              to='/acerca'
              className={({ isActive }) => (isActive ? 'navlink-active' : '')}
            >
              ¿Quiénes Somos?
            </NavLink>
          </List>
          <List>
            <NavLink
              to='/productos'
              className={({ isActive }) => (isActive ? 'navlink-active' : '')}
            >
              Productos
            </NavLink>
          </List>
          <List>
            <NavLink
              to='/contacto'
              className={({ isActive }) => (isActive ? 'navlink-active' : '')}
            >
              Contacto
            </NavLink>
          </List>
          <List>
            <NavLink
              to='/preguntas-frecuentes'
              className={({ isActive }) => (isActive ? 'navlink-active' : '')}
            >
              Preguntas Frecuentes
            </NavLink>
          </List>
        </ul>
      </Container>
      <SideDiv onClick={hideSideMenu}></SideDiv>
    </OuterContainer>
  )
}
