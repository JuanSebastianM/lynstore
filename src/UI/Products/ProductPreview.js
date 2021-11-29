import styled from 'styled-components'

const Wrapper = styled.div`
  background-color: #fff;
  border: 2px solid #000;
  border-radius: 10px;
  display: flex;
  gap: 20px;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  max-width: 100%;
  width: 280px;
  height: 200px;
  margin: 0 auto;
  margin-bottom: 20px;
  @media screen and (min-width: 1023px) {
      width: auto;
      margin-bottom: 0;
  }
`
const TextWrapper = styled.div`
  padding: 0 15px;
`

const ProductPreview = ({ title, image, text }) => {
  return (
    <>
      <Wrapper>
        <h3>{title}</h3>
        {image}
        <TextWrapper>
          <p>{text}</p>
        </TextWrapper>
      </Wrapper>
    </>
  )
}
export default ProductPreview
