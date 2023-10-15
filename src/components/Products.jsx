import React from 'react'
import { StateContextCustom } from '../context/StateContext'
import Product from './Product';

const Products = () => {
    const {state:{products},search} = StateContextCustom()
    // console.log(search);
  return (
    <div className='flex flex-wrap justify-center gap-4'>
      {
       products.length >0?(
        products.map((product)=>{
            return (
                <Product key={product.id} {...product} />
            )
            })
       ):(
        <h1 className='text-3xl w-full bg-blue-500 text-white p-3 text-center'>Sorry!!There is no <span className='font-bold text-orange-500'>{search}</span></h1>
       )
      }
    </div>
  )
}

export default Products
