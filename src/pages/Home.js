import React, {Component} from 'react';
import {Link} from 'react-router-dom';
import {Button} from 'react-bootstrap';
import logo from '../logo.svg';
import logoveri from '../img/layout_set_logo.png';
import LoadingDots from '../Components/LoadingDots';
import { setTimeout } from 'timers';

class Home extends Component {

  state = {
    isLoading: true,
    status: "loading",  
  }

  componentDidMount(){
   
    setTimeout(() => {
      this.setState({
        status: "loaded",
        isLoading: false
      })
    
    }, 1000);

    };
  
  render () { 
   
    const { isLoading } = this.state;
    return (
      isLoading ? 
      <div className='App'>
        <LoadingDots/>
      </div>
       :
        <div className="App">
          <div className='logos'>
            <img src={logoveri} style={{width: '30%', margin:'5% auto'}} alt='logo-veritas'/>
            <img src={logo} className="App-logo" alt="logo" />
          </div>
          <div className='buttons'>
            <Link to = '/Clock'>
                <Button  variant="outline-warning" style={{margin:'5rem 0 1rem 0', fontWeight:'bolder', width: '6rem '}}>Clock</Button>
            </Link>
            <Link to = '/News'>
                <Button variant="outline-warning" style={{margin:'5rem 0 1rem 0', width: '6rem'}}>News</Button>
            </Link>
            <Link to = '/Profile'>
                <Button variant="outline-warning" style={{margin:'5rem 0 1rem 0', width: '6rem'}}>User Profile</Button>
            </Link>
            <Link to = '/Sales'>
                <Button variant="outline-warning" style={{margin:'5rem 0 1rem 0', width: '6rem'}}>Sales</Button>
            </Link>
            <Link to = '/Pac'>
                <Button variant="outline-warning" style={{margin:'5rem 0 1rem 0', width: '6rem'}}>Pac</Button>
            </Link>
          </div>
        </div>
    );
  }
}

export default Home;