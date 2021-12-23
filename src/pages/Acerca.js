import styled from 'styled-components/macro';
import Administradores from '../components/About/AboutPage/Administradores';
import Informacion from '../components/About/AboutPage/Informacion';
import juand from '../images/juand.jpg';
import karolyn from '../images/karolyn.jpg';

const Wrapper = styled.main`
  background-image: url('https://res.cloudinary.com/dmhhz7iam/image/upload/v1639258362/grid-1s-1084px_nmljfv.png');
  padding: 100px 0 30px;
  width: 100%;
  min-height: 100vh;
`;
const AdminsWrapper = styled.div`
  margin-top: 30px;
  @media screen and (min-width: 1023px) {
    display: flex;
    justify-content: space-evenly;
  }
`;

export const Acerca = () => {
  return (
    <>
      <Wrapper>
        <Informacion />
        <section
          css={`
            margin-top: 60px;
          `}
        >
          <header>
            <h2>Nuestro Equipo</h2>
          </header>
          <AdminsWrapper>
            <Administradores
              name='Juan David Mendoza'
              picture={juand}
              info={
                <>
                  <p>Soy una de las dos manos creativas de LynStore.</p>
                  <p>
                    Me considero un hombre inteligente, divertido, temeroso de
                    Dios y paciente.
                  </p>
                  <p>
                    Considero que lo hecho a mano le da un plus a nuestros
                    productos, porque además de hacerlo con mucha dedicación,
                    podemos personalizarlos al gusto de cliente.
                  </p>
                </>
              }
            />
            <Administradores
              name='Karolyn Paternina'
              picture={karolyn}
              info={
                <>
                  <p>También soy una de las dos manos creativas de LynStore.</p>
                  <p>
                    Me considero una mujer inteligente, creativa, soñadora y
                    llena del amor de Dios.
                  </p>
                  <p>
                    Amo diseñar tus accesorios y luego materializarlos con mis
                    manos, porque es sinónimo de que tu producto es 100%
                    original y hecho con mucho amor.
                  </p>
                </>
              }
            />
          </AdminsWrapper>
        </section>
      </Wrapper>
    </>
  );
};
