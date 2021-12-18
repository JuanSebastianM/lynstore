import styled from 'styled-components';
import Preguntas from '../UI/FAQ/Preguntas';

const Container = styled.main`
  padding: 100px 0;
`;

export const PreguntasFrecuentes = () => {
  return (
    <>
      <Container>
        <h2>Preguntas Frecuentes</h2>
        <section className='faq-section'>
          <Preguntas />
        </section>
      </Container>
    </>
  );
};
