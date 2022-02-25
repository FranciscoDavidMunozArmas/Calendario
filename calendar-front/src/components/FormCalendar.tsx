import React, { ChangeEvent, FormEvent, useState } from 'react'
import { BUTTON_SAVE, ERROR_DATE, HINT_END_DATE, HINT_START_DATE, HINT_TITLE } from '../lib/strings';
import { styles } from '../lib/style';
import { toastManager } from '../lib/toastManager';

interface Props {
    onSubmit: (event: any) => void;
    title: string;
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
        const today = new Date();
        if(startDate.getTime() >= endDate.getTime() || startDate.getTime() < today.getTime()) {
            toastManager.error(ERROR_DATE);
            return;
        }
        props.onSubmit(calendar);
    }

    return (
        <>
            <h5 style={styles.title}>{props.title}</h5>
            <form style={styles.formStyle} onSubmit={handleSubmit}>
                <div style={styles.formGroup}>
                    <input type="text" name="title" placeholder={HINT_TITLE} onChange={handleChange} style={styles.formControl} required />
                </div>
                <div style={styles.formGroup}>
                    <label htmlFor="date_start">{HINT_START_DATE}</label>
                    <input type="datetime-local" name="date_start" placeholder={HINT_START_DATE} onChange={handleChange} style={styles.formControl} required />
                </div>
                <div style={styles.formGroup}>
                    <label htmlFor="date_end">{HINT_END_DATE}</label>
                    <input type="datetime-local" name="date_end" placeholder={HINT_END_DATE} onChange={handleChange} style={styles.formControl} required />
                </div>
                <button type='submit' style={styles.button}>{BUTTON_SAVE}</button>
            </form>
        </>
    )
}

export default FormCalendar