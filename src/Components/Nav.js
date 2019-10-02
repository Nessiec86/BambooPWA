import React, { Component } from "react";
import logoveri from '../img/layout_set_logo.png';
import arrow from '../img/back.svg';
import { Button } from 'react-bootstrap';

class Nav extends Component {
    
    handleReturn = () => {
        window.history.back()
    }

    render() {

        return (
            <nav className='nav'>
                <div>
                    <img src={logoveri} alt="veri" style={{width: '5rem'}}></img>
                </div>
                {/* <div>
                <Link to="/Private/" >
                    <img src="../Images/mysmar-t@3x.png" alt="my smar-t" style={{width: '3rem'}}></img>  
                </Link>
                </div>
                <div>
                <Link to="/Profile/" >
                    <img src="../Images/account@3x.png" alt="my smar-t" style={{width: '3rem'}}></img>  
                </Link>
                </div> */}
                <div>
                    <Button style={{backgroundColor:'transparent', borderColor:'transparent'}}onClick={()=> this.handleReturn()}><img src={arrow} alt="log" style={{width: '2.5rem', height: '1rem'}}/></Button>
                </div>
            </nav>
        );
    }
}

export default Nav;