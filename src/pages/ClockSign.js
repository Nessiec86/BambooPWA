import React, { Component } from 'react';
import user from '../lib/apiservice';
// import ClockButtons from '../Components/ClockButtons';
import { Button } from 'react-bootstrap';

class Clocksign extends Component {

    state = {
        text: '',
        data: {
            data: {
                id:'',
                name: '',
                start: '',
            },
        },
        isLoading: true,
        status: "loading",
        working:'',
    }
    
    handleSubmit = (event) => {
        user.read (event)
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
    
    handleWork = (event) => {
        user.change (event)
        .then((working) => {
            this.setState({
                working,
            });
            this.handleSubmit(event)
        })
        .catch(error => {
            this.setState({
                status: "error",
                isLoading: false
            });
        });
    };

    handleSubmit2 = () => {
        user.tokenGet(undefined)
        
    };
    
   
    handleChange = event => {
        const { name, value } = event.target;
        this.setState({ [name]: value });
    };
    
       

    render() {
        const {text} = this.state
        const {id, name, start, } = this.state.data.data
        
         console.log(text.length) 
        return (
                <div className='container'>
                    <input
                        placeholder="DNI"
                        onChange={this.handleChange}
                        name="text"
                        value={text}
                    />
                    
                    <p>Usuario: {name}</p>
                    <Button variant="primary" onClick={() => this.handleSubmit(text)}>Validar</Button>
                    {name.length < 9 ?
                        <div>
                        </div>
                        :
                        <div>
                            {start === 0 ?
                                <Button variant="primary" onClick={() => this.handleWork(text)}>Empezar a trabajar</Button>
                                :
                                <Button variant="primary" onClick={() => this.handleWork(text)}>Dejar de trabajar</Button>
                            }
                        </div>
                        }
                </div>
        );
    }
};

  
export default Clocksign;