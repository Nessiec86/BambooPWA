import React, {Component} from 'react';
import ClockSign from './ClockSign';
import Clockjs from '../Components/Clockjs';
import Nav from '../Components/Nav';



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
        <div className="contain">
          <header className='App-header'>
            <h2>Registro Horario</h2>
          </header>
            <Clockjs />
            <ClockSign props={this.state}/>
          </div>
      </div>
    );
  }
}

export default Clock;