import { useEffect } from 'react';
import styled from 'styled-components/macro';
import Administradores from '../components/About/AboutPage/Administradores';
import Informacion from '../components/About/AboutPage/Informacion';
import juand from '../images/juand.jpg';
import karolyn from '../images/karolyn.jpg';

const Wrapper = styled.main`
  background-image: url('https://images.unsplash.com/photo-1640177155742-835de7b2a9a0?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=327&q=80');
  background-repeat: no-repeat;
  background-size: cover;
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
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);
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
