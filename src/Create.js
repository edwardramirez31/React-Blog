import {useState} from "react"
import Screen from './Screen'
import {useHistory} from "react-router-dom"
const Create = () => {
  const [display, setDisplay] = useState(true)
  const [title, setTitle] = useState('');
  const [body, setBody] = useState('');
  const [author, setAuthor] = useState('mario');
  const [loading, setLoading] = useState(null);
  const history = useHistory();

  const submitBlog = (e) => {
    e.preventDefault();
    setLoading(true);
    const newBlog = { title, body, author }
    fetch('http://localhost:8000/blogs', { 
      method: 'POST', 
      headers: { 'Content-Type': 'application/json' }, 
      body: JSON.stringify(newBlog)
    })
      .then(response => {
        if (response.ok) {
          setLoading(false);
          console.log(response);
          return response.json();
        } else {
          throw new Error('HTTP ERROR: ' + response.status);
        }
        
      })
      .then(data => {
        console.log(data);
        history.push('/');
      })
      .catch(err => {
        console.log(err);
      });
    
  }
  return (
    <div className="create">
      <h2>Add a New Blog</h2>
      <form onSubmit={submitBlog}>
        <label>Blog title:</label>
        <input
          type="text"
          value={title}
          onChange={(e) => setTitle(e.target.value)}
          required
        />
        <label>Blog body:</label>
        <textarea
          value={body}
          onChange={(e) => setBody(e.target.value)}
          required
        >
          
        </textarea>
        <label >Author</label>
        <select value={author} onChange={(e) => setAuthor(e.target.value)}>
          <option value="mario">mario</option>
          <option value="luigi">luigi</option>
        </select>
        {loading && <button disabled>Adding...</button>}
        {!loading && <button>Add a blog</button>}
      </form>
      {/*cuando ubn boton es presionado dentro de un formulario este desencadena un submit event en el form tag  */}
      <button onClick={() => setDisplay(!display)}>Toggle Coordinates</button>
      {display && <Screen />}
    </div>
  );
}

export default Create;
