import axios from 'axios';
import { getSession } from '@/actions/session';

const axiosInstance = async () => {

    const session: any = await getSession();

    const axiosClient = axios.create({
        baseURL: process.env.API_BASE_URL ?? "",
        timeout: 1000,
        headers: {
            'Authorization': `Bearer ${session?.token}`
        }
    });

    return axiosClient;
}

export default axiosInstance;