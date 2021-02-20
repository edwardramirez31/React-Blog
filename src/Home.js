import { useState, useEffect } from 'react';
import BlogList from './BlogList'
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
  
  const [blogs, setBlogs] = useState([
    {title: "Blog 1", body: "This is the first blog", author: "Edward", id: 1},
    {title: "Blog 2", body: "This is the second blog", author: "Shawn", id: 2},
    {title: "Blog 3", body: "This is the third blog", author: "DojONinja", id: 3},
    {title: "Blog 4", body: "This is the fourth blog", author: "Edward", id: 4},
  ]);
  function handleDelete(id) {
    setBlogs(blogs.filter(blog => blog.id !== id));
  }
  //UseEffect Hook
  // Es un Hook que me permite correr codigo siempre que se renderice el JSX
  useEffect(() => {
    console.log(blogs);
  });

  
  return ( 
    <div className="home">
      <BlogList blogs={blogs} title="All Posts" handleDelete={handleDelete}/>
      <BlogList blogs={blogs.filter(blog => blog.author==="Edward")} title="Edward Posts" />
      <p>{name} is { age } years old</p>
      <button onClick={alterData}>Alter name and age</button><br/>
      <button onClick={handleClick}>Click Me</button><br/>
      <button onClick={(e) => handleSecondClick(e, 'Louis')}>Click Me Again</button>
    </div>
  );
}
export default Home;