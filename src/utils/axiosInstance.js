import axios from 'axios';

const axiosInstance = axios.create({
  baseURL: 'https://pet-adoption-platform-backend-nlw4.onrender.com',  // your deployed backend URL
  headers: {
    'Content-Type': 'application/json'
  }
});

export default axiosInstance;
