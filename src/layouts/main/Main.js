import React from 'react'
import {
  makeStyles,
  AppBar,
  Toolbar,
  Container,
  Typography,
  Box,
  Hidden,
  Stepper,
  Step,
  StepLabel,
  Button,
} from '@material-ui/core'
import { SelectLocaleButton } from 'components'
import Localization from 'localization'
import Image from 'next/image'
import NavigateNextIcon from '@material-ui/icons/NavigateNext'
import NavigateBeforeIcon from '@material-ui/icons/NavigateBefore'
function getSteps() {
  return ['Magaza Adiniz', 'Logonuz', 'Anlasmali Kargo Firmalari']
}

const useStyles = makeStyles((theme) => ({
  root: {
    backgroundColor: theme.palette.background.default,
    display: 'flex',
    height: '100vh',
    flexDirection: 'column',
    width: '100%',
  },

  content: {
    display: 'flex',
    flexGrow: 1,
    paddingTop: 20,
    paddingBottom: 250,
    justifyContent: 'center',
    alignItems: 'center',
  },
  toolbar: {
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    height: 80,
  },
  logo: {
    width: 'auto',
    height: 40,
  },
}))

const MainLayout = (props) => {
  const { children, step, backButton, nextButton } = props
  const classes = useStyles()
  const locale = Localization.useState((s) => s)
  const steps = [
    locale.shopName,
    locale.yourLogo,
    locale.shippingCompanies,
    'Layout Sec',
    'Bitir',
  ]
  return (
    <div className={classes.root}>
      <AppBar elevation={1} position='sticky'>
        <Container maxWidth='lg'>
          <Toolbar className={classes.toolbar}>
            <Hidden xsDown>
              <Box
                display='flex'
                position='absolute'
                left={0}
                top={0}
                bottom={0}
                justifyContent='center'
                alignItems='center'
              >
                <Typography variant='h4' className={classes.title}>
                  {locale.headerTitle}
                </Typography>
              </Box>
            </Hidden>
            <Hidden smDown>
              <Image
                src='/assets/image/time4drop-beyaz.png'
                alt='time4drop'
                unsized
                className={classes.logo}
              />
            </Hidden>

            <Box
              display='flex'
              position='absolute'
              right={0}
              top={0}
              bottom={0}
              justifyContent='center'
              alignItems='center'
            >
              <SelectLocaleButton />
            </Box>
          </Toolbar>
        </Container>
      </AppBar>
      <div className={classes.content}>
        <Container maxWidth='md'>{children}</Container>
      </div>
      <Box
        position='fixed'
        left={0}
        right={0}
        bottom={0}
        boxShadow={1}
        bgcolor='background.paper'
        display='flex'
        flexDirection='column'
        alignItems='center'
      >
        <Box display='flex' padding={2}>
          <Box width={150} mr={2}>
            <Button
              fullWidth
              disabled={backButton.disabled}
              color='primary'
              variant='contained'
              startIcon={<NavigateBeforeIcon />}
              onClick={() => backButton.click()}
            >
              {locale.back}
            </Button>
          </Box>

          <Box width={150} ml={2}>
            <Button
              fullWidth
              disabled={nextButton.disabled}
              color='primary'
              variant='contained'
              endIcon={<NavigateNextIcon />}
              onClick={() => nextButton.click()}
            >
              {locale.next}
            </Button>
          </Box>
        </Box>
        <Box width={'100%'}>
          <Stepper activeStep={step} alternativeLabel>
            {steps.map((label) => (
              <Step key={label}>
                <StepLabel>{label}</StepLabel>
              </Step>
            ))}
          </Stepper>
        </Box>
      </Box>
    </div>
  )
}

MainLayout.defaultProps = {
  backButton: {
    disabled: true,
    click: () => null,
  },
  nextButton: {
    disabled: true,
    click: () => null,
  },
}

export default MainLayout
