import React from 'react'
import Image from 'next/image'
import { Grid, Box, ButtonBase, makeStyles } from '@material-ui/core'
import CheckCircleOutlineOutlinedIcon from '@material-ui/icons/CheckCircleOutlineOutlined'

export const companies = [
  {
    uri: 'https://layout.icommercetime.com/assets/shipping/dhl.png',
  },
  {
    uri: 'https://layout.icommercetime.com/assets/shipping/dpd.png',
  },
  {
    uri: 'https://layout.icommercetime.com/assets/shipping/gls.png',
  },
  {
    uri: 'https://layout.icommercetime.com/assets/shipping/ups.png',
  },
]

const useStyles = makeStyles((theme) => ({
  button: {
    width: '100%',
    display: 'flex',
    flexDirection: 'column',
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#fff',
    padding: 20,
  },
  selected: {},
  shopName: {
    fontSize: 22,
    fontWeight: 500,
  },
}))

const ShippingCompanies = (props) => {
  const { selected, onChange } = props

  const classes = useStyles()
  return (
    <Grid container spacing={3}>
      {companies.map((item, index) => {
        return (
          <Grid key={index} item xs={12} sm={6} md={3}>
            <Box boxShadow={1} borderRadius={7} overflow='hidden'>
              <ButtonBase
                className={classes.button}
                onClick={() => onChange(index)}
              >
                <img
                  src={item.uri}
                  key={index}
                  style={{ width: 200, height: 200 }}
                />
                {selected.indexOf(index) > -1 && (
                  <Box
                    position='absolute'
                    left={0}
                    right={0}
                    bottom={0}
                    top={0}
                    display='flex'
                    justifyContent='center'
                    alignItems='center'
                  >
                    <CheckCircleOutlineOutlinedIcon
                      style={{
                        color: 'rgba(63, 81, 181, 1)',
                        fontSize: 40,
                        position: 'absolute',
                        right: 10,
                        bottom: 10,
                      }}
                    />
                  </Box>
                )}
              </ButtonBase>
            </Box>
          </Grid>
        )
      })}
    </Grid>
  )
}

export default ShippingCompanies
