import styled from 'styled-components/macro'
import { FaBars } from 'react-icons/fa'

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
const SideMenuBtn = ({ btnRef, contRef, navRef }) => {
  return (
    <Button
      ref={btnRef}
      type='button'
      onClick={() => handleButton(contRef, btnRef, navRef)}
    >
      <FaBars className='navBtn' />
    </Button>
  )
}
export default SideMenuBtn
