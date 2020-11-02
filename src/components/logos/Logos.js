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
const logos = [
  {
    uri: '/assets/logos/Logo-1.png',
    color: '#EE3E30',
  },
  {
    uri: '/assets/logos/Logo-2.png',
    color: '#C41E51',
  },
  {
    uri: '/assets/logos/Logo-3.png',
    color: '#F58B1F',
  },
  {
    uri: '/assets/logos/Logo-4.png',
    color: '#931A3D',
  },
  {
    uri: '/assets/logos/Logo-5.png',
    color: '#931A3D',
  },
  {
    uri: '/assets/logos/Logo-6.png',
    color: '#EE3E30',
  },
  {
    uri: '/assets/logos/Logo-7.png',
    color: '#CE5959',
  },
  {
    uri: '/assets/logos/Logo-8.png',
    color: '#0064AA',
  },
  {
    uri: '/assets/logos/Logo-9.png',
    color: '#F6B217',
  },
  {
    uri: '/assets/logos/Logo-10.png',
    color: '#0064AA',
  },
  {
    uri: '/assets/logos/Logo-11.png',
    color: '#403449',
  },
  {
    uri: '/assets/logos/Logo-12.png',
    color: '#F6B217',
  },
  {
    uri: '/assets/logos/Logo-13.png',
    color: '#3A4056',
  },
  {
    uri: '/assets/logos/Logo-14.png',
    color: '#573E91',
  },
  {
    uri: '/assets/logos/Logo-15.png',
    color: '#E2187F',
  },
  {
    uri: '/assets/logos/Logo-16.png',
    color: '#52A4DB',
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

const Logos = (props) => {
  const classes = useStyles()
  const { shopName, onChange, selectedLogo } = props

  return (
    <Grid container spacing={3}>
      {logos.map((item, index) => {
        return (
          <Grid key={index} item xs={12} sm={6} md={4}>
            <Box
              boxShadow={1}
              borderRadius={7}
              overflow='hidden'
              style={{
                border:
                  selectedLogo == index ? `5px solid ${item.color}` : 'none',
              }}
            >
              <ButtonBase
                className={classes.button}
                onClick={() => onChange(index)}
              >
                <Image
                  quality={100}
                  src={item.uri}
                  key={index}
                  width={100}
                  height={100}
                />
                <Typography
                  className={classes.shopName}
                  style={{ color: item.color }}
                >
                  {shopName}
                </Typography>
              </ButtonBase>
            </Box>
          </Grid>
        )
      })}
    </Grid>
  )
}

export default Logos
