import axios from "axios";
import { URI } from "../lib/utils";

export const authorize = async ({ email, password }: any) => {
    return await axios.post(`${URI}/users/authorize`, { email, password });
}

export const getUser = async (email: string) => {
    return await axios.post(`${URI}/users/email`, { email });
}

export const createUser = async ({ email, password }: any) => {
    return await axios.post(`${URI}/users`, { email, password });
}