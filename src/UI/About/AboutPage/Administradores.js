import styled from 'styled-components'
import logo from '../../../images/logo.png'
import { BsSuitHeartFill } from 'react-icons/bs'

const Logo = styled.img`
  filter: drop-shadow(1px 0 0 #000);
  max-width: 100%;
  width: 60px;
  @media screen and (min-width: 1023px) {
    width: 100px;
  }
`
const Picture = styled.img`
  display: block;
  margin: 0 auto;
  max-width: 100%;
  width: 150px;
  object-fit: contain;
`

const Administradores = ({ name, picture, info }) => {
  return (
    <>
      <article className='about-articles'>
        <div className='text-wrapper'>
          <header>
            <h2>{name}</h2>
          </header>
          <div className='flex-div'>
            <div className='line'></div>
            <Logo src={logo} alt='LynStore logo' />
            <div className='line'></div>
          </div>
          <Picture src={picture} href={name} />
          <div className='flex-div'>
            <div className='line'></div>
            <Logo src={logo} alt='LynStore logo' />
            <div className='line'></div>
          </div>
          {info}
          <p>
            En LynStore tú eres lo más importante{' '}
            <BsSuitHeartFill className='red-heart' />.
          </p>
        </div>
      </article>
    </>
  )
}
export default Administradores
