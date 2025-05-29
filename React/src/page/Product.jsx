import React, { useEffect, useState } from 'react'

const Product = () => {

  const [products, setProducts] = useState([])

  useEffect(() => {
    (async () => {
      const response = await fetch('https://dummyjson.com/products')
      const json = await response.json()
      setProducts(json.products)


    })()
  }, [])

  return (
    <div>
      <h1 className='text-3xl font-bold'>All The Products</h1>
      <div>
        {
          products && products.length > 0 && products.map((product,i)=>{
            return <div key={product.id}>
                <h3>Title: {product.title}</h3>
                <h3>Category: {product.category}</h3>
                <h3>Price: {product.price}</h3>
                <p>Des: {product.description.substring(0,100)}...</p>
            </div>
          })
        }
      </div>
    </div>
  )
}

export default Product