import React, { useRef, useEffect } from 'react';
import styled from 'styled-components/macro';
import NavContent from '../Navbar/NavContent';
import { SideMenu } from '../Navbar/SideMenu';
import SideMenuBtn from '../Navbar/SideMenuBtn';
import { changeBgColor } from '../Navbar/changeBgColor';

const Nav = styled.nav`
  width: 100%;
  position: fixed;
  height: 80px;
  padding: 5px 30px;
  z-index: 3;
  transition: all 500ms ease;
`;
const NavCenter = styled.div`
  height: 100%;
`;
const List = styled.ul`
  height: 100%;
  display: flex;
  align-items: center;
  justify-content: space-between;
  @media screen and (min-width: 1023px) {
    justify-content: space-around;
  }
`;

export const Navbar = () => {
  const containerRef = useRef(null);
  const sideMenu = useRef(null);
  const btn = useRef(null);
  const navbar = useRef(null);

  useEffect(() => {
    window.addEventListener('scroll', () => {
      changeBgColor(navbar);
    });
    return () => {
      window.removeEventListener('scroll', () => {
        changeBgColor(navbar);
      });
    };
  });

  return (
    <Nav ref={navbar}>
      <NavCenter>
        <List>
          <NavContent />
          <SideMenuBtn btnRef={btn} contRef={containerRef} navRef={navbar} />
        </List>
        <SideMenu menuRef={sideMenu} contRef={containerRef} btnRef={btn} />
      </NavCenter>
    </Nav>
  );
};
