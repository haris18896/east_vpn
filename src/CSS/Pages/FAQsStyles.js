import { makeStyles } from '@mui/styles'

export const FAQsStyles = makeStyles(theme => ({
  FAQs_section: {
    paddingTop: '30px',
    paddingBottom: '140px',
    // backgroundColor: 'rgba(229, 229, 229, 0.5)',
  },

  FAQs_heading: {
    '& h1': {
      fontFamily: 'DM Serif Display',
      fontWeight: '500',
      fontSize: '48px ',
      lineHeight: '58px',
      color: '#201F36',
      textAlign: 'center',
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
      lineHeight: '27px',
      fontFamily: 'DM Sans',
      textAlign: 'center',
      fontWeight: '400',
      [theme.breakpoints.down('900')]: {
        textAlign: 'center',
        marginTop: '20px',
      },
    },
  },

  grid_item_styling: {
    padding: '8px !important',

    // [theme.breakpoints.down('900')]: {
    //   padding: '4px 8px !important',
    // },
  },

  Accordion_Styles: {
    border: 'none !important',
    boxShadow: 'none !important',
    padding: '10px !important',

    '&:before': {
      marginLeft: 'auto',
      marginRight: 'auto',
      backgroundColor: '#FFF4D3 !important',
      width: '90% !important',
    },
  },

  Accordion_Summary_Styles: {
    '& p': {
      fontFamily: 'DM Sans',
      fontWeight: '500 !important',
      fontStyle: 'normal',
      color: '#201F36',
      fontSize: '19px !important',
      lineHeight: '27px',
    },
  },

  Accordion_Details_Styles: {
    '& p': {
      fontFamily: 'DM Sans',
      fontWeight: '400 !important',
      fontStyle: 'normal',
      fontSize: '18px !important',
      lineHeight: '28px !important',
      color: '#9b9b9b',

      [theme.breakpoints.down('900')]: {
        fontSize: '16px !important',
        lineHeight: '24px !important',
      },
    },
    '& li': {
      fontFamily: 'DM Sans',
      fontWeight: '400 !important',
      fontStyle: 'normal',
      fontSize: '18px !important',
      lineHeight: '28px !important',
      color: '#9b9b9b',
    },
  },

  main_Grid_Faqs: {
    marginTop: '70px !important',
    [theme.breakpoints.down('900')]: {
      marginTop: '30px !important',
    },
  },

  show_more_faqs: {
    color: theme.palette.primary.main,
    backgroundColor: 'transparent !important',
    border: 'none !important',
    fontFamily: 'DM Sans !important',
    fontWeight: '500 !important',
    fontStyle: 'normal !important',
    fontSize: '18px !important',
    cursor: 'pointer !important',

    [theme.breakpoints.down('900')]: {
      fontSize: '16px !important',
    },
  },
}))
