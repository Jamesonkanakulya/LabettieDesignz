import React, { useContext, useEffect, useState } from 'react'
import { LabettieContext } from './Context'

import { Link } from 'react-router-dom'

import Card from './ZoomSpring';
import Myslider from './Myslider';
function Slick() {
    const post = useContext(LabettieContext)
    console.log(post.images);
    const dots=true
    const SlideToshow =1

    const mystyle = {
        transition: "all 1s ease-out"
    }
    return (
        <div className="homeSlide">
            {
                !post.images ? null : post.images.map((item, i) => {
                    return <div className="slides" key={item.id}>
                        <Myslider dots={dots}
                         SlideToshow ={SlideToshow}
                         prevTopPosition="24rem"
                         nextTopPosition="-28rem"
                         prevButtonPosition="1rem"
                         >
                            {
                                item.images.map((image, i) => {
                                    return <div {...mystyle} className="inside-slider" key={i} >

                                        {/* <Spring
                                            from={{ opacity: 0, marginTop: -100 }}
                                            to={{ opacity: 1, marginTop: 0 }}

                                        > */}

                                        <Card>
                                            <div className="inside-slider" >
                                                <h1>La bettie designz</h1>
                                                <h2>in Dubai</h2>
                                                <button> <Link to="/contact">Contact us</Link> </button>

                                            </div>
                                        </Card>
                                        {/* 
                                        </Spring> */}
                                        <img className="d-block" src={image} alt="one" />
                                    </div>
                                })
                            }
                        </Myslider>


                    </div>
                })
            }
        </div>
    )
}

export default Slick
