import styled from 'styled-components/macro'
import ProductPreview from './ProductPreview'

import aretes from '../../images/aretes.jpg'
import anillo from '../../images/anillo.jpg'
import cadena from '../../images/cadena.jpg'
import pulseras from '../../images/pulseras.jpg'
import sujetador from '../../images/sujetador.jpg'

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
        <ProductPreview title='Aretes' image={aretes} link='/' />
        <ProductPreview title='Anillos' image={anillo} link='/' />
        <ProductPreview title='Cadenas' image={cadena} link='/' />
        <ProductPreview title='Pulseras' image={pulseras} link='/' />
        <ProductPreview title='Sujetador de gafas' image={sujetador} link='/' />
      </Wrapper>
    </>
  )
}
export default ProductsContent
