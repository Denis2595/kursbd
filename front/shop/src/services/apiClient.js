import axios from "axios";

const apiClient = axios.create({
    baseURL: 'http://localhost:5282', //заменить на нужный url
    //baseURL: 'https://wlhdn4l3-5282.euw.devtunnels.ms', //заменить на нужный url
    headers: {
    'Content-Type': 'application/json',
  },
});

apiClient.interceptors.request.use((config) => {
    const token = localStorage.getItem('authToken');
    if (token) {
      config.headers.Authorization = `Bearer ${token}`;
    }
    return config;
  },
  (error) => {
    return Promise.reject(error);
});

export default apiClient;