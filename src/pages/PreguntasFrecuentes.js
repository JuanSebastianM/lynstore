import styled from 'styled-components';

import { data } from '../UI/FAQ/data';
import Preguntas from '../UI/FAQ/Preguntas';

const Container = styled.main`
  padding: 100px 0;
`;

export const PreguntasFrecuentes = () => {
  return (
    <>
      <Container>
        <section className='faq-section'>
          <div>
            <Preguntas section='Preguntas Comúnes' data={data[0]} />
          </div>
          <div>
            <Preguntas
              section='Preguntas Relacionadas A Compras Al Por Mayor'
              data={data[1]}
            />
          </div>
        </section>
      </Container>
    </>
  );
};
