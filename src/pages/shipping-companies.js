import React from 'react'
import { MainLayout } from 'layouts'
import { useRouter } from 'next/router'

const ShippingCompanies = () => {
  const router = useRouter()

  const { shopName, logo } = router.query

  const backPage = () => {
    router.push({
      pathname: '/select-logo',
      query: { shopName: shopName, logo: logo },
    })
  }

  return (
    <MainLayout step={2} backButton={{ disabled: false, click: backPage }}>
      <div>shopname:{shopName}</div>
      <div>logo:{logo}</div>
    </MainLayout>
  )
}

export default ShippingCompanies
