import { NavLink } from 'react-router-dom'
import styled from 'styled-components/macro'
import logo from '../images/logo.png'

const DesktopDiv = styled.div`
  display: none;
  @media screen and (min-width: 1023px) {
    display: flex;
  }
`
const Img = styled.img`
  cursor: pointer;
  border-radius: 50%;
  max-width: 100%;
  width: 110px;
  object-fit: contain;
  filter: drop-shadow(1px 0 0 #000);
  transition: all 600ms ease;
  &:hover {
    transform: scale(1.1);
  }
  @media screen and (min-width: 1023px) {
    width: 150px;
  }
`

const NavContent = () => {
  return (
    <>
      <DesktopDiv>
        <li>
          <NavLink
            to='/acerca'
            className={({ isActive }) => (isActive ? 'navlink-active' : '')}
          >
            ¿Quiénes Somos?
          </NavLink>
        </li>
        <li>
          <NavLink
            to='/productos'
            className={({ isActive }) => (isActive ? 'navlink-active' : '')}
          >
            Productos
          </NavLink>
        </li>
      </DesktopDiv>
      <Img src={logo} alt='Logo de LynStore' />
      <DesktopDiv>
        <li>
          <NavLink
            to='/contacto'
            className={({ isActive }) => (isActive ? 'navlink-active' : '')}
          >
            Contacto
          </NavLink>
        </li>
        <li>
          <NavLink
            to='/preguntas-frecuentes'
            className={({ isActive }) => (isActive ? 'navlink-active' : '')}
          >
            Preguntas Frecuentes
          </NavLink>
        </li>
      </DesktopDiv>
    </>
  )
}
export default NavContent
