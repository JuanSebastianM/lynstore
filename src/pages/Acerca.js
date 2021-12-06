import styled from 'styled-components'
import Administradores from '../UI/About/AboutPage/Administradores'
import Informacion from '../UI/About/AboutPage/Informacion'
import juand from '../images/juand.jpg'
import karolyn from '../images/karolyn.jpg'

const Wrapper = styled.main`
  width: 100%;
  min-height: 100vh;
  background-color: #d4e0de;
`
const Container = styled.section`
  min-height: 100vh;
  padding-top: 100px;
  @media screen and (max-width: 1023px) {
    padding-bottom: 30px;
  }
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
            picture={juand}
            info={
              <>
                <p>Soy una de las dos manos creativas de LynStore.</p>
                <p>
                  Me considero un hombre inteligente, divertido, temeroso de
                  Dios y paciente.
                </p>
                <p>
                  Considero que lo hecho a mano le da un plus a nuestros
                  productos, porque además de hacerlo con mucha dedicación,
                  podemos personalizarlos al gusto de cliente.
                </p>
              </>
            }
          />
          <Administradores
            name='Karolyn Paternina'
            picture={karolyn}
            info={
              <>
                <p>También soy una de las dos manos creativas de LynStore.</p>
                <p>
                  Me considero una mujer inteligente, creativa, soñadora y llena
                  del amor de Dios.
                </p>
                <p>
                  Amo diseñar tus accesorios y luego materializarlos con mis
                  manos, porque es sinónimo de que tu producto es 100% original
                  y hecho con mucho amor.
                </p>
              </>
            }
          />
        </Container>
      </Wrapper>
    </>
  )
}
