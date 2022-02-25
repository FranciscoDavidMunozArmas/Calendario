import React, { useEffect, useState } from 'react'
import FullCalendar from '@fullcalendar/react'
import dayGridPlugin from '@fullcalendar/daygrid';
import interactionPlugin from "@fullcalendar/interaction"
import { Backdrop, Fade, Modal } from '@mui/material';
import { Box } from '@mui/system';
import { BORDER_RADIUS, styles } from '../../lib/style';
import { Add } from '@mui/icons-material';
import FormCalendar from '../../components/FormCalendar';
import { toastManager } from '../../lib/toastManager';
import { ERROR_SENDING_DATA, SUCCESS_EVENT_SAVED, TITLE_EVENT_FORM } from '../../lib/strings';
import { Event, EventConverter } from '../../classes/Event';
import { createEvent, getEvents } from '../../services/event.service';

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
  const [events, setevents] = useState<Event[]>([]);

  const handleClose = () => {
    setopen(false);
  }

  const handleOpen = () => {
    setopen(true);
  }

  const getData = async () => {
    try {
      const events = await getEvents();
      setevents(events.data.map(EventConverter.fromJSON));
    } catch (error: any) {
      toastManager.error(ERROR_SENDING_DATA);
    }
  }

  const onSubmit = async (calendar: any) => {
    try {
      const newEvent = await createEvent(EventConverter.fromJSON(calendar));
      setevents([...events, EventConverter.fromJSON(newEvent.data)]);
      handleClose();
      toastManager.success(SUCCESS_EVENT_SAVED);
    } catch (error: any) {
      toastManager.error(ERROR_SENDING_DATA);
    }
  }

  const formatEvents = () => {
    return events.map((event: Event) => {
      return { title: event.title, start: event.date_start, end: event.date_end }
    });
  }

  useEffect(() => {
    getData();
    return () => { }
  }, [])


  return (
    <>

      <FullCalendar
        plugins={[dayGridPlugin, interactionPlugin]}
        events={formatEvents()}
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
          <Box sx={style}>
            <FormCalendar onSubmit={onSubmit} title={TITLE_EVENT_FORM} />
          </Box>
        </Fade>
      </Modal>
    </>
  )
}

export default Calendar