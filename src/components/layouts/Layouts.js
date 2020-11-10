import React, { useEffect } from 'react'
import Image from 'next/image'
import {
  Grid,
  Box,
  ButtonBase,
  makeStyles,
  Typography,
} from '@material-ui/core'
import clsx from 'clsx'

export const layouts = [
  {
    uri: 'https://layout.icommercetime.com/assets/logos/Logo-1.png',
  },
  {
    uri: 'https://layout.icommercetime.com/assets/logos/Logo-2.png',
  },
]

const useStyles = makeStyles((theme) => ({
  button: {
    width: '100%',
    display: 'flex',
    flexDirection: 'column',
    justifyContent: 'center',
    alignItems: 'center',
    background: '#fff',
    padding: 20,
  },
  selected: {},
  shopName: {
    fontSize: 22,
    fontWeight: 500,
  },
}))

const Layouts = (props) => {
  const classes = useStyles()
  const { onChange, selectedLayout } = props
  return (
    <Grid container spacing={3}>
      {layouts.map((item, index) => {
        return (
          <Grid key={index} item xs={12} sm={6}>
            <Box
              boxShadow={1}
              borderRadius={7}
              overflow='hidden'
              style={{
                border: selectedLayout == index ? `5px solid black` : 'none',
              }}
            >
              <ButtonBase
                className={classes.button}
                onClick={() => onChange(index)}
              >
                <img
                  src={item.uri}
                  key={index}
                  style={{ width: '%100', height: 'auto' }}
                />
              </ButtonBase>
            </Box>
          </Grid>
        )
      })}
    </Grid>
  )
}

export default Layouts
