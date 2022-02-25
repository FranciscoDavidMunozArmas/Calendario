import axios from "axios";
import { URI } from "../lib/utils";

export const login = async ({ email, password }: any) => {
    console.log(JSON.stringify({ email, password }));
    return await axios.post(`${URI}/auth/login`, JSON.stringify({ email, password }), {
        headers: {
            'Accept': 'application/json',
            'Content-Type': 'application/json',
        },
        withCredentials: true
    });
}

export const logout = async ({ email, password }: any) => {
    return await axios.post(`${URI}/auth/logout`, { email, password });
}

export const createUser = async ({ email, password }: any) => {
    return await axios.post(`${URI}/auth/register`, JSON.stringify({ email, password }),
        {
            headers: {
                'Accept': 'application/json',
                'Content-Type': 'application/json',
            },
            withCredentials: false
        });
}