import React, { useEffect, useState } from 'react'
import FullCalendar from '@fullcalendar/react'
import dayGridPlugin from '@fullcalendar/daygrid';
import timeGridPlugin from '@fullcalendar/timegrid';
import interactionPlugin from "@fullcalendar/interaction"
import { Backdrop, Fade, Modal } from '@mui/material';
import { Box } from '@mui/system';
import { BORDER_RADIUS, styles } from '../../lib/style';
import { Add } from '@mui/icons-material';
import FormCalendar from '../../components/FormCalendar';
import { toastManager } from '../../lib/toastManager';
import { ERROR_DELETING_DATA, ERROR_SENDING_DATA, SUCCESS_EVENT_DELETED, SUCCESS_EVENT_SAVED, TITLE_EVENT_FORM } from '../../lib/strings';
import { Event, EventConverter } from '../../classes/Event';
import { deleteEvent, getEvents, postEvent, putEvent } from '../../services/event.service';
import Loading from '../../components/Loading';

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
  const [selected, setselected] = useState<Event | null>(null);
  const [loading, setloading] = useState<boolean>(false);

  const handleClose = () => {
    setopen(false);
    setselected(null);
  }

  const handleOpen = () => {
    setopen(true);
  }

  const getData = async () => {
    setloading(true);
    try {
      const events = await getEvents();
      setevents(events.data.map(EventConverter.fromJSON));
    } catch (error: any) {
      toastManager.error(ERROR_SENDING_DATA);
    }
    setloading(false);
  }

  const onSubmit = (calendar: any) => {
    setloading(true);
    if (selected && selected.id) {
      updateEvent(calendar, selected.id);
    } else {
      createEvent(calendar);
    }
    setloading(false);
  }

  const createEvent = async (event: any) => {
    try {
      const newEvent = await postEvent(EventConverter.fromJSON(event));
      setevents([...events, EventConverter.fromJSON(newEvent.data)]);
      handleClose();
      toastManager.success(SUCCESS_EVENT_SAVED);
    } catch (error: any) {
      toastManager.error(ERROR_SENDING_DATA);
    }
  }

  const updateEvent = async (event: any, id: number) => {
    try {
      const updatedData = await putEvent(EventConverter.fromJSON(event), id);
      setevents(events.filter(e => e.id?.toString() !== id.toString()).concat(EventConverter.fromJSON(updatedData.data)));
      handleClose();
      toastManager.success(SUCCESS_EVENT_SAVED);
    } catch (error: any) {
      toastManager.error(ERROR_SENDING_DATA);
    }
  }

  const onDelete = async (id: any) => {
    setloading(true);
    try {
      await deleteEvent(id);
      setevents(events.filter(event => event.id?.toString() !== id));
      handleClose();
      toastManager.success(SUCCESS_EVENT_DELETED);
    } catch (error: any) {
      toastManager.error(ERROR_DELETING_DATA);
    }
    setloading(false);
  }

  const formatEvents = () => {
    return events.map((event: Event) => {
      return {
        id: event.id?.toString(),
        title: event.title,
        start: event.date_start,
        end: event.date_end,
      }
    });
  }

  const handleEventClick = ({ event }: any) => {
    const selectedEvent = EventConverter.fromJSON({
      id: event.id,
      title: event.title,
      date_start: event.start,
      date_end: event.end,
    });
    setselected(selectedEvent);
    handleOpen();
  }

  useEffect(() => {
    getData();
    return () => { }
  }, [])


  return (
    <>
      <Loading load={loading} />
      <div style={{ margin: '10px 0' }}>
        <FullCalendar
          initialView="dayGridMonth"
          headerToolbar={{
            left: 'prev,next today',
            center: 'title',
            right: 'dayGridMonth,dayGridWeek,dayGridDay',
          }}
          height={window.innerHeight * .9}
          plugins={[dayGridPlugin, timeGridPlugin, interactionPlugin]}
          events={formatEvents()}
          eventClick={handleEventClick}
        />
      </div>

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
            <FormCalendar
              onSubmit={onSubmit}
              onDelete={onDelete}
              title={TITLE_EVENT_FORM}
              event={selected} />
          </Box>
        </Fade>
      </Modal>
    </>
  )
}

export default Calendar