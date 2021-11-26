import styled from 'styled-components'

const LinkBtn = styled.a`
  display: block;
  text-align: center;
  padding: 5px 10px;
  width: 120px;
  border-radius: 10px;
  background-color: #000;
  color: #d4e0de;
  cursor: pointer;
  transform: scale(1);
  transition: all 500ms ease;
  @media screen and (min-width: 1023px) {
    width: 160px;
  }
  &:hover {
    color: #000;
    background-color: transparent;
  }
  &:active {
    transform: scale(0.8);
  }
`
const AboutUsBtn = styled(LinkBtn)`
  background-color: #d4e0de;
  color: #000;
  &:hover {
    color: #d4e0de;
    background-color: #000;
  }
`
const Wrapper = styled.div`
  display: flex;
  justify-content: space-between;
`

const HeroLinks = () => {
  return (
    <>
      <Wrapper>
        <LinkBtn>Visita nuestra tienda</LinkBtn>
        <AboutUsBtn>Conoce más sobre nosotros</AboutUsBtn>
      </Wrapper>
    </>
  )
}
export default HeroLinks
