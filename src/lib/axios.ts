import { env } from '@/env';
import axios from 'axios';

export const backEndApi = axios.create({
    baseURL: env.BACK_END_URL,
});