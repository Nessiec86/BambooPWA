import axios from 'axios';


class User {
    constructor () {
        const APIURL = process.env.REACT_APP_MW;
        const apiKey = process.env.REACT_APP_API_KEY;
        const id = process.env.REACT_APP_ID_ACCESS;
        
        this.User = axios.create ({
            baseURL: APIURL,
            headers: {
                'apikey': apiKey,
                'id-access': id,
                'Content-Type': 'application/json'
            }
        });
        
        
    }

    read = (text) => {
        console.log(process.env)
        return this.User
            .get(`client/65171`)
            .then(({ data }) => data);
    };
    
    change = (GLU) => {
        return this.User
        .put(`fidelity?idFidelizado=65171&data=${GLU}` )
        .then(({ data }) => data);
        };
    
};

const user = new User();

export default user;
  