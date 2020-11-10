import React, { useState } from 'react'
import { makeStyles } from '@material-ui/core/styles'
import { Button, DialogActions } from '@material-ui/core'
import Avatar from '@material-ui/core/Avatar'
import List from '@material-ui/core/List'
import ListItem from '@material-ui/core/ListItem'
import ListItemAvatar from '@material-ui/core/ListItemAvatar'
import ListItemText from '@material-ui/core/ListItemText'
import DialogTitle from '@material-ui/core/DialogTitle'
import Dialog from '@material-ui/core/Dialog'
import PersonIcon from '@material-ui/icons/Person'
import AddIcon from '@material-ui/icons/Add'
import Typography from '@material-ui/core/Typography'
import { blue } from '@material-ui/core/colors'
import Snackbar from '@material-ui/core/Snackbar'
import IconButton from '@material-ui/core/IconButton'
import CloseIcon from '@material-ui/icons/Close'

const emails = ['username@gmail.com', 'user02@gmail.com']
const useStyles = makeStyles({
  avatar: {
    backgroundColor: blue[100],
    color: blue[600],
  },
})

export default function FinishModal(props) {
  const classes = useStyles()
  const { onClose, selectedValue, open, data } = props

  const handleClose = () => {
    onClose(selectedValue)
  }

  const handleListItemClick = (value) => {
    onClose(value)
  }

  const [snack, setSnack] = useState(false)

  return (
    <>
      <Dialog
        onClose={handleClose}
        aria-labelledby='simple-dialog-title'
        open={open}
      >
        <DialogTitle id='simple-dialog-title'>{data}</DialogTitle>
        <DialogActions>
          <Button onClick={handleClose} color='primary'>
            Kapat
          </Button>
          <Button
            onClick={() => {
              navigator.clipboard.writeText(data)
              setSnack(true)
            }}
            color='primary'
          >
            Kodu Kopyalamak İçin Tıkla
          </Button>
        </DialogActions>
      </Dialog>
      <Snackbar
        anchorOrigin={{
          vertical: 'top',
          horizontal: 'left',
        }}
        open={snack}
        autoHideDuration={3000}
        onClose={() => setSnack(false)}
        message='KOPYALANDI'
      />
    </>
  )
}
