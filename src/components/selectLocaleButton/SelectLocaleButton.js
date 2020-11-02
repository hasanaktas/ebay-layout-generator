import React, { useState } from 'react'
import {
  Button,
  SvgIcon,
  Menu,
  MenuItem,
  ListItemIcon,
  ListItemText,
} from '@material-ui/core'
import TranslateIcon from '@material-ui/icons/Translate'
import ExpandMoreIcon from '@material-ui/icons/ExpandMore'

import Localization from 'localization'
import tr from 'localization/tr'
import en from 'localization/en'
import de from 'localization/de'

const languages = [tr, en, de]

const SelectLocaleButton = () => {
  const locale = Localization.useState((s) => s)
  const [anchorEl, setAnchorEl] = useState(null)
  const handleClick = (event) => {
    setAnchorEl(event.currentTarget)
  }

  const setLanguage = (e) => {
    Localization.update(() => e)
    setAnchorEl(null)
  }

  return (
    <div>
      <Button
        variant='text'
        color='inherit'
        startIcon={<TranslateIcon />}
        endIcon={<ExpandMoreIcon />}
        onClick={handleClick}
      >
        {locale.name}
      </Button>
      <Menu
        id='simple-menu'
        anchorEl={anchorEl}
        keepMounted
        open={Boolean(anchorEl)}
        onClose={() => setAnchorEl(null)}
      >
        {languages.map((item) => {
          return (
            <MenuItem key={item.name} onClick={() => setLanguage(item)}>
              <ListItemIcon>
                <SvgIcon>
                  <item.icon />
                </SvgIcon>
              </ListItemIcon>
              <ListItemText>{item.name}</ListItemText>
            </MenuItem>
          )
        })}
      </Menu>
    </div>
  )
}

export default SelectLocaleButton
