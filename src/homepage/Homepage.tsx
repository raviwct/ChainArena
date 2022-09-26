import React from 'react'
import Collection from './Collection'
import DownloadaApp from './DownloadaApp'
import Faq from './Faq'
import Hero from './Hero'
import MetaVerse from './MetaVerse'
import OurHeros from './OurHeros'
import Register from './Register'
import RoadMap from './RoadMap'

function Homepage() {
  return (
    <div>
        <Hero/>
        <OurHeros/>
        <Register/>
        <Collection/>
        <RoadMap/>
        <MetaVerse/>
        <Faq/>
        <DownloadaApp/>
    </div>
  )
}

export default Homepage