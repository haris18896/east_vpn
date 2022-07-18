import React, { useState, useEffect } from 'react'
import { Container, Stack, Typography } from '@mui/material'
import { HeaderStyles } from '../../CSS/Components/Header/index'
import axios from 'axios'

function HeaderTop() {
  const classes = HeaderStyles()

  const [response, setResponse] = useState('')

  const getData = async () => {
    const res = await axios.get('https://geolocation-db.com/json/')
    setResponse(res.data)
  }

  useEffect(() => {
    getData()
  }, [])

  return (
    <nav className={classes.HeaderTop}>
      <Container maxWidth='md'>
        <Stack direction='row' alignItems='center' justifyContent='center'>
          <Typography className={classes.HeaderTop_text}>
            Your IP Location: <span>{response?.IPv4 || 'unknown'}</span> -{' '}
            <span>
              {response?.city || 'unknown'}&nbsp;({response?.country_name || 'unknown'})
            </span>
            &nbsp;
          </Typography>
          <Typography className={classes.Status_in_Header}>
            Your status: <span>Unprotected</span>
          </Typography>
        </Stack>
      </Container>
    </nav>
  )
}

export default HeaderTop
