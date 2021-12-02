import styled from 'styled-components'
import Administradores from '../UI/About/AboutPage/Administradores'
import Informacion from '../UI/About/AboutPage/Information'

const Container = styled.section`
  display: grid;
  grid-template-columns: 1fr 200px 200px;
  min-height: 100vh;
  width: 100%;
  background-color: red;
`

export const Acerca = () => {
  return (
    <>
      <Container>
        <Informacion />
        <Administradores
          name='Juan David Mendoza'
          info='LoremLoremLoremLoremLoremLoremLoremLoremLoremLoremLoremLoremLoremLoremLoremLoremLoremLoremLoremLoremLoremLoremLorem'
        />
        <Administradores
          name='Karolyn Paternina'
          info='LoremLoremLoremLoremLoremLoremLoremLoremLoremLoremLoremLoremLoremLoremLoremLoremLoremLoremLoremLoremLoremLoremLorem'
        />
      </Container>
    </>
  )
}
