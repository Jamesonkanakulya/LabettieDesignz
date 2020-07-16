import React from 'react'
import TitleThree from '../TitleThree'
import ContactForm from '../ContactForm'
import ContactDetails from '../ContactDetails'
import AboutTestmonial from '../AboutTestmonial'

function ContactcComponent() {
    return (
        <>

            <div style={{marginTop:"4rem"}} className="contact-details">
                <div className="container ">
                    <div className="row">
                        <div className="col-lg-7 ">
                            <div className="row">
                                <TitleThree paragraph="Please feel in the form below to contact us.Thank you"
                                    pOne="Get " redcontent="in" pTwo="Touch" />
                                <ContactForm />
                            </div>
                        </div>
                        <div className="col-lg-4 ">
                            <div className="mycontainer">

                                <ContactDetails /> 

                            </div>
                        </div>
                    </div>
                </div>
            </div>
        <AboutTestmonial/>
        </>
    )
}

export default ContactcComponent
