import { useState } from 'react';

const handleClick = (e) => {
  console.log(`Hello`);
  e.preventDefault();
};

const handleSecondClick = (e, name) => {
  console.log(`Hello ${name}`);
  e.target.innerHTML === name ? e.target.innerHTML = "Alfons": e.target.innerHTML = name;
  e.preventDefault();
};

function Home() {
  const [name, setName] = useState("Alfonso");
  const [age, setAge] = useState(21);
  const alterData = (e) => {
    if (name === "Alfonso") {
      setName('Shawn');
      setAge(30);
    } else {
      setName('Alfonso');
      setAge(21)
    }
  }
  return ( 
    <div className="home">
      <h2>Home Page</h2>
      <p>{name} is { age } years old</p>
      <button onClick={alterData}>Alter name and age</button><br/>
      <button onClick={handleClick}>Click Me</button><br/>
      <button onClick={(e) => handleSecondClick(e, 'Louis')}>Click Me Again</button>
    </div>
  );
}
export default Home;