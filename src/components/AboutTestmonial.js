import React, { useContext, useState } from 'react'
import { Background } from '../components/StyledComponents'
import { LabettieContext } from '../components/Context'
import Myslider from '../components/Myslider'
import Tests from '../components/Tests'


function AboutTestmonial() {

    const dots = false
    const SlideToshow = 2
    const arrow=true
    const responsive =[
        {
          breakpoint: 1024,
          settings: {
            slidesToShow: 2,
            slidesToScroll: 2,
            infinite: true,
            dots: true
          }
        },
        {
          breakpoint: 600,
          settings: {
            slidesToShow: 1,
            slidesToScroll: 1,
            initialSlide: 1
          }
        },
      //   {
      //     breakpoint: 480,
      //     settings: {
      //       slidesToShow: 1,
      //       slidesToScroll: 1
      //     }
      //   }
      ]

    const post = useContext(LabettieContext)
    console.log(post.context);



    return (
        <div className="mt-5 mb-15">
            <Background style={{ left: "-3rem" }} height="32rem" width="110%" opacity=".6" position="absolute" />
            <div className="container" >
                <div className="aboutTestmonyHeadings">
                    <h5 >LET'S SEE OUR TESTIMONIALS</h5>
                    <h2>HAPPY TESTIMONIALS</h2>
                </div>
                <Tests
                responsive={responsive}
                dots={dots} SlideToshow={SlideToshow}
                nextButtonPosition="101%"
                prevButtonPosition='-7.5rem'
                nextTopPosition="-10rem"
                prevTopPosition="13.5rem"
                color="black"
                arrow ={arrow }
                >
                {!post.context ? "No such posts" : post.context.map((item, i) => {
                        return <div className="row" >
                            <div key={i} className="aboutTestmonial">
                                <div >
                                    
                                <section  >
                                    <img className="" src={item.images[0]} alt="firstImage" />
                                    <h5>{item.title}</h5>
                                    <h6>Designer</h6>
                                    <div className="testmonialContent">
                                        <h6>{item.blogpost}</h6>
                                        <p>{item.description}</p>
                                    </div>
                                </section>



                                </div>

                            </div>

                        </div>


                    })

                    }
                </Tests>
            </div>

        </div>
    )
}

export default AboutTestmonial
