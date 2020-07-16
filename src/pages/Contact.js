import React from 'react'
import { Background } from '../components/StyledComponents'
import PageTitle from '../components/PageTitle'
import assorted from '../images/assorted.jpg'
import ContactcComponent from '../components/AboutComponents/ContactcComponent'

function Contact() {
    return (
        <div className="contact-container">

            <Background image={assorted} height="20rem">
                <PageTitle title="Contact" slug="contact" />

            </Background>
          <ContactcComponent/>
            
       
        </div>
    )
}

export default Contact
