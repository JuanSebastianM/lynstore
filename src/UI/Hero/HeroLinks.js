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
  &:hover {
    color: #000;
    background-color: transparent;
    border: 2px solid #000;
  }
  &:active {
    transform: scale(0.8);
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
      </Wrapper>
    </>
  )
}
export default HeroLinks
