import React, { FormEvent, useState } from 'react'
import FullCalendar from '@fullcalendar/react'
import dayGridPlugin from '@fullcalendar/daygrid';
import interactionPlugin from "@fullcalendar/interaction"
import { Backdrop, Fade, Modal } from '@mui/material';
import { Box } from '@mui/system';
import { BORDER_RADIUS, styles } from '../../lib/style';
import { Add } from '@mui/icons-material';
import FormCalendar from '../../components/FormCalendar';

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
          <Box sx={style}>
            <FormCalendar onSubmit={onSubmit} />
          </Box>
        </Fade>
      </Modal>
    </>
  )
}

export default Calendar