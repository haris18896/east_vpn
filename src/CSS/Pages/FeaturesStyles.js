import { makeStyles } from '@mui/styles'

export const FeaturesStyles = makeStyles(theme => ({
  EastVPN_features: {
    backgroundColor: '#FFECB6',
    position: 'relative',
    paddingBottom: '200px',
    zIndex: '-1',
    [theme.breakpoints.down('700')]: {
      paddingBottom: '150px',
      zIndex: '0',
    },
  },

  features_curve_top: {
    position: 'absolute',
    top: '-100px',
    zIndex: '-1',
    display: 'block',
    width: '100%',

    [theme.breakpoints.down(1900)]: {
      top: '-50px !important',
    },
    [theme.breakpoints.down(900)]: {
      top: '0px !important',
    },
  },

  features_curve_bottom: {
    position: 'absolute',
    bottom: '-180px !important',
    zIndex: '-4',
    display: 'block',
    width: '100%',

    [theme.breakpoints.down(1400)]: {
      bottom: '-150px !important',
    },

    [theme.breakpoints.down(1200)]: {
      bottom: '-100px !important',
    },

    [theme.breakpoints.down(800)]: {
      bottom: '-60px !important',
    },
    [theme.breakpoints.down(700)]: {
      bottom: '0px !important',
    },
  },

  features_part_1_stack: {
    marginTop: '100px !important',
    position: 'relative !important',

    [theme.breakpoints.down('900')]: {
      marginTop: '0px !important',
    },
  },

  features_Intro: {
    textAlign: 'center',
    fontStyle: 'normal',
    marginBottom: '90px',
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
      marginTop: '25px',
      color: '#A7A1AB',
      fontSize: '18px',
      lineHeight: '28px',
      fontFamily: 'DM Sans',
      fontWeight: '400',

      [theme.breakpoints.down('900')]: {
        fontSize: '17px',
        lineHeight: '27px',
      },

      '& br': {
        [theme.breakpoints.down('900')]: {
          display: 'none',
        },
      },
    },

    [theme.breakpoints.down('900')]: {
      marginBottom: '50px !important',
    },
  },

  features_main_Grid: {
    justifyContent: 'center',
    [theme.breakpoints.down('900')]: {
      marginTop: '30px',
    },
  },

  feature_icons: {
    width: '36px',
    height: '36px',
  },

  cards_content: {
    width: '100%',
  },

  features_circle_2: {
    position: 'absolute',
    top: '70%',
    left: '-80px',
    zIndex: '-1',

    [theme.breakpoints.down('900')]: {
      display: 'none !important',
    },
  },

  features_circle_3: {
    position: 'absolute',
    top: '-4%',
    right: '-14%',
    zIndex: '-1',

    [theme.breakpoints.down('900')]: {
      display: 'none !important',
    },
  },

  cards_details: {
    margin: '40px 30px',

    '& h1': {
      fontFamily: 'DM Sans',
      fontWeight: '700',
      fontStyle: 'normal',
      fontSize: '24px',
      lineHeight: '28px ',
      color: '#201F36',
      marginTop: '25px',

      [theme.breakpoints.down('900')]: {
        fontSize: '21px !important',
        lineHeight: '28px !important',
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
      fontSize: '16px !important',
      lineHeight: '20px',
      margin: '13px 0px !important',
    },

    '& div': {
      '& div': {
        marginLeft: 'auto !important',
        marginRight: 'auto !important',
        marginBottom: '25px !important',
      },
    },

    [theme.breakpoints.down('500')]: {
      margin: '10px 10px 0px 10px',
    },
  },

  large_image: {
    maxWidth: '300px',
    width: '100%',

    '& img': {
      maxWidth: '270px !important',
      width: '100%',
    },
  },
}))
