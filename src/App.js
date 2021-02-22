import Home from './Home';
import Navbar from './Navbar';
import Counter from './Counter';
import Create from './Create';
import {BrowserRouter as Router, Switch, Route} from 'react-router-dom';
function App() {
  return (
    <Router>
      <div className="App">
        <Navbar />
        <div className="content">
          <Switch>
            <Route path='/counter'>
              <Counter buttonText="Add one">
                <p>This is a child prop</p>
              </Counter>
            </Route>
            <Route path='/create'>
              <Create />
            </Route>
            <Route exact path='/create/ward'>
              <h2>Create Ward</h2>
            </Route>
            <Route path='/'>
              <Home />
            </Route>
          </Switch>
        </div>
      </div>
    </Router>
  );
}

export default App;
