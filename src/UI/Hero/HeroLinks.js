import styled from 'styled-components'

const LinkBtn = styled.a`
  display: block;
  text-align: center;
  padding: 5px 10px;
  border-radius: 10px;
  background-color: #000;
  color: #d4e0de;
  cursor: pointer;
  border: 2px solid transparent;
  transform: scale(1);
  transition: all 500ms ease;
  @media screen and (min-width: 1023px) {
    width: 180px;
  }
  &:hover {
    color: #000;
    background-color: transparent;
    border: 2px solid #000;
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
        <LinkBtn>Comprar</LinkBtn>
        <AboutUsBtn>Conocer más</AboutUsBtn>
      </Wrapper>
    </>
  )
}
export default HeroLinks
