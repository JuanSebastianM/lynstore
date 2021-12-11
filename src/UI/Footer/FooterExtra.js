import styled from 'styled-components';

const Container = styled.div`
  border-top: 2px solid #000;
  display: flex;
  justify-content: center;
  align-items: center;
  padding: 10px 0;
`;

const FooterExtra = () => {
  let currentYear = new Date().getFullYear();
  return (
    <Container>
      <p>
        LynStore &copy; {currentYear}. Sitio desarrollado por{' '}
        <a
          className='developer'
          href='https://juansebastianm.github.io/portfolio'
          target='_blank'
          rel='noopener noreferrer'
        >
          Juan Mendoza
        </a>
      </p>
    </Container>
  );
};
export default FooterExtra;
