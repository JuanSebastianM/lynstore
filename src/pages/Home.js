import { useEffect } from 'react';
import styled from 'styled-components/macro';

import Hero from '../components/Hero/Hero';
import About from '../components/About/About';

const Wrapper = styled.main`
  width: 100%;
  min-height: 100vh;
  background-color: #fff;
`;

export const Home = () => {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);
  return (
    <>
      <Wrapper>
        <Hero />
        <About />
      </Wrapper>
    </>
  );
};
