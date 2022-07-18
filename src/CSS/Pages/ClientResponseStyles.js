import { makeStyles } from '@mui/styles'

export const ClientResponseStyles = makeStyles(theme => ({
  client_Response_heading: {
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
      fontFamily: 'DM Sans',
      fontWeight: '400',
      fontStyle: 'normal',
      fontSize: '18px',
      lineHeight: '28px',
      textAlign: 'center',
      color: '#A7A1AB',
      marginTop: '15px',

      [theme.breakpoints.down('900')]: {
        marginTop: '15px',
      },
    },
  },

  Carousel_styles: {
    marginTop: '65px',
    marginBottom: '150px',
    fontFamily: 'DM Sans !important',
    fontStyle: 'normal !important',

    '& p': {
      color: '#201F36',
      fontWeight: '400',
      fontSize: '18px',
      lineHeight: '27px',
      marginBottom: '50px',
    },

    '& svg': {
      color: '#F2A700',
    },

    '& h5': {
      marginTop: '15px',
      color: '#201F36',
      fontWeight: '600',
      fontSize: '19px',
      lineHeight: '27px',
    },

    [theme.breakpoints.down('900')]: {
      marginTop: '40px',
    },
  },

  Card_carousel: {
    padding: '20px',
    margin: '10px',
    backgroundColor: '#F6F8FC !important',
    borderRadius: '16px !important',
    border: 'none !important',
    boxShadow: 'none !important',
  },
}))
