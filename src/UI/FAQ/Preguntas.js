import { useState } from 'react';

import { data } from './datos';
import { FiPlus, FiMinus } from 'react-icons/fi';

const Preguntas = () => {
  const [clickedQuestion, setClickedQuestion] = useState(null);
  const toggle = (id) => {
    if (clickedQuestion === id) {
      // if the content of clicked question is already visible, then hide it
      return setClickedQuestion(null);
    }
    setClickedQuestion(id);
  };
  return (
    <>
      {data.map((item) => {
        const { id, title, jsxContent } = item;
        return (
          <>
            <div key={id} className='preguntas-container'>
              <header onClick={() => toggle(id)}>
                <h3>{title}</h3>
                {clickedQuestion === id ? <FiMinus /> : <FiPlus />}
              </header>
              <div
                className={`${
                  clickedQuestion === id
                    ? 'content-wrapper visible'
                    : 'content-wrapper'
                }`}
              >
                {jsxContent}
              </div>
            </div>
          </>
        );
      })}
    </>
  );
};
export default Preguntas;
