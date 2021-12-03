import styled from 'styled-components'
import Administradores from '../UI/About/AboutPage/Administradores'
import Informacion from '../UI/About/AboutPage/Information'

const Wrapper = styled.main`
  width: 100%;
  min-height: 100vh;
  background-color: #d4e0de;
`

const Container = styled.section`
  min-height: 100vh;
  padding-top: 100px;
  @media screen and (min-width: 1023px) {
    display: grid;
    grid-template-columns: 1fr 400px 400px;
  }
`

export const Acerca = () => {
  return (
    <>
      <Wrapper>
        <Container>
          <Informacion />
          <Administradores
            name='Juan David Mendoza'
            info={
              <>
                <p>Testing testing</p>
                <p>Testing testing</p>
                <p>Testing testing</p>
                <p>Testing testing</p>
              </>
            }
          />
          <Administradores
            name='Karolyn Paternina'
            info={
              <>
                <p>Testing testing</p>
                <p>Testing testing</p>
                <p>Testing testing</p>
                <p>Testing testing</p>
              </>
            }
          />
        </Container>
      </Wrapper>
    </>
  )
}
