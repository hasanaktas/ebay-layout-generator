import React from 'react'
import { useRouter } from 'next/router'
import { MainLayout } from 'layouts'
import { Grid } from '@material-ui/core'
import parse from 'html-react-parser'
import { OneHtml } from 'htmls'
import { logos } from 'components/logos/Logos'
const Layout = () => {
  const router = useRouter()
  const { shopName, logo, shipping } = router.query
  console.log(shopName)
  console.log(logo)
  console.log(shipping)
  const backPage = () => {
    router.push({
      pathname: '/shipping',
      query: { shopName: shopName, logo: logo },
    })
  }

  const nextPage = () => {
    router.push({
      pathname: '/layout',
      query: { shopName: shopName, logo: logo, shipping: shippingCompanies },
    })
  }

  return (
    <MainLayout backButton={{ disabled: false, click: backPage }} step={3}>
      <h1>Magaza Adi</h1>
      <h4>{shopName}</h4>
      <h1>Secilen Logo</h1>
      <h4>{logo}</h4>
      <h1>Kargo Firmalari</h1>
      <h4>{shipping}</h4>
      <Grid container>
        <Grid item xs={12}>
          {logo && (
            <html
              dangerouslySetInnerHTML={{
                __html: OneHtml(shopName, logos[Number(logo)]),
              }}
            />
          )}
        </Grid>
      </Grid>
    </MainLayout>
  )
}

export default Layout
