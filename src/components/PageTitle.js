import React from 'react'
import { Link } from 'react-router-dom'

function PageTitle({ title, slug }) {
    return (
        <div className="titleone-details">
               <h1>{title}</h1>
            <ul>
                <li><Link to="/">Home</Link></li>
                <li><Link to={`/${slug}`}> {slug}</Link></li>
            </ul>
        </div>
            
       
    )
}

export default PageTitle


