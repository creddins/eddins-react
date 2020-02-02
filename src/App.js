import React from 'react';
import './App.css';
import Navigation from './Navigation';
import About from './About';
import Contact from './Contact';
import {BrowserRouter as Router, Switch, Route,} from "react-router-dom";
import 'bootstrap/dist/css/bootstrap.min.css';



function App() {
  return (
    <Router>
      <div className="App">
        <Navigation/>
        <Switch>
          <Route path="/" exact component={Home} />
          <Route path="/about" component={About}/>
          <Route path="/contact" component={Contact} />
        </Switch>
      </div>
    </Router>


  );
}

const Home = () => (
  <div>
    <h1>
      Home Page
    </h1>
  </div>
);

export default App;
