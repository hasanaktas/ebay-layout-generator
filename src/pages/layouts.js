import React, { useEffect, useState } from 'react'
import Image from 'next/image'
import {
  Grid,
  Box,
  ButtonBase,
  makeStyles,
  Typography,
} from '@material-ui/core'
import { MainLayout } from 'layouts'
import { useRouter } from 'next/router'
import { OneHtml, TwoHtml } from 'htmls'
export const layouts = [
  {
    uri: 'https://layout.icommercetime.com/assets/previews/1.jpg',
    html: OneHtml,
  },
  {
    uri: 'https://layout.icommercetime.com/assets/previews/2.jpg',
    html: TwoHtml,
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
  const router = useRouter()
  const [selectedLayout, setSelectedLayout] = useState(null)
  const classes = useStyles()
  const { shopName, logo, shipping, layout: queryLayout } = router.query

  const backPage = () => {
    router.push({
      pathname: '/shipping',
      query: { shopName: shopName, logo: logo },
    })
  }
  const nextPage = () => {
    router.push({
      pathname: '/layout',
      query: {
        shopName: shopName,
        logo: logo,
        shipping: shipping,
        layout: selectedLayout,
      },
    })
  }

  useEffect(() => {
    queryLayout && setSelectedLayout(queryLayout)
  }, [queryLayout])

  return (
    <MainLayout
      backButton={{ disabled: false, click: backPage }}
      nextButton={{
        disabled: selectedLayout === null || selectedLayout < 0,
        click: nextPage,
      }}
      step={3}
    >
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
                  onClick={() => setSelectedLayout(index)}
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
    </MainLayout>
  )
}

export default Layouts
