import { NavLink } from 'react-router-dom';
import styled from 'styled-components';

const OuterContainer = styled.div`
  width: 100%;
  position: absolute;
  top: 80px;
  left: 0;
  display: flex;
  transform: translateX(-100%);
  transition: transform 500ms ease;
  min-height: 100vh;
`;
const Container = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  padding-bottom: 100px;
  box-shadow: 8px 1px 20px 0px rgba(0, 0, 0, 0.6);
  width: 100%;
  max-width: 280px;
  min-height: 100vh;
`;
const SideDiv = styled.div`
  background-color: rgba(0, 0, 0, 0.6);
  width: 100%;
  height: 100%;
  position: absolute;
  z-index: -5;
`;
const List = styled.li`
  margin-bottom: 20px;
  &:last-of-type {
    margin-bottom: 0;
  }
`;

export const SideMenu = ({ menuRef, contRef, btnRef }) => {
  const hideSideMenu = () => {
    if (contRef.current.classList.contains('active')) {
      contRef.current.classList.remove('active');
      btnRef.current.classList.remove('btn-active');
    }
  };
  return (
    <OuterContainer ref={contRef}>
      <Container className='navbar-office' ref={menuRef}>
        <ul>
          <List>
            <NavLink
              onClick={hideSideMenu}
              to='/'
              className={({ isActive }) =>
                isActive ? 'sidemenu-link navlink-active' : 'sidemenu-link'
              }
            >
              Inicio
            </NavLink>
          </List>
          <List>
            <NavLink
              onClick={hideSideMenu}
              to='/acerca'
              className={({ isActive }) =>
                isActive ? 'sidemenu-link navlink-active' : 'sidemenu-link'
              }
            >
              ¿Quiénes Somos?
            </NavLink>
          </List>
          <List>
            <NavLink
              onClick={hideSideMenu}
              to='/productos'
              className={({ isActive }) =>
                isActive ? 'sidemenu-link navlink-active' : 'sidemenu-link'
              }
            >
              Productos
            </NavLink>
          </List>
          <List>
            <NavLink
              onClick={hideSideMenu}
              to='/contacto'
              className={({ isActive }) =>
                isActive ? 'sidemenu-link navlink-active' : 'sidemenu-link'
              }
            >
              Contacto
            </NavLink>
          </List>
          <List>
            <NavLink
              onClick={hideSideMenu}
              to='/preguntas-frecuentes'
              className={({ isActive }) =>
                isActive ? 'sidemenu-link navlink-active' : 'sidemenu-link'
              }
            >
              Preguntas Frecuentes
            </NavLink>
          </List>
        </ul>
      </Container>
      <SideDiv onClick={hideSideMenu}></SideDiv>
    </OuterContainer>
  );
};
