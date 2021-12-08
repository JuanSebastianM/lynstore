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
  scroll-behavior: smooth;
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
  text-shadow: 3px 1px 0 #000;
  color: #ffd3d3;
  font-size: 2rem;
  text-align: center;
  margin-bottom: 10px;
  @media screen and (min-width: 1023px) {
    font-size: 3.5rem;
  }
}
h3 {
  font-size: 1.5rem;
  border-bottom: 2px solid #000;
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
.styled-span {
  color: #ffd3d3;
  text-shadow: 2px 1px 0px #54adb5;
  background-image: linear-gradient(120deg, #000 0%, #000 100%);
  background-repeat: no-repeat;
  background-size: 100% 0.2em;
  background-position: 0% 88%;
  transition: all 500ms ease;
  &:hover {
    text-shadow: none;
    background-size: 100% 88%;
  }
  border-radius: 50%;
}
.big-diamond {
  display: block;
  color: #54adb5;
  font-size: 3em;
  @media screen and (min-width: 1023px) {
    font-size: 7rem;
  }
}
.about-articles {
  @media screen and (max-width: 1023px) {
    margin-bottom: 15px;
  }
}
.text-wrapper {
  padding: 0 50px;
}
.text-wrapper p {
  margin-bottom: 10px;
}
.flex-links, .flex-contacts {
  display: flex;
  flex-direction: column;
  width: 100%;
  @media screen and (max-width: 1023px) {
    margin-bottom: 20px;
  }
  @media screen and (min-width: 1023px) {
    max-width: 400px;
  }
}
.flex-contacts {
  @media screen and (min-width: 1023px) {
    max-width: 380px;
  }
}
.scroll-a {
  @media screen and (max-width: 1023px) {
    overflow-x: scroll;
  }
}
.flex-links a {
  width: fit-content;
  @media screen and (min-width: 1023px) {
      background-image: linear-gradient(45deg, #d4e0de 5%, #000 80%);
      background-size: 0% 0.1em;
      background-position: 0% 80%;
      background-repeat: no-repeat;
        transition: background-size 300ms ease;
      &:hover{
        background-size: 100% 0.1em;
      }
    }
}
.flex-links a, .flex-contacts p, .flex-contacts a {
  font-size: 1.4rem;
  @media screen and (min-width: 1023px) {
    font-size: 1.6rem;
  }
}
.flex-links:last-of-type, .flex-contacts:last-of-type {
  margin: 0;
}
.flex-links header, .flex-contacts header {
  @media screen and (min-width: 1023px) {
    margin: 0 auto;
  }
  width: 80%;
}
.links-grid {
  display: grid;
  @media screen and (min-width: 1023px) {
   grid-template-columns: 1fr 1fr;
    height: 150px;
  }
  width: 100%;
}
.desktop-order-2 {
  @media screen and (min-width: 1023px) {
    order: 2;
  }
}
.desktop-order-3 {
  @media screen and (min-width: 1023px) {
    order: 3;
  }
}
.desktop-order-4 {
  @media screen and (min-width: 1023px) {
    order: 4;
  }
}
.desktop-order-5 {
  @media screen and (min-width: 1023px) {
    order: 5;
  }
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
.product-div h3 {
  text-transform: uppercase;
  padding: 5px 20px;
  text-align: center;
}
.product-div a {
  display: block;
  padding: 0 20px;
  background-color: red;
  text-align: center;
}
.product-div a:hover span {
  transform: translateX(20px);
}
.heart {
  color: #ffd3d3;
}
.flex-div {
  display: flex;
  justify-content: center;
  align-items: center;
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
