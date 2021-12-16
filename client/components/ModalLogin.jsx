import React, { useState } from 'react';
import Box from '@mui/material/Box';
import Typography from '@mui/material/Typography';
import Modal from '@mui/material/Modal';
import ModalContent from './ModalContent';
import ModalSuccess from './ModalSuccess';

const ModalLogin = ({ open, handleClose, setOpen, mag }) => {
  const [success, setSuccess] = useState(false);
 
  return (
    <div>
      <Modal
        open={open}
        onClose={(event, reason) => {
          if (reason !== 'backdropClick') {
            onClose(event, reason);
          }
        }}
      >
        {success ? (
          <ModalSuccess setOpen={setOpen} setSuccess={setSuccess} />
        ) : (
          <ModalContent
            setSuccess={setSuccess}
           
            mag={mag}
          />
        )}
      </Modal>
    </div>
  );
};

export default ModalLogin;
