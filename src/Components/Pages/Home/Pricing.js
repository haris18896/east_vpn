/* eslint-disable no-unused-vars */
import React, { useState, useEffect, useRef } from 'react'
import classNames from 'classnames'

import { Container, Grid, Stack } from '@mui/material'
import { useInfoStore } from '../../../context/context'
import { PricingStyles } from '../../../CSS/Pages/PricingStyles.js'

function Pricing() {
  const classes = PricingStyles()
  const [pathInfoState, _] = useInfoStore()
  const scrollToPricingSectionRef = useRef(null)

  useEffect(() => {
    if (pathInfoState?.scrollToPricing && scrollToPricingSectionRef?.current) {
      const yOffset = -120
      const y = scrollToPricingSectionRef?.current.getBoundingClientRect().top + window.pageYOffset + yOffset
      window.scrollTo({ top: y, behavior: 'smooth' })
    }
  }, [pathInfoState?.scrollToPricing])

  const [selectedPlan, setSelectedPlan] = useState({
    id: 'premium',
    name: 'Premium (monthly)',
  })

  const handleChangeTab = tab => {
    setSelectedPlan(tab)
  }

  let plans = [
    {
      id: 'free',
      title: 'starter',
      fee: 'Free',
      detail: 'We have a deal for you <br />&nbsp;Basic Free Servers <br />&nbsp;Limited Support',
      button: 'Get EasyVPN',
    },
    {
      id: 'premium',
      title: 'Premium (monthly)',
      fee: '$2.99<span>/month</span>',
      discount: 'Save 35%',
      detail: 'Billed <strike>$5.40</strike> $2.99 every 12 months.<br />30-days money-back guarantee.',
      subDetail: '24/7 customer support, and<br />&nbsp;high-speed unlimited bandwidth.',
      button: 'Get EasyVPN',
    },
    {
      id: 'vip',
      title: 'VIP (12 monthly)',
      fee: '$8.32<span>/month</span>',
      discount: 'Save 52%',
      detail: 'Billed <strike>$59.40</strike> $8.932 every 12 months.<br />30-days money-back guarantee.',
      subDetail: '24/7 customer support, and<br />&nbsp;high-speed unlimited bandwidth.',
      button: 'Get EasyVPN',
    },
  ]
  return (
    <section ref={scrollToPricingSectionRef} className={classes.pricing_styling}>
      <Container maxWidth='lg'>
        <h1>
          Choose your <span>EastVPN</span> plan
        </h1>
        <Grid container spacing={3} className={classes.pricing_Grid}>
          {plans.map((plan, index) => (
            <Grid item xs={12} sm={6} md={4} key={index} className={classes.plans_grid}>
              <Stack
                direction='column'
                onClick={() => handleChangeTab(plan)}
                className={classNames({
                  [classes.plans_Stack]: true,
                  [classes.plans_Stack_selected]: selectedPlan.id === plan.id,
                })}
              >
                <h3 className={classes.plan_title}>{plan.title}</h3>
                <h1 className={classes.plan_fee} dangerouslySetInnerHTML={{ __html: plan?.fee || '' }} />
                <p className={classes.plan_discount} dangerouslySetInnerHTML={{ __html: plan?.discount || '' }} />
                <p dangerouslySetInnerHTML={{ __html: plan?.detail || '' }} />
                <p dangerouslySetInnerHTML={{ __html: plan?.subDetail || '' }} />
                <button>{plan.button}</button>
              </Stack>
            </Grid>
          ))}
        </Grid>
      </Container>
    </section>
  )
}

export default Pricing
