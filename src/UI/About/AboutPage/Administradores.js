import styled from 'styled-components';
import logo from '../../../images/logo.png';
import { BsSuitHeartFill } from 'react-icons/bs';

const Logo = styled.img`
  filter: drop-shadow(1px 0 0 #000);
  max-width: 100%;
  width: 60px;
  @media screen and (min-width: 1023px) {
    width: 100px;
  }
`;
const PictureWrapper = styled.div`
  width: 150px;
  height: 225px;
  margin: 0 auto;
  overflow: hidden;
  border: 10px solid #ffe6ed;
`;

const Picture = styled.img`
  margin: 0 auto;
  width: 100%;
  object-fit: contain;
`;

const Administradores = ({ name, picture, info }) => {
  return (
    <>
      <article className='about-articles'>
        <header>
          <h2>{name}</h2>
        </header>
        <div className='flex-div'>
          <div className='line'></div>
          <Logo src={logo} alt='LynStore logo' />
          <div className='line'></div>
        </div>
        <PictureWrapper>
          <Picture src={picture} alt={name} />
        </PictureWrapper>
        <div className='flex-div'>
          <div className='line'></div>
          <Logo src={logo} alt='LynStore logo' />
          <div className='line'></div>
        </div>
        <div className='text-wrapper'>
          {info}
          <p>
            En LynStore tú eres lo más importante{' '}
            <BsSuitHeartFill className='heart' />.
          </p>
        </div>
      </article>
    </>
  );
};
export default Administradores;
