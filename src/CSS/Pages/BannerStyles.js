import { makeStyles } from '@mui/styles'
import backgroundImage from '../../assets/images/backgroundNew.png'

export const BannerStyles = makeStyles(theme => ({
  banner_section: {
    position: 'relative',
    backgroundColor: '#FBF2E3',
    backgroundImage: `url(${backgroundImage})`,
    backgroundSize: 'cover',
    backgroundRepeat: 'no-repeat',
    backgroundPosition: 'center',

    [theme.breakpoints.down('1100')]: {
      // backgroundPosition: 'center',
    },
  },
  banner_grid_layout: {
    paddingTop: '120px',
    paddingBottom: '150px',

    '& img': {
      width: '250px',
      overflow: 'hidden',
      [theme.breakpoints.down('350')]: {
        maxWidth: '230px',
      },
    },

    '& h1': {
      fontFamily: 'DM Serif Display',
      fontWeight: '500',
      fontSize: '48px ',
      lineHeight: '58px',
      color: '#EF3401',
      textAlign: 'center',
      marginBottom: '20px',
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
    },

    '& p': {
      fontFamily: 'DM Sans',
      fontWeight: '400',
      fontStyle: 'normal',
      fontSize: '18px',
      lineHeight: '28px',
      textAlign: 'center',
      color: '#000',
      marginTop: '30px',

      '& br': {
        [theme.breakpoints.down('900')]: {
          display: 'none',
        },
      },
    },

    '& button': {
      marginTop: '43px',
      backgroundColor: '#EF3401',
      color: '#fff',
      border: 'none',
      fontFamily: 'DM Sans',
      fontWeight: '400',
      fontStyle: 'normal',
      fontSize: '18px',
      lineHeight: '28px',
      textAlign: 'center',
      padding: '14px 77px',
      borderRadius: '100px',
      marginBottom: '100px',
      cursor: 'pointer !important',
      boxShadow: 'none !important',
      textTransform: 'none !important',

      [theme.breakpoints.down('1300')]: {
        marginBottom: '10px',
      },

      [theme.breakpoints.down('900')]: {
        marginBottom: '60px',
      },
    },

    [theme.breakpoints.down('900')]: {
      flexDirection: 'column-reverse !important',
      alignItems: 'center !important',
      justifyContent: 'center !important',
    },

    [theme.breakpoints.down('700')]: {
      paddingBottom: '150px',
    },
  },
  banner_texture: {
    position: 'absolute',
    width: '100%',
    height: '100%',
    top: '0',
    left: '0',
    right: '0',
    bottom: '0',
    overflow: 'hidden',
    backgroundSize: 'cover',
  },
  like: {
    position: 'absolute',
    left: '47%',
    top: '-90px',
    width: '140px',
    height: '170px',

    animation: '$thumbAnimation 4s ease ',
    animationIterationCount: 'infinite',
    // transformOrigin: '70% 70%',

    [theme.breakpoints.down('660')]: {
      left: '40%',
    },
    [theme.breakpoints.down('380')]: {
      left: '30%',
    },
    [theme.breakpoints.down('330')]: {
      left: '20%',
    },
  },

  banner_bottom: {
    position: 'absolute',
    bottom: '0',
    top: '0',
    left: '0',
    right: '0',
    zIndex: '-1',
    width: '100%',
  },

  '@keyframes thumbAnimation': {
    '0%': { transform: 'rotate( 0.0deg)' },
    '10%': {
      transform: 'rotate(14.0deg) ',
    },
    '20%': { transform: 'rotate(-8.0deg)' },
    '30%': { transform: 'rotate(14.0deg) ' },
    '40%': { transform: 'rotate(-4.0deg)' },
    '50%': { transform: 'rotate(10.0deg) ' },
    '60%': { transform: 'rotate( 0.0deg)' } /* Reset for the last half to pause */,
    ' 100%': { transform: 'rotate( 0.0deg)' },
  },
}))
