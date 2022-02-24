import { Event, EventConverter } from "./Event";

export class User {
    id?: number;
    email: string;
    events: Event[];

    constructor(id: number, email: string, events: Event[] | null = null) {
        this.id = id;
        this.email = email;
        this.events = (events) ? events : [];
    }
}

export const UserConverter = {
    fromJSON: (json: any): User => {
        return new User(
            json.id,
            json.email,
            (json.events) ? json.events.map(EventConverter.fromJSON) : null
        );
    },
    toJSON: (user: User): any => {
        return {
            id: user.id,
            email: user.email,
            events: user.events.map((event: Event) => EventConverter.toJSON(event))
        };
    }
};