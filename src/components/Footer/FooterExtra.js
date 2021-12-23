const FooterExtra = () => {
  let currentYear = new Date().getFullYear();
  return (
    <div className='flex-extra'>
      <p>
        LynStore <span className='copyright'>&copy;</span> {currentYear}. Sitio
        desarrollado por{' '}
        <a
          className='developer'
          href='https://juansebastianm.github.io/portfolio'
          target='_blank'
          rel='noopener noreferrer'
        >
          Juan Mendoza
        </a>
      </p>
    </div>
  );
};
export default FooterExtra;
