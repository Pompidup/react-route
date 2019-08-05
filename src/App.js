import React from 'react';
import { Route, Switch, Redirect } from "react-router-dom";

import Home from './views/Home/Home';
import About from './views/About/About';
import TopicList from './views/TopicList/TopicList'
import NoMatch from './views/NoMatch/NoMatch'
import NavBar from './components/NavBar/NavBar';

import './App.css';

export const App = () => {
    return (
      <div>
        <NavBar />
        <br />
        <Switch>
          <Route exact path="/Home" component={Home} />
          <Route exact path="/">
            <Redirect to="/Home" />
          </Route>
          <Route exact path="/About" component={About} />
          {/* Cette route ne matchera jamais ! */}
          <Route exact path="/About" component={Home} />
          <Route exact path="/Topics" component={TopicList} />
          <Route path="/Topics/:topicId" component={TopicList} />
          <Route component={NoMatch} />
        </Switch>
      </div>
    );
  }
  
export default App;
