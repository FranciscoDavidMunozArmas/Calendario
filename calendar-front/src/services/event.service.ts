import axios from "axios";
import { Event, EventConverter } from "../classes/Event";
import { URI } from "../lib/utils";


export const getEvents = async (userId: number) => {
    return await axios.get(`${URI}/users/${userId}/events`);
};

export const getEvent = async (userId: number, eventId: number) => {
    return await axios.get(`${URI}/users/${userId}/events/${eventId}`);
};

export const createEvent = async (userId: number, event: Event) => {
    return await axios.post(`${URI}/users/${userId}/events`, EventConverter.toJSON(event));
}