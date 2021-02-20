import Home from './Home';
import Navbar from './Navbar';
import Counter from './Counter';
function App() {
  return (
    <div className="App">
      <Navbar />
      <div className="content">
        <Home />
      </div>
      <Counter buttonText="Add one">
        <p>This is a child prop</p>
      </Counter>

    </div>
  );
}

export default App;
