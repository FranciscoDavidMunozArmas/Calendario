import axios from "axios";
import { Event, EventConverter } from "../classes/Event";
import { getAuthorizationToken } from "../lib/tokenInterceptor";
import { URI } from "../lib/utils";


export const getEvents = async () => {
    return await axios.get(`${URI}/calendars`,
        {
            headers: {
                Authorization: getAuthorizationToken(),
                'Accept': 'application/json',
                'Content-Type': 'application/json',
            },
            withCredentials: false
        });
};

export const createEvent = async (event: Event) => {
    return await axios.post(`${URI}/calendars`, EventConverter.toJSON(event), {
        headers: {
            Authorization: getAuthorizationToken(),
            'Accept': 'application/json',
            'Content-Type': 'application/json',
        },
        withCredentials: false
    });
}