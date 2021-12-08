import styled from 'styled-components'
import fondo2 from '../images/fondo2.jpg'

import ProductsContent from '../UI/Products/ProductsContent'

const Container = styled.section`
  /* background-image: url('https://images.unsplash.com/photo-1558882268-15aa056d885f?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=387&q=80');
  background-size: cover;
  background-repeat: no-repeat; */
  position: relative;
  width: 100%;
  padding-top: 100px;
  @media screen and (max-width: 1023px) {
    padding-bottom: 30px;
  }
  min-height: 100vh;
`
const BackgroundImage = styled.img`
  position: absolute;
  top: 0;
  right: 0;
  width: 100%;
  object-fit: contain;
`

export const Productos = () => {
  return (
    <>
      <Container>
        <BackgroundImage src={fondo2} alt='Dos aretes y una vincha blanca' />
        <ProductsContent />
      </Container>
    </>
  )
}
