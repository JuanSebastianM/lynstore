import styled from 'styled-components'
import { Link } from 'react-router-dom'

import logo from '../../images/logo.png'

const Container = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  max-width: 400px;
  width: 100%;
`

const Logo = styled.img`
  filter: drop-shadow(1px 0 0 #000);
  max-width: 100%;
  width: 110px;
  @media screen and (min-width: 1023px) {
    width: 160px;
  }
`

const FooterHeader = () => {
  return (
    <>
      <Container>
        <div className='line'></div>
        <header>
          <Link to='/'>
            <Logo src={logo} alt='LynStore logo' />
          </Link>
        </header>
        <div className='line'></div>
      </Container>
    </>
  )
}
export default FooterHeader
