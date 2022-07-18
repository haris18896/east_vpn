import { makeStyles } from '@mui/styles'

export const FooterStyles = makeStyles(theme => ({
  footer_Section: {
    position: 'relative',
    backgroundColor: '#201F36',
    paddingTop: '60px',
    paddingBottom: '150px',
  },

  top_Grid_footer: {
    paddingBottom: '100px',
  },

  logo_footer: {
    [theme.breakpoints.down('900')]: {
      alignItems: 'center',
      justifyContent: 'center',
    },
    '& img': {
      padding: ' 0px 5px',
    },
  },
  footer_right_grid_top: {
    flexDirection: 'row !important',
    justifyContent: 'center !important',
    alignItems: 'center !important',

    [theme.breakpoints.down('1100')]: {
      flexDirection: 'column !important',
    },

    '& p': {
      color: '#fff !important',
      margin: '0px 10px !important',
      fontSize: '18px',
      lineHeight: '28px',
      fontFamily: 'DM Sans',
      fontWeight: '400',

      [theme.breakpoints.down('1100')]: {
        marginBottom: '10px !important',
      },
    },

    '& img': {
      margin: '0px 10px !important',
      width: '170px',
      height: '50px',

      [theme.breakpoints.down('900')]: {
        width: '120px !important',
        height: '40px',
      },

      [theme.breakpoints.down(370)]: {
        margin: '10px 0px !important',
      },
    },

    '& div': {
      flexDirection: 'row !important',

      [theme.breakpoints.down(370)]: {
        flexDirection: 'column !important',
      },
    },
  },
  down_Grid_footer: {
    padding: '10px !important',
    '& h3': {
      fontFamily: 'DM Sans',
      color: '#fff !important',
      fontSize: '19px',
      fontWeight: '500',
      fontStyle: 'normal',
      lineHeight: '27px',
      marginBottom: ' 10px',

      [theme.breakpoints.down('600')]: {
        marginBottom: '0px',
      },
    },

    '& p': {
      fontFamily: 'DM Sans',
      fontWeight: '500',
      fontStyle: 'normal',
      fontSize: '18px',
      lineHeight: '27px',
      color: '#BEBEBE !important',
    },

    '& img': {
      marginTop: '50px',
    },

    '& li': {
      margin: '10px 0px',
      textDecoration: 'none',
      listStyleType: 'none',

      '& span': {
        textDecoration: 'none',
        fontFamily: 'DM Sans',
        fontWeight: '500',
        fontStyle: 'normal',
        fontSize: '18px',
        lineHeight: '27px',
        color: '#BEBEBE !important',
        width: '75%',
        cursor: 'pointer',
      },
    },

    '& a': {
      textDecoration: 'none',
      fontFamily: 'DM Sans',
      fontWeight: '500',
      fontStyle: 'normal',
      fontSize: '18px',
      lineHeight: '27px',
      color: '#BEBEBE !important',
      width: '75%',
    },
  },

  footer_stack: {
    [theme.breakpoints.down('600')]: {
      display: 'none !important',
    },
  },

  footer_Accordion: {
    [theme.breakpoints.up('600')]: {
      display: 'none !important',
    },
  },

  Accordion_Styles: {
    border: 'none !important',
    boxShadow: 'none !important',
    padding: '10px !important',
    width: '200px !important',
    backgroundColor: 'transparent !important',

    '& svg': {
      color: '#EF4E22 !important',
    },

    '&:before': {
      backgroundColor: 'transparent !important',
    },
  },

  copyRight_footer: {
    position: 'absolute',
    bottom: '5%',
    '& p': {
      zIndex: '2',
      color: '#EDEDED !important',
      fontFamily: 'DM Sans',
      fontWeight: '500',
      fontStyle: 'normal',
      fontSize: '18px',
      lineHeight: '27px',
    },
  },

  footer_background_curve: {
    position: 'absolute',
    bottom: '0px',
    left: '0px',
    backgroundSize: 'cover',
    width: '100%',
    overflow: 'hidden',
  },

  footer_elements_hidden: {
    display: 'none !important',
  },
}))
