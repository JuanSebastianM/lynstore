import styled from 'styled-components/macro'
import ProductPreview from './ProductPreview'
import {
  GiHeartEarrings,
  GiHeartNecklace,
  GiBelt,
  GiSunglasses,
} from 'react-icons/gi'

const Wrapper = styled.div`
@media screen and (min-width: 1023px) {

    display: grid;
    grid-gap: 20px;
    justify-content: center;
    grid-template-columns: repeat(3, 300px);
}
`

const ProductsContent = () => {
  return (
    <>
      <h2>Productos</h2>
      <Wrapper>
        <ProductPreview
          title='Aretes'
          image={<GiHeartEarrings className='product-img' />}
          text='Prueba prueba prueba'
        />
        <ProductPreview
          title='Cadenas'
          image={<GiHeartNecklace className='product-img' />}
          text='Prueba prueba prueba'
        />
        <ProductPreview
          title='Pulseras'
          image={<GiBelt className='product-img' />}
          text='Prueba prueba prueba'
        />
        <ProductPreview
          title='Sujetador de gafas'
          image={<GiSunglasses className='product-img' />}
          text='Prueba prueba prueba'
        />
      </Wrapper>
    </>
  )
}
export default ProductsContent
