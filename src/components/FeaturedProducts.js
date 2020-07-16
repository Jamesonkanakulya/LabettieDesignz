import React, { useEffect } from 'react'
import desktop from '../images/desktop.jpg'
import { Button } from './StyledComponents'
import { FaFacebook, FaTwitter, FaInstagram, FaSearch, FaAlignJustify } from 'react-icons/fa'
import { Link } from 'react-router-dom'



function FeaturedProducts(props) {
    const featured = props.featured

    return (
        <div className="featured-products">
            <div className="row">
                {
                    featured.map((item, i) => {
                        return <div key={i} className="col-lg-3 col-md-4 col-sm-12">
                            <section className="featuredSection">
                                <img src={item.images[0]} alt="" />
                                <div className="featuredSharingSection">
                                    <h6>share </h6>
                                    <ul>
                                        <li><Link href="https://www.facebook.com/La-Bettie-Beads-2013230752332684/"><FaFacebook /></Link></li>
                                        <li><Link to="#"><FaTwitter /></Link></li>
                                        <li><Link to="#"><FaInstagram /></Link></li>
                                    </ul>
                                    
                                    
                                    
                                    <Button hoverColor=" rgb(233, 65, 65)"><Link to={`/gallery/${item.slug}`}>preview product</Link></Button>
                                </div>
                                <h4> {item.title}</h4>
                                <span>{item.category}</span>
                                <p>{item.description} </p>
                            </section>
                        </div>
                    })
                }

            </div>

        </div>
    )
}

export default FeaturedProducts
