import React, { useState, useEffect } from 'react';
import { FiChevronRight, FiChevronLeft } from 'react-icons/fi';
import { FaQuoteRight } from 'react-icons/fa';
import data from './data';
function App() {
  const [people, setPeople] = useState(data);
  const [globalIndex, setGlobalIndex] = useState(0);

  useEffect(() => {
    if (globalIndex === people.length) {
      setGlobalIndex(0);
    } else if (globalIndex < 0) {
      setGlobalIndex(people.length - 1);
    }
  }, [globalIndex]);

  useEffect(() => {
    console.log("mount")
    console.log(globalIndex);
    let autoSlider = setInterval(() => {
      setGlobalIndex(globalIndex + 1);
    }, 5000);

    return () => {
      console.log("cleanup");
      console.log(`${globalIndex} cleans`);
      clearInterval(autoSlider);
    };
  }, [globalIndex]);

  return (
    <main className="section">
      <div className="title">
        <h2>
          <span>/</span>
          Reviews
        </h2>
      </div>
      <div className="section-center">
        {people.map((person, index) => {
          let className = "nextSlide";
          if (globalIndex === index) {
            className = 'activeSlide';
          }
          if (globalIndex === index + 1 || (globalIndex === 0 && index === people.length - 1)) {
            className = 'lastSlide';
          }
          return (
            <article className={className} key={person.id}>
              <img src={person.image} alt={person} className="person-img"/>
              <h4>{person.name}</h4>
              <p className="title">
                {person.title}
              </p>
              <p className="text">
                {person.quote}
              </p>
              <FaQuoteRight className="icon" />
            </article>
        )})}
        
        
        <button className="prev" onClick={() => setGlobalIndex(globalIndex-1)}>
          <FiChevronLeft />
        </button>
        <button className="next" onClick={() => setGlobalIndex(globalIndex + 1)}> 
          <FiChevronRight />
        </button>
      </div>
    </main>
  );
}

export default App;