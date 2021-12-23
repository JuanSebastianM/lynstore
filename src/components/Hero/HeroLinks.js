import { Link } from 'react-router-dom';

const HeroLinks = ({ linkRouter, link, text }) => {
  return (
    <>
      {linkRouter ? (
        <Link className='hero-link' to={link}>
          {text}
        </Link>
      ) : (
        <a
          className='hero-link'
          href={link}
          target='_blank'
          rel='noopener noreferrer'
        >
          {text}
        </a>
      )}
    </>
  );
};
export default HeroLinks;
