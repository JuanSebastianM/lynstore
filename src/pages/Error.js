import { useEffect } from 'react';
import styled from 'styled-components';

const Container = styled.main`
  min-height: 100vh;
  display: flex;
  justify-content: center;
  align-items: center;
  div {
    max-width: 600px;
    padding: 0 40px;
  }
  @media screen and (min-width: 1023px) {
    text-align: center;
    div {
      padding: 0;
    }
  }
  p:first-of-type {
    margin-bottom: 10px;
  }
`;

export const Error = () => {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);
  return (
    <>
      <Container>
        <div>
          <header>
            <h2>¡Esta página no existe!</h2>
          </header>
          <p>Asegurate que no escribiste una dirección erronea.</p>
          <p>
            Puedes usar el menú de navegación de arriba o el del pie de página
            para dirigirte a la sección que deseas.
          </p>
        </div>
      </Container>
    </>
  );
};
