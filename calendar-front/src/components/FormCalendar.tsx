import React, { FormEvent } from 'react'
import { BUTTON_SAVE, HINT_END_DATE, HINT_START_DATE, HINT_TITLE, TITLE_EVENT_FORM } from '../lib/strings';
import { styles } from '../lib/style';

interface Props {
    onSubmit: (event: FormEvent<HTMLFormElement>) => void;
}

function FormCalendar(props: Props) {
    return (
        <>
            <h5 style={styles.title}>{TITLE_EVENT_FORM}</h5>
            <form style={styles.formStyle} onSubmit={props.onSubmit}>
                <div style={styles.formGroup}>
                    <input type="text" name="title" placeholder={HINT_TITLE} style={styles.formControl} />
                </div>
                <div style={styles.formGroup}>
                    <label htmlFor="startDate">{HINT_START_DATE}</label>
                    <input type="datetime-local" name="startDate" placeholder={HINT_START_DATE} style={styles.formControl} />
                </div>
                <div style={styles.formGroup}>
                    <label htmlFor="endDate">{HINT_END_DATE}</label>
                    <input type="datetime-local" name="endDate" placeholder={HINT_END_DATE} style={styles.formControl} />
                </div>
                <button type='submit' style={styles.button}>{BUTTON_SAVE}</button>
            </form>
        </>
    )
}

export default FormCalendar