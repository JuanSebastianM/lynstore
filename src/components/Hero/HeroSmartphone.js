import styled from 'styled-components';

const Image = styled.img`
  max-width: 280px;
  width: 100%;
  object-fit: cover;
`;

const HeroSmartphone = () => {
  return (
    <>
      <Image
        src='https://res.cloudinary.com/dmhhz7iam/image/upload/v1640034242/mockup_v9xl5p.png'
        alt='Perfil de LynStore en Instagram'
      />
    </>
  );
};
export default HeroSmartphone;
