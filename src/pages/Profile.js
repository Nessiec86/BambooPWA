import React, {Component} from 'react';
import Nav from '../Components/Nav';
import { Button } from 'react-bootstrap';
import user from '../lib/Comerzzia-service';


class News extends Component {

   
state = {
    data: '',
}

    handleSubmit = () => {
        console.log("estoy en boton")
        user.read ()
        .then((data) => { 
                this.setState({
                    data,
                });
            
        })
        .catch(error => {
           
            });
        
    };
  
  render () {  
      console.log(this.state.data)
    return (
        <>
        <Nav/>
        <Button variant="success"className='val' onClick={() => this.handleSubmit()}>Validar</Button>
        </>
    )
  }
}

export default News;