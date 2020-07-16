import React from 'react'
import Slider from "react-slick";
function Myslider(props) {

    const SampleNextArrow = (prop) => {
        const { className, style, onClick } = prop;
        return (
            <div
                className={className}
                style={{ ...style, 
                    display: "inline", 
                    background:`${props.color?props.color:'#e83e8c'}`, 
                    left: `${props.nextButtonPosition?props.nextButtonPosition:'93%'}`, 
                    fontSize: "1rem" ,
                    padding:".5rem 2rem",
                    position:"relative",
                    top:`${props.nextTopPosition?props.nextTopPosition:'1rem'}`,
                    textAlign:"center",
                    justifyItems:"center",
                    borderRadius:"3rem",
                    initialSlide: 0,
                    responsive:[
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
            }}


                
                onClick={onClick}
            />
        );
    }

    const SamplePrevArrow = (prop) => {
        const { className, style, onClick } = prop;
        return (
            <div
                className={`previous ${className} `}
                style={{ ...style, 
                display: "inline", 
                background:`${props.color?props.color:'#e83e8c'}`, 
                left: `${props.prevButtonPosition?props.prevButtonPosition:'5%'}`, 
                fontSize: "1rem" ,
                padding:".5rem 2rem",
                position:"relative",
                top:`${props.prevTopPosition?props.prevTopPosition:'20rem'}`,
                textAlign:"center",
                justifyItems:"center",
                borderRadius:"3rem"
                
                
         

                

            
            }}
             
                
                onClick={onClick}
            />
        );
    }

    const settings = {
        dots: props.dots,
        infinite: true,
        speed: 500,
        slidesToShow:props.SlideToshow,
        slidesToScroll: props.SlideToshow,
        autoplay: props.dots,
        speed: 1000,
        autoplaySpeed: 2000,
        cssEase: "linear",
        pauseOnHover: true,
        nextArrow: <SampleNextArrow />,
        prevArrow: <SamplePrevArrow />,
     
    };



    return (
        <div>
            <Slider {...settings}>
                {props.children}
            </Slider>

            
        </div>
    )
}

export default Myslider
