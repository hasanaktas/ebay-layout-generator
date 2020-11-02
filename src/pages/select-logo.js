import React, { useState, useEffect } from 'react'
import { Button, Box } from '@material-ui/core'
import NavigateNextIcon from '@material-ui/icons/NavigateNext'
import { MainLayout } from 'layouts'
import { useRouter } from 'next/router'
import { Logos } from 'components'

export default function BasicTextFields() {
  const router = useRouter()
  const [logo, setLogo] = useState(null)

  const { shopName: queryShopName, logo: queryLogo } = router.query

  useEffect(() => {
    queryLogo && setLogo(queryLogo)
  }, [queryLogo])

  const backPage = () => {
    router.push({
      pathname: '/',
      query: { shopName: queryShopName },
    })
  }
  const nextPage = () => {
    router.push({
      pathname: '/shipping-companies',
      query: { shopName: queryShopName, logo: logo },
    })
  }
  return (
    <MainLayout
      step={1}
      backButton={{ disabled: false, click: backPage }}
      nextButton={{
        disabled: logo === null || logo < 0,
        click: nextPage,
      }}
    >
      <Logos
        shopName={queryShopName}
        onChange={(e) => setLogo(e)}
        selectedLogo={logo}
      />
    </MainLayout>
  )
}
