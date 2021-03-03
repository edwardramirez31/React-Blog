import Home from './Home';
import Navbar from './Navbar';
import Counter from './Counter';
import Create from './Create';
import Screen from './Screen';
import {BrowserRouter as Router, Switch, Route} from 'react-router-dom';
import BlogDetail from './BlogDetail';
import NotFound from './NotFound';
import ReviewApp from './ReviewComponents/ReviewApp';
import AccordionApp from './AccordionComponents/AccordionApp';
import MenuApp from './MenuComponents/MenuApp';
import TabsApp from './TabsComponents/TabsApp';
import SliderApp from './SliderComponents/SliderApp';
function App() {
  return (
    <Router>
      <div className="App">
        <div className="content">
          <Switch>
            <Route path='/counter'>
              <Counter buttonText="Add one">
                <p>This is a child prop</p>
              </Counter>
            </Route>
            <Route path='/create'>
              <Navbar />
              <Create />
            </Route>
            <Route exact path='/create/ward'>
              <h2>Create Ward</h2>
            </Route>
            <Route exact path='/'>
              <Home />
            </Route>
            <Route path='/screen'>
              <Screen />
            </Route>
            <Route path='/blogs/:id'>
              <BlogDetail />
            </Route>
            <Route path='/review'>
              <ReviewApp />
            </Route>
            <Route path='/accordion'>
              <AccordionApp />
            </Route>
            <Route path='/menu'>
              <MenuApp />
            </Route>
            <Route path='/tabs'>
              <TabsApp />
            </Route>
            <Route path='/slider'>
              <SliderApp />
            </Route>
            <Route path='*'>
              <NotFound />
            </Route>
          </Switch>
        </div>
      </div>
    </Router>
  );
}

export default App;
