import Lottie from 'react-lottie-player'
import NotFound404 from '../../assets/lottie/404Orange'

import { Container, Grid, Stack } from '@mui/material'
import { NotFoundStyling } from '../../CSS/Pages/NotFound/NotFoundStyling.js'

function NotFound() {
  const classes = NotFoundStyling()
  return (
    <section className={classes.NotFound_Section}>
      <Container maxWidth='lg'>
        <Grid container spacing={3} className={classes.NotFound_Grid} direction='column'>
          <Grid item xs={12} md={6}>
            <Stack direction='column' justifyContent='center' alignItems='center'>
              <h1>Page not found</h1>
              <p>The page you are looking for can not be found</p>
            </Stack>
          </Grid>
          <Grid item xs={12} md={6}>
            <Stack className={classes.NotFound} direction='column' justifyContent='center' alignItems='center'>
              <Lottie loop animationData={NotFound404} play />
            </Stack>
          </Grid>
        </Grid>
      </Container>
    </section>
  )
}

export default NotFound
