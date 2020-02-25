import React, {Component} from 'react';
import Nav from '../Components/Nav';
import { Button } from 'react-bootstrap';

import sales from '../lib/Cmz-service.js';


class Sales extends Component {
     
state = {
    data: '',
}
handleSubmit = () => {
    sales.read ()
};

render () {  
    
    return (
        <>
        <Nav/>
        <div>
        <table>
            <thead>
                <tr>
                <th>Month</th>
                <th>Savings</th>
                </tr>
            </thead>
            <tbody>
                <tr>
                <td>January</td>
                <td>$100</td>
                </tr>
                <tr>
                <td>February</td>
                <td>$80</td>
                </tr>
            </tbody>
            <tfoot>
                <tr>
                <td>Sum</td>
                <td>$180</td>
                </tr>
            </tfoot>
            </table>
            <Button variant="success"className='val' onClick={() => this.handleSubmit()}>VALIDAR</Button>
        </div>
    </>
    );
}
}
export default Sales;