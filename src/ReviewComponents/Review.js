import React, { useState } from 'react';
import people from './data';
import { FaChevronLeft, FaChevronRight, FaQuoteRight } from 'react-icons/fa';

const Review = () => {
  const [person, setPerson] = useState(people[0]);

  const prevIndex = () => {
    let newIndex = person.id - 2;
    if (newIndex < 0) {
      setPerson(people[people.length - 1]);
    } else {
      setPerson(people[newIndex]);
    }
  }

  const nextIndex = () => {
    let index = person.id;
    if (index === people.length) {
      setPerson(people[0]);
    } else {
      setPerson(people[index]);
    }
  }

  const getRandom = (id) => {
    var persons = people.filter(person => id !== person.id);
    setPerson(persons[Math.floor(Math.random() * persons.length)]);
  }
  
  return (
    <article className="review">
      <div className="img-container">
        <img src={person.image} alt={person.name} className="person-img" />
        <span className="quote-icon">
          <FaQuoteRight />
        </span>
      </div>
      <h4 className="author">{person.name}</h4>
      <p className="job">{person.job}</p>
      <p className="info">{person.text}</p>
      <div className="button-container">
        <button className="prev-btn" onClick={prevIndex}>
          <FaChevronLeft />
        </button>
        <button className="next-btn" onClick={nextIndex}>
          <FaChevronRight />
        </button>
      </div>
      <button className="random-btn" onClick={() => getRandom(person.id)}>Surprise me</button>
    </article>
  );
};

export default Review;