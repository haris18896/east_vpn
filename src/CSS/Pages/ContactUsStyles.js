import { makeStyles } from '@mui/styles'

export const ContactUsStyles = makeStyles(theme => ({
  ContactUs_section: {
    position: 'relative',
    paddingBottom: '90px',
    backgroundColor: '#FFECB6',
  },

  contact_curve_top: {
    position: 'absolute',
    top: '-100px',
    display: 'block',
    width: '100%',

    [theme.breakpoints.down('1700')]: {
      top: '-60px',
    },
    [theme.breakpoints.down('1050')]: {
      top: '-30px',
    },

    [theme.breakpoints.down('600')]: {
      top: '0px',
    },
  },

  ContactUs_heading: {
    '& p': {
      color: '#201F36',
      fontSize: '36px !important',
      fontFamily: 'DM Sans',
      fontStyle: 'normal',
      fontWeight: 'bold',
      lineHeight: '48px',
      zIndex: '4 !important',
      textAlign: 'left',

      [theme.breakpoints.down('900')]: {
        textAlign: 'center',
        fontSize: '32px',
        marginBottom: '60px',
        lineHeight: '43px',
      },
    },

    '& span': {
      fontSize: '48px !important',
      marginBottom: '15px',
      color: '#EF4E22',
      zIndex: '4 !important',
      lineHeight: '53px',

      [theme.breakpoints.down('900')]: {
        fontSize: '36px !important',
      },
    },
  },

  LineBreak: {
    [theme.breakpoints.down('900')]: {
      display: 'none',
    },
  },

  form_styling: {
    zIndex: '4 !important',
    color: '#000',
    borderRadius: '20px',
    backgroundColor: '#fff',
    minWidth: '250px',
    width: '100%',
    padding: '45px 33px 35px 33px',
    boxShadow: '-3px -10px 46px 10px rgba(0,0,0,0.05)',

    [theme.breakpoints.down('900')]: {
      width: '80% !important',
      margin: '0 20px',
      padding: '55px 33px',
    },

    [theme.breakpoints.down('340')]: {
      width: '70% !important',
      padding: '25px 13px',
    },
  },

  contact_btn_stack: {
    flexDirection: 'column !important',
    justifyContent: 'center !important',
    alignItems: 'flex-end !important',

    '& button': {
      marginTop: '20px',
      // marginLeft: 'auto !important',
      backgroundColor: theme.palette.primary.main,
      color: '#fff !important',
      borderRadius: '100px !important',
      padding: '14px 27px !important',
      boxShadow: 'none !important',

      border: 'none',
      fontFamily: 'DM Sans',
      fontWeight: '400',
      fontStyle: 'normal',
      fontSize: '18px',
      lineHeight: '28px',
      textAlign: 'center',
      cursor: 'pointer !important',
      textTransform: 'none !important',
    },
  },
}))
