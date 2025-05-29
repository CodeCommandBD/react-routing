import React from 'react'
import { Link, useLocation } from 'react-router'

const ProductDetails = () => {

    const { state } = useLocation()

    const { images, title, category, price, description } = state

    return (
        <div>
            {
                state ?
                    <div className='bg-gray-500'>
                        <div className='flex justify-center items-center p-10  text-white gap-6'>
                        <div className='w-[40%]'>
                            <img className='w-full object-cover' src={images} alt="" />
                        </div>
                        <div className='w-55%'>
                            <h3 className='text-2xl mb-6'> {title}</h3>
                            <h3>Category: {category}</h3>
                            <h3>Price: {price}</h3>
                            <h3 className='my-4'> {description}</h3>
                        </div>

                        </div>
                        <Link className='p-5 inline-block bg-emerald-600 m-6 rounded-lg text-white font-semibold' to={'/product'}>Continue Shoping</Link>
                    </div>
                    :
                    <p>Product data not found</p>
            }
        </div>
    )
}

export default ProductDetails