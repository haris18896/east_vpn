/* eslint-disable no-unused-vars */
import React, { useState, useEffect } from 'react'

import menu from '../../assets/images/menu.svg'
import logo from '../../assets/images/EastLogo.svg'

import HeaderTop from '../HeaderTop'
import LanguageDropDown from './LanguageDropDown'

import classNames from 'classnames'

import ChevronRightIcon from '@mui/icons-material/ChevronRight'
import {
  AppBar,
  Box,
  Container,
  Drawer,
  Grid,
  IconButton,
  List,
  ListItem,
  ListItemText,
  Stack,
  Toolbar,
  Typography,
} from '@mui/material'

import { Link } from 'react-router-dom'
import { useInfoStore } from '../../context/context'
import { HeaderStyles } from '../../CSS/Components/Header/index'

function HeaderHome() {
  const classes = HeaderStyles()
  const [offSet, setOffSet] = useState(false)
  const [_, pathToggleDispatch] = useInfoStore()

  useEffect(() => {
    if (typeof window !== 'undefined') {
      window.addEventListener('scroll', () => setOffSet(window.pageYOffset > 50))
    }
  }, [])

  let tabs = [
    {
      id: 'Home',
      name: 'Home',
      path: 'home',
      type: 'SCROLL_TO_Home',
      default: true,
    },
    {
      id: 'About',
      name: 'About Us',
      default: false,
      path: 'about',
      type: 'SCROLL_TO_ABOUT',
    },
    {
      id: 'Pricing',
      name: 'Pricing',
      default: false,
      path: 'pricing',
      type: 'SCROLL_TO_PRICING',
    },
    {
      id: 'FAQs',
      name: 'FAQs',
      default: false,
      path: 'faq',
      type: 'SCROLL_TO_FAQ',
    },
    {
      id: 'Contact',
      name: 'Contact us',
      default: false,
      path: 'contact',
      type: 'SCROLL_TO_CONTACT',
    },
  ]

  // ** For Drawer
  const [tabsState] = useState(tabs)
  const [selectedTab, setSelectedTab] = useState({
    id: 'Home',
    name: 'Home',
    default: true,
  })

  const [state, setState] = useState({
    right: false,
  })

  const toggleDrawer = (anchor, open) => event => {
    if (event.type === 'keydown' && (event.key === 'Tab' || event.key === 'Shift')) {
      return
    }

    setState({ ...state, [anchor]: open })
  }

  const handleChangeTab = tab => {
    setSelectedTab(tab)
  }

  const list = anchor => (
    <Box
      sx={{ width: anchor === 'top' || anchor === 'bottom' ? 'auto' : 250 }}
      role='presentation'
      onClick={toggleDrawer(anchor, false)}
      onKeyDown={toggleDrawer(anchor, false)}
    >
      <List
        className={classNames({
          [classes.Nav_elements_hidden]: window.location.pathname !== '/',
        })}
      >
        {tabsState.map(doc => (
          <ListItem
            sx={{ paddingLeft: '20px' }}
            button
            key={doc.id}
            onClick={() => {
              handleChangeTab(doc)
              pathToggleDispatch({ type: doc.type, path: doc.path })
            }}
          >
            <ListItemText
              primary={
                <Typography
                  type='body2'
                  className={classNames({
                    [classes.navLink]: true,
                    [classes.navActive]: selectedTab.id === doc.id,
                  })}
                >
                  {doc.name}
                </Typography>
              }
            />
          </ListItem>
        ))}
      </List>
    </Box>
  )

  return (
    <nav
      className={classNames({
        [classes.EastVpnHeader]: true,
        [classes.whiteBackground]: offSet,
      })}
    >
      <HeaderTop />
      <Container maxWidth='xl'>
        <Grid
          container
          direction='row'
          justifyContent='space-between'
          alignItems='center'
          className={classes.header_grid_container}
          sx={{}}
        >
          <Grid item xs={6} sm={4}>
            <Stack direction='row' alignContent='center' justifyContent='flex-start'>
              <Link to='/'>
                <img src={logo} alt='Logo' className={classes.logo_header} />
              </Link>
            </Stack>
          </Grid>
          <Grid item className={classes.Nav_elements}>
            <Stack
              direction='row'
              alignItems='center'
              justifyContent='space-between'
              className={classNames({
                [classes.header_navigation_large]: window.location.pathname === '/',
                [classes.Nav_elements_hidden]: window.location.pathname !== '/',
              })}
            >
              {tabs.map((doc, index) => (
                <li
                  key={index}
                  onClick={() => {
                    handleChangeTab(doc)
                    pathToggleDispatch({ type: doc.type, path: doc.path })
                  }}
                >
                  <span
                    className={classNames({
                      [classes.navLink]: true,
                      [classes.navActive]: selectedTab.id === doc.id,
                    })}
                  >
                    {doc.name}
                  </span>
                </li>
              ))}
              <LanguageDropDown />
            </Stack>

            <Stack
              direction='row'
              alignItems='center'
              justifyContent='space-between'
              className={classNames({
                [classes.on_small_screen_hidden]: true,
                [classes.Nav_elements_hidden]: window.location.pathname === '/',
              })}
            >
              <LanguageDropDown />
            </Stack>

            <Stack direction='row' alignItems='center' justifyContent='space-between' className={classes.header_navigation_small}>
              <IconButton size='large' edge='start' color='inherit' aria-label='menu' onClick={toggleDrawer('right', true)}>
                <img src={menu} alt='menu' />
              </IconButton>
            </Stack>
          </Grid>
        </Grid>
      </Container>

      <Drawer
        className={classes.drawer}
        anchor={'right'}
        open={state['right']}
        onClose={toggleDrawer('right', false)}
        classes={{
          paper: classes.drawerPaper,
        }}
      >
        <Box>
          <AppBar position='static' className={classes.mobileAppBar}>
            <Toolbar style={{ justifyContent: 'space-between' }}>
              <IconButton
                size='large'
                edge='start'
                color='inherit'
                aria-label='menu'
                sx={{ mr: 2 }}
                onClick={toggleDrawer('right', false)}
              >
                <ChevronRightIcon />
              </IconButton>
              <Box className={classes.ProfileBoxSmall}>
                <LanguageDropDown />
              </Box>
            </Toolbar>
          </AppBar>
        </Box>
        {list('right')}
      </Drawer>
    </nav>
  )
}

export default HeaderHome
