import React, {Component} from 'react';
import {Link} from 'react-router-dom';
import {Button} from 'react-bootstrap';
import logo from '../logo.svg';
import logo2 from '../img/ruleta.png';


class Home extends Component {


  render () {  
  
    return (
        <div className="App">
            <img src={logo} className="App-logo" alt="logo" />
            <img src={logo2} style={{width:'15rem', heigth: '15rem'}} alt="logo2" />
            <Link to = '/Clock'>
                <Button style={{margin:'25rem 0 5rem 0'}}>Enter</Button>
            </Link>
            <Link to = '/Canvas'>
                <Button style={{margin:'1rem 0 15rem 0'}}>Canvas</Button>
            </Link>
        </div>
    );
  }
}

export default Home;