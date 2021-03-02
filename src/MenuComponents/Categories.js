import React, {useState} from 'react';

const Categories = ({ setItems, data }) => {
  const allCategories = ["all", ...new Set(data.map(item => item.category))];
  
  const handleClick = (e) => {
    const category = e.target.innerHTML;
    if (category === "all") {
      setItems(data);
    } else {
      setItems(data.filter(item => item.category === category));
    }
  }
  return (
    <div className="btn-container">
      {allCategories.map((category, index) => {
        return (
          <button
            key={index}
            className="filter-btn"
            onClick={handleClick}
          >
            {category}
          </button>
        )
      })}
    </div>
  );
};

export default Categories;