import moment from "moment";

export class Event {
    id?: number;
    title: string;
    date_start: Date;
    date_end: Date;

    constructor(id: number, title: string, date_start: Date, date_end: Date) {
        this.id = id;
        this.title = title;
        this.date_start = date_start;
        this.date_end = date_end;
    }
}

export const EventConverter = {
    fromJSON: (json: any): Event => {
        return new Event(
            json.id,
            json.title,
            new Date(json.date_start),
            new Date(json.date_end)
        );
    },
    toJSON: (event: Event): any => {
        return {
            id: event.id,
            title: event.title,
            date_start: moment(event.date_start).format("YYYY-MM-DD hh:mm:ss"),
            date_end: moment(event.date_end).format("YYYY-MM-DD hh:mm:ss")
        };
    }
};