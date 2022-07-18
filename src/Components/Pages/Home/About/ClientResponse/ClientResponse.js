import React from 'react'
import Carousel from 'react-multi-carousel'
import 'react-multi-carousel/lib/styles.css'

import StarIcon from '@mui/icons-material/Star'
import { carousel_list } from './ClientResponseCarouselList'
import { Card, CardContent, Container, Stack } from '@mui/material'
import { ClientResponseStyles } from '../../../../../CSS/Pages/ClientResponseStyles.js'

function ClientResponse() {
  const classes = ClientResponseStyles()
  const responsive = {
    superLargeDesktop: {
      // the naming can be any, depends on you.
      breakpoint: { max: 4000, min: 3000 },
      items: 5,
    },
    desktop: {
      breakpoint: { max: 3000, min: 1024 },
      items: 3,
    },
    tablet: {
      breakpoint: { max: 1024, min: 750 },
      items: 2,
    },
    mobile: {
      breakpoint: { max: 750, min: 0 },
      items: 1,
    },
  }

  return (
    <section className={classes.Client_Response_Section}>
      <Container maxWidth='lg'>
        <Stack className={classes.client_Response_heading} direction='column' justifyContent='center' alignItems='center'>
          <h1>
            What our <span>Clients</span> says
          </h1>
          <p>Here's what people are saying about EastVPN</p>
        </Stack>
        <Stack className={classes.Carousel_styles} sx={{ position: 'relative' }}>
          <Carousel
            responsive={responsive}
            additionalTransfrom={0}
            arrows={false}
            autoPlaySpeed={3000}
            centerMode={false}
            className=''
            containerClass='container-padding-bottom'
            dotListClass=''
            draggable
            focusOnSelect
            infinite
            itemClass=''
            keyBoardControl
            minimumTouchDrag={80}
            renderButtonGroupOutside={false}
            renderDotsOutside={false}
            showDots
            sliderClass=''
            slidesToSlide={1}
            swipeable
          >
            {carousel_list.map((list, index) => {
              return (
                <Card sx={{ minWidth: 275 }} key={index} className={classes.Card_carousel}>
                  <CardContent>
                    <Stack direction='column' justifyContent='center' alignItems='flex-start'>
                      <p dangerouslySetInnerHTML={{ __html: list?.description || '' }} />
                      <Stack direction='row' justifyContent='flex-start' alignItems='center'>
                        <StarIcon />
                        <StarIcon />
                        <StarIcon />
                        <StarIcon />
                        <StarIcon />
                      </Stack>
                    </Stack>
                    <h5 dangerouslySetInnerHTML={{ __html: list?.name || '' }} />
                  </CardContent>
                </Card>
              )
            })}
          </Carousel>
        </Stack>
      </Container>
    </section>
  )
}

export default ClientResponse
