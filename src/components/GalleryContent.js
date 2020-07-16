import React, { useContext, useState, useEffect } from 'react'
import { LabettieContext } from './Context'
import FeaturedProducts from './FeaturedProducts';
import { PAgenation } from './PAgenation';
import AboutTestmonial from './AboutTestmonial';



const getUnique = (items, value) => {
    return [...new Set(items.map(item => item[value]))]
}



function GalleryContent() {

    const products = useContext(LabettieContext)
    const [category, setCategory] = useState("all")
    const [ListProducts, setListProducts] = useState([])

    const [currentPage,setCurrentPage] = useState(1)
    const [postPerPage,setPostPerPage] = useState(12)


    const AltListProducts = products.products
    let type = getUnique(products.products, 'category')
    type = ["all", ...type]

    useEffect(()=>{
        if(products){
            // setPostPerPage(AltListProducts.length)
         return  setListProducts(AltListProducts)

        }

    },[products])

    console.log(postPerPage);
    


    
    




   

    const handleCategoy = e => {
        let name = e.target.name
        let category = e.target.type
        let value = e.target.value

        setCategory(value
            , filterProducts(value))
    }
    const filterProducts = (value) => {
        let tempProducts = AltListProducts
        if (value !== "all") {
            tempProducts = tempProducts.filter(item => item.category === value)
        }
        setListProducts(tempProducts)
     


    }

    const IndexOfLastPost = currentPage*postPerPage;
    const indexOfFirstPOst = IndexOfLastPost-postPerPage
    const currentPosts = ListProducts.slice(indexOfFirstPOst,IndexOfLastPost)

    const paginate = pageNumber => setCurrentPage(pageNumber);



    return (
        <div className="mt-4">

            <div>
                <form className="form-group pt-4 ml-5 w-25">
                    <label style={{fontSize:"1rem",textTransform:"capitalize"}}
                     htmlFor="category"><strong>sort by category :</strong></label>
                    <select name="category" id="category" value={category} className="form-control"
                        onChange={handleCategoy}
                    >
                        {
                            !type ? null : type.map((item, i) => {
                                return <option value={item} key={i}>
                                    {item}
                                </option>

                            })
                        }
                    </select>

                </form>
            </div>
            <FeaturedProducts featured={currentPosts} filterProducts={filterProducts}/>
            <PAgenation className="pagination" postPerPage={postPerPage} totalPosts={ListProducts.length}
            paginate={paginate}
            />
            <AboutTestmonial/>

        </div>
    )
}

export default GalleryContent
