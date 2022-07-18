import React from 'react'
import { Route, Routes, useLocation } from 'react-router-dom'
import Cookies from '../Components/cookies/Cookies'
import HeaderHome from '../Components/Header/HeaderHome'

const Home = React.lazy(() => import('../Pages/Home/Home'))
const Footer = React.lazy(() => import('../Components/Footer'))
const NotFound = React.lazy(() => import('../Pages/NotFound/NotFound'))
const PrivacyPolicy = React.lazy(() => import('../Pages/PrivacyPolicy/PrivacyPolicy'))
const TermsOfService = React.lazy(() => import('../Pages/TermsOfService/TermsOfService'))

function AppRoutes() {
  const location = useLocation()

  return (
    <>
      <HeaderHome />
      {['/'].includes(location.pathname) && <Cookies />}

      <Routes>
        <Route path='*' element={<NotFound />} />
        <Route path='/' element={<Home />} />
        <Route path='/privacy-policy' element={<PrivacyPolicy />} />
        <Route path='/terms-of-service' element={<TermsOfService />} />
      </Routes>
      <Footer />
    </>
  )
}

export default AppRoutes
