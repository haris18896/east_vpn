import { makeStyles } from '@mui/styles'

export const NotFoundStyling = makeStyles(theme => ({
  NotFound_Section: {
    marginTop: '180px',

    [theme.breakpoints.down('400')]: {
      marginTop: '200px',
    },
  },

  NotFound_Grid: {
    alignItems: 'center !important',
    justifyContent: 'center !important',

    '& h1': {
      fontFamily: 'DM Sans',
      fontSize: '48px',
      fontWeight: 'bold',
      color: '#201F36',
      lineHeight: '53px',
      marginBottom: '10px',

      [theme.breakpoints.down('400')]: {
        fontSize: '36px',
        textAlign: 'center',
      },
    },

    '& p': {
      fontFamily: 'DM Sans',
      fontSize: '18px',
      fontWeight: '400',
      color: '#A7A1AB',
      lineHeight: '28px',
      [theme.breakpoints.down('400')]: {
        textAlign: 'center',
      },
    },
  },

  NotFound: {
    // height: '70vh',
  },
}))
