import React from 'react'
import Collection from './Collection'
import DownloadaApp from './DownloadaApp'
import Faq from './Faq'
import Footer from './Footer'
import Header from './Header'
import Hero from './Hero'
import Join from './Join'
import MetaVerse from './MetaVerse'
import OurHeros from './OurHeros'
import Register from './Register'
import RoadMap from './RoadMap'

function Homepage() {
  return (
    <div>
      <Header/>
        <Hero/>
        <OurHeros/>
        <Register/>
        <Collection/>
        <RoadMap/>
        <MetaVerse/>
        <Faq/>
        <DownloadaApp/>
        <Join/>
        <Footer/>
    </div>
  )
}

export default Homepage