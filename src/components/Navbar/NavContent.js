import { Link, NavLink } from 'react-router-dom';
import styled from 'styled-components/macro';
import logo from '../../images/logo.png';

const DesktopList = styled.li`
  @media screen and (max-width: 1023px) {
    display: none;
  }
`;
const Img = styled.img`
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
`;

const NavContent = () => {
  return (
    <>
      <DesktopList>
        <NavLink
          to='/acerca'
          className={({ isActive }) => (isActive ? 'navlink-active' : '')}
        >
          ¿Quiénes Somos?
        </NavLink>
      </DesktopList>
      <DesktopList>
        <NavLink
          to='/productos'
          className={({ isActive }) => (isActive ? 'navlink-active' : '')}
        >
          Productos
        </NavLink>
      </DesktopList>
      <li>
        <Link
          to='/'
          css={`
            width: auto;
          `}
        >
          <Img src={logo} alt='Logo de LynStore' />
        </Link>
      </li>
      <DesktopList>
        <NavLink
          to='/contacto'
          className={({ isActive }) => (isActive ? 'navlink-active' : '')}
        >
          Contacto
        </NavLink>
      </DesktopList>
      <DesktopList>
        <NavLink
          to='/preguntas-frecuentes'
          className={({ isActive }) => (isActive ? 'navlink-active' : '')}
        >
          Preguntas Frecuentes
        </NavLink>
      </DesktopList>
    </>
  );
};
export default NavContent;
