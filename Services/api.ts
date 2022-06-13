import axios from 'axios';

const api = axios.create({
  baseURL: 'http://9642-179-34-0-133.ngrok.io',
});

export default api;