import { makeStyles } from '@mui/styles'

export const FormGroupStyles = makeStyles(theme => ({
  formLabel: {
    color: '#201F36 !important',
    fontSize: '16px !important',
    fontFamily: `DM Sans !important`,
    fontWeight: '600 !important',
    marginBottom: '10px',
  },
  formInput: {
    borderRadius: '8px',
    boxShadow: 'none !important',
    fontFamily: 'Open sans !important',

    borderColor: '#C4C4C4 !important',
    '& fieldset:hover': {
      borderColor: '#C4C4C4 !important',
    },

    '& input': {
      padding: '8px 12px !important',
    },
  },
  inputError: {
    color: '#ee2200',
    fontFamily: 'DM Sans',
    fontSize: '14px !important',
  },
}))
