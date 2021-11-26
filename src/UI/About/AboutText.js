import styled from 'styled-components/macro'

const Container = styled.div`
  margin: 0 auto;
  max-width: 400px;
  width: 80%;
  @media screen and (min-width: 1023px) {
    width: 50%;
  }
`

const AboutText = () => {
  return (
    <Container>
      <header>
        <h2>¿Quiénes sómos?</h2>
      </header>
      <p>
        + Somos fabricantes de accesorios para todos los gustos y edades 🌸🙌✨
      </p>
      <p>+ Vendemos al detal y por mayor.</p>
      <p>+ Hacemos envíos a toda Colombia.</p>
    </Container>
  )
}
export default AboutText
