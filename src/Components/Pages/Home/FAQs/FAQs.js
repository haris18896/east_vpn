/* eslint-disable no-unused-vars */
import React, { useState, useRef, useEffect } from 'react'
import ExpandMoreIcon from '@mui/icons-material/ExpandMore'
import KeyboardArrowUpIcon from '@mui/icons-material/KeyboardArrowUp'
import KeyboardArrowDownIcon from '@mui/icons-material/KeyboardArrowDown'

import { FAQ__List_1, FAQ__List_2 } from './FAQs_List'
import { GetDescBullets } from './GetDiscBullets'
import { useInfoStore } from '../../../../context/context'
import { Container, Grid, Stack, Accordion, AccordionSummary, AccordionDetails, Button } from '@mui/material'
import { FAQsStyles } from '../../../../CSS/Pages/FAQsStyles.js'

function FAQs() {
  const classes = FAQsStyles()

  const [expandedPanel, setExpandedPanel] = useState(false)
  const [showMoreFaqs, setShowMoreFaqs] = useState(false)
  const [pathInfoState, _] = useInfoStore()
  const scrollToFAQSectionRef = useRef(null)

  useEffect(() => {
    if (pathInfoState?.scrollToFAQs && scrollToFAQSectionRef?.current) {
      const yOffset = -120
      const y = scrollToFAQSectionRef?.current.getBoundingClientRect().top + window.pageYOffset + yOffset
      window.scrollTo({ top: y, behavior: 'smooth' })
    }
  }, [pathInfoState?.scrollToFAQs])

  const handleAccordionChange = panel => (event, isExpanded) => {
    setExpandedPanel(isExpanded ? panel : false)
  }

  return (
    <section ref={scrollToFAQSectionRef} className={classes.FAQs_section}>
      <Container maxWidth='lg'>
        <Stack className={classes.FAQs_heading} direction='column' justifyContent='center' alignItems='center'>
          <h1>
            Frequently asked
            <br />
            &nbsp;
            <span>Questions</span>
          </h1>
          <p>Checkout our FAQs. Find them here...</p>
        </Stack>
        <Grid container className={classes.main_Grid_Faqs}>
          <Grid item xs={12} md={6} className={classes.grid_item_styling}>
            {FAQ__List_1.list.slice(0, showMoreFaqs ? FAQ__List_1.list.length : 4).map((List_1, index) => {
              return (
                <Accordion
                  key={index}
                  expanded={expandedPanel === List_1.id}
                  onChange={handleAccordionChange(List_1.id)}
                  className={classes.Accordion_Styles}
                >
                  <AccordionSummary
                    expandIcon={<ExpandMoreIcon sx={{ color: '#EF4E22' }} />}
                    aria-controls='panel1a-content'
                    id='panel1a-header'
                    className={classes.Accordion_Summary_Styles}
                  >
                    <p className='FAQ__summary'>{List_1.question || ''}</p>
                  </AccordionSummary>
                  <AccordionDetails className={classes.Accordion_Details_Styles}>
                    <p className='p__element' dangerouslySetInnerHTML={{ __html: List_1?.answer || '' }} />
                    <GetDescBullets descBullets={List_1?.descBullets} />
                    <GetDescBullets descBullets1={List_1?.descBullets1} />
                    <p dangerouslySetInnerHTML={{ __html: List_1?.answer2 || '' }} />
                    <GetDescBullets descBullets2={List_1?.descBullets2} />
                    <p dangerouslySetInnerHTML={{ __html: List_1?.answer3 || '' }} />
                    <GetDescBullets descBullets3={List_1?.descBullets3} />
                    <div dangerouslySetInnerHTML={{ __html: List_1?.answer4 || '' }} />
                    <GetDescBullets descBullets4={List_1?.descBullets4} />
                  </AccordionDetails>
                </Accordion>
              )
            })}
          </Grid>
          <Grid item xs={12} md={6} className={classes.grid_item_styling}>
            {FAQ__List_2.list.slice(0, showMoreFaqs ? FAQ__List_2.list.length : 4).map((List_2, index) => {
              return (
                <Accordion
                  key={index}
                  expanded={expandedPanel === List_2.id}
                  onChange={handleAccordionChange(List_2.id)}
                  className={classes.Accordion_Styles}
                >
                  <AccordionSummary
                    expandIcon={<ExpandMoreIcon sx={{ color: '#EF4E22' }} />}
                    aria-controls='panel1a-content'
                    id='panel1a-header'
                    className={classes.Accordion_Summary_Styles}
                  >
                    <p className='FAQ__summary'>{List_2.question || ''}</p>
                  </AccordionSummary>
                  <AccordionDetails className={classes.Accordion_Details_Styles}>
                    <p className='p__element' dangerouslySetInnerHTML={{ __html: List_2?.answer || '' }} />
                    <GetDescBullets descBullets={List_2?.descBullets} />
                    <GetDescBullets descBullets1={List_2?.descBullets1} />
                    <p dangerouslySetInnerHTML={{ __html: List_2?.answer2 || '' }} />
                    <GetDescBullets descBullets2={List_2?.descBullets2} />
                    <p dangerouslySetInnerHTML={{ __html: List_2?.answer3 || '' }} />
                    <GetDescBullets descBullets3={List_2?.descBullets3} />
                    <p dangerouslySetInnerHTML={{ __html: List_2?.answer4 || '' }} />
                    <GetDescBullets descBullets4={List_2?.descBullets4} />
                  </AccordionDetails>
                </Accordion>
              )
            })}
          </Grid>
        </Grid>
        <Stack
          direction='row'
          alignItems='center'
          justifyContent='center'
          sx={{ marginTop: '25px' }}
          onClick={() => setShowMoreFaqs(!showMoreFaqs)}
        >
          <Button className={classes.show_more_faqs}>{showMoreFaqs ? 'Show Less' : 'Show More'}</Button>
          {showMoreFaqs ? (
            <KeyboardArrowUpIcon sx={{ color: '#EF4E22', marginLeft: '10px', cursor: 'pointer' }} />
          ) : (
            <KeyboardArrowDownIcon sx={{ color: '#EF4E22', marginLeft: '10px', cursor: 'pointer' }} />
          )}
        </Stack>
      </Container>
    </section>
  )
}

export default FAQs
