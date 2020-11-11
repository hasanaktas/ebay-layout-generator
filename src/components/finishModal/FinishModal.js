import React, { useState } from 'react'
import { Button, DialogActions } from '@material-ui/core'
import DialogTitle from '@material-ui/core/DialogTitle'
import Dialog from '@material-ui/core/Dialog'
import Localization from 'localization'
import Snackbar from '@material-ui/core/Snackbar'
import MuiAlert from '@material-ui/lab/Alert'

function Alert(props) {
  return <MuiAlert elevation={6} variant='filled' {...props} />
}

export default function FinishModal(props) {
  const locale = Localization.useState((s) => s)
  const { onClose, selectedValue, open, data, pathname } = props
  const [snack, setSnack] = useState(false)
  const handleClose = () => {
    onClose(selectedValue)
  }

  const handleSnackClose = (event, reason) => {
    if (reason === 'clickaway') {
      return
    }
    setSnack(false)
  }

  return (
    <React.Fragment>
      <Snackbar
        anchorOrigin={{
          vertical: 'bottom',
          horizontal: 'left',
        }}
        autoHideDuration={2000}
        open={snack}
        onClose={handleSnackClose}
      >
        <Alert severity='success'>{locale.successLink}</Alert>
      </Snackbar>
      <Dialog
        onClose={handleClose}
        aria-labelledby='simple-dialog-title'
        open={open}
      >
        <DialogTitle id='simple-dialog-title'>{pathname}</DialogTitle>
        <DialogActions>
          <Button
            onClick={() => {
              setSnack(true)
              navigator.clipboard.writeText(pathname)
            }}
            color='primary'
          >
            {locale.copyLink}
          </Button>
        </DialogActions>
      </Dialog>
    </React.Fragment>
  )
}
