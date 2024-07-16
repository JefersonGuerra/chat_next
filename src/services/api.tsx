'use server'
import axios from 'axios';
import { getSession } from '@/actions/session';

const api = axios.create({
    baseURL: process.env.API_BASE_URL ?? "",
    timeout: 1000,
});

api.interceptors.request.use(async function (config) {
    if (await getSession()) {
        const { token } = await getSession();
        config.headers.Authorization = `Bearer ${token}`;
    }
    return config;
}, function (error) {
    return Promise.reject(error);
});

export default api;