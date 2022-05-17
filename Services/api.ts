import axios from 'axios';

const api = axios.create({
  baseURL: 'http://4f2d-179-250-12-198.ngrok.io',
});

export default api;