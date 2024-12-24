import { env } from "@/lib/env";
import axios from "axios";

export const fetchAPI = axios.create({
    baseURL: env.NEXT_PUBLIC_BACK_END_URL,
})