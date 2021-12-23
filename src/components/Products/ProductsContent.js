import styled from 'styled-components/macro';
import ProductPreview from './ProductPreview';

import aretes from '../../images/aretes.jpg';
import anillo from '../../images/anillo.jpg';
import cadena from '../../images/cadena.jpg';
import pulseras from '../../images/pulseras.jpg';
import sujetador from '../../images/sujetador.jpg';

const Wrapper = styled.div`
  display: grid;
  padding: 40px 0 30px;
  grid-gap: 40px;
  grid-template-columns: 210px;
  justify-content: center;
  @media screen and (min-width: 767px) {
    grid-template-columns: 250px 250px;
    grid-gap: 60px;
  }
  @media screen and (min-width: 1023px) {
    padding: 40px 0 140px;
    padding-top: 50px;
    grid-template-columns: repeat(3, 300px);
  }
`;

const ProductsContent = () => {
  return (
    <>
      <h2>Productos</h2>
      <Wrapper>
        <ProductPreview
          title='Aretes'
          image={aretes}
          link='https://lyn-store.olistshops.com/categorias/aretes'
        />
        <ProductPreview
          title='Anillos'
          image={anillo}
          link='https://lyn-store.olistshops.com/categorias/anillo'
        />
        <ProductPreview
          title='Cadenas'
          image={cadena}
          link='https://lyn-store.olistshops.com/categorias/cadenas'
        />
        <ProductPreview
          title='Pulseras'
          image={pulseras}
          link='https://lyn-store.olistshops.com/categorias/pulseras-para-compartir'
        />
        <ProductPreview
          title='Sujetador de gafas'
          image={sujetador}
          link='https://lyn-store.olistshops.com/categorias/sujetador-de-gafas'
        />
        <ProductPreview
          title='Chocker'
          image='https://res.cloudinary.com/dmhhz7iam/image/upload/v1640049422/a406fe82-7036-4e37-8bf4-8a64e7025710_aqgtin.jpg'
          link='https://lyn-store.olistshops.com/categorias/chocker'
        />
      </Wrapper>
    </>
  );
};
export default ProductsContent;
