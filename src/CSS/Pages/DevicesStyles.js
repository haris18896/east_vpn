import { makeStyles } from '@mui/styles'

export const DevicesStyles = makeStyles(theme => ({
  Devices_section: {
    marginBottom: '100px',
    // marginTop: '50px',

    '& hr': {
      height: '5px',
      width: '225px',
      marginLeft: 'auto',
      marginRight: 'auto',
      border: 'none',
      backgroundColor: '#EF4E22',
      borderRadius: '10px',
      marginBottom: '90px',
      marginTop: '90px',
    },

    '& h1': {
      fontFamily: 'DM Serif Display',
      fontWeight: '500',
      fontSize: '48px ',
      lineHeight: '58px',
      color: '#201F36',
      textAlign: 'center',
      marginBottom: '60px',

      [theme.breakpoints.down('900')]: {
        fontSize: '32px',
        lineHeight: '43px',
        marginBottom: '30px',
      },

      '& span': {
        color: '#EF4E22',
      },
    },

    '& p': {
      fontFamily: 'DM Sans',
      fontWeight: '500 !important',
      fontStyle: 'normal',
      fontSize: '18px',
      lineHeight: '28px',
      // textAlign: 'center',
      color: '#201F36',
      marginTop: '10px',
    },
  },

  android: {
    backgroundColor: '#F6F8Fc',
    padding: '31px 0px',

    [theme.breakpoints.down('400')]: {
      padding: '28px 0px',
    },

    '& img': {
      width: '46px',
      height: '84px',

      [theme.breakpoints.down('900')]: {
        width: '37px',
        height: '67px',
      },
    },
  },
  ios: {
    backgroundColor: '#fff',
    padding: '31px 0px',

    [theme.breakpoints.down('400')]: {
      padding: '28px 0px',
    },

    '& img': {
      width: '46px',
      height: '84px',
      [theme.breakpoints.down('900')]: {
        width: '37px',
        height: '67px',
      },
    },
  },
  mac: {
    backgroundColor: '#F6F8Fc',

    padding: '40px 0px',

    '& img': {
      width: '80px',
      height: '64px',
      [theme.breakpoints.down('900')]: {
        width: '72px',
        height: '58px',
      },
    },
    [theme.breakpoints.down('900')]: {
      backgroundColor: '#fff',
    },
  },
  windows: {
    backgroundColor: '#fff',
    padding: '40px 0px',

    '& img': {
      width: '80px',
      height: '64px',
      [theme.breakpoints.down('900')]: {
        width: '72px',
        height: '58px',
      },
    },
    [theme.breakpoints.down('900')]: {
      backgroundColor: '#F6F8Fc',
    },
  },
  linux: {
    backgroundColor: '#F6F8Fc',
    padding: '40px 0px',

    '& img': {
      width: '80px',
      height: '64px',
      [theme.breakpoints.down('900')]: {
        width: '72px',
        height: '58px',
      },
    },
  },

  hidden_on_large: {
    [theme.breakpoints.up('900')]: {
      display: 'none',
    },
  },
}))
