import styled from 'styled-components'

const LinkBtn = styled.a`
  margin-right: 15px;
  text-align: center;
  padding: 5px 10px;
  display: inline-block;
  width: 120px;
  border-radius: 10px;
  background-color: #000;
  color: #d4e0de;
  font-size: 1.2rem;
  cursor: pointer;
  transform: scale(1);
  transition: all 500ms ease;
  @media screen and (min-width: 1023px) {
    width: 160px;
    margin-right: 20px;
  }
  &:hover {
    color: #000;
    background-color: #d4e0de;
  }
  &:active {
    transform: scale(0.8);
  }
`
const AboutUsBtn = styled(LinkBtn)`
  margin: 0;
  background-color: #d4e0de;
  color: #000;
  &:hover {
    color: #d4e0de;
    background-color: #000;
  }
`

const HeroLinks = () => {
  return (
    <>
      <LinkBtn>Visita nuestra tienda</LinkBtn>
      <AboutUsBtn>Conoce más sobre nosotros</AboutUsBtn>
    </>
  )
}
export default HeroLinks
