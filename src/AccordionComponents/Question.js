import React, { useState } from 'react';
import { AiOutlineMinus, AiOutlinePlus } from 'react-icons/ai';
const Question = ({ question }) => {
  
  const [plus, setPlus] = useState(true);
  return (
    <article className="question">
      <header>
        <h4>
          {question.title}
        </h4>
        <button className="btn" onClick={() => setPlus(!plus)}>
          {plus ? <AiOutlinePlus /> : <AiOutlineMinus />}
        </button>
      </header>
      <p>
        {!plus && question.info}
      </p>
    </article>
  );
};

export default Question;