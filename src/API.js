import axios from 'axios';

const url = 'http://localhost:8888/classes';

export const fetchClassess = ()=>axios.get(url);