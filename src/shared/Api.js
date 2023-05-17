import axios from "axios";

export const APIHeaders = {
    "Accept": "application/json",
    "Content-Type": "application/json",
    "Access-Control-Allow-Origin": "*"
}

export const API = axios.create({
    baseURL: import.meta.env.VITE_APP_BASE_URL,
    headers: APIHeaders
});