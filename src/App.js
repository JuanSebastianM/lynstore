import { Routes, Route } from 'react-router-dom';
import { createGlobalStyle } from 'styled-components';

import { Home } from './components/Home';
import { Navbar } from './components/Navbar';
import { Acerca } from './pages/Acerca';
import { Footer } from './components/Footer';
import { Productos } from './pages/Productos';
import { Contacto } from './pages/Contacto';
import { PreguntasFrecuentes } from './pages/PreguntasFrecuentes';

const GlobalStyle = createGlobalStyle`
html {
  box-sizing: border-box;
  scroll-behavior: smooth;
}
*, *::after, *::before {
  font-family: 'Cookie', cursive;
  margin: 0;
  padding: 0;
  box-sizing: inherit;
  letter-spacing: 2px;
}
li {
  list-style-type: none;
}
a {
  width: 100%;
  text-decoration: none;
  color: #000;
}
h2 {
  text-shadow: 3px 1px 0 #ffd3d3;
  color: #837072;
  font-size: 2rem;
  text-align: center;
  margin-bottom: 10px;
  @media screen and (min-width: 1023px) {
    font-size: 3.5rem;
  }
}
h3 {
  font-size: 1.6rem;
  border-bottom: 2px solid #000;
  margin-bottom: 15px;
  @media screen and (min-width: 1023px) {
    text-align: center;
    font-size: 2rem;
  }
}
p, a, li {
  line-height: 1.2;
  font-size: 1.6rem;
  @media screen and (min-width: 1023px) {
    font-size: 1.8rem;
  }
}
.active {
  transform: translateX(0);
}
.btn-active {
  transform: rotate(90deg);
}
.navBtn {
  transform-origin: center;
  color: #ffd3d3;
  filter: drop-shadow(0px 0px 1px #000);
  border-radius: 20% 90% 0% 100%;
  transition: all 500ms ease;
}
.navbar-office {
  background-color: #ffd3d3;
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
.sidemenu-link {
  font-size: 1.6rem;
}
.styled-span {
  color: #000;
  text-shadow: 2px 1px 0px #ffd3d3;
  background-image: linear-gradient(120deg, #000 0%, #000 100%);
  background-repeat: no-repeat;
  background-size: 100% 0.2em;
  background-position: 0% 88%;
  transition: all 500ms ease;
  &:hover {
    color: #ffd3d3;
    text-shadow: none;
    background-size: 100% 88%;
  }
  border-radius: 50%;
}
.hero-link {
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
}
.big-diamond {
  display: block;
  color: #ffd3d3;
  font-size: 3em;
  @media screen and (min-width: 1023px) {
    font-size: 7rem;
  }
}
.about-articles {
  @media screen and (max-width: 1023px) {
    margin-bottom: 35px;
  }
  &:last-of-type {
    margin-bottom: 0;
  }
}
.text-wrapper {
  background-image: linear-gradient(0deg, #ffd3d336, #ffd3d336);
  padding: 0 30px;
  @media screen and (min-width: 1023px) {
    padding: 0 40px;
  }
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
    max-width: 370px;
  }
}
.flex-extra {
  border-top: 2px solid #000;
  display: flex;
  justify-content: center;
  align-items: center;
  padding: 10px 0;
  text-align: center;
}
.flex-contacts .scroll-a {
  @media screen and (max-width: 1023px) {
    width: auto;
    overflow-x: scroll;
  }
}
.flex-links a, .flex-contacts a, .flex-extra a {
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
.flex-links a, footer span, .flex-contacts a, .flex-extra p, .flex-extra a {
  display: block;
  width: fit-content;
  font-size: 1.4rem;
  @media screen and (min-width: 1023px) {
    font-size: 1.6rem;
  }
}
.flex-extra a {
  display: inline;
}
.flex-extra p .copyright {
  display: inline;
  font-family: 'Times New Roman', cursive;
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
  @media screen and (max-width: 1023px) {
    grid-gap: 10px;
  }
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
.flex-div {
  display: flex;
  justify-content: center;
  align-items: center;
}
.line {
  width: 50%;
  height: 2px;
  background-color: #ffd3d3;
}
.flex-div .line ~ img {
  filter: drop-shadow(1px 0 0 #000);
  max-width: 100%;
  width: 60px;
  @media screen and (min-width: 1023px) {
    width: 100px;
  }
}
.know-more, .nav-link {
  padding: 5px 20px;
  border-radius: 30px;
}
.know-more {
  background-color: rgb(255 211 211 / 23%);
  border: 2px solid #ffd3d3;
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
.product-div {
  z-index: 1;
}
.product-div h3 {
  padding: 10px 20px;
  text-align: center;
  border: none;
}
.product-link {
  display: flex;
  justify-content: center;
  align-items: center;
  padding: 5px 20px;
}
.product-div h3, .product-link {
  background-color: #ffe9e9;
}
.product-link svg {
  transform: translateX(0px);
  transition: transform 0.5s ease-in-out;
}
.product-link:hover svg {
  transform: translateX(20px);
}
.heart {
  filter: drop-shadow(0 2px 2px #000);
  color: #ffd3d3;
}
.styled-svg {
  position: absolute;
  bottom: 0;
}
.developer {
  font-weight: bolder;
}
.styled-form {
  text-align: center;
  padding: 0 30px;
}
.styled-form *, .socials li svg, .socials li a {
  font-size: 1.4rem;
  @media screen and (min-width: 1023px) {
    font-size: 1.6rem;
  }
}
.styled-form label {
  width: fit-content;
  margin-top: 10px;
  margin-bottom: 10px;
  display: block;
}
.styled-form input, .styled-form textarea {
  background-color: #ffd3d3;
  border: 1px solid transparent;
  border-radius: 5px;
  padding: 8px 10px;
  width: 100%;
  transition: border-color 300ms ease;
  &:hover {
    border-color: #000;
  }
}
.styled-form .form-names {
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
  gap: 10px;
  @media screen and (min-width: 1023px) {
    gap: 40px;
  }
}
.styled-form .form-names div {
  @media screen and (max-width: 767px) {
    width: 100%;
  }
}
.socials {
  text-align: center;
}
.socials a span {
  text-decoration: underline transparent;
  transition: text-decoration 400ms ease;
}
.socials a:hover span {
  text-decoration: underline #000;
}
.styled-form .form-names label {
  margin-top: 0;
}
.styled-form textarea {
  height: 120px;
}
.required:after {
  content: '*';
  color: #ff0000;
  font-weight: bolder;
}
.form-paragraph {
  margin-top: 10px;
  font-size: 1.2rem;
}
.form-paragraph span {
  color: #ff0000;
  font-weight: bolder;
}
.faq-section {
  padding: 0 10px;
  max-width: 760px;
  width: 100%;
  margin: 0 auto;
}
.preguntas-container {
  width: 100%;
  margin-bottom: 10px;
}
.preguntas-container header {
  padding: 0 10px;
  height: 60px;
  background-color: #ffd3d3;
  cursor: pointer;
  border: 1px solid #000;
  border-radius: 5px;
  display: flex;
  justify-content: space-between;
  align-items: center;
}
.preguntas-container .active {
  border-radius: 5px 5px 0 0;
}
.preguntas-container .active h3 {
  font-weight: bolder;
}
.preguntas-container header h3 {
  font-weight: 200;
  border: none;
  margin: 0;
}
.content-wrapper {
  padding: 0 10px;
  overflow: hidden;
  height: 0;
  transition: height 500ms ease;
}
.visible {
  border: 1px solid #000;
  border-top: none;
  border-radius: 0 0 5px 5px;
  height: 200px;
  overflow-y: scroll;
}
.content-wrapper ol li {
  list-style-type: decimal;
}
.content-wrapper ul li {
  list-style-type: disc;
}
.content-wrapper ul, .content-wrapper ol {  
  padding-left: 2rem;
}
.faq-text-wrapper, .aligned-column-div {
  display: flex;
  flex-direction: column;
  align-items: center;
}
.aligned-column-div {
  margin-top: 10px;
}
.methods {
  display: grid;
  grid-template-columns: repeat(3, 100px);
  justify-content: center;
}
.pay-method {
  display: flex;
  flex-direction: column;
  align-items: center;
}
.phone-number {
  color: #837072;
}
.pay-method .methods {
  grid-template-columns: repeat(2, 100px);
}
.faq-text-wrapper img, .aligned-column-div img {
  max-width: 50px;
  width: 100%;
  object-fit: cover;
}
.faq-text-wrapper .delivery-img, .aligned-column-div .delivery-img {
  max-width: 100px;
}
.faq-text-wrapper .aligned-column-div {
  display: flex;
  flex-direction: column;
  align-items: center;
}
.dollar-sign {
  font-weight: bolder;
  color: #837072;
}
`;

function App() {
  return (
    <>
      <GlobalStyle />
      <Navbar />
      <Routes>
        <Route path='/' element={<Home />} />
        <Route path='acerca' element={<Acerca />} />
        <Route path='productos' element={<Productos />} />
        <Route path='contacto' element={<Contacto />} />
        <Route path='preguntas-frecuentes' element={<PreguntasFrecuentes />} />
        {/* <Route path='*' element={<Error />} /> */}
      </Routes>
      <Footer />
    </>
  );
}

export default App;
