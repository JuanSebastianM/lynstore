import { Content } from './components/Content'
import { Navbar } from './components/Navbar'
import { createGlobalStyle } from 'styled-components'

const GlobalStyle = createGlobalStyle`
html {
  box-sizing: border-box;
  font-family: 'Cookie', cursive;
}
*, *::after, *::before {
  margin: 0;
  padding: 0;
  box-sizing: inherit;
  letter-spacing: 2px;
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
  text-shadow: 0 1px #000;
}
h2 {
  text-shadow: 1px 2px 20px rgb(255 255 255 / 50%);
  color: #000;
  font-size: 2.5rem;
  text-align: center;
  margin-bottom: 10px;
}
p, a, li {
  line-height: 1.2;
  font-size: 1.8rem;
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
.big-diamond {
  display: block;
  color: #9daeb8;
  font-size: 3em;
  @media screen and (min-width: 1023px) {
    font-size: 7rem;
  }
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
