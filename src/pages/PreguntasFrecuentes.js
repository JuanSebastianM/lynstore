import { useEffect } from 'react';
import styled from 'styled-components';

import { data } from '../components/FAQ/data';
import Preguntas from '../components/FAQ/Preguntas';

const Container = styled.main`
  padding: 100px 0;
`;

export const PreguntasFrecuentes = () => {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);
  return (
    <>
      <Container>
        <section className='faq-section'>
          <div>
            <Preguntas section='Preguntas Comúnes' data={data[0]} />
          </div>
          <div>
            <Preguntas section='Al Por Mayor' data={data[1]} />
          </div>
        </section>
      </Container>
    </>
  );
};
