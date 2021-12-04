// import styled from 'styled-components'

import { Link } from 'react-router-dom'

const FooterLinks = () => {
  return (
    <>
      <div className='centered-col-div'>
        <header>
          <h3>Enlaces</h3>
        </header>
        <div className='links-grid'>
          <Link to='/'>Visitar Tienda</Link>
          <Link to='/acerca'>¿Quiénes Somos?</Link>
          <Link to='/productos'>Productos</Link>
          <Link to='/contacto'>Contacto</Link>
          <Link to='/preguntas-frecuentes'>Preguntas Frecuentes</Link>
        </div>
      </div>
    </>
  )
}
export default FooterLinks
