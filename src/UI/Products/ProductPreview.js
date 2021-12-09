import styled, { keyframes } from 'styled-components'
import { MdDoubleArrow } from 'react-icons/md'

const breezeOne = keyframes`
50% {
    transform: rotate(-45deg);
}
100% {
    transform: rotate(45deg);
}
`
const breezeTwo = keyframes`
50% {
    transform: rotate(45deg);
}
100% {
    transform: rotate(-45deg);
}
`

// const Wrapper = styled.div`
//   background-color: #fff;
//   border: 2px solid #000;
//   border-radius: 10px;
//   display: flex;
//   gap: 20px;
//   flex-direction: column;
//   justify-content: center;
//   align-items: center;
//   max-width: 100%;
//   width: 280px;
//   height: 200px;
//   margin: 0 auto;
//   margin-bottom: 20px;
//   @media screen and (min-width: 1023px) {
//       width: auto;
//       margin-bottom: 0;
//   }
// `

// const TextWrapper = styled.div`
//   padding: 0 15px;
// `

const Wrapper = styled.div`
  position: relative;
  box-shadow: 4px 4px 5px -4px #000;
  border-radius: 3px;
  background-color: #fff;
  width: 100px;
  height: 120px;
  align-self: flex-end;
  transition: all 500ms ease;
  transform-origin: center -20px;
  transform: rotate(0deg);
  @media screen and (min-width: 1023px) {
    width: 180px;
    height: 200px;
    transform-origin: center -30px;
  }
  &:hover {
    animation: ${breezeOne} 2.5s infinite;
  }
  &:nth-of-type(2n) {
    &:hover {
      animation: ${breezeTwo} 2.5s infinite;
    }
  }
  &::before {
    position: absolute;
    top: -30px;
    left: 45px;
    content: '';
    width: 5px;
    height: 30px;
    border-top: 5px solid #000;
    border-top-left-radius: 30%;
    border-top-right-radius: 30%;
    background-color: #fff;
    @media screen and (min-width: 1023px) {
      top: -40px;
      left: 85px;
      width: 10px;
      height: 40px;
    }
  }
`
const Image = styled.img`
  position: absolute;
  z-index: -3;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  object-fit: contain;
`

const ProductPreview = ({ title, image, link }) => {
  return (
    <>
      <Wrapper className='product-div'>
        <h3>{title}</h3>
        <Image src={image} alt={title} />
        {/* <TextWrapper> */}
        <a href={link} target='_blank' rel='noopener noreferrer'>
          Ver Todos <span>{MdDoubleArrow}</span>
        </a>
        {/* </TextWrapper> */}
      </Wrapper>
    </>
  )
}
export default ProductPreview
