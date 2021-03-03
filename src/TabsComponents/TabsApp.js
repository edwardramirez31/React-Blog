import React, { useState, useEffect } from 'react'
import Info from './Info'
import Tabs from './Tabs'

var url = 'https://course-api.com/react-tabs-project'

function App() {
  const [loading, setLoading] = useState(true);
  const [data, setData] = useState([]);
  const [index, setIndex] = useState(0);

  const fetchURL = () => {
    setLoading(true);
    fetch(url)
      .then(response => {
        if (response.ok) {
          return response.json();
        } else {
          throw new Error('HTTP ERROR: '+ response.status);
        }
      })
      .then(data => {
        setData(data);
        setLoading(false);
      })
      .catch(err => {
        console.log(err);
        setLoading(false);
      });
  }

  useEffect(() => {
    fetchURL();
  }, [])

  if (loading) {
  return (
  <section className="section">
    <h2 className="title">Loading...</h2>
  </section>);
  }
  const info = data[index];
  return (
    <section className="section">
      <div className="title">
        <h2>Experience</h2>
        <div className="underline"></div>
      </div>
      <div className="jobs-center">
        <Tabs jobs={data} handleClick={setIndex} infoIndex={ index }/>
        <Info {...info} />
      </div>
      <button className="btn">More Info</button>
    </section>
  );
}

export default App;