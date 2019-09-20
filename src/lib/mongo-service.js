import axios from 'axios';


class Data {
    constructor() {
        this.Data = axios.create({
          baseURL: 'localhost:5000',
          withCredentials: true
        });
      }
    
      create = (data) => {
        const { premio } = data;
        return this.Data
          .post("/", { premio })
          .then(({ data }) => data);
      }
    }

const data = new Data();

export default data;
