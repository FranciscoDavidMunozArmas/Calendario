import axios from "axios";
import { getAuthorizationToken } from "../lib/tokenInterceptor";
import { URI } from "../lib/utils";

export const login = async ({ email, password }: any) => {
    console.log(JSON.stringify({ email, password }));
    return await axios.post(`${URI}/auth/login`, JSON.stringify({ email, password }),
        {
            headers: {
                'Accept': 'application/json',
                'Content-Type': 'application/json',
            },
            withCredentials: false
        });
}

export const logout = async () => {
    return await axios.post(`${URI}/auth/logout`, JSON.stringify({}),
        {
            headers: {
                Authorization: getAuthorizationToken(),
                'Accept': 'application/json',
                'Content-Type': 'application/json',
            },
            withCredentials: false
        });
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