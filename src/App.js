import React, {Component} from 'react';
import {Route, Switch} from 'react-router-dom';
import './App.css';
import Home from './pages/Home';
import NotFound from './Components/NotFound';

class App extends Component {
  
  render () {  
    return (
      <Switch>
        <Route exact path="/" component={Home} />
        <Route path='*' exact={true} component={NotFound} />
      </Switch>
    );
  }
}

export default App;