import { Hero } from './components/Hero'
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
  filter: drop-shadow(0px 0px 1px #fff);
  border-radius: 20% 90% 0% 100%;
  transition: all 500ms ease;
}
.navbar-scroll {
  background: linear-gradient(45deg, rgba(115,85,86) 0%, rgba(0,0,0) 100%);
}
.side-menu-top {
  background: linear-gradient(40deg, rgba(0, 0, 0) 0%, rgba(115, 85, 86) 100%);
}
.navbar-office {
  background-color: #d4e0de;
}
`
function App() {
  return (
    <>
      <GlobalStyle />
      <Navbar />
      <Hero />
    </>
  )
}

export default App
