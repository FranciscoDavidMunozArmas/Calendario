export class Event {
    id?: number;
    title: string;
    startDate: Date;
    endDate: Date;

    constructor(id: number, title: string, startDate: Date, endDate: Date) {
        this.id = id;
        this.title = title;
        this.startDate = startDate;
        this.endDate = endDate;
    }
}

export const EventConverter = {
    fromJSON: (json: any): Event => {
        return new Event(
            json.id,
            json.title,
            new Date(json.startDate),
            new Date(json.endDate)
        );
    },
    toJSON: (event: Event): any => {
        return {
            id: event.id,
            title: event.title,
            startDate: event.startDate.toISOString(),
            endDate: event.endDate.toISOString()
        };
    }
};