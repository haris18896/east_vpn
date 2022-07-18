/* eslint-disable no-unused-vars */
import * as React from 'react'
import Box from '@mui/material/Box'
import FormControl from '@mui/material/FormControl'
import KeyboardArrowDownIcon from '@mui/icons-material/KeyboardArrowDown'
import { HeaderStyles } from '../../CSS/Components/Header'
import { MenuItem, Select } from '@mui/material'

export default function LanguageDropDown() {
  const classes = HeaderStyles()

  const [_, setLanguage] = React.useState('')

  const handleChange = event => {
    setLanguage(event.target.value)
  }

  return (
    <Box sx={{ minWidth: 120 }}>
      <FormControl fullWidth>
        <Select
          labelId='demo-simple-select-label'
          id='demo-simple-select'
          onChange={handleChange}
          defaultValue={10}
          IconComponent={KeyboardArrowDownIcon}
          className={classes.select_language}
        >
          <MenuItem value={10}>English</MenuItem>
          {/* <MenuItem value={20}>Twenty</MenuItem> */}
          {/* <MenuItem value={30}>Thirty</MenuItem> */}
        </Select>
      </FormControl>
    </Box>
  )
}
