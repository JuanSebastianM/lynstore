import { Content } from './components/Content'
import { Navbar } from './components/Navbar'
import { createGlobalStyle } from 'styled-components'

const GlobalStyle = createGlobalStyle`
html {
  box-sizing: border-box;
}
*, *::after, *::before {
  margin: 0;
  padding: 0;
  box-sizing: inherit;
}
li {
  list-style-type: none;
  padding: 5px 30px;
}
a {
  text-decoration: none;
  color: #000;
}
p {
  margin-bottom: 15px;
  font-size: 1.2rem;
  line-height: 1.5;
}

.active {
  transform: translateX(0);
}
.btn-active {
  transform: rotate(90deg);
}
.navBtn {
  transform-origin: center;
  color: #d4e0de;
  filter: drop-shadow(0px 0px 1px #000);
  border-radius: 20% 90% 0% 100%;
  transition: all 500ms ease;
}
.navbar-office {
  background-color: #d4e0de;
  box-shadow: 0px 2px 10px #000;
  @media screen and (min-width: 1023px) {
    height: 80px;
  }
}
.navbar-office img{
  @media screen and (min-width: 1023px) {
    width: 110px;
  }
}
.navbar-office a, .navbar-office .navBtn {
  color: #000;
}
.navbar-office .navBtn {
  filter: drop-shadow(0px 0px 1px #fff);
}
`
function App() {
  return (
    <>
      <GlobalStyle />
      <Navbar />
      <Content />
    </>
  )
}

export default App
