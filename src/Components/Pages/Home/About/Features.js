/* eslint-disable no-unused-vars */
import React, { useEffect, useRef } from 'react'
import { Card, CardContent, Container, Grid, Skeleton, Stack } from '@mui/material'

import features_part_1_icon from '../../../../assets/images/features_part_1_icon.svg'
import features_part_2_icon from '../../../../assets/images/features_part_2_icon.svg'
import features_part_3_icon from '../../../../assets/images/features_part_3_icon.svg'
import features_part_4_icon from '../../../../assets/images/features_part_4_icon.svg'

import features_part_1_img from '../../../../assets/images/features_part_1_img.svg'
import features_part_2_img from '../../../../assets/images/features_part_2_img.png'
import features_part_3_img from '../../../../assets/images/features_part_3_img.svg'
import features_part_4_img from '../../../../assets/images/features_part_4_img.svg'

import { LazyLoadImage } from 'react-lazy-load-image-component'

import features_circle from '../../../../assets/images/features_circle.svg'

import { useInfoStore } from '../../../../context/context'
import { FeaturesStyles } from '../../../../CSS/Pages/FeaturesStyles.js'

function Features() {
  const [pathInfoState, _] = useInfoStore()
  const scrollToAboutSectionRef = useRef(null)

  useEffect(() => {
    if (pathInfoState?.scrollToAbout && scrollToAboutSectionRef?.current) {
      const yOffset = -120
      const y = scrollToAboutSectionRef?.current.getBoundingClientRect().top + window.pageYOffset + yOffset
      window.scrollTo({ top: y, behavior: 'smooth' })
    }
  }, [pathInfoState?.scrollToAbout])

  const classes = FeaturesStyles()
  return (
    <section ref={scrollToAboutSectionRef} className={classes.EastVPN_features}>
      <svg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 1440 320' className={classes.features_curve_top}>
        <path
          fill='#fff'
          fillOpacity='1'
          d='M0,128L80,112C160,96,320,64,480,80C640,96,800,160,960,176C1120,192,1280,160,1360,144L1440,128L1440,0L1360,0C1280,0,1120,0,960,0C800,0,640,0,480,0C320,0,160,0,80,0L0,0Z'
        ></path>
      </svg>

      <svg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 1440 319' className={classes.features_curve_bottom}>
        <path
          fill='#fff'
          fillOpacity='1'
          d='M0,128L120,112C240,96,480,64,720,64C960,64,1200,96,1320,112L1440,128L1440,320L1320,320C1200,320,960,320,720,320C480,320,240,320,120,320L0,320Z'
        ></path>
      </svg>

      <Container maxWidth='lg'>
        <Stack className={classes.features_Intro} direction='column' justifyContent='center' alignItems='center'>
          <h1>
            Why should you Choose
            <br />
            &nbsp; Our <span>Services</span>?
          </h1>

          <p>
            EastVPN protects your privacy above all and keeps
            <br />
            &nbsp; your internet traffic safe and secure.
            {/* access Server or any OpenVPN protocol compatible server. */}
          </p>
        </Stack>

        <Grid container spacing={3} className={classes.features_main_Grid}>
          <Grid item xs={12} sm={6} md={5}>
            <Stack
              direction='column'
              justifyContent='center'
              alignItems='center'
              // sx={{ marginTop: '100px', position: 'relative' }}
              className={classes.features_part_1_stack}
            >
              <Card
                sx={{ minWidth: 275, backgroundColor: '#FFE395', margin: '10px', boxShadow: 'none', borderRadius: '16px' }}
                className={classes.cards_content}
              >
                <CardContent className={classes.cards_details}>
                  <Stack direction='column' justifyContent='center' alignItems='flex-start'>
                    <Stack className={classes.large_image}>
                      <LazyLoadImage
                        src={features_part_1_img}
                        alt='LeftCard'
                        delayMethod='debounce'
                        delayTime={1000}
                        placeholder={
                          <Skeleton variant='rectangular'>
                            <img src={features_part_1_img} alt='apple' />
                          </Skeleton>
                        }
                      />
                    </Stack>
                    <img src={features_part_1_icon} alt='features_part_1_icon' className={classes.feature_icons} />
                    <h1>Just Works Everywhere</h1>
                    <p>
                      EastVPN has a unique protocol that masks your traffic as a standard non-traffic, making it harder to filter
                      out or block.
                    </p>
                  </Stack>
                </CardContent>
              </Card>
              <Card
                sx={{ minWidth: 275, backgroundColor: '#E0F0E6', margin: '10px', boxShadow: 'none', borderRadius: '16px' }}
                className={classes.cards_content}
              >
                <img src={features_circle} alt='features_circle' className={classes.features_circle_2} />
                <CardContent className={classes.cards_details}>
                  <Stack direction='column' justifyContent='center' alignItems='flex-start'>
                    <Stack className={classes.large_image}>
                      <LazyLoadImage
                        src={features_part_2_img}
                        alt='LeftCard'
                        delayMethod='debounce'
                        delayTime={1000}
                        placeholder={
                          <Skeleton variant='rectangular'>
                            <img src={features_part_2_img} alt='apple' />
                          </Skeleton>
                        }
                      />
                    </Stack>
                    <img src={features_part_2_icon} alt='features_part_2_icon' className={classes.feature_icons} />
                    <h1>
                      Securely Access Remote
                      <br />
                      &nbsp; Desktop Files, and Web Servers
                    </h1>
                    <p>
                      Going online doesn't have to mean being exposed.With EastVPN, you can securely access your files and web
                      servers.
                    </p>
                  </Stack>
                </CardContent>
              </Card>
            </Stack>
          </Grid>
          <Grid item xs={12} sm={6} md={5}>
            <Stack direction='column' justifyContent='center' alignItems='center' sx={{ position: 'relative' }}>
              <Card
                sx={{ minWidth: 275, backgroundColor: '#D3E1FE', margin: '10px', boxShadow: 'none', borderRadius: '16px' }}
                className={classes.cards_content}
              >
                <img src={features_circle} alt='features_circle_3' className={classes.features_circle_3} />

                <CardContent className={classes.cards_details}>
                  <Stack direction='column' justifyContent='center' alignItems='flex-start'>
                    <img src={features_part_3_icon} alt='features_part_3_icon' className={classes.feature_icons} />
                    <h1>Enjoy High Speed & Unlimited bandwidth</h1>
                    <p>
                      EastPVN offers a fast and reliable connection.No impact on entertainment channels, built with streaming in
                      mind.
                    </p>
                    <Stack className={classes.large_image}>
                      <LazyLoadImage
                        src={features_part_3_img}
                        alt='LeftCard'
                        delayMethod='debounce'
                        delayTime={1000}
                        placeholder={
                          <Skeleton variant='rectangular'>
                            <img src={features_part_3_img} alt='apple' />
                          </Skeleton>
                        }
                      />
                    </Stack>
                  </Stack>
                </CardContent>
              </Card>
              <Card
                sx={{ minWidth: 275, backgroundColor: '#ECEBF4', margin: '10px', boxShadow: 'none', borderRadius: '16px' }}
                className={classes.cards_content}
              >
                <CardContent className={classes.cards_details}>
                  <Stack direction='column' justifyContent='center' alignItems='flex-start'>
                    <img src={features_part_4_icon} alt='features_part_4_icon' className={classes.feature_icons} />
                    <h1>Secure your digital devices life today</h1>
                    <p>Connect reliably from anywhere, to anywhere.Your data is protected with highest-grade AES encryption</p>
                    <Stack className={classes.large_image}>
                      <LazyLoadImage
                        src={features_part_4_img}
                        alt='LeftCard'
                        delayMethod='debounce'
                        delayTime={1000}
                        placeholder={
                          <Skeleton variant='rectangular'>
                            <img src={features_part_4_img} alt='apple' />
                          </Skeleton>
                        }
                      />
                    </Stack>
                  </Stack>
                </CardContent>
              </Card>
            </Stack>
          </Grid>
        </Grid>
      </Container>
    </section>
  )
}

export default Features
