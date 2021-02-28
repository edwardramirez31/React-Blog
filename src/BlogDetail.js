import { useParams } from 'react-router-dom';
import { useState, useEffect } from 'react';

const BlogDetail = () => {
  var { id } = useParams();
  const [blog, setBlog] = useState(null);

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
        console.log(data);
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

  return ( 
    <div className="blog-details">
      {blog && <h2>{blog.title}</h2>}
      {blog && <p>Written by {blog.author}</p>}
    </div >
   );
}

export default BlogDetail;