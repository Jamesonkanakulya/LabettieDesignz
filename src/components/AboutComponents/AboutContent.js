import React, { useContext, useState } from 'react'
import { Link } from 'react-router-dom'
import { Button, Background } from '../StyledComponents'
import Geometric from '../../images/Geometric.jpg'
import author from '../../images/author.jpeg'
import Card from '../ZoomSpring'
import { LabettieContext } from '../Context'
import Tests from '../Tests'
import AboutTestmonial from '../AboutTestmonial'


function AboutContent() {
    const dots = false
    const SlideToshow = 3
    const arrow =true
    const responsive = [
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
        },]







    const post = useContext(LabettieContext)
    console.log(post.context);

    return (
        <>
            <div className="container">
                <div className="row">
                    <div className="col-lg-6 col-md-6 ">
                        <Background image={Geometric} style={{ width: '100%', height: '33rem' }} opacity="0.5" />
                        <div className="aboutRight">

                            <h4>about</h4>
                            <h2>welcome to labettie design</h2>

                         <p className="aboutRightFirstPg">To become truly immortal, a work of art must escape all human limits:
                            logic and commonsense will only interfere.
                            But once these barriers are broken, it will
                            enter the realms ofchildhood visions and dreams
                         </p>
                            <p className="aboutRightSecondtPg">
                                Lorem ipsum dolor sit amet consectetur
                                adipisicing elit. Aspernatur dolor sequi cum facilis libero! Blanditiis doloremque excepturi at
                                voluptatum id? Error corrupti quo aut qui laboriosam natus explicabo itaque maiores
                                Lorem ipsum dolor sit amet consectetur adipisicing elit. Aspernatur
                                dolor sequi cum facilis libero! Blanditiis doloremque
                                excepturi at voluptatum id? Error corrupti quo a
                                ut qui laboriosam natus explicabo itaque maiores

                             </p>
                            <Button><Link to="#">Learn more</Link></Button>





                        </div>


                    </div>
                    <div className="col-lg-6 col-md-6 col-sm-12">
                        <div className="aboutLeft">
                            <Card>
                                <Background image={author} style={{ width: '150%', height: '33rem' }} />
                            </Card>

                        </div>

                    </div>

                </div>
                <div style={{ marginLeft: "-1.8rem", padding: "1rem" }} className="container mt-5">
                  


                    <Tests dots={dots} SlideToshow={SlideToshow}
                        nextButtonPosition="105%"
                        prevButtonPosition='-7rem'
                        nextTopPosition="-20rem"
                        prevTopPosition="18rem"
                        color="black"
                        responsive={responsive}
                        arrow ={arrow }

                    >
                        {!post.context ? "No such posts" : post.context.map((item, i) => {
                            return <div key={i} className="aboutProducts">

                                <section>
                                    <img className="" src={item.images[0]} alt="firstImage" />
                                    <h3>{item.title}</h3>

                                    <p>{item.description}</p>
                                </section>


                            </div>



                        })

                        }
                    </Tests>


                </div>

            </div>
            <AboutTestmonial />






        </>
    )
}

export default AboutContent
