import React from 'react';
import { FaAngleDoubleRight } from 'react-icons/fa'

const Info = ({ title, duties, company, dates }) => {
  return ( 
    <article className="job-info">
      <h3>{title}</h3>
      <h4>{company}</h4>
      <p className="job-date">{ dates }</p>
      {duties.map((item, index) => (
        <div className="job-desc" key={index}>
          <FaAngleDoubleRight FaAngleDoubleRight className="job-icon"></FaAngleDoubleRight>
          <p>
            {item}
          </p>
        </div>
      ))}
    </article>
  );
}
 
export default Info;