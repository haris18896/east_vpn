import { createTheme } from '@mui/material/styles'
const theme = createTheme({
  palette: {
    primary: {
      main: '#EF4E22',
      light: '#201F36',
    },
    secondary: {
      main: '#FFECB6',
      light: '#DBDDDC',
    },
    error: {
      main: '#E76D73',
    },
  },
  typography: {},
})
export { theme }
