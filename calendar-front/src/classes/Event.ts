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
            startDate: event.date_start.toISOString(),
            endDate: event.date_end.toISOString()
        };
    }
};