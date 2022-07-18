import { makeStyles } from '@mui/styles'
export const CookiesStyles = makeStyles(theme => ({
  Cookies_section: {
    backgroundColor: '#2F313F',
    width: '100%',
    color: '#fff',
    position: 'fixed',
    bottom: '0',
    left: '0',
    zIndex: '1000',

    '& h5': {
      marginBottom: '6px !important',
      fontFamily: 'DM Sans !important',
      fontWeight: '500 !important',
      color: '#fff !important',
      fontSize: '18px !important',
      lineHeight: '27px !important',
      paddingTop: '10px !important',
      textAlign: 'left !important',

      [theme.breakpoints.down('400')]: {
        textAlign: 'center !important',
      },
    },

    '& h6': {
      fontFamily: 'DM Sans !important',
      fontWeight: '500 !important',
      color: '#fff !important',
      fontSize: '15px !important',
      lineHeight: '20px !important',
      paddingBottom: '10px !important',
      textAlign: 'left !important',

      [theme.breakpoints.down('600')]: {
        paddingBottom: '0px !important',
      },
      [theme.breakpoints.down('400')]: {
        textAlign: 'center !important',
      },
    },

    '& span': {
      color: theme.palette.primary.main,
    },

    '& button': {
      padding: '11px 50px !important',
      borderRadius: '50px !important',
      boxShadow: 'none !important',

      [theme.breakpoints.down('600')]: {
        marginBottom: '15px !important',
      },
    },
  },

  main_grid_cookies: {
    // display: 'flex !important',
    flexDirection: 'row !important',
    alignItems: 'center !important',
    justifyContent: 'center !important',

    [theme.breakpoints.down('600')]: {
      flexDirection: 'column !important',
    },
  },

  cookies_stack: {
    flexDirection: 'column !important',
    justifyContent: 'center !important',
    alignItems: 'flex-Start !important',

    [theme.breakpoints.down('400')]: {
      alignItems: 'center !important',
    },
  },

  cookies_hidden: {
    display: 'none !important',
  },
}))
