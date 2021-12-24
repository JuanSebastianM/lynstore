import { useState, useEffect } from 'react';
import { AiOutlineArrowUp } from 'react-icons/ai';
import styled from 'styled-components';

const StyledBtn = styled.button`
  cursor: pointer;
  position: fixed;
  bottom: 60px;
  right: 10px;
  display: flex;
  border: 1px solid #111;
  border-radius: 10px;
  padding: 6px;
  background-color: #ffd3d3;
  svg {
    font-size: 1.5rem;
  }
  @media screen and (min-width: 1023px) {
    padding: 8px;
    svg {
      font-size: 2rem;
    }
  }
`;

export const ScrollTopBtn = () => {
  const [isVisible, setIsVisible] = useState(false);
  useEffect(() => {
    window.addEventListener('scroll', () => {
      if (window.scrollY > 850) {
        setIsVisible(true);
      } else {
        setIsVisible(false);
      }
    });
    return () => {
      window.addEventListener('scroll', () => {
        if (window.scrollY > 850) {
          setIsVisible(true);
        } else {
          setIsVisible(false);
        }
      });
    };
  });
  return (
    <>
      {isVisible && (
        <StyledBtn type='button' onClick={() => window.scrollTo(0, 0)}>
          <AiOutlineArrowUp />
        </StyledBtn>
      )}
    </>
  );
};
