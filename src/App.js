import React, {Component} from 'react';
import {Route, Switch} from 'react-router-dom';
import './App.css';
import Clock from './pages/Clock';
import News from './pages/News';
import Home from './pages/Home';
import Profile from './pages/Profile';
import NotFound from './Components/NotFound';
require('dotenv').config();

class App extends Component {
  
  render () {  
    return (
      <Switch>
        <Route exact path="/" component={Home} />
        <Route exact path="/Clock" component={Clock} />
        <Route exact path='/news' component={News}/>
        <Route exact path="/Profile" component={Profile} />
        <Route path='*' exact={true} component={NotFound} />
      </Switch>
    );
  }
}

export default App;