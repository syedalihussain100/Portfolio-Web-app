import './App.css';

import Navbar from './navbar/Navbar';
import Home from './navbar/Home';
import About from './navbar/About';
import Service from './navbar/service';
import Projects from './navbar/projects';
import Contact from './navbar/contact';
import {
  BrowserRouter as Router,
  Switch,
  Route,
} from "react-router-dom";




function App() {
  return (

    <Router>
      <div className="App">
        <Switch>
          <Route path='/about'>
            <Navbar />
            <About />
          </Route>

          <Route path='/service'>
            <Navbar />
            <Service />
          </Route>

          <Route path='/projects'>
            <Navbar />
            <Projects />
          </Route>

          <Route path='/Contact'>
            <Navbar />
            <Contact />
          </Route>

          <Route path='/'>
            <Navbar />
            <Home />
          </Route>
        </Switch>
      </div>
    </Router>
  );
}

export default App