import React, { useState } from 'react'
import { useRouter } from 'next/router'
import { MainLayout } from 'layouts'
import { Grid, Typography } from '@material-ui/core'
import { FinishModal } from 'components'
import { logos } from 'components/logos/Logos'
import { layouts } from './layouts'
const Layout = () => {
  const router = useRouter()
  const [modalOpen, setModalOpen] = React.useState(false)
  const { shopName, logo, shipping, layout } = router.query

  const finalData = `name:${shopName},logo:${logo},shipping:${shipping},layout:${layout}`

  const backPage = () => {
    router.push({
      pathname: '/layouts',
      query: {
        shopName: shopName,
        logo: logo,
        shipping: shipping,
        layout: layout,
      },
    })
  }

  const nextPage = () => {
    router.push({
      pathname: '/layout',
      query: {
        shopName: shopName,
        logo: logo,
        shipping: shipping,
        layout: layout,
      },
    })
  }

  const handleClickOpen = () => {
    setModalOpen(true)
  }

  const handleClose = () => {
    setModalOpen(false)
  }

  return (
    <Grid container>
      <Grid item xs={12}>
        {logo && shipping && shopName && layout && (
          <Typography>
            {layouts[layout].html(
              shopName,
              logos[Number(logo)],
              shipping,
              false
            )}
          </Typography>
        )}
      </Grid>
    </Grid>
  )
}

export default Layout
