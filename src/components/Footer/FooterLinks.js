import { Link } from 'react-router-dom';

const FooterLinks = () => {
  return (
    <>
      <div className='flex-links'>
        <header>
          <h3>Enlaces</h3>
        </header>
        <div className='links-grid'>
          <Link to='/'>Inicio</Link>
          <a
            href='https://lyn-store.olistshops.com'
            target='_blank'
            rel='noopener noreferrer'
            className='desktop-order-3'
          >
            Visitar Tienda
          </a>
          <Link to='/acerca' className='desktop-order-4'>
            ¿Quiénes Somos?
          </Link>
          <Link to='/productos' className='desktop-order-6'>
            Productos
          </Link>
          <Link to='/contacto' className='desktop-order-5'>
            Contacto
          </Link>
          <Link to='/preguntas-frecuentes' className='desktop-order-2'>
            Preguntas Frecuentes
          </Link>
        </div>
      </div>
    </>
  );
};
export default FooterLinks;
