import { Hero } from './components/Hero'
import { Navbar } from './components/Navbar'
import { createGlobalStyle } from 'styled-components'

const GlobalStyle = createGlobalStyle`
* {
  margin: 0;
  padding: 0;
  box-sizing: border-box;
}
li {
  list-style-type: none;
  padding: 5px 30px;
}
a {
  text-decoration: none;
}
p {
  margin-bottom: 15px;
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
.navbar-office {
  background-color: #d4e0de;
}
.navbar-office a {
  color: black;
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
