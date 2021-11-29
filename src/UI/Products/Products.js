import styled from 'styled-components'

import ProductsContent from './ProductsContent'

const Container = styled.section`
  background-image: url('https://images.unsplash.com/photo-1558882268-15aa056d885f?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=387&q=80');
  background-size: cover;
  background-repeat: no-repeat;
  width: 100%;
  min-height: 100vh;
`

const Products = () => {
  return (
    <>
      <Container>
        <ProductsContent />
      </Container>
    </>
  )
}
export default Products
