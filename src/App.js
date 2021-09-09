import React from 'react'; 
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';

import NavBar from './components/NavBar'; 
import LandingPage from "./pages/LandingPage"; 
import Contact from './pages/Contact';
import Footer from "./components/Footer";
import ConfirmationSent from './pages/ConfirmationSent'; 



function App() {
  return (
    <Router> 
      <div> 
        <NavBar />
        <Switch> 
          <Route exact path = "/" component = {LandingPage}></Route>
          <Route exact path = "/contact" component = {Contact}></Route>
          <Route exact path = "/confirm" component = {ConfirmationSent}></Route>
        </Switch>
        <Footer/>
      </div>
    </Router>
  );
}

export default App;
