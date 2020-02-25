import React, {Component} from 'react';
import Nav from '../Components/Nav';
import { Button } from 'react-bootstrap';

import user from '../lib/MW-service.js';


class Pac extends Component {
     
state = {
    data: '',
    text: '',
    clv: '',
}



//Read user
read = (text) => {
    console.log(text)
    user.read ()
    .then((data) => { 
        this.setState({
            data,
        });
        console.log(data)
    })
    .catch(error => {
        this.setState({
            status: "error",
            isLoading: false
        });
    });
};


change = () => {
    user.change()
        .then((data) => {
            this.setState({
                clv: data,
            })
            console.log(data)
        })
        .catch(error => {
            this.setState({
                status: "error",
                isLoading: false
            });
        });
}


//Input text
handleChange = event => {
    const { name, value } = event.target;
    this.setState({ [name]: value });
    
};



render () {  
    const { text } = this.state
    const GLU = {"colectivos": [{
        "codColectivo": "GLU",
        "estadoBean": 3
        }]
    }

    return (
        <>
        <Nav/>
        <div>
            <input type="email"
                placeholder="Type something..." 
                id="myInput"
                name="text" 
                value={text}
                onChange={this.handleChange}/>
            <Button id='1' onClick={() => this.read(text)}>Pañales</Button>
            <Button id='2' onClick={() => this.change(GLU)}>Campo</Button>
            <Button variant="success"className='val' onClick={() => this.handleSubmit()}>VALIDAR</Button>
        </div>
    </>
    );
}
}
export default Pac;
