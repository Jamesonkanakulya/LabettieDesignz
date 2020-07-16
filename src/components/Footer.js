import React from 'react'
import { Link } from 'react-router-dom'

function Footer() {
    return (<div className="mt-2">
        <div className="footer">

            <ul >
                <li> <Link to="/">Home</Link> </li>
                <li> <Link to="/gallery">Gallery</Link> </li>
                <li> <Link to="/blog">Blog</Link> </li>
                <li> <Link to="/about">About</Link> </li>
                <li> <Link to="/contact">Contact</Link> </li>
            </ul>
            <p>All Rights Reserved. © 2020 La Bettie Designz Design By : Jameson kanakulya</p>
        </div>
    </div>

    )
}

export default Footer
