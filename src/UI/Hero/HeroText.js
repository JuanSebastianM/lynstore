import styled from 'styled-components/macro'

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
        Sé feliz con <span className='styled-span'>LynStore</span>.
      </Paragraph>
    </>
  )
}
export default HeroText
