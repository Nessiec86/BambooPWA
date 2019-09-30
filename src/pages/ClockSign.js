import React, { Component } from 'react';
import user from '../lib/api-service';
// import ClockButtons from '../Components/ClockButtons';
import { Button } from 'react-bootstrap';

class Clocksign extends Component {

    state = {
        text: '',
        date: '',
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
            if (data.data.id > 0) {
                this.setState({
                    data,
                });
            }
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
                date: new Date().toString(),
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
        let time = 0
        const { text } = this.state
        const { name, start } = this.state.data.data
        const dateObj = new Date(start * 1000); 
        const utcString = dateObj.toString(); 
        time = utcString.slice(16, 24); 
        
        return (
                <div className='clock-sign'>
                    <input
                        placeholder="DNI"
                        onChange={this.handleChange}
                        name="text"
                        value={text}
                    />
                    <p style={{margin:'1rem 0'}}>Usuario: {name}</p>
                    {start > 0 ?
                        <p>Hora de Entrada: {time}</p>
                    :
                        <p></p>
                    }
                    <Button variant="success"className='val' onClick={() => this.handleSubmit(text)}>Validar</Button>
                    {name.length < 9 ?
                        <div>
                        </div>
                        :
                        <div style={{display:'flex', justifyContent:'center'}}>
                            {start === 0 ?
                                <Button variant="success" className='work' onClick={() => this.handleWork(text)}>Empezar a trabajar</Button>
                                :
                                <>
                                <Button variant="danger" className='work' onClick={() => this.handleWork(text)}>Dejar de trabajar</Button>
                                </>
                            }
                        </div>
                    }
                </div>
        );
    }
};

  
export default Clocksign;