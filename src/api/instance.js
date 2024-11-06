import axios from 'axios';

export const instance = axios.create({

    baseURL: process.env.REACT_APP_BASE_URL || "http://localhost:8080",
    withCredentials: true,
    headers: {
        'Content-Type': 'application/json',
        Authorization: 'Bearer ' + sessionStorage.getItem('accessToken'),

    },
    timeout: 60000,

});

instance.interceptors.request.use(
    (config) => {
        const token = sessionStorage.getItem('accessToken');
        if (!token){
            console.warn("Authorization token is missing");
            window.locaiton.href = "/login";
            throw new axios.Cancel("No Authorization token found");
        }
        config.headers.Authorization = `Bearer ${token}`;
        return config;
    },
        (error) => Promise.reject(error),
);

instance.interceptors.response.use(
    (response) => {
        if (response.status === 200) {
            return response;
        }
        return response;
    },
    (error) => {
        if(error.code == "ECONNABORTED"){
            console.log("Request timeout");
            window.location.href = "/error";
        }
        if(error.response.status === 401){
            console.warn("Authentication failed Login");
            window.location.href = "/login";
        }
        return Promise.reject(error);
    }
);