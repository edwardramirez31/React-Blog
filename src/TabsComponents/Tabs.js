const Tabs = ({ jobs, infoIndex, handleClick }) => {
  
  return ( 
    <div className="btn-container">
      {jobs.map((item, index) => (
        <button
          key={item.id}
          className={`job-btn ${infoIndex === index && "active-btn"}`}
          onClick={() => handleClick(index)}
        >
          {item.company}
        </button>
      ))}
    </div>
  );
}
 
export default Tabs;