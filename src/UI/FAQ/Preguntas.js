import { data } from './datos';

const Preguntas = () => {
  return (
    <>
      {data.map((item) => {
        const { id, title, jsxContent } = item;
        return (
          <>
            <div key={id} className='preguntas-container'>
              <header>
                <h3>{title}</h3>
                <button type='button'>Click</button>
              </header>
              <div className='content-wrapper'>{jsxContent}</div>
            </div>
          </>
        );
      })}
    </>
  );
};
export default Preguntas;
