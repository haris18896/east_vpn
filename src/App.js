import React, { Suspense } from 'react'
import AppRoutes from './router/routes'
import { theme } from './utils/theme'
import { CircularProgress, Stack } from '@mui/material'
import { ThemeProvider } from '@mui/material/styles'
import { BrowserRouter } from 'react-router-dom'

function FallBackLoader() {
  return (
    <Stack direction='column' justifyContent='center' alignItems='center' sx={{ height: '100vh', margin: 'auto' }}>
      <CircularProgress />
    </Stack>
  )
}

function App() {
  return (
    <div id='app'>
      <ThemeProvider theme={theme}>
        <Suspense fallback={<FallBackLoader />}>
          <BrowserRouter>
            <AppRoutes />
          </BrowserRouter>
        </Suspense>
      </ThemeProvider>
    </div>
  )
}

export default App
