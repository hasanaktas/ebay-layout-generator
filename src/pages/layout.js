import React from 'react'
import { useRouter } from 'next/router'
import { MainLayout } from 'layouts'
const Layout = () => {
  const router = useRouter()
  const { shopName, logo, shipping } = router.query

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
    </MainLayout>
  )
}

export default Layout
