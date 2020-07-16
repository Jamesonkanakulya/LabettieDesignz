import React, { Component } from 'react'
import { LabettieContext } from './Context';




class SingleProduct extends Component {

    static contextType = LabettieContext

    constructor(props) {
        super(props)

        this.state = {
            slug: this.props.match.params.slug

        }

    }

    render() {

        const product = this.context.filterProduct(this.state.slug)
        if (!product) {
            return <div>
                <h3>No Products</h3>
            </div>
        }
        console.log(product);


        return (
            <div className="SingleProductDetails">

                {
                    product.images.map((image, i) => {
                        return <img key={i} src={image} alt="success" />
                    })
                }

                <div className="SingleProductContent"  >
                    <h3>{product.title}</h3>
                    <h6>{product.category}</h6>
                    <span>Price $:{product.price}</span>
                    <p>{product.description}</p>

                </div>


            </div>
        )
    }
}

export default SingleProduct
