import React, { Component } from 'react';
import { Route, BrowserRouter, Switch, NavLink } from 'react-router-dom';
import './App.css';
import Home from './Home';
import History from './History';


class App extends Component {

  render() {
    return (

      <BrowserRouter>
        <div>
          <NavLink exact to="/"
            activeStyle={{
              fontWeight: "bold",
              color: "red"
            }}>
            Home
             </NavLink>
          <NavLink to="/history"
            activeStyle={{
              fontWeight: "bold",
              color: "red"
            }}>
            History
               </NavLink>


          <Switch>
            <Route exact path="/" component={Home} />
            <Route path="/history" component={History} />
          </Switch>
        </div>
      </BrowserRouter>
    );
  }
}

export default App;
