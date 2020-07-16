import React, { useState, useEffect, useContext } from 'react'
import { Link } from 'react-router-dom'
import moment from 'moment'
import desktop from '../images/desktop.jpg'
import { LabettieContext } from '../components/Context'
import Tests from './Tests'

const getUnique = (items, value) => {
    return [...new Set(items.map(item => item[value]))]
}


function SideComponet(props) {
    const mycontext = useContext(LabettieContext)

    const [show, setShow] = useState(false)
    const [post, setpost] = useState([])

    const currentPosts = props.currentPosts
    const Allproducts = props.Allproducts

    useEffect(() => {

        setpost(currentPosts)

    }, [])


    const handleRecentPost = () => {
        setShow(!show)

    }

    let type = getUnique(Allproducts, 'category')

    const handleCategory = (item) => {
        const tempItems = mycontext.filterpost(item)
        setpost(tempItems)
    }


    const dots = false
    const SlideToshow = 1
    const autopaly = true
    const arrow = false








    return (<div >
        <div className="myBlogPostLeft">

            <form className="form-inline mb-4 ">
                <input className="form-control mr-sm-2 " type="search" placeholder="Search" aria-label="Search" />
                <button style={{ width: "6.4rem", background: "skyblue" }} className="btn btn-outline-success my-2 my-sm-0" type="submit">Search</button>
            </form>


            <Tests

                dots={dots} SlideToshow={SlideToshow}
                nextButtonPosition="101%"
                prevButtonPosition='-7.5rem'
                nextTopPosition="-10rem"
                prevTopPosition="13.5rem"
                color="black"
                autopaly={autopaly}
                arrow={arrow}
            >
                {
                    currentPosts.map((item, i) => {
                        return <img key={i} src={item.images[0]} alt="" />
                    })
                }


            </Tests>


            <div style={{ background: "white" }} className="mt-5">
                <button

                    onClick={handleRecentPost}
                    className={!show ? "showRecent" : "hideRecent"}
                    disabled={!show ? true : false}


                >Recent Posts</button>

                <button onClick={handleRecentPost}
                    disabled={show ? true : false}
                    className={show ? "showRecent" : "hideRecent"}>Popular Posts</button>
                {currentPosts.map((item, i) => {
                    return <div style={{ top: "1rem", marginBottom: "-2.3rem" }} className="position-relative" key={i}>
                        <Link to={`/gallery/${item.slug}`} >
                            <img className="w-25 position-relative h-25" src={item.images[0]} alt="Load Image" />
                            <h3 style={{ fontSize: "1.2rem", top: "-2rem", left: "5rem" }} className="position-relative">{item.title}</h3>
                            <span style={{ fontSize: "0.8rem", top: "-5.6rem", left: "5rem" }} className="position-relative">
                                {moment(item.datePosted).format("Do MMM YYY")}</span>
                        </Link>
                    </div>
                })
                }

            </div>
            <div style={{ background: "white" }} className="mt-5 pd-2">

                <div className="sideComponentCategory">
                    <h4>categories</h4>
                    {
                        !type ? null : type.map((item, i) => {
                            return <div key={i}>
                                <Link  >
                                    {item}
                                </Link>

                            </div>

                        })
                    }

                </div>




            </div>


        </div>
    </div>


    )
}

export default SideComponet
