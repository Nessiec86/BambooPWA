import React, {Component} from 'react';
import {Link} from 'react-router-dom';
import {Button} from 'react-bootstrap';
import logo from '../logo.svg';
import logoveri from '../img/layout_set_logo.png';
import LoadingDots from '../Components/LoadingDots';
import { setTimeout } from 'timers';
import { askForPermissioToReceiveNotifications } from '../lib/Push-notifications';

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
                <Button  variant="outline-warning" style={{margin:'5rem 0 1rem 0', fontWeight:'bolder', width: '6rem '}}>Clock</Button>
            </Link>
            <Link to = '/News'>
                <Button variant="outline-warning" style={{width: '6rem'}}>News</Button>
            </Link>
            <Link to = '/Profile'>
                <Button variant="outline-warning" style={{margin:'1rem 0 15rem 0', width: '6rem'}}>User Profile</Button>
            </Link>
          <Button  variant='outline-warning' onClick={askForPermissioToReceiveNotifications} >
            Clique aqui para receber notificações
          </Button>


        </div>
    );
  }
}

export default Home;