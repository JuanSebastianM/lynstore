import { Routes, Route } from 'react-router-dom'

import { Home } from './components/Home'
import { Navbar } from './components/Navbar'
import { createGlobalStyle } from 'styled-components'
import { Acerca } from './pages/Acerca'
import { Footer } from './components/Footer'
import { Productos } from './pages/Productos'

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
  width: 100%;
  text-decoration: none;
  color: #000;
}
p {
  text-shadow: 0 1px #000;
}
h2 {
  text-shadow: 3px 1px 0 #54adb5;
  color: #d4e0de;
  font-size: 2.5rem;
  text-align: center;
  margin-bottom: 10px;
  @media screen and (min-width: 1023px) {
    font-size: 3.5rem;
  }
}
h3 {
  font-size: 1.5rem;
  border-bottom: 2px solid #000;
  width: 80%;
  margin-bottom: 15px;
  @media screen and (min-width: 1023px) {
    text-align: center;
    font-size: 2rem;
  }
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
  color: #54adb5;
  font-size: 3em;
  @media screen and (min-width: 1023px) {
    font-size: 7rem;
  }
}
.product-img {
  font-size: 4rem;
}
.text-wrapper {
  padding: 0 50px;
}
.centered-col-div {
  display: flex;
  flex-direction: column;
  justify-content: center;
  width: 100%;
  @media screen and (max-width: 1023px) {
    margin-bottom: 20px;
  }
  @media screen and (min-width: 1023px) {
    align-items: center;
    height: 180px;
    max-width: 250px;
  }
}
.centered-col-div a, .centered-col-div p {
  font-size: 1.4rem;
  margin-bottom: 5px;
  @media screen and (min-width: 1023px) {
    font-size: 1.6rem;
  }
}
.centered-col-div:last-of-type, .centered-col-div a:last-of-type, .centered-col-div p:last-of-type {
  margin: 0;
}
.links-grid {
  display: grid;
  grid-template-columns: 1fr 1fr;
  height: 150px;
  width: 100%;
  background-color: red;
}
.line {
  width: 50%;
  height: 2px;
  background-color: #d4e0de;
}
.know-more, .nav-link {
  padding: 5px 20px;
  border-radius: 30px;
}
.know-more {
  background-color: rgb(84 173 181 / 14%);
  border: 2px solid #54adb5;
  width: 70%;
  text-align: center;
  transform: scale(1);
  transition: transform 400ms ease;
  &:hover {
    background-color: transparent;
  }
  &:active {
    transform: scale(0.8)
  }
}
.nav-link {
  color: #fff;
  border: 2px solid transparent;
  &:hover {
    border: 2px solid #000;
  }
}
.navlink-active {
  font-weight: bolder;
  border-bottom: 2px solid #fff;
}
`

function App() {
  return (
    <>
      <GlobalStyle />
      <Navbar />
      <Routes>
        <Route path='/' element={<Home />} />
        <Route path='acerca' element={<Acerca />} />
        <Route path='productos' element={<Productos />} />
        {/* <Route path='contacto' element={<Contacto />} /> */}
        {/* <Route path='preguntas-frecuentes' element={<PreguntasFrequentes />} /> */}
        {/* <Route path='*' element={<Error />} /> */}
      </Routes>
      <Footer />
    </>
  )
}

export default App
