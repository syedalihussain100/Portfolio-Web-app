import './App.css';
import Nav from './components/navbar/Navbar';
import About from './components/navbar/About';
import Portfolio from './components/navbar/Portfolio';
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
        </Switch>
      </div>
    </Router>
  );
}

export default App;
