import React, { useEffect, useState } from 'react'
import { Link } from 'react-router';

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
    <div className='text-center my-10 px-8'>
      <h1 className='text-3xl font-bold mb-8'>All The Products</h1>
      {isLoading && <p>Products are loading...</p>}
      <div className='grid grid-cols-[repeat(auto-fit,_minmax(250px,_1fr))] gap-4'>
        {
          products && products.length > 0 && products.map((product) => {
            const { id, title, category, price, description } = product
            return <div key={id} className='text-start bg-emerald-800 rounded-md p-3.5 text-white'>
              <h3 className='text-xl mb-3'> {title}</h3>
              <h3>Category: {category}</h3>
              <h3>Price: {price}</h3>
              <p className='my-3.5'>{description && description.substring(0, 50)}...</p>
              <Link to={`/product/${id}`} state={product} className='border p-1 rounded-md cursor-pointer' type='button'>Show Details</Link>
            </div>
          })
        }
      </div>
    </div>
  )
}

export default Product