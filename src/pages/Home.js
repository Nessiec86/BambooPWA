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
            <img src={logoveri} style={{width: '30%', margin:'5% auto'}} alt='logo-veritas'/>
            <img src={logo} className="App-logo" alt="logo" />
            <Link to = '/Clock'>
                <Button style={{margin:'10rem 0 1rem 0'}}>Clock</Button>
            </Link>
            <Link to = '/News'>
                <Button >News</Button>
            </Link>
            <Link to = '/Canvas'>
                <Button style={{margin:'1rem 0 15rem 0'}}>Canvas</Button>
            </Link>
        </div>
    );
  }
}

export default Home;