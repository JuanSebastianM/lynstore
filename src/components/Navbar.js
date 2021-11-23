import React, { useRef, useEffect } from 'react'
import logo from '../images/logo.png'
import styled from 'styled-components/macro'
import { FaBars } from 'react-icons/fa'
import { SideMenu } from './SideMenu'
const Nav = styled.nav`
  width: 100%;
  position: fixed;
  height: 80px;
  padding: 5px 30px;
  z-index: 3;
  transition: all 500ms ease;
`
const NavCenter = styled.div`
  height: 100%;
`
const List = styled.ul`
  height: 100%;
  display: flex;
  align-items: center;
  justify-content: space-between;
  @media screen and (min-width: 1023px) {
    justify-content: space-around;
  }
`
const NavLink = styled.a`
  color: #d4e0de;
  padding: 5px 10px;
  border: 2px solid transparent;
  &:hover {
    border: 2px solid #000;
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
const DesktopDiv = styled.div`
  display: none;
  @media screen and (min-width: 1023px) {
    display: flex;
  }
`
const Button = styled.button`
  background-color: transparent;
  border: none;
  font-size: 2rem;
  transition: transform 600ms ease;
  @media screen and (min-width: 1023px) {
    display: none;
  }
`

const handleButton = (ref, btnRef, nav) => {
  ref.current.classList.toggle('active')
  if (window.scrollY >= 30) {
    nav.current.classList.add('navbar-office')
  } else {
    nav.current.classList.toggle('navbar-office')
  }
  btnRef.current.classList.toggle('btn-active')
}
export const Navbar = () => {
  const containerRef = useRef(null)
  const sideMenu = useRef(null)
  const btn = useRef(null)
  const navbar = useRef(null)

  const changeBgColor = () => {
    if (window.scrollY < 30) {
      navbar.current.classList.remove('navbar-office')
    }
    if (window.scrollY >= 30) {
      navbar.current.classList.add('navbar-office')
    }
    // if (window.scrollY > 450) {
    //   navbar.current.classList.remove('navbar-scroll')
    //   sideMenu.current.classList.remove('side-menu-top')
    //   navbar.current.classList.add('navbar-office')
    //   sideMenu.current.classList.add('navbar-office')
    // }
  }
  useEffect(() => {
    window.addEventListener('scroll', changeBgColor)
    return () => {
      window.removeEventListener('scroll', changeBgColor)
    }
  })

  return (
    <Nav ref={navbar}>
      <NavCenter>
        <List>
          <DesktopDiv>
            <li>
              <NavLink href='/'>¿Quiénes Somos?</NavLink>
            </li>
            <li>
              <NavLink href='/'>¿Quiénes Somos?</NavLink>
            </li>
          </DesktopDiv>
          <Img src={logo} alt='Local físico de LynStore' />
          <DesktopDiv>
            <li>
              <NavLink href='/'>¿Quiénes Somos?</NavLink>
            </li>
            <li>
              <NavLink href='/'>¿Quiénes Somos?</NavLink>
            </li>
          </DesktopDiv>
          <Button
            ref={btn}
            type='button'
            onClick={() => handleButton(containerRef, btn, navbar)}
          >
            <FaBars className='navBtn' />
          </Button>
        </List>
        <SideMenu menuRef={sideMenu} contRef={containerRef} btnRef={btn} />
      </NavCenter>
    </Nav>
  )
}
