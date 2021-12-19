import styled from 'styled-components';
import logo from '../../../images/logo.png';
import { BsSuitHeartFill } from 'react-icons/bs';

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
          <img src={logo} alt='Logo de LynStore' />
          <div className='line'></div>
        </div>
        <PictureWrapper>
          <Picture src={picture} alt={name} />
        </PictureWrapper>
        <div className='flex-div'>
          <div className='line'></div>
          <img src={logo} alt='Logo de LynStore' />
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
