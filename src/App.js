import './App.css';
import Nav from './components/navbar/Navbar';
import About from './components/navbar/About';
import Portfolio from './components/navbar/Portfolio';
import Home from './components/navbar/Home';
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";

function App() {
  return (
    <Router>
      <div className="App">
        <Switch>
          <Route path='/about'>
            <Nav />
            <About />
          </Route>
          <Route path='/portfolio'>
            <Nav />
            <Portfolio />
          </Route>
          <Route path='/'>
            <Nav />
            <Home />
          </Route>
        </Switch>
      </div>
    </Router>
  );
}

export default App;
