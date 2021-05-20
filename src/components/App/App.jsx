import React from 'react';
import axios from 'axios';
// import './App.css';


import {
  HashRouter as Router,
  Route,
  Switch,
  Link,
  NavLink
} from 'react-router-dom';

function App() {

  return (

    <Router>
      <ul>
        <li>
          <NavLink to="/admin">REMOVE WHEN DONE</NavLink>
        </li>
        <li>
          <NavLink to="/">Home</NavLink>
        </li>
        <li>
          <NavLink to="/customer">Customer</NavLink>
        </li>
        <li>
          <NavLink to="/checkout">Checkout</NavLink>
        </li>
      </ul>

      <div className='App'>
        <header className='App-header'>
          <h1 className='App-title'>Prime Pizza</h1>
        </header>

        <img src='images/pizza_photo.png' />
        <p>Pizza is great.</p>


        <Switch>
          <Route path="/admin">
            <p>admin</p>
          </Route>
          <Route path="/customer">
            <p>customer</p>
          </Route>
          <Route path="/checkout">
            <p>checkout</p>
          </Route>
          <Route path="/">
            <p>home</p>
          </Route>
        </Switch>

      </div>
    </Router >
  );
}

export default App;
