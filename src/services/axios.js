import axios from 'axios';

const app = axios.create({
  baseURL: 'https://apisaurussegmentos.azurewebsites.net/api/',
});

export default app;
