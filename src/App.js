import './App.css';
import Navbar from './components/navbar/navbar';
import Home from './components/navbar/Home';
import About from './components/navbar/About';
import Service from './components/navbar/service';
import Projects from './components/navbar/projects';
import Contact from './components/navbar/contact';
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link
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