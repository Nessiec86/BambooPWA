import React, {Component} from 'react';
import Nav from '../Components/Nav';
import { Button } from 'react-bootstrap';

import user from '../lib/MW-service.js';


class Air extends Component {
     
state = {
    data: '',
    text: '',
    clv: '',
}




//Input text
handleChange = event => {
    const { name, value } = event.target;
    this.setState({ [name]: value });
    
};



render () {

    const SerialPort = require('serialport')
    const Readline = require('@serialport/parser-readline')
    const port = new SerialPort('/dev/tty.AirPodsdeNess-Wirelessi', { baudRate: 9600 })
    
    const parser = new Readline()
    port.pipe(parser)
    
    parser.on('data', line => console.log(`> ${line}`))
    port.write('ROBOT POWER ON\n')
    console.log(parser)
    //> ROBOT ONLINE

    return (
        <>
            <Nav/>
            <div>
                
            </div>
        </>
    );
}
}
export default Air;
