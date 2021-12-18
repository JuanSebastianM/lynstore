import styled from 'styled-components';

const SmartphoneDiv = styled.div`
  position: relative;
  width: 235px;
  height: 450px;
  margin: 30px auto;
  @media screen and (min-width: 767px) {
    margin: auto;
    width: 285px;
    height: 590px;
  }
  border: 16px #ffd3d3 solid;
  border-top-width: 60px;
  border-bottom-width: 60px;
  border-radius: 36px;
  &:before {
    content: '';
    display: block;
    width: 60px;
    height: 5px;
    position: absolute;
    top: -30px;
    left: 50%;
    transform: translate(-50%, -50%);
    background-color: #fff;
    border-radius: 10px;
  }
  &:after {
    content: '';
    display: block;
    width: 35px;
    height: 35px;
    position: absolute;
    left: 50%;
    bottom: -65px;
    transform: translate(-50%, -50%);
    background-color: #fff;
    border-radius: 50%;
  }
  .content {
    width: 100%;
    height: 100%;
    background-color: #fff;
  }
  .content img {
    object-fit: contain;
    width: 100%;
    height: 100%;
  }
`;

const HeroSmartphone = () => {
  return (
    <>
      <SmartphoneDiv>
        <div className='content'>
          <img
            src='https://res.cloudinary.com/dmhhz7iam/image/upload/v1639861557/IMG_20211218_155750_m90px3.jpg'
            alt='Perfil de instagram de LynStore'
          />
        </div>
      </SmartphoneDiv>
    </>
  );
};
export default HeroSmartphone;
