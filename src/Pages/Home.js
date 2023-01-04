import { minHeight } from '@mui/system';
import React from 'react'
import Footer from '../Components/Common/Footer/footer';
import Header from '../Components/Common/Header/Header'
import LandingPage from '../Components/LandingPage/Intro/Landingpage'

function HomePage() {
  return (
    <div style={{backgroundColor:"var(--lightBlue)", minHeight: "100vh"}}>
      <Header/>
      <LandingPage/>
      <Footer/>
    </div>
  )
}

export default HomePage;
