import axios from 'axios';


class Sale {
    constructor () {
        const APIURL2 = process.env.REACT_APP_PUBLIC_DOMAIN;
        const APIURL = process.env.REACT_APP_CMZ;
        const API_KEY = process.env.API_KEY;
        const UID = process.env.UID;
        this.Sale = axios.create ({
            baseURL: APIURL,
            headers: {
                'apiKey': API_KEY,
                'uidActividad': UID,
            },
        });
        console.log(APIURL2)
        console.log(APIURL)
    }

    read = () => {
        
        return this.Sale
            .get(`ventasTiendasTotal?fecha=2020-02-13`)
            .then(({ data }) => data);
    };
    
    // change = (id) => {
    //     return this.User
    //     .get(`idCheckSet/?keyword=${id}`)
    //     .then(({ data }) => data);
    //     };
    
};

const sale = new Sale();

export default sale;