import { useParams, useHistory } from 'react-router-dom';
import { useState, useEffect } from 'react';

const BlogDetail = () => {
  var { id } = useParams();
  const [blog, setBlog] = useState(null);
  const history = useHistory();
  useEffect(() => {
    const controller = new AbortController();
    const signal = controller.signal;
    fetch(`http://localhost:8000/blogs/${id}`, {
      signal
    })
      .then(response => {
        if (response.ok) {
          return response.json();
        } else {
          throw new Error('Fetch Error: '+ response.status);
        }
      })
      .then(data => {
        setBlog(data);
      })
      .catch(error => {
        if (error.name === "AbortError") {
          console.log("Fetch aborted");
        } else {
          console.log(error);
        }
      });
    
    return () => controller.abort();
  }, []);

  const handleDelete = () => {
    fetch(`http://localhost:8000/blogs/${id}`, {
      method: 'DELETE',
    })
      .then(response => {
        if (response.ok) {
          return response.text();
        } else {
          throw new Error("HTTP ERROR: " + response.status);
      }
      })
      .then(data => {
        if (data === "{}") {
          console.log('Blog deleted')
        } else {
          console.log(data);
        }
        history.push('/');
      })
      .catch(error => console.log(error));
  }
  return ( 
    <div className="blog-details">
      {blog && <h2>{blog.title}</h2>}
      {blog && <p>Written by {blog.author}</p>}
      {blog && <p>{blog.body}</p>}
      <button onClick={handleDelete}>Delete Blog</button>
    </div >
   );
}

export default BlogDetail;