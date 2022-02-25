import React, { ChangeEvent, FormEvent, useEffect, useState } from 'react'
import { Event, EventConverter } from '../classes/Event';
import { BUTTON_DELETE, BUTTON_SAVE, ERROR_DATE, HINT_END_DATE, HINT_START_DATE, HINT_TITLE } from '../lib/strings';
import { styles } from '../lib/style';
import { toastManager } from '../lib/toastManager';

interface Props {
    onSubmit: (event: any) => void;
    onDelete: (id: any) => void;
    title: string;
    event?: Event | null;
}

function FormCalendar(props: Props) {

    const [calendar, setcalendar] = useState<any>({});

    const handleChange = (event: ChangeEvent<HTMLInputElement>) => {
        setcalendar({ ...calendar, [event.target.name]: event.target.value });
    }

    const handleSubmit = (event: FormEvent<HTMLFormElement>) => {
        event.preventDefault();
        const startDate = new Date(calendar.date_start);
        const endDate = new Date(calendar.date_end);
        if (startDate.getTime() >= endDate.getTime()) {
            toastManager.error(ERROR_DATE);
            return;
        }
        props.onSubmit(calendar);
    }

    const handleDelete = () => {
        if(props.event) {
            props.onDelete(props.event.id);
        }
    }

    useEffect(() => {
        if (props.event) {
            setcalendar(EventConverter.toJSON(props.event));
        }
        return () => { }
    }, [props.event])


    return (
        <>
            <h5 style={styles.title}>{props.title}</h5>
            <form style={styles.formStyle} onSubmit={handleSubmit}>
                <div style={styles.formGroup}>
                    <input
                        type="text"
                        name="title"
                        placeholder={HINT_TITLE}
                        onChange={handleChange}
                        style={styles.formControl}
                        value={calendar.title}
                        required />
                </div>
                <div style={styles.formGroup}>
                    <label htmlFor="date_start">{HINT_START_DATE}</label>
                    <input
                        type="datetime-local"
                        name="date_start"
                        placeholder={HINT_START_DATE}
                        onChange={handleChange}
                        style={styles.formControl}
                        value={(calendar.date_start) && new Date(calendar.date_start).toISOString().slice(0,16)}
                        required />
                </div>
                <div style={styles.formGroup}>
                    <label htmlFor="date_end">{HINT_END_DATE}</label>
                    <input
                        type="datetime-local"
                        name="date_end"
                        placeholder={HINT_END_DATE}
                        onChange={handleChange}
                        style={styles.formControl}
                        value={(calendar.date_end) && new Date(calendar.date_end).toISOString().slice(0,16)}
                        required />
                </div>
                <div style={{ ...styles.formGroup, display: 'flex', justifyContent: 'center' }}>
                    {(props.event) && <button type='button' style={styles.buttonDanger} onClick={handleDelete}>{BUTTON_DELETE}</button>}
                    <button type='submit' style={styles.button}>{BUTTON_SAVE}</button>
                </div>
            </form>
        </>
    )
}

export default FormCalendar