import styled from 'styled-components'

const Wrapper = styled.section`
  min-height: 100%;
  background-color: red;
  @media screen and (min-width: 1023px) {
    display: flex;
    align-items: center;
  }
`
const AboutWrapper = (props) => {
  return <Wrapper>{props.children}</Wrapper>
}
export default AboutWrapper
