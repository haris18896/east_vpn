import React from 'react'
import { TextField, InputLabel, Box, Typography } from '@mui/material'
import { FormGroupStyles } from '../../CSS/Components/FormGroup/FormGroupStyles.js'

export function FormGroup({
  label,
  size,
  inputBackground,
  boxShadow,
  name,
  id,
  placeholder,
  disable,
  multiline,
  type,
  formik,
  rows,
  fullWidth,
  endAdornment,
}) {
  const classes = FormGroupStyles()
  return (
    <Box mb={2}>
      <InputLabel className={classes.formLabel}>{label}</InputLabel>
      <TextField
        className={classes.formInput}
        size={size ? size : ''}
        style={{
          backgroundColor: inputBackground ? inputBackground : '',
          boxShadow: boxShadow ? boxShadow : '',
        }}
        placeholder={placeholder}
        fullWidth={true}
        variant='outlined'
        type={type}
        id={id}
        name={name || ''}
        value={formik?.values[name] || ''}
        onChange={formik?.handleChange}
        onBlur={formik?.handleBlur}
        error={formik?.touched[name] && Boolean(formik?.errors[name])}
        disabled={disable}
        multiline={multiline}
        rows={rows}
      />
      {formik?.touched[name] && formik?.errors[name] ? (
        <Box mt={1}>
          <Typography variant='p' className={classes.inputError}>
            {formik?.errors[name]}
          </Typography>
        </Box>
      ) : null}
    </Box>
  )
}
