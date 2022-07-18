import React from 'react'

import EastVpnIntro from '../../Components/Pages/Home/EastVpnIntro'
import Features from '../../Components/Pages/Home/About/Features'
import Devices from '../../Components/Pages/Home/About/Devices'
import ClientResponse from '../../Components/Pages/Home/About/ClientResponse/ClientResponse'
import Banner from '../../Components/Pages/Home/About/Banner'
import Pricing from '../../Components/Pages/Home/Pricing'
import FAQs from '../../Components/Pages/Home/FAQs/FAQs'
import ContactUs from '../../Components/Pages/Home/ContactUs'
function Home() {
  return (
    <>
      <EastVpnIntro />
      <Features />
      <Devices />
      <ClientResponse />
      <Banner />
      <Pricing />
      <FAQs />
      <ContactUs />
    </>
  )
}

export default Home
