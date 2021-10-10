import './App.css';
import React, { useState, useEffect } from 'react';
import Navbar from './navbar/Navbar';
import Home from './navbar/Home';
import Projects from './navbar/projects';
import Contact from './navbar/contact';
import Blog from './navbar/Blog.js';
import HashLoader from "react-spinners/HashLoader";
import {
  BrowserRouter as Router,
  Switch,
  Route,
} from "react-router-dom";


function App() {
  const [loader, setLoader] = useState(false);

  useEffect(() => {
    setLoader(true);
    setTimeout(() => {
      setLoader(false)
    }, 3000);
  }, [])
  return (

    <Router>
      <div className="App">
        {loader ?
          (
            <div className='mainLoading'>
              <HashLoader color={'6638D3'}
                loading={loader} size={100} /></div>
          )
          :
          <Switch>
            <Route path='/blog'>
              <Navbar />
              <Blog />
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
        }
      </div>
    </Router>
  );
}

export default App