import { makeStyles } from '@mui/styles'
export const PrivacyAndTermsStyling = makeStyles(theme => ({
  AppPrivacyPolicyBackground: {
    padding: '140px 0',
    position: 'relative',
    // backgroundImage: `url(${privacy})`,
    backgroundRepeat: 'no-repeat',
    width: '100w',
    backgroundSize: 'contain',

    [theme.breakpoints.down('375')]: {
      padding: '170px 0',
    },

    '& p': {
      fontFamily: 'DM Sans !important',
      fontSize: '17px',
    },
  },

  background: {
    position: 'absolute',
    top: '0',
    left: '0',
    width: '100%',
    height: '60vh',
    zIndex: '-1',
    backgroundImage: 'linear-gradient(#FFECB6 10%, white)',
  },

  MainContentPrivacyDiv: {
    paddingBottom: '3rem ',
    textAlign: 'center',

    '& h1': {
      fontFamily: 'DM Sans !important',
      fontSize: '48px',

      [theme.breakpoints.down('sm')]: {
        fontSize: '24px',
      },
    },
  },

  Terms__Title: {
    fontSize: '48px !important',
    margin: '0 !important',
    fontFamily: 'DM Sans !important',
    fontWeight: 800,
  },

  Terms__sub_Title: {
    fontStyle: 'italic',
    fontSize: '17px',
    fontFamily: 'DM Sans !important',
    marginTop: '8px !important',
  },

  tableOfContents: {
    background: 'white',
    border: '2px solid #EF4E22',
    borderRadius: '4px',
    marginTop: '-1rem',

    '& ol': {
      paddingLeft: '36px',
    },

    '& li': {
      padding: '0.6rem 0!important',
      color: '#24275D',
      fontSize: '19px',
      fontFamily: 'DM Sans !important',
      fontWeight: '500',

      '&:hover': {
        color: '#77838F',
      },
    },
  },

  question__headings: {
    fontSize: '24px !important',
    fontFamily: 'DM Sans !important',
    fontWeight: 900,
  },

  link__item: {
    '&:link, &:visited': {
      color: '#24275D',
      fontFamily: 'DM Sans !important',
      textDecoration: 'none',
    },
    '&:hover': {
      color: '#77838F',
    },
  },

  tableOfContentsHeader: {
    // marginTop: '20px',
    backgroundColor: '#EF4E22',
    paddingBottom: '10px',
    fontFamily: 'Open Sans',
    border: '2px solid #EF4E22',
    borderRadius: '7px',

    '& h3': {
      marginLeft: '30px',
      fontSize: '20px',
      fontWeight: '600',
      color: '#fff',
      fontFamily: 'DM Sans !important',
      padding: '20px 0px ',
    },
  },

  rightContentDiv: {
    '& ul': {
      paddingLeft: '36px',
      fontFamily: 'DM Sans !important',
    },
    '& h2': {
      fontSize: '24px',
      fontFamily: 'DM Sans !important',
      margin: '20px 0px',
    },

    '& p': {
      textAlign: 'justify',
      fontFamily: 'DM Sans !important',
      margin: '14px 0px',
    },
  },

  link__styling: {
    color: '#EF4E22',
    fontFamily: 'DM Sans !important',
    textDecoration: 'none',
  },
}))
