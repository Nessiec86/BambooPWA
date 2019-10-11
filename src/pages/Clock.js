import React, {Component} from 'react';
import ClockSign from './ClockSign';
import Clockjs from '../Components/Clockjs';
import Nav from '../Components/Nav';
import Sidebar from '../Components/Sidebar';
import NewClock from '../Components/NewClock';

class Clock extends Component {
  
  state= {
    token: '',
    request: [],
    keyword:'',
    userid:0,
  }

  render () {  
  
    return (
      <div className='backgr'>
        <Nav/>
        {/* <Sidebar/> */}
        <div className="contain">
          <header className='App-header'>
            <h2>REGISTRO HORARIO</h2>
          </header>
            <NewClock/>
            {/* <Clockjs /> */}
            <ClockSign props={this.state}/>
          </div>
      </div>
    );
  }
}

export default Clock;