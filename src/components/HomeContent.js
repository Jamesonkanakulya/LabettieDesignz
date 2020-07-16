import React from 'react'
import AboutContent from './AboutComponents/AboutContent'
import Slick from './Slick'

function HomeContent() {
    return (
        <div className="homeContent">
            <Slick/>
          
            <AboutContent/>

       
        </div>
    )
}

export default HomeContent
