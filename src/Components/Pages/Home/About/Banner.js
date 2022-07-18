import React from 'react'

import like from '../../../../assets/images/Like.png'
import spring50 from '../../../../assets/images/upto50percent.svg'

import { Button, Container, Grid, Stack } from '@mui/material'
import { BannerStyles } from '../../../../CSS/Pages/BannerStyles.js'

function Banner() {
  const classes = BannerStyles()
  return (
    <section className={classes.banner_section}>
      <img src={like} alt='like' className={classes.like} />
      <Container maxWidth='lg'>
        <Grid container className={classes.banner_grid_layout}>
          <Grid item xs={12}>
            <Stack direction='column' justifyContent='center' alignItems='center'>
              <h1>Spring Offer</h1>
              <img src={spring50} alt='spring50' />
              <p>
                Download our free and full-featured VPN client to <br />
                &nbsp; connect to EastVPN, Access Server or any Devices use Server
              </p>
              <Button variant='contained'>Get Now</Button>
            </Stack>
          </Grid>
        </Grid>
      </Container>
    </section>
  )
}

export default Banner
