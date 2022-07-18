import { makeStyles } from '@mui/styles'

export const HeaderStyles = makeStyles(theme => ({
  HeaderTop: {
    backgroundColor: theme.palette.primary.light,
    color: '#fff',
  },

  header_grid_container: {
    padding: '10px 24px !important',

    [theme.breakpoints.down('450')]: {
      padding: ' 10px 0px !important',
    },
  },

  HeaderTop_text: {
    fontSize: '15px !important',
    color: '#fff',
    fontWeight: '400',
    lineHeight: '23px',
    textAlign: 'center',
    padding: '5px',

    [theme.breakpoints.down('600')]: {
      fontSize: '13px !important',
      lineHeight: '19px',
    },
  },
  Status_in_Header: {
    fontSize: '15px !important',
    color: '#fff !important',
    fontWeight: '700',
    lineHeight: '23px',
    textAlign: 'center',
    padding: '5px',

    '& span': {
      position: 'relative',
      marginLeft: '20px',
      color: theme.palette.primary.main,

      '&:before': {
        content: '" "',
        position: 'absolute',
        left: '-15px',
        top: '4px',
        height: '10px',
        width: '10px',
        borderRadius: '50%',
        display: 'inline-block',
        backgroundColor: theme.palette.primary.main,
      },
    },

    [theme.breakpoints.down('600')]: {
      fontSize: '14px !important',
      lineHeight: '19px',
    },
  },

  mobileAppBar: {},

  EastVpnHeader: {
    position: 'fixed',
    width: '100%',
    top: '0px',
    backgroundColor: 'transparent',
    zIndex: '30',
    overflow: 'hidden',
  },

  whiteBackground: {
    backgroundColor: '#fff',
  },

  logo_header: {
    width: '200px',
    height: '50px',

    [theme.breakpoints.down('400')]: {
      width: '150px',
      height: '40px',
    },
  },

  Nav_elements: {
    '& li': {
      textDecoration: 'none',
      listStyle: 'none',
      fontSize: '16px',
      fontWeight: '500',
      fontStyle: 'normal',
    },
    '& a': {
      textDecoration: 'none',
    },
  },

  on_small_screen_hidden: {
    [theme.breakpoints.down('900')]: {
      display: 'none !important',
    },
  },

  Nav_elements_hidden: {
    display: 'none !important',
  },

  navLink: {
    color: theme.palette.primary.light,
    backgroundColor: 'transparent',
    padding: '10px 20px',
    borderRadius: '50px',
    fontFamily: 'DM Sans !important',
    fontWeight: '500 !important',
    cursor: 'pointer',

    [theme.breakpoints.down('1000')]: {
      padding: '7px 10px',
    },
  },

  navActive: {
    color: theme.palette.primary.light,
    backgroundColor: '#F6F8FC !important',
    padding: '10px 20px',
    borderRadius: '50px',
    cursor: 'pointer',
    fontWeight: '600 !important',

    [theme.breakpoints.down('1000')]: {
      padding: '7px 15px',
    },
  },

  header_navigation_large: {
    [theme.breakpoints.down('900')]: {
      display: 'none !important',
    },
  },

  header_navigation_small: {
    [theme.breakpoints.up('900')]: {
      display: 'none !important',
    },
  },

  // **********************************************************************************************************
  // Language Drop Down
  select_language: {
    backgroundColor: 'transparent',
    border: 'none !important',
    fontFamily: 'DM Sans !important',
    fontSize: '16px !important',
    fontWeight: '500 !important',
    color: '#EF4E22 !important',
    outline: 'none !important',

    [theme.breakpoints.down('900')]: {
      color: '#F6F8FC !important',
    },

    '&:before': {
      display: 'none !important',
      border: 'none !important',
      content: '"" !important',
    },
    '&:after': {
      display: 'none !important',
      border: 'none !important',
      content: '"" !important',
      width: '100%',
    },

    '& select': {
      border: 'none',

      '& option': {
        padding: '5px',
        color: '#201F36',
        outline: 'none !important',
      },
    },

    '& svg': {
      color: '#EF4E22 !important',
      [theme.breakpoints.down('900')]: {
        color: '#F6F8FC !important',
      },
    },

    '& fieldset': {
      border: 'none !important',
    },
  },
}))

// **********************************************************************************************************
