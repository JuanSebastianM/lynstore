import styled, { keyframes } from 'styled-components';
import { MdDoubleArrow } from 'react-icons/md';

const breezeOne = keyframes`
50% {
    transform: rotate(-45deg);
}
100% {
    transform: rotate(45deg);
}
`;
const breezeTwo = keyframes`
50% {
    transform: rotate(45deg);
}
100% {
    transform: rotate(-45deg);
}
`;
const Wrapper = styled.div`
  position: relative;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  box-shadow: 4px 4px 5px -4px #000;
  background-color: #fff;
  width: 100%;
  height: 230px;
  transition: all 500ms ease;
  transform-origin: center -20px;
  transform: rotate(0deg);
  @media screen and (min-width: 767px) {
    height: 250px;
  }
  @media screen and (min-width: 1023px) {
    height: 300px;
    transform-origin: center -30px;
  }
  /* &:hover {
    animation: ${breezeOne} 2.5s infinite;
  }
  &:nth-of-type(2n) {
    &:hover {
      animation: ${breezeTwo} 2.5s infinite;
    }
  } */
  &::before {
    position: absolute;
    top: -30px;
    left: 50%;
    content: '';
    width: 10px;
    height: 30px;
    border-top: 5px solid #000;
    border-top-left-radius: 30%;
    border-top-right-radius: 30%;
    background-color: #fff;
    @media screen and (min-width: 1023px) {
      top: -40px;
      height: 40px;
    }
  }
`;
const Image = styled.img`
  position: absolute;
  z-index: -3;
  width: 100%;
  height: 100%;
  object-fit: cover;
`;

const ProductPreview = ({ title, image, link }) => {
  return (
    <>
      <Wrapper className='product-div'>
        <h3>{title}</h3>
        <Image src={image} alt={title} />
        <a
          className='product-link'
          href={link}
          target='_blank'
          rel='noopener noreferrer'
        >
          <span>Ver Todos</span>
          <MdDoubleArrow />
        </a>
      </Wrapper>
    </>
  );
};
export default ProductPreview;
