import { makeStyles } from '@mui/styles'

export const HomeIntroStyles = makeStyles(theme => ({
  EastVPN_Intro: {
    position: 'relative',
    paddingTop: '250px',

    '& hr': {
      height: '5px',
      width: '225px',
      marginLeft: 'auto',
      marginRight: 'auto',
      border: 'none',
      backgroundColor: '#EF4E22',
      borderRadius: '10px',
      marginBottom: '90px',
    },

    [theme.breakpoints.down('1300')]: {
      paddingTop: '170px',
    },

    [theme.breakpoints.down('600')]: {
      paddingTop: '130px',
    },
  },

  background_intro: {
    position: 'absolute',
    top: '0',
    left: '0',
    zIndex: '-1',
    minHeight: '200px',
    width: '100%',
  },

  Intro_heading: {
    textAlign: 'center',
    fontStyle: 'normal',
    '& h1': {
      fontFamily: 'DM Serif Display',
      fontWeight: '500',
      fontSize: '48px ',
      lineHeight: '58px',
      color: '#201F36',
      [theme.breakpoints.down('900')]: {
        textAlign: 'center',
        fontSize: '32px',
        lineHeight: '43px',
      },

      '& br': {
        [theme.breakpoints.down('900')]: {
          display: 'none',
        },
      },

      '& span': {
        color: '#EF4E22',
      },
    },

    '& p': {
      marginTop: '30px',
      color: '#A7A1AB',
      fontSize: '18px',
      lineHeight: '28px',
      fontFamily: 'DM Sans',
      fontWeight: '400',
      marginBottom: '40px',

      [theme.breakpoints.down('900')]: {
        fontSize: '17px',
        lineHeight: '27px',
      },
    },
  },

  LeftCard: {
    position: 'absolute',
    top: '12%',
    left: '2%',
    zIndex: '-1',

    [theme.breakpoints.down('830')]: {
      display: 'none',
    },
  },
  RightCard: {
    position: 'absolute',
    top: '12%',
    right: '2%',
    zIndex: '-1',

    [theme.breakpoints.down('830')]: {
      display: 'none',
    },
  },

  shield: {
    position: 'absolute',
    zIndex: '-1',
    right: '2%',
    top: '34%',

    [theme.breakpoints.down('700')]: {
      display: 'none !important',
    },
  },
  ring: {
    position: 'absolute',
    zIndex: '-1',
    right: '8%',
    top: '44%',

    [theme.breakpoints.down('700')]: {
      display: 'none !important',
    },
  },
  lock: {
    position: 'absolute',
    zIndex: '-1',
    right: '20%',
    top: '50%',
    [theme.breakpoints.down('700')]: {
      display: 'none !important',
    },
  },
  redDot: {
    position: 'absolute',
    zIndex: '-1',
    right: '20%',
    top: '29%',
    [theme.breakpoints.down('700')]: {
      display: 'none !important',
    },
  },
  yellowDot: {
    position: 'absolute',
    zIndex: '-1',
    right: '37%',
    top: '32%',

    [theme.breakpoints.down('700')]: {
      display: 'none !important',
    },
  },
  lockLeft: {
    position: 'absolute',
    zIndex: '-1',
    left: '28%',
    top: '30%',
    [theme.breakpoints.down('1000')]: {
      left: '18%',
      top: '50%',
    },
    [theme.breakpoints.down('700')]: {
      display: 'none',
    },
  },
  ringLeft: {
    position: 'absolute',
    zIndex: '-1',
    left: '28%',
    top: '20%',
    [theme.breakpoints.down('700')]: {
      display: 'none !important',
    },
  },

  store_btn: {
    flexDirection: 'row !important',
    alignItems: 'center',
    justifyContent: 'center',
    marginBottom: '50px',

    '& img': {
      height: '28px',
      width: '28px',
      marginRight: '8px',
    },

    '& span': {
      fontSize: '16px',
      fontFamily: 'DM Sans',
      fontWeight: '400',
      fontStyle: 'normal',
      color: '#fff',
      lineHeight: '28px',
    },

    '& button': {
      borderRadius: '100px !important',
      padding: '12px 32px !important',
      margin: '10px 10px 10px 10px !important',

      [theme.breakpoints.down('700')]: {
        padding: '12px 100px !important',
        margin: '10px 10px 10px 10px !important',
      },

      [theme.breakpoints.down('365')]: {
        padding: '12px 70px !important',
      },
    },

    [theme.breakpoints.down('700')]: {
      flexDirection: 'column !important',
    },
  },

  appStore_button: {
    backgroundColor: '#2563EB !important',
    '& a': {
      textDecoration: 'none !important',
      color: '#fff',
    },
  },
  PlayStore_button: {
    backgroundColor: '#201F36 !important',

    '& a': {
      color: '#fff',
      textDecoration: 'none !important',
    },
  },

  Mobile: {
    maxWidth: '400px',
    maxHeight: '700px',
    // aspectRatio: '2/4',

    [theme.breakpoints.down('400')]: {
      maxWidth: '300px',
      maxHeight: '500px',
    },
  },

  Mobile_Img_div: {
    marginBottom: '130px',
    position: 'relative',

    [theme.breakpoints.up('400')]: {
      marginBottom: '190px',
    },
    [theme.breakpoints.up('600')]: {
      marginBottom: '270px',
    },
  },
  Mobile_dots: {
    position: 'absolute',
    bottom: '-30%',
    zIndex: '-1',
    overflow: 'hidden',
    maxWidth: '700px',
    maxHeight: '600px',
    margin: '0px 10px',

    [theme.breakpoints.down('660')]: {
      bottom: '-20%',
      maxWidth: '500px',
      maxHeight: '400px',
    },
    [theme.breakpoints.down('435')]: {
      bottom: '-20%',
      maxWidth: '400px',
      maxHeight: '400px',
    },
    [theme.breakpoints.down('400')]: {
      bottom: '-20%',
      maxWidth: '300px',
      maxHeight: '400px',
    },
  },
}))
