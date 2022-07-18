/* eslint-disable no-unused-vars */
import React, { useState } from 'react'
import classNames from 'classnames'
import ExpandMoreIcon from '@mui/icons-material/ExpandMore'

import Twitter from '../../assets/images/Twitter.svg'
import Google from '../../assets/images/Google.svg'
import FaceBook from '../../assets/images/FaceBook.svg'
import AppStoreLink from '../../assets/images/AppStoreLink.png'
import PlayStoreLink from '../../assets/images/PlayStoreLink.png'
import copyRightFooter from '../../assets/images/copyRightFooter.png'
import EastVPNLogoWhite from '../../assets/images/EastVPNLogoWhite.svg'
import EastVPNLogoTextWhite from '../../assets/images/EastVPNLogoTextWhite.svg'

import { Link } from 'react-router-dom'
import { useInfoStore } from '../../context/context'
import { FooterStyles } from '../../CSS/Components/Footer'
import { Accordion, AccordionDetails, AccordionSummary, Container, Grid, Stack } from '@mui/material'

function Footer() {
  const classes = FooterStyles()
  const [expanded, setExpanded] = useState(false)
  const [_, pathToggleDispatch] = useInfoStore()

  const handleChange = panel => (event, isExpanded) => {
    setExpanded(isExpanded ? panel : false)
  }

  return (
    <section className={classes.footer_Section}>
      <Container maxWidth='xl'>
        <Grid container spacing={3} className={classes.top_Grid_footer}>
          <Grid item xs={12} sm={6} md={3}>
            <Stack direction='row' justify='center' align='center' className={classes.logo_footer}>
              <img src={EastVPNLogoWhite} alt='EastVPNLogoWhite' style={{ width: '50px', height: '50px' }} />
              <img src={EastVPNLogoTextWhite} alt='EastVPNLogoTextWhite' style={{ width: '150px', height: '50px' }} />
            </Stack>
          </Grid>
          <Grid item xs={12} sm={6} sx={{ marginLeft: 'auto' }}>
            <Stack className={classes.footer_right_grid_top}>
              <p>Download our app</p>
              <Stack justify='center' align='center'>
                <img src={PlayStoreLink} alt='PlayStoreLink' />
                <img src={AppStoreLink} alt='AppStoreLink' />
              </Stack>
            </Stack>
          </Grid>
        </Grid>

        <Grid container spacing={0} className={classes.down_Grid_footer}>
          <Grid item xs={12} sm={6} md={2}>
            <Stack direction='column' justify='center' align='flex-start' className={classes.footer_stack}>
              <h3>Company</h3>
              <ul>
                <li
                  className={classNames({
                    [classes.footer_elements_hidden]: window.location.pathname !== '/',
                  })}
                >
                  <span onClick={() => pathToggleDispatch({ type: 'SCROLL_TO_ABOUT', path: 'about' })}>About Us</span>{' '}
                </li>
                <li>
                  <Link to='/privacy-policy'>Privacy Policy</Link>{' '}
                </li>
                <li>
                  <Link to='/terms-of-service'>Terms of Services</Link>{' '}
                </li>
              </ul>
            </Stack>
            <Stack direction='column' justify='center' align='flex-start' className={classes.footer_Accordion}>
              <Accordion expanded={expanded === 'panel1'} onChange={handleChange('panel1')} className={classes.Accordion_Styles}>
                <AccordionSummary
                  expandIcon={<ExpandMoreIcon />}
                  sx={{ marginTop: '0 !important', marginBottom: '0 !important', padding: '0px' }}
                  aria-controls='panel1a-content'
                  id='panel1a-header'
                >
                  <h3>Company</h3>
                </AccordionSummary>
                <AccordionDetails sx={{ padding: '0px !important' }}>
                  <ul>
                    <li
                      className={classNames({
                        [classes.footer_elements_hidden]: window.location.pathname !== '/',
                      })}
                    >
                      <span onClick={() => pathToggleDispatch({ type: 'SCROLL_TO_ABOUT', path: 'about' })}>About Us</span>{' '}
                    </li>
                    <li>
                      <Link to='/privacy-policy'>Privacy Policy</Link>{' '}
                    </li>
                    <li>
                      <Link to='/terms-of-service'>Terms of Services</Link>{' '}
                    </li>
                  </ul>
                </AccordionDetails>
              </Accordion>
            </Stack>
          </Grid>
          <Grid item xs={12} sm={6} md={2}>
            <Stack direction='column' justify='center' align='flex-start' className={classes.footer_stack}>
              <h3>Download</h3>
              <ul>
                <li>
                  <Link to='#'>Windows</Link>{' '}
                </li>
                <li>
                  <Link to='#'>Mac</Link>{' '}
                </li>
                <li>
                  <Link to='#'>IOS</Link>{' '}
                </li>
                <li>
                  <Link to='#'>Android</Link>{' '}
                </li>
                <li>
                  <Link to='#'>Linux</Link>{' '}
                </li>
              </ul>
            </Stack>

            <Stack direction='column' justify='center' align='flex-start' className={classes.footer_Accordion}>
              <Accordion expanded={expanded === 'panel2'} onChange={handleChange('panel2')} className={classes.Accordion_Styles}>
                <AccordionSummary
                  expandIcon={<ExpandMoreIcon />}
                  aria-controls='panel2a-content'
                  id='panel2a-header'
                  sx={{ marginTop: '0 !important', marginBottom: '0 !important', padding: '0px' }}
                >
                  <h3>Download</h3>
                </AccordionSummary>
                <AccordionDetails sx={{ padding: '0px !important' }}>
                  <ul>
                    <li>
                      <Link to='#'>Windows</Link>{' '}
                    </li>
                    <li>
                      <Link to='#'>Mac</Link>{' '}
                    </li>
                    <li>
                      <Link to='#'>IOS</Link>{' '}
                    </li>
                    <li>
                      <Link to='#'>Android</Link>{' '}
                    </li>
                    <li>
                      <Link to='#'>Linux</Link>{' '}
                    </li>
                  </ul>
                </AccordionDetails>
              </Accordion>
            </Stack>
          </Grid>
          <Grid item xs={12} sm={6} md={2}>
            <Stack
              direction='column'
              justify='center'
              align='flex-start'
              className={classNames({
                [classes.footer_stack]: true,
                [classes.footer_elements_hidden]: window.location.pathname !== '/',
              })}
            >
              <h3>Help</h3>
              <ul>
                <li>
                  <span onClick={() => pathToggleDispatch({ type: 'SCROLL_TO_FAQ', path: 'faq' })}>FAQ's</span>{' '}
                </li>
                <li>
                  <span onClick={() => pathToggleDispatch({ type: 'SCROLL_TO_CONTACT', path: 'contact' })}>Contact Us</span>{' '}
                </li>
              </ul>
            </Stack>

            <Stack direction='column' justify='center' align='flex-start' className={classes.footer_Accordion}>
              <Accordion
                expanded={expanded === 'panel3'}
                onChange={handleChange('panel3')}
                className={classNames({
                  [classes.Accordion_Styles]: true,
                  [classes.footer_elements_hidden]: window.location.pathname !== '/',
                })}
              >
                <AccordionSummary
                  expandIcon={<ExpandMoreIcon />}
                  aria-controls='panel1a-content'
                  id='panel1a-header'
                  sx={{ marginTop: '0 !important', marginBottom: '0 !important', padding: '0px' }}
                >
                  <h3>Help</h3>
                </AccordionSummary>
                <AccordionDetails sx={{ padding: '0px !important', marginBottom: '35px' }}>
                  <ul>
                    <li>
                      <span onClick={() => pathToggleDispatch({ type: 'SCROLL_TO_FAQ', path: 'faq' })}>FAQ's</span>{' '}
                    </li>
                    <li>
                      <span onClick={() => pathToggleDispatch({ type: 'SCROLL_TO_CONTACT', path: 'contact' })}>Contact Us</span>{' '}
                    </li>
                  </ul>
                </AccordionDetails>
              </Accordion>
            </Stack>
          </Grid>
          <Grid item xs={12} sm={6} md={5} sx={{ marginLeft: 'auto', marginRight: 'auto' }}>
            <Stack direction='column' justify='center' align='flex-start'>
              <p>
                In this day and age, we understand the importance on online privacy and security and we want to help you make
                well-informed decisions.
                <br />
                For that, EastVPN provides you with objective VPN reviews, as well as comprehensive guides and tutorials.
              </p>
              <Stack direction='row' justify='center' align='center'>
                <img src={FaceBook} alt='facebook' style={{ width: '60px', height: '60px', cursor: 'pointer' }} />
                <img src={Twitter} alt='twitter' style={{ width: '60px', height: '60px', cursor: 'pointer' }} />
              </Stack>
            </Stack>
          </Grid>
        </Grid>
        <Stack className={classes.copyRight_footer}>
          <p>© {new Date().getFullYear()} EastVPN. All rights reserved.</p>
        </Stack>
      </Container>
      <img src={copyRightFooter} alt='copyRightFooter' className={classes.footer_background_curve} />
    </section>
  )
}

export default Footer
