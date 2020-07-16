import React,{useContext} from 'react'
import MyblogPosts from '../components/MyblogPosts'
import PageTitle from '../components/PageTitle'
import { Background } from '../components/StyledComponents'
import assorted from '../images/assorted.jpg'


function Blog() {
   
    return (
        <div className="blog-container">
            <Background image={assorted} height="20rem">
            <PageTitle title="Blog" slug="blog"/>

            </Background>

            

            <MyblogPosts/>
         

           
 
       
        </div>
    )
}

export default Blog
