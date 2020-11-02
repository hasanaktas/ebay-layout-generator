import React, { useState } from 'react'
import { MainLayout } from 'layouts'
import { useRouter } from 'next/router'
import { ShippingCompanies } from 'components'

const ShippingView = () => {
  const router = useRouter()
  const [shippingCompanies, setShippingCompanies] = useState([])
  const { shopName, logo } = router.query

  const onChange = (item) => {
    if (shippingCompanies.indexOf(item) > -1) {
      setShippingCompanies(shippingCompanies.filter((e) => e !== item))
    } else {
      const ship = []
      ship.push(...shippingCompanies, item)
      setShippingCompanies(ship)
    }
  }
  const backPage = () => {
    router.push({
      pathname: '/logo',
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
    <MainLayout
      step={2}
      backButton={{ disabled: false, click: backPage }}
      nextButton={{ disabled: shippingCompanies.length < 1, click: nextPage }}
    >
      <ShippingCompanies selected={shippingCompanies} onChange={onChange} />
    </MainLayout>
  )
}

export default ShippingView
