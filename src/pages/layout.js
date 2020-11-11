import React, { useState } from 'react'
import { useRouter } from 'next/router'
import { MainLayout } from 'layouts'
import { Grid } from '@material-ui/core'
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
    <MainLayout
      backButton={{ disabled: false, click: backPage }}
      nextButton={{ disabled: false, click: handleClickOpen }}
      step={4}
    >
      <Grid container>
        <Grid item xs={12}>
          {logo && shipping && shopName && layout && (
            <html
              dangerouslySetInnerHTML={{
                __html: layouts[layout].html(
                  shopName,
                  logos[Number(logo)],
                  shipping,
                  true
                ),
              }}
            />
          )}
        </Grid>
      </Grid>
      <FinishModal
        open={modalOpen}
        data={finalData}
        onClose={handleClose}
        pathname={`https://ebay-layout-generator.vercel.app${router.asPath.replace(
          'layout?',
          'export?'
        )}`}
      />
    </MainLayout>
  )
}

export default Layout
