import { Hero } from './components/Hero'
import { NavbarFixed } from './components/Navbar'
import 'bootstrap/dist/css/bootstrap.min.css'
import { createGlobalStyle } from 'styled-components'

// https://www.behance.net/gallery/128186947/Diamond-Dreams-Jewelry-Ecommerce-Website
const GlobalStyle = createGlobalStyle`
li {
  list-style-type: none;
  padding: 5px 30px;
}
a {
  text-decoration: none;
}
.active {
  transform: translateX(0);
}
.btn-active {
  transform: rotate(45deg);
  
}
`
// const MainContainer = styled.main`
//   padding-top: 70px;
// `
function App() {
  return (
    <>
      <GlobalStyle />
      <NavbarFixed />
      {/* <MainContainer> */}
      <Hero />
      {/* </MainContainer> */}
    </>
  )
}

export default App
