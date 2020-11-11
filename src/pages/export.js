import React from 'react'
import { useRouter } from 'next/router'
import { Grid, Typography, Container } from '@material-ui/core'
import { logos } from 'components/logos/Logos'
import { layouts } from './layouts'
const Layout = () => {
  const router = useRouter()
  const { shopName, logo, shipping, layout } = router.query

  return (
    <Container>
      <Grid container>
        <Grid item xs={12}>
          {logo && shipping && shopName && layout && (
            <Typography variant='caption'>
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
    </Container>
  )
}

export default Layout
