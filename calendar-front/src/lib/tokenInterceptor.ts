
import Cookies from "cookies-ts";
import jwt from 'jsonwebtoken';
import { utils } from "./utils";

export const setUpToken = (token: any, storage?: boolean) => {
    removeToken();
    if (!storage) {
        const cookies = new Cookies();
        const exipireDate = new Date();
        exipireDate.setHours(exipireDate.getHours() + 2);
        cookies.set(utils.TOKEN_NAME as string, token, {
            expires: exipireDate
        });
    } else {
        localStorage.setItem(utils.TOKEN_NAME as string, token);
    }
}

export const removeToken = () => {
    const cookies = new Cookies();
    cookies.remove(utils.TOKEN_NAME as string);
    localStorage.removeItem(utils.TOKEN_NAME as string);
}

export const getToken = () => {
    const cookies = new Cookies();
    const cookieResult = cookies.get(utils.TOKEN_NAME as string);
    if (cookieResult) {
        return cookieResult;
    } else {
        const localResult = localStorage.getItem(utils.TOKEN_NAME as string);
        return localResult;
    }
}

export const checkToken = () => {
    const cookies = new Cookies();
    return !!localStorage.getItem(utils.TOKEN_NAME as string) || !!cookies.get(utils.TOKEN_NAME as string);
}

export const decodeToken = (token: any) => {
    return jwt.verify(token, utils.SECRET_KEY as string);
}

export const getAuthorizationToken = () => {
    return `Bearer ${getToken()}`;
}