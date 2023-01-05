import { minHeight } from '@mui/system';
import React from 'react'
import Header from '../Components/Common/Header/Header'
import LandingPage from '../Components/LandingPage/Intro/Landingpage'
import Footer from '../Components/Common/Footer/Footer';

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
