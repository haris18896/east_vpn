import { makeStyles } from '@mui/styles'

export const PricingStyles = makeStyles(theme => ({
  pricing_styling: {
    marginTop: '80px',
    marginBottom: '100px',

    '& h1': {
      fontFamily: 'DM Serif Display',
      fontWeight: '500',
      fontSize: '48px ',
      lineHeight: '53px',
      color: '#201F36',
      marginBottom: '50px',
      [theme.breakpoints.down('900')]: {
        textAlign: 'center',
        fontSize: '32px',
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
  },
  plans_grid: {
    textAlign: 'center',

    '& h3': {
      fontFamily: 'DM Sans',
      fontWeight: '400',
      fontStyle: 'normal',
      fontSize: '21px !important',
      color: '#201F36',
      lineHeight: '28px',
    },

    '& h1': {
      fontSize: '48px !important',
      fontFamily: 'DM Sans',
      fontStyle: 'normal',
      fontWeight: 'bold',
      lineHeight: '40px',
      marginTop: '25px',
      color: '#201F36',
      marginBottom: '30px',
      [theme.breakpoints.down('900')]: {
        fontSize: '30px !important',
        textAlign: 'center',
      },
    },
    '& p': {
      fontFamily: 'DM Sans',
      fontWeight: '500',
      fontStyle: 'normal',
      fontSize: '17px',
      lineHeight: '23px',
      color: '#201F36',
      letterSpacing: '1px',
      marginBottom: '20px',

      '& br': {
        [theme.breakpoints.down('900')]: {
          display: 'none',
        },
      },
    },

    '& span': {
      fontFamily: 'DM Sans',
      fontWeight: '800',
      fontStyle: 'normal',
      fontSize: '17px',
      lineHeight: '23px',
      color: '#201F36 !important',
      letterSpacing: '1px',
      marginBottom: '60px',
    },

    '& button': {
      marginTop: '30px',
      border: 'none',
      fontFamily: 'DM Sans',
      fontWeight: '600 !important',
      fontStyle: 'normal',
      fontSize: '18px',
      lineHeight: '23px',
      color: '#F2A700',
      padding: '19px 80px',
      backgroundColor: '#FFF4D3',
      borderRadius: '10px',
      cursor: 'pointer',
    },
  },
  plans_Stack_selected: {
    backgroundColor: theme.palette.primary.main,
    padding: '54px 35px',
    borderRadius: '15px',
    cursor: 'pointer',

    '& h1': {
      color: '#fff !important',
    },
    '& h3': {
      color: '#fff !important',
    },
    '& p': {
      color: '#fff !important',
    },
    '& span': {
      color: '#fff !important',
    },
    '& button': {
      color: '#201F36 !important',
      backgroundColor: '#fff !important',
    },
  },

  plans_Stack: {
    padding: '54px 35px',
    borderRadius: '15px',
    cursor: 'pointer',
  },

  plan_discount: {
    fontWeight: '600 !important',
  },
}))
