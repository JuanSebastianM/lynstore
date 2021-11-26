import styled from 'styled-components'

const Wrapper = styled.section`
  min-height: 100vh;
  @media screen and (min-width: 1023px) {
    display: grid;
    grid-template-columns: 1fr 1fr;
    align-items: center;
  }
`
const AboutWrapper = (props) => {
  return <Wrapper>{props.children}</Wrapper>
}
export default AboutWrapper
