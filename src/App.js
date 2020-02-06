import React from 'react';
import './App.css';
import Navigation from './Navigation';
import NewInventory from './NewInventory';
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
          <Route path="/newinventory" component={NewInventory}/>
          <Route path="/contact" component={Contact} />
        </Switch>
      </div>
    </Router>


  );
}

const Home = () => (
  <div>
    <h1>
      Dashboard
    </h1>
  </div>
);



export default App;
