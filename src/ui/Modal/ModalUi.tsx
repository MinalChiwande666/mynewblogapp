import React, { SetStateAction } from 'react'
import Box from '@mui/material/Box';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';
import Modal from '@mui/material/Modal';

interface ModalProp{
    children ?: React.ReactNode,
    open: Boolean | any,
    setOpen : React.Dispatch<SetStateAction<Boolean | any >>
}


const style = {
    position: 'absolute',
    top: '50%',
    left: '50%',
    transform: 'translate(-50%, -50%)',
    width: 400,
    bgcolor: 'black',
    border: '2px solid #000',
    borderRadius: '10px',
  
    boxShadow: 46,
    p: 4,
  };
  
const ModalUi: React.FC<{children:React.ReactNode,open:any,setOpen:any}> = ({children,open,setOpen}:ModalProp) => {
 
  // const handleOpen = () => setOpen(true);
  const handleClose = () => setOpen(false);
  return (
    <div>
    
    <Modal
      open={open}
      onClose={handleClose}
      aria-labelledby="modal-modal-title"
      aria-describedby="modal-modal-description"
    >
      <Box sx={style}>
        <div>{children}</div>
      </Box>
    </Modal>
  </div>
  )
}

export default ModalUi