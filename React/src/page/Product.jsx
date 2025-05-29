import React, { useEffect, useState } from 'react'

const Product = () => {

  const [products, setProducts] = useState([])
  const [isLoading, setIsLoading] = useState(false)

  useEffect(() => {
    (async () => {
      try {
        setIsLoading(true);
        const response = await fetch('https://dummyjson.com/products');

        if (!response.ok) {
          throw new Error('Data could not be found');
        }

        const json = await response.json();
        setProducts(json.products);
        setIsLoading(false);
      } catch (err) {
        console.error(err);
      }
    })();
  }, []);


  return (
    <div>
      <h1 className='text-3xl font-bold'>All The Products</h1>
      {isLoading && <p>Products are loading...</p>}
      <div>
        {
          products && products.length > 0 && products.map((product, i) => {
            const { id, title, category, price, description } = product
            return <div key={id}>
              <h3>Title: {title}</h3>
              <h3>Category: {category}</h3>
              <h3>Price: {price}</h3>
              <p>Des: {description && description.substring(0, 100)}...</p>
            </div>
          })
        }
      </div>
    </div>
  )
}

export default Product