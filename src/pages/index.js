import React, { useState, useEffect } from 'react'
import { Button, Grid, TextField } from '@material-ui/core'
import { MainLayout } from 'layouts'
import { useRouter } from 'next/router'
import Localization from 'localization'
const ShopNameView = () => {
  const router = useRouter()
  const locale = Localization.useState((s) => s)
  const { shopName: queryShopName } = router.query
  const [shopName, setShopName] = useState('')
  useEffect(() => {
    queryShopName && setShopName(queryShopName)
  }, [queryShopName])

  const nextPage = () => {
    router.push({
      pathname: '/select-logo',
      query: { shopName: shopName },
    })
  }
  return (
    <MainLayout
      step={0}
      backButton={{ disabled: true }}
      nextButton={{ disabled: !shopName, click: nextPage }}
    >
      <Grid container spacing={3}>
        <Grid item xs={12}>
          <TextField
            fullWidth
            label={locale.shopName}
            variant='outlined'
            onChange={(e) => setShopName(e.target.value)}
            value={shopName}
          />
        </Grid>
      </Grid>
    </MainLayout>
  )
}

export default ShopNameView
