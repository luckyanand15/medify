import { Alert, Snackbar } from '@mui/material'
import React from 'react'

const AutoSnackbar = ({open,setOpen,message}) => {
  const handleClose = (e)=>{
    setOpen(false);
  }
  return (
    <Snackbar
    open={open}
    autoHideDuration={2000}
    onClose={handleClose}
    anchorOrigin={{vertical:'botom',horizontal:'center'}}
    >
      <Alert onClose={handleClose} icon={false} sx={{bgcolor:"#00A500",color:"#ffffff"}}>{message}</Alert>
    </Snackbar>
  )
}

export default AutoSnackbar