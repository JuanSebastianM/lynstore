import styled from 'styled-components';

const Container = styled.article`
  @media screen and (min-width: 1023px) {
    max-width: 60%;
    width: 100%;
    margin: 0 auto;
  }
`;

const Informacion = () => {
  return (
    <>
      <Container className='about-articles'>
        <header>
          <h2>¿Quiénes Sómos?</h2>
        </header>
        <div className='text-wrapper'>
          <p>
            <span className='styled-span'>LynStore</span> es un emprendimiento
            que tuvo sus inicios en el año 2016.
          </p>
          <p>
            En la actualidad estamos dedicados a la comercialización de
            productos, más especificamente accesorios para mujeres de todas las
            edades.
          </p>
          <p>Además de esto, vendemos a nivel local y nacional.</p>
          <p>
            Contamos con una amplia variedad de diseños y colores para todos los
            gustos. Muchos de estos son fabricados a mano y con diseños
            originales y exclusivos.
          </p>
          <p>
            Gracias a la buena acogida que ha tenido nuestro negocio,{' '}
            <span className='styled-span'>LynStore</span> actualmente también
            cuenta con la posibilidad de vender productos al por mayor y de esta
            manera ayudar a muchas personas que sueñan con tener su propia
            empresa y así mismo generar ingresos.
          </p>
        </div>
      </Container>
    </>
  );
};
export default Informacion;
