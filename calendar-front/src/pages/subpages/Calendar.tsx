import React, { FormEvent, useState } from 'react'
import FullCalendar from '@fullcalendar/react'
import dayGridPlugin from '@fullcalendar/daygrid';
import interactionPlugin from "@fullcalendar/interaction"
import { Backdrop, Fade, Modal, Typography } from '@mui/material';
import { Box } from '@mui/system';
import { BORDER_RADIUS, styles } from '../../lib/style';
import { Add } from '@mui/icons-material';
import { BUTTON_SAVE, HINT_END_DATE, HINT_START_DATE, HINT_TITLE } from '../../lib/strings';

const style = {
  position: 'absolute',
  top: '50%',
  left: '50%',
  transform: 'translate(-50%, -50%)',
  width: '100%',
  maxWidth: '500px',
  bgcolor: 'white',
  border: 'none',
  boxShadow: 24,
  borderRadius: BORDER_RADIUS,
  display: 'flex',
  flexDirection: 'column' as const,
  alignItems: 'center',
  justifyContent: 'center'
};

function Calendar() {

  const [open, setopen] = useState<boolean>(false);


  const handleClose = () => {
    setopen(false);
  }

  const handleOpen = () => {
    setopen(true);
  }

  const onSubmit = (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault();

    handleClose();
  }

  return (
    <>

      <FullCalendar
        plugins={[dayGridPlugin, interactionPlugin]}
      />

      <button style={styles.floatingButton} onClick={handleOpen}><Add /></button>

      <Modal
        open={open}
        onClose={handleClose}
        closeAfterTransition
        BackdropComponent={Backdrop}
        BackdropProps={{ timeout: 500 }}
      >
        <Fade in={open}>
          <Box sx={{...style}}>
            <h5 style={styles.title}>{ HINT_TITLE }</h5>
            <form style={styles.formStyle} onSubmit={onSubmit}>
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
          </Box>
        </Fade>
      </Modal>
    </>
  )
}

export default Calendar