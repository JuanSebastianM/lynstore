import styled from 'styled-components';

import ProductsContent from '../UI/Products/ProductsContent';

const Container = styled.section`
  background-image: url('https://res.cloudinary.com/dmhhz7iam/image/upload/v1639165525/Twinkle_Star-0.7s-1366px_nkysbw.png');
  background-size: cover;
  background-repeat: no-repeat;
  position: relative;
  width: 100%;
  padding-top: 100px;
  @media screen and (max-width: 1023px) {
    padding-bottom: 30px;
  }
  min-height: 100vh;
`;
export const Productos = () => {
  return (
    <>
      <Container>
        <ProductsContent />
        <svg
          className='styled-svg'
          xmlns='http://www.w3.org/2000/svg'
          viewBox='0 0 1440 320'
        >
          <path
            fill='#faebd7'
            fillOpacity='1'
            d='M0,160L48,181.3C96,203,192,245,288,256C384,267,480,245,576,229.3C672,213,768,203,864,208C960,213,1056,235,1152,202.7C1248,171,1344,85,1392,42.7L1440,0L1440,320L1392,320C1344,320,1248,320,1152,320C1056,320,960,320,864,320C768,320,672,320,576,320C480,320,384,320,288,320C192,320,96,320,48,320L0,320Z'
          ></path>
        </svg>
      </Container>
    </>
  );
};
