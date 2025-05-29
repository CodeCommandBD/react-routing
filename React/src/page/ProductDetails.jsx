import React from 'react'
import { useLocation } from 'react-router'

const ProductDetails = () => {

   const {state} = useLocation()

    const {  title, category, price, description } = state

  return (
    <div>
        {
            state ? 
            <div>
                <h3>TITLE: {title}</h3>
                <h3>Category: {category}</h3>
                <h3>Price: {price}</h3>
                <h3>Description: {description}</h3>
            </div>
            :
            <p>Product data not found</p>
        }
    </div>
  )
}

export default ProductDetails