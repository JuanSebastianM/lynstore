import { Link } from 'react-router-dom'
import styled from 'styled-components/macro'
import { GiBigDiamondRing } from 'react-icons/gi'

const Container = styled.div`
  margin: 0 auto;
  max-width: 460px;
  width: 80%;
  @media screen and (max-width: 1023px) {
    padding-bottom: 30px;
  }
`
const TextWrapper = styled.div`
  display: grid;
  justify-content: center;
  align-items: center;
  grid-template-columns: 50px 1fr;
  grid-gap: 10px;
  margin-bottom: 20px;
  @media screen and (min-width: 1023px) {
    grid-template-columns: 120px 1fr;
  }
`
const NavContainer = styled.nav`
  display: flex;
  justify-content: center;
  align-items: center;
`

const AboutText = () => {
  return (
    <Container>
      <header>
        <h2>¿Quiénes sómos?</h2>
      </header>
      <TextWrapper>
        <GiBigDiamondRing className='big-diamond' />
        <p>Somos fabricantes de accesorios para todos los gustos y edades.</p>
      </TextWrapper>
      <TextWrapper>
        <GiBigDiamondRing className='big-diamond' />
        <p>Vendemos al detal y por mayor.</p>
      </TextWrapper>
      <TextWrapper>
        <GiBigDiamondRing className='big-diamond' />
        <p>Hacemos envíos a toda Colombia.</p>
      </TextWrapper>
      <NavContainer>
        <Link to='/acerca' className='know-more'>
          Conocer más
        </Link>
      </NavContainer>
    </Container>
  )
}
export default AboutText
