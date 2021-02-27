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
  
  const [blogs, setBlogs] = useState(null);
  function handleDelete(id) {
    setBlogs(blogs.filter(blog => blog.id !== id));
  }
  //UseEffect Hook
  // Es un Hook que me permite correr codigo siempre que se renderice el JSX
  const [isLoading, setIsLoading] = useState(true);
  const [error, setError] = useState(null);
  // Abort Controller 
  var controller = new AbortController();
  var signal = controller.signal;
  useEffect(() => {
    // npx json-server --watch data/db.json --port 8000
    fetch('http://localhost:8000/blogs', {
      signal
    })
      .then(response => {
        console.log(response);
        if (response.ok) {
          return response.json();
        } else {
          throw new Error("HTTP ERROR: " + response.status);
        }
      })
      .then(data => {
        setBlogs(data);
        setIsLoading(false);
        // en caso de que haga mas peticiones despues, quiero quitar el error
        setError(null);
      })
      .catch(err => {
        if (err.name === "AbortError") {
          console.log("Fetch aborted");
        } else {
          setError(true);
          setIsLoading(false);
          console.log(err);
        }
      });
    
    return () => {
      console.log('Cleanup')
      controller.abort();
    }
  }, []);

  
  return ( 
    <div className="home">
      {error && <div>Something went wrong</div>}
      {isLoading && <div>Loading...</div>}
      {blogs && <BlogList blogs={blogs} title="All Posts" handleDelete={handleDelete} />}
      {blogs && <BlogList blogs={blogs.filter(blog => blog.author === "mario")} title="Mario's Posts" />}
      <p>{name} is { age } years old</p>
      <button onClick={alterData}>Alter name and age</button><br/>
      <button onClick={handleClick}>Click Me</button><br/>
      <button onClick={(e) => handleSecondClick(e, 'Louis')}>Click Me Again</button>
    </div>
  );
}
export default Home;