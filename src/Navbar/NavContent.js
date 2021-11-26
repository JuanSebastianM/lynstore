import styled from 'styled-components/macro'
import logo from '../images/logo.png'

const NavLink = styled.a`
  color: #d4e0de;
  padding: 5px 10px;
  border: 2px solid transparent;
  &:hover {
    border: 2px solid #000;
  }
`
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
          <NavLink href='/'>¿Quiénes Somos?</NavLink>
        </li>
        <li>
          <NavLink href='/'>¿Quiénes Somos?</NavLink>
        </li>
      </DesktopDiv>
      <Img src={logo} alt='Logo de LynStore' />
      <DesktopDiv>
        <li>
          <NavLink href='/'>¿Quiénes Somos?</NavLink>
        </li>
        <li>
          <NavLink href='/'>¿Quiénes Somos?</NavLink>
        </li>
      </DesktopDiv>
    </>
  )
}
export default NavContent
