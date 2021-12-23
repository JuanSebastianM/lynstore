import styled from 'styled-components';

const SubmitBtn = styled.button`
  padding: 10px 0;
  cursor: pointer;
  width: 100%;
  max-width: 300px;
  margin-top: 20px;
  border-radius: 10px;
  border: 1px solid #000;
  background-color: #000;
  color: #ffd3d3;
  transition: all 500ms ease;
  &:hover {
    background-color: #fff;
    color: #000;
  }
`;

const ContactSubmit = ({ text }) => {
  return (
    <>
      {text === 'Enviando...' ? (
        <SubmitBtn type='submit' disabled>
          {text}
        </SubmitBtn>
      ) : (
        <SubmitBtn type='submit'>{text}</SubmitBtn>
      )}
    </>
  );
};
export default ContactSubmit;
