import axios from 'axios';


//const url = 'https://my-json-server.typicode.com/Integrify-Finland/jsonserver/users';
const url = ' http://localhost:8888/users';
const getApi= url => axios.get(url);

export const fetchUsers = (callback) => getApi(url)
    .then(response => callback(response))
    .catch(error => callback(error));