import React, { useEffect, useState, useContext } from 'react'
import { LabettieContext } from '../components/Context'
import { FaCommentAlt } from 'react-icons/fa'
import { Link } from 'react-router-dom'
import moment from 'moment'
import { Button } from './StyledComponents'
import { PAgenation } from './PAgenation'
import desktop from '../images/desktop.jpg'
import  SideComponet from './SideComponet'
import AboutTestmonial from './AboutTestmonial'


function MyblogPosts(props) {



    const [currentPage, setCurrentPage] = useState(1)
    const [postPerPage, setPostPerPage] = useState(3)
    const [newPosts, setNewpost] = useState([])
    const [show, setShow] = useState(false)

    const posts = useContext(LabettieContext)
    const altPost = posts.products



    useEffect(() => {
        if (!altPost) {
            return <div>
                Loading.......
            </div>
        }
        setNewpost(altPost)

    }, [altPost])
    console.log(newPosts);

    const IndexOfLastPost = currentPage * postPerPage;
    const indexOfFirstPOst = IndexOfLastPost - postPerPage
    const currentPosts = newPosts.slice(indexOfFirstPOst, IndexOfLastPost)

    const paginate = pageNumber => setCurrentPage(pageNumber);

    const handleRecentPost = () => {
        setShow(!show)

    }

    return (

        <div className="myblogpost-conatiner">

            <div style={{marginBottom:"0"}} className="container ">


                <div className="row">
                    <div className="col-lg-7 col-md-7 col-sm-12 mt-5">

                        {currentPosts.map((post, i) => {

                            return <div key={i} className="myBlogPostRight">
                                <div className="dateposted">
                                    <span style={{ fontSize: '2rem' }}>{moment(post.datePosted).format("Do")}</span><br />
                                    <span>{moment(post.datePosted).format("MMM YYY")}</span>
                                </div>
                                <h3>{post.title}</h3>
                                <span className="author">Written by : <em style={{ color: " rgba(252,70,107,1)" }}>Betty Tusuubira</em></span>
                                <img src={post.images[0]} alt="Load Image" />

                                <p>{post.description}</p>
                                <Button><Link>READ MORE</Link></Button>
                                <span><FaCommentAlt /> Comments</span>

                            </div>

                        })

                        }



                    </div>





                    <div className="col-lg-4 col-md-4 col-sm-12 mt-5">
                        
                    <SideComponet currentPosts={currentPosts}  Allproducts={altPost} />


                    </div>

                </div>
                <PAgenation className="pagination" postPerPage={postPerPage} totalPosts={altPost.length}
                    paginate={paginate} />

            </div>
            <AboutTestmonial/>



        </div>


    )
}

export default MyblogPosts
