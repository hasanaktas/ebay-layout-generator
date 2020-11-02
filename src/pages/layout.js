import React from 'react'
import { useRouter } from 'next/router'
import { MainLayout } from 'layouts'
const Layout = () => {
  const router = useRouter()
  const { shopName, logo, shipping } = router.query
  return (
    <MainLayout>
      <h1>Magaza Adi</h1>
      <h4>{shopName}</h4>
      <h1>Secilen Logo</h1>
      <h4>{logo}</h4>
      <h1>Kargo Firmalari</h1>
      {shipping.map((item, index) => (
        <h4 key={index}>{item}</h4>
      ))}
    </MainLayout>
  )
}

export default Layout
