import axios from 'axios';

const Key =  "BTNOHvjhuPGWDiuxyjG4rgZrRaNQkp";

class User {
    constructor () {
        const APIURL = process.env.REACT_APP_PUBLIC_DOMAIN;
        this.User = axios.create ({
            baseURL: "https://app.veritas.es/services-portlet/user",
            mode: 'no-cors',
            proxyHeaders: false,
            credentials: false,
            auth: {
                username: "nessc86@gmail.com",
                password: "CDN6y1oTz",
            },
            headers: {
                "Api-Key": Key,
                "Content-Type": "application/json",
            },
           
        });
    }

    read = () => {
        return this.User
        .get(`/`)
        .then(({ data }) => data);
        };
    // change = (id) => {
    //     return this.User
    //     .get(`idCheckSet/?keyword=${id}`)
    //     .then(({ data }) => data);
    //     };
}
const user = new User();

export default user;
  