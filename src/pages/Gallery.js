import React from 'react'
import GalleryContent from '../components/GalleryContent'
import { Background } from '../components/StyledComponents'
import PageTitle from '../components/PageTitle'
import assorted from '../images/assorted.jpg'


function Gallery() {
    return (
        <div className="gallery-container" >
               <Background image={assorted} height="20rem">
                <PageTitle title="Gallery" slug="gallery" />

            </Background>
            <GalleryContent/>
        </div>
    )
}

export default Gallery
