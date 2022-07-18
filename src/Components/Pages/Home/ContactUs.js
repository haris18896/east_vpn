/* eslint-disable no-unused-vars */
import React, { useRef, useEffect } from 'react'
import { Button, collapseClasses, Container, Grid, Stack } from '@mui/material'
import { FormGroup } from '../../FormGroup/FormGroup'

import * as Yup from 'yup'
import validator from 'validator'
import { useFormik } from 'formik'

import { isObjEmpty } from '../../../utils/utils'
import { useInfoStore } from '../../../context/context'
import { ContactUsStyles } from '../../../CSS/Pages/ContactUsStyles.js'

function ContactUs() {
  const classes = ContactUsStyles()

  const [pathInfoState, _] = useInfoStore()
  const scrollToContactSectionRef = useRef(null)

  useEffect(() => {
    if (pathInfoState?.scrollToContact && scrollToContactSectionRef?.current) {
      const yOffset = -120
      const y = scrollToContactSectionRef?.current.getBoundingClientRect().top + window.pageYOffset + yOffset
      window.scrollTo({ top: y, behavior: 'smooth' })
    }
  }, [pathInfoState?.scrollToContact])

  // ** Formik Hook
  const contactFormSchema = Yup.object().shape({
    name: Yup.string()
      .required('Name is a required field!')
      .min(4, 'Name must contain at least 4 characters')
      .test('name', 'Name must not contain numbers or special characters', value => {
        if (!value) {
          return true
        }
        return validator.isAlpha(value, 'en-US', { ignore: ' -' })
      }),
    email: Yup.string().email('Please enter a valid email address').required('Email is a required'),
    message: Yup.string().required('Message is required'),
  })

  const formik = useFormik({
    initialValues: {
      name: '',
      email: '',
      message: '',
    },
    validationSchema: contactFormSchema,
    onSubmit: (values, { resetForm }) => {
      if (isObjEmpty(formik.errors)) {
        const { name, email, message } = values
        const data = {
          name,
          email,
          message,
        }
        // dispatch(submitForm(data))
      }
    },
  })

  return (
    <section ref={scrollToContactSectionRef} className={classes.ContactUs_section}>
      <svg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 1440 319' className={classes.contact_curve_top}>
        <path
          fill='#fff'
          fillOpacity='2'
          d='M0,96L80,90.7C160,85,320,75,480,96C640,117,800,171,960,192C1120,213,1280,203,1360,197.3L1440,192L1440,0L1360,0C1280,0,1120,0,960,0C800,0,640,0,480,0C320,0,160,0,80,0L0,0Z'
        ></path>
      </svg>
      <Container maxWidth='lg'>
        <Grid container>
          <Grid item xs={12} md={6} sx={{ alignSelf: 'center' }}>
            <Stack className={classes.ContactUs_heading} direction='column' justifyContent='center' alignItems='center'>
              <p>
                <span>Contact Us</span>
                <br />
                Let's stay in touch.&nbsp;
                <br className={classes.LineBreak} />
                Drop us aline and
                <br className={classes.LineBreak} /> let us know how
                <br className={classes.LineBreak} /> EastVPN can help
                <br className={classes.LineBreak} /> you feel.
              </p>
            </Stack>
          </Grid>
          <Grid item xs={12} md={4} sx={{ marginLeft: 'auto', marginRight: 'auto' }}>
            <Stack direction='column' justifyContent='center' alignItems='center'>
              <form className={classes.form_styling} method='POST' onSubmit={formik.handleSubmit}>
                <FormGroup
                  label='Your Name'
                  inputBackground='white'
                  boxShadow='3px 3px 15px -2px rgba(0,0,0,0.20)'
                  name='name'
                  formik={formik}
                  id='name'
                  type='text'
                  fullWidth
                />

                <FormGroup
                  label='Your Email'
                  inputBackground='white'
                  boxShadow='3px 3px 15px -2px rgba(0,0,0,0.20)'
                  name='email'
                  formik={formik}
                  id='email'
                  type='email'
                  fullWidth
                />

                <FormGroup
                  label='Your Message'
                  inputBackground='white'
                  boxShadow='3px 3px 15px -2px rgba(0,0,0,0.20)'
                  name='message'
                  formik={formik}
                  id='message'
                  type='text'
                  multiline
                  fullWidth
                  rows={3}
                />
                <Stack className={classes.contact_btn_stack}>
                  <Button variant='contained' type='submit' onClick={formik.handleSubmit}>
                    Send Message
                  </Button>
                </Stack>
              </form>
            </Stack>
          </Grid>
        </Grid>
      </Container>
    </section>
  )
}

export default ContactUs
