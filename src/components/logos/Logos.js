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
export const logos = [
  {
    uri: 'https://layout.icommercetime.com/assets/logos/Logo-1.png',
    color: '#EE3E30',
  },
  {
    uri: 'https://layout.icommercetime.com/assets/logos/Logo-2.png',
    color: '#C41E51',
  },
  {
    uri: 'https://layout.icommercetime.com/assets/logos/Logo-3.png',
    color: '#F58B1F',
  },
  {
    uri: 'https://layout.icommercetime.com/assets/logos/Logo-4.png',
    color: '#931A3D',
  },
  {
    uri: 'https://layout.icommercetime.com/assets/logos/Logo-5.png',
    color: '#931A3D',
  },
  {
    uri: 'https://layout.icommercetime.com/assets/logos/Logo-6.png',
    color: '#EE3E30',
  },
  {
    uri: 'https://layout.icommercetime.com/assets/logos/Logo-7.png',
    color: '#CE5959',
  },
  {
    uri: 'https://layout.icommercetime.com/assets/logos/Logo-8.png',
    color: '#0064AA',
  },
  {
    uri: 'https://layout.icommercetime.com/assets/logos/Logo-9.png',
    color: '#F6B217',
  },
  {
    uri: 'https://layout.icommercetime.com/assets/logos/Logo-10.png',
    color: '#0064AA',
  },
  {
    uri: 'https://layout.icommercetime.com/assets/logos/Logo-11.png',
    color: '#403449',
  },
  {
    uri: 'https://layout.icommercetime.com/assets/logos/Logo-12.png',
    color: '#F6B217',
  },
  {
    uri: 'https://layout.icommercetime.com/assets/logos/Logo-13.png',
    color: '#3A4056',
  },
  {
    uri: 'https://layout.icommercetime.com/assets/logos/Logo-14.png',
    color: '#573E91',
  },
  {
    uri: 'https://layout.icommercetime.com/assets/logos/Logo-15.png',
    color: '#E2187F',
  },
  {
    uri: 'https://layout.icommercetime.com/assets/logos/Logo-16.png',
    color: '#52A4DB',
  },
  {
    uri: 'https://layout.icommercetime.com/assets/logos/Logo-17.png',
    color: '#0D64AD',
  },
  {
    uri: 'https://layout.icommercetime.com/assets/logos/Logo-18.png',
    color: '#F28F00',
  },
  {
    uri: 'https://layout.icommercetime.com/assets/logos/Logo-19.png',
    color: '#EA5F0B',
  },
  {
    uri: 'https://layout.icommercetime.com/assets/logos/Logo-20.png',
    color: '#E95018',
  },
  {
    uri: 'https://layout.icommercetime.com/assets/logos/Logo-21.png',
    color: '#2C256D',
  },
  {
    uri: 'https://layout.icommercetime.com/assets/logos/Logo-22.png',
    color: '#008CBE',
  },
  {
    uri: 'https://layout.icommercetime.com/assets/logos/Logo-23.png',
    color: '#49964F',
  },
  {
    uri: 'https://layout.icommercetime.com/assets/logos/Logo-24.png',
    color: '#AB3B8E',
  },
  {
    uri: 'https://layout.icommercetime.com/assets/logos/Logo-25.png',
    color: '#EB5E0B',
  },
  {
    uri: 'https://layout.icommercetime.com/assets/logos/Logo-26.png',
    color: '#60335D',
  },
  {
    uri: 'https://layout.icommercetime.com/assets/logos/Logo-27.png',
    color: '#C38215',
  },
  {
    uri: 'https://layout.icommercetime.com/assets/logos/Logo-28.png',
    color: '#E50740',
  },
  {
    uri: 'https://layout.icommercetime.com/assets/logos/Logo-29.png',
    color: '#00929F',
  },
  {
    uri: 'https://layout.icommercetime.com/assets/logos/Logo-30.png',
    color: '#17539F',
  },
  {
    uri: 'https://layout.icommercetime.com/assets/logos/Logo-31.png',
    color: '#292E6F',
  },
  {
    uri: 'https://layout.icommercetime.com/assets/logos/Logo-32.png',
    color: '#66737B',
  },
  {
    uri: 'https://layout.icommercetime.com/assets/logos/Logo-33.png',
    color: '#086731',
  },
  {
    uri: 'https://layout.icommercetime.com/assets/logos/Logo-34.png',
    color: '#49964F',
  },
  {
    uri: 'https://layout.icommercetime.com/assets/logos/Logo-35.png',
    color: '#146CB5',
  },
  {
    uri: 'https://layout.icommercetime.com/assets/logos/Logo-36.png',
    color: '#3072B8',
  },
  {
    uri: 'https://layout.icommercetime.com/assets/logos/Logo-37.png',
    color: '#E95018',
  },
  {
    uri: 'https://layout.icommercetime.com/assets/logos/Logo-38.png',
    color: '#50A1D9',
  },
  {
    uri: 'https://layout.icommercetime.com/assets/logos/Logo-39.png',
    color: '#C12022',
  },
  {
    uri: 'https://layout.icommercetime.com/assets/logos/Logo-40.png',
    color: '#60335D',
  },
  {
    uri: 'https://layout.icommercetime.com/assets/logos/Logo-41.png',
    color: '#E72563',
  },
  {
    uri: 'https://layout.icommercetime.com/assets/logos/Logo-42.png',
    color: '#E95018',
  },
  {
    uri: 'https://layout.icommercetime.com/assets/logos/Logo-43.png',
    color: '#60335D',
  },
  {
    uri: 'https://layout.icommercetime.com/assets/logos/Logo-44.png',
    color: '#573E91',
  },
  {
    uri: 'https://layout.icommercetime.com/assets/logos/Logo-45.png',
    color: '#5F4286',
  },
  {
    uri: 'https://layout.icommercetime.com/assets/logos/Logo-46.png',
    color: '#086731',
  },
  {
    uri: 'https://layout.icommercetime.com/assets/logos/Logo-47.png',
    color: '#EA524B',
  },
  {
    uri: 'https://layout.icommercetime.com/assets/logos/Logo-48.png',
    color: '#C12022',
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
                <img
                  src={item.uri}
                  key={index}
                  style={{ width: 100, height: 100 }}
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
