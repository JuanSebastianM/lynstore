import styled from 'styled-components/macro'

const StyledText = styled.span`
  background-image: linear-gradient(120deg, #000 0%, #000 100%);
  background-repeat: no-repeat;
  background-size: 100% 0.2em;
  background-position: 0% 88%;
  transition: background-size 500ms ease;
  &:hover {
    background-size: 100% 88%;
  }
  border-radius: 50%;
`
const Paragraph = styled.p`
  margin-bottom: 15px;
`

const HeroText = () => {
  return (
    <>
      <header>
        <h2>Mereces lo que sueñas</h2>
      </header>
      <Paragraph>
        Vistete como quieras, sé quien quieras, estudia lo que quieras, viaja a
        donde quieras.
      </Paragraph>
      <Paragraph>Sé feliz como TÚ QUIERAS.</Paragraph>
      <Paragraph>
        Sé feliz con <StyledText>LynStore</StyledText>.
      </Paragraph>
    </>
  )
}
export default HeroText
