/* eslint-disable react-hooks/exhaustive-deps */
import React, { useEffect, useRef } from 'react'

import playStoreLogo from '../../../assets/images/playStoreLogo.svg'
import appleLogo from '../../../assets/images/appleLogo.svg'
import Mobile from '../../../assets/images/Mobile.png'
import Mobile_dots from '../../../assets/images/Mobile_dots.svg'

import introLeftCard from '../../../assets/images/introLeftCard.svg'
import introRightCard from '../../../assets/images/introRightCard.svg'
import background from '../../../assets/images/introBackground.svg'

import shield from '../../../assets/images/shield.svg'
import ring from '../../../assets/images/ring.svg'
import lock from '../../../assets/images/lock.svg'
import redDot from '../../../assets/images/redDot.svg'
import yellowDot from '../../../assets/images/yellowDot.svg'
import lockLeft from '../../../assets/images/lockLeft.svg'
import ringLeft from '../../../assets/images/ringLeft.svg'

import { LazyLoadImage } from 'react-lazy-load-image-component'
import { Container, IconButton, Skeleton, Stack } from '@mui/material'

import { useInfoStore } from '../../../context/context'
import { HomeIntroStyles } from '../../../CSS/Pages/HomeIntroStyles.js'

function EastVpnIntro() {
  const classes = HomeIntroStyles()
  const scrollToHomeSectionRef = useRef(null)
  const [pathInfoState, pathInfoDispatch] = useInfoStore()

  useEffect(() => {
    if (pathInfoState?.scrollToHome && scrollToHomeSectionRef?.current) {
      const yOffset = -120
      const y = scrollToHomeSectionRef?.current.getBoundingClientRect().top + window.pageYOffset + yOffset
      window.scrollTo({ top: y, behavior: 'smooth' })
    }
  }, [pathInfoState?.scrollToHome])

  useEffect(() => {
    return () => {
      pathInfoDispatch({ type: 'CLEAR_ALL_SCROLLS' })
    }
  }, [])

  useEffect(() => {
    pathInfoDispatch({ type: 'SCROLL_TO_Home', path: 'home' })
  }, [])

  useEffect(() => {
    document.title = 'Ultra-Fast, Secure VPN | EastVPN'
  }, [])

  return (
    <section ref={scrollToHomeSectionRef} className={classes.EastVPN_Intro}>
      <img src={background} alt='background' className={classes.background_intro} />

      <Container maxWidth='lg' sx={{ position: 'relative' }}>
        <LazyLoadImage
          src={introLeftCard}
          alt='LeftCard'
          className={classes.LeftCard}
          delayMethod='debounce'
          delayTime={2000}
          placeholder={
            <Skeleton variant='rectangular'>
              <img src={introLeftCard} alt='apple' className={classes.LeftCard} />
            </Skeleton>
          }
        />
        <LazyLoadImage
          src={introRightCard}
          alt='introRightCard'
          className={classes.RightCard}
          delayMethod='debounce'
          delayTime={2000}
          placeholder={
            <Skeleton variant='rectangular'>
              <img src={introRightCard} alt='apple' className={classes.RightCard} />
            </Skeleton>
          }
        />
        <LazyLoadImage src={shield} alt='shield' className={classes.shield} delayMethod='debounce' delayTime={2000} />
        <LazyLoadImage src={ring} alt='ring' className={classes.ring} delayMethod='debounce' delayTime={2000} />
        <LazyLoadImage src={lock} alt='lock' className={classes.lock} delayMethod='debounce' delayTime={2000} />
        <LazyLoadImage src={redDot} alt='redDot' className={classes.redDot} delayMethod='debounce' delayTime={2000} />
        <LazyLoadImage src={yellowDot} alt='yellowDot' className={classes.yellowDot} delayMethod='debounce' delayTime={2000} />
        <LazyLoadImage src={lockLeft} alt='lockLeft' className={classes.lockLeft} delayMethod='debounce' delayTime={2000} />
        <LazyLoadImage src={ringLeft} alt='ringLeft' className={classes.ringLeft} delayMethod='debounce' delayTime={2000} />
        <Stack className={classes.Intro_heading} direction='column' justifyContent='center' alignItems='center'>
          <h1>
            High-speed EastVPN that always
            <br />
            &nbsp; protects your <span>privacy</span>
          </h1>
          <p>
            Download our free and full-featured VPN client to connect to EastVPN
            <br />
            access Server or any OpenVPN protocol compatible server.
          </p>

          <Stack className={classes.store_btn}>
            <IconButton aria-label='toggle password visibility' className={classes.appStore_button}>
              <Stack direction='row' alignItems='center' justifyContent='center'>
                <img src={appleLogo} alt='apple' />
                <span>App Store</span>
              </Stack>
            </IconButton>
            <IconButton aria-label='toggle password visibility' className={classes.PlayStore_button}>
              <a target='__blank' href='https://play.google.com/store/apps/details?id=com.eastvpn.vpn'>
                <Stack direction='row' alignItems='center' justifyContent='center'>
                  <img src={playStoreLogo} alt='playStoreLogo' />
                  <span>Play Store</span>
                </Stack>
              </a>
            </IconButton>
          </Stack>
        </Stack>

        <Stack direction='column' alignItems='center' justifyContent='center' className={classes.Mobile_Img_div}>
          <LazyLoadImage
            src={Mobile}
            alt='Mobile'
            className={classes.Mobile}
            delayMethod='throttle'
            delayTime={3000}
            placeholder={
              <Skeleton
                variant='rectangular'
                sx={{ borderRadius: '20px' }}
                animation='wave'
                width={300}
                height={500}
                className={classes.Mobile}
              />
            }
          />

          <LazyLoadImage
            src={Mobile_dots}
            alt='Mobile'
            className={classes.Mobile_dots}
            delayMethod='debounce'
            delayTime={1000}
            placeholder={
              <Skeleton
                variant='rectangular'
                sx={{ borderRadius: '20px' }}
                animation='wave'
                width={500}
                height={250}
                className={classes.Mobile_dots}
              />
            }
          />
        </Stack>
      </Container>

      <hr />
    </section>
  )
}

export default EastVpnIntro
