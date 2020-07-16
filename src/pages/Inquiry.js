import React from 'react'
import AboutContent from '../components/AboutComponents/AboutContent'

import { Background } from '../components/StyledComponents'
import PageTitle from '../components/PageTitle'
import assorted from '../images/assorted.jpg'


function Inquiry() {
    return (
        <div className="inquiry-container" >


            <Background image={assorted} height="20rem">
                <PageTitle title="About" slug="about" />

            </Background>
            <div className="mt-5">

                <AboutContent />


            </div>



        </div>
    )
}

export default Inquiry
