import React, {Component} from 'react';
import Clock from 'react-clock';

class Clockjs extends Component {
  
    state= {
      date: new Date(),
    }
  
    componentDidMount = () => {
      setInterval(
        () => this.setState({ date: new Date() }),
        1000
      );
    }
  
    render () {  
      
      return (
        <div className='react-clock'>
            <Clock
              value={this.state.date}
              size={250}
              renderNumbers={false}
              secondHandWidth={2}
              minuteHandWidth={3}
              hourHandWidth={5}
              hourMarksWidth ={5}
            />
        </div>
      );  
    }
  }
  
  
  
  export default Clockjs;