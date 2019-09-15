import axios from 'axios';


class User {
    constructor () {
        const APIURL = 'https://bamboo.veritas.es/service/';
        this.User = axios.create ({
            baseURL: APIURL,
        });
    }

    read = (id) => {
        return this.User
        .get(`idCheck/?keyword=${id}`)
        .then(({ data }) => data);
        };

    change = (id) => {
        return this.User
        .get(`idCheckSet/?keyword=${id}`)
        .then(({ data }) => data);
        };
    

    tokenGet = (token) => {
        
        const params = window.location.search.slice(1);
        const arg = params.split('&');
        console.log(params)
        
        for (var i=0; i<arg.length; i++) {
          // separate the keys and the values
          var a = arg[i].split('=');
          if ( a[0] === 'token') token = a[1];
         } console.log(token)
          if (typeof token === 'undefined') return 'NOTOKEN';
         else return token;
    }


};

const user = new User();

export default user;
  
/*
function apiConnect(resource,data,callback){

    var r = $.Deferred();
   
    if (typeof TOKEN == 'undefined') var TOKEN = tokenGet();
    
    $.ajax({
            url: APIURL,
            type: "post",
            dataType: "json",
            data: data,
            //headers: { "Content-Type":"application/json","Accept": "application/json","Authorization": TOKEN},
            headers: { "Authorization": TOKEN},
            cache: false,
            contentType: false,
            processData: false
            
        })
        .done(function(res){
            callback(res);
            });
        return r; 
    
    }
    
    
    
    function tokenGet(){
            params = window.location.search.slice(1);
            arg = params.split('&');
            for (var i=0; i<arg.length; i++) {
              // separate the keys and the values
              var a = arg[i].split('=');
              if ( a[0] == 'token') token = a[1];
             }
             if (typeof token === 'undefined') return 'NOTOKEN';
             else return token;
    }
*/