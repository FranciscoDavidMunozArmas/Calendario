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

export const postEvent = async (event: Event) => {
    return await axios.post(`${URI}/calendars`, JSON.stringify(EventConverter.toJSON(event)), {
        headers: {
            Authorization: getAuthorizationToken(),
            'Accept': 'application/json',
            'Content-Type': 'application/json',
        },
        withCredentials: false
    });
}

export const putEvent = async (event: Event, id: number) => {
    return await axios.put(`${URI}/calendars/${id}`, JSON.stringify(EventConverter.toJSON(event)), {
        headers: {
            Authorization: getAuthorizationToken(),
            'Accept': 'application/json',
            'Content-Type': 'application/json',
        },
        withCredentials: false
    });
}


export const deleteEvent = async (id: number) => {
    console.log(`${URI}/calendars/${id}`)
    return await axios.delete(`${URI}/calendars/${id}`, {
        headers: {
            Authorization: getAuthorizationToken(),
            'Accept': 'application/json',
            'Content-Type': 'application/json',
        },
        withCredentials: false
    });
}