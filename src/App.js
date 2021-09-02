import logo from './logo.svg';
import './App.css';
import React from 'react'; 
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';

import NavBar from './components/NavBar'; 
import LandingPage from "./pages/LandingPage"; 


function App() {
  return (
    <Router> 
      <div> 
        <NavBar />
        <Switch> 
          <Route exact path = "/" component = {LandingPage}></Route>
        </Switch>
      </div>
    </Router>
  );
}

export default App;
