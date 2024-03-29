import axios, { AxiosRequestConfig } from 'axios';
import { getAuthData } from './storage';
import qs from 'qs';
import { toast } from 'react-toastify';

export const BASE_URL = process.env.REACT_APP_BACKEND_URL ?? "http://localhost:8080";

const CLIENT_ID = process.env.REACT_APP_CLIENT_ID ?? 'movieflix';
const CLIENT_SECRET = process.env.REACT_APP_CLIENT_SECRET ?? 'movieflix123';


type LoginData = {
    username: string;
    password: string;
}

export const requestBackendLogin = (loginData: LoginData) => {
    const headers = {
        'Content-Type': 'application/x-www-form-urlencoded',
        Authorization: 'Basic ' + window.btoa(CLIENT_ID + ':' + CLIENT_SECRET)
    }

    const data = qs.stringify({
        ...loginData,
        grant_type: 'password'
    })

    return axios({ method: 'POST', baseURL: BASE_URL, url: '/oauth/token', data, headers });
}

export const requestBackend = (config: AxiosRequestConfig) => {
    const headers = config.withCredentials ? {
        ...config.headers,
        Authorization: "Bearer " + getAuthData().access_token
    } : config.headers;

    return axios({ ...config, baseURL: BASE_URL, headers });
}

// Add a request interceptor
axios.interceptors.request.use(function (config) {
    // Do something before request is sent
    return config;
}, function (error) {
    // Do something with request error
    toast.error("Erro de conexão.");
    return Promise.reject(error);
});

// Add a response interceptor
axios.interceptors.response.use(function (response) {
    // Any status code that lie within the range of 2xx cause this function to trigger
    // Do something with response data
    return response;
}, function (error) {
    // Any status codes that falls outside the range of 2xx cause this function to trigger
    // Do something with response error
    if (!error.response) {
        toast.error("Erro de conexão.");
    }
    if (error.response.status === 400 || error.response.status === 401 || error.response.status === 403) {
        toast.error("Nome de usuário ou senha incorretos.");
    }

    return Promise.reject(error);
});