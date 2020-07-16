import React,{useState,useEffect,useContext} from 'react'
import {LabettieContext} from '../components/Context'
import {Link} from 'react-router-dom'

function Post(props) {
     const post = useContext(LabettieContext)
   useEffect(() => {
       
   }, [])
 
    return (
        <div className="post-container" >
           nvhghhffggf
           {
                    post.map(item=>{
                        return <div key={item.id} >
                            <Link to = { `/blog/${item.blogpost}`} >
                                <h4>{item.title}</h4>
                                </Link>
                        </div>
                    })
                }

            
        </div>
    )
}

export default Post
