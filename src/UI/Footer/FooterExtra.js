import styled from 'styled-components'

const Container = styled.div`
  border-top: 2px solid #000;
  display: flex;
  justify-content: center;
  align-items: center;
  padding: 10px 0;
`

const FooterExtra = () => {
  let currentYear = new Date().getFullYear()
  return (
    <Container>
      <span>&copy; 2016 - {currentYear}</span>
    </Container>
  )
}
export default FooterExtra
