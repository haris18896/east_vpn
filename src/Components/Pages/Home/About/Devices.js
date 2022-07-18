import React from 'react'
import { Container, Grid, Stack } from '@mui/material'

import Android from '../../../../assets/images/Android.svg'
import ios from '../../../../assets/images/ios.svg'
import mac from '../../../../assets/images/mac.svg'
import windows from '../../../../assets/images/windows.svg'
import linux from '../../../../assets/images/linux.svg'

import { DevicesStyles } from '../../../../CSS/Pages/DevicesStyles.js'

function Devices() {
  const classes = DevicesStyles()
  return (
    <section className={classes.Devices_section}>
      <Container maxWidth='lg'>
        <Stack direction='row' justifyContent='center' alignContent='center'>
          <h1>
            Protect All your devices, access
            <br />
            &nbsp;<span>unlimited</span>&nbsp;network
          </h1>
        </Stack>
        <Grid container alignItems='center' justifyContent='center'>
          <Grid item xs={6} md={2} className={`${classes.grid_items} ${classes.android}`}>
            <Stack direction='column' justifyContent='center' alignItems='center'>
              <img src={Android} alt='Android' />
              <p>Android</p>
            </Stack>
          </Grid>
          <Grid item xs={6} md={2} className={`${classes.grid_Items} ${classes.ios}`}>
            <Stack direction='column' justifyContent='center' alignItems='center'>
              <img src={ios} alt='ios' />
              <p>IOS</p>
            </Stack>
          </Grid>
          <Grid item xs={6} md={2} className={`${classes.grid_items} ${classes.mac}`}>
            <Stack direction='column' justifyContent='center' alignItems='center'>
              <img src={mac} alt='mac' />
              <p>Mac</p>
            </Stack>
          </Grid>
          <Grid item xs={6} md={2} className={`${classes.grid_items} ${classes.windows}`}>
            <Stack direction='column' justifyContent='center' alignItems='center'>
              <img src={windows} alt='windows' />
              <p>Windows</p>
            </Stack>
          </Grid>
          <Grid item xs={6} md={2} className={`${classes.grid_items} ${classes.linux}`}>
            <Stack direction='column' justifyContent='center' alignItems='center'>
              <img src={linux} alt='linux' />
              <p>Linux</p>
            </Stack>
          </Grid>
          <Grid item xs={6} md={2} className={classes.hidden_on_large}>
            <Stack direction='column' justifyContent='center' alignItems='center'>
              <p>&nbsp;</p>
            </Stack>
          </Grid>
        </Grid>
        <hr />
      </Container>
    </section>
  )
}

export default Devices
