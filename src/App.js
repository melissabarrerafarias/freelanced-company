import React from 'react'; 
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';

import NavBar from './components/NavBar'; 
import LandingPage from "./pages/LandingPage"; 
import Contact from './pages/Contact';
import Footer from "./components/Footer";



function App() {
  return (
    <Router> 
      <div> 
        <NavBar />
        <Switch> 
          <Route exact path = "/" component = {LandingPage}></Route>
          <Route exact path = "/contact" component = {Contact}></Route>
        </Switch>
        <Footer/>
      </div>
    </Router>
  );
}

export default App;
