import { Button, Container, Grid, Stack, Typography } from '@mui/material'
import classNames from 'classnames'
import React from 'react'
import { CookiesStyles } from '../../CSS/Components/Cookies/CookiesStyles'

function Cookies() {
  const classes = CookiesStyles()

  const [cookies, setCookies] = React.useState(false)

  return (
    <section
      className={classNames({
        [classes.Cookies_section]: true,
        [classes.cookies_hidden]: cookies,
      })}
    >
      <Container maxWidth='lg'>
        <Grid container spacing={3} className={classes.main_grid_cookies}>
          <Grid item xs={12} sm={6} md={9}>
            <Stack className={classes.cookies_stack}>
              <Typography variant='h5'>This website uses cookies</Typography>
              <Typography variant='h6' sx={{ fontSize: '15px', lineHeight: '20px', paddingBottom: '20px' }}>
                We use cookies to ensure that we offer you the best experience while browsing our website.
                <br /> Check our <span>Cookies Declaration</span> for more information.
              </Typography>
            </Stack>
          </Grid>
          <Grid item xs={12} sm={6} md={3}>
            <Stack direction='column' justifyContent='center' alignItems='flex-end'>
              <Button variant='contained' onClick={() => setCookies(true)}>
                Accept
              </Button>
            </Stack>
          </Grid>
        </Grid>
      </Container>
    </section>
  )
}

export default Cookies
