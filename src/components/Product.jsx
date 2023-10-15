import React from 'react'
import { StateContextCustom } from '../context/StateContext';

const Product = (props) => {
    const {title,image,price} = props;
    const {dispatch} = StateContextCustom();
  return (
    <div className='mt-4 border text-center'>
      <img src={image} className='w-[200px] h-[200px] rounded' alt="" />
      <h1 className='text-center font-bold my-2 whitespace-normal'>{title.substring(1,30)}...</h1>
      <p className='mb-2 font-bold text-orange-500'>${price}</p>
      <button className='bg-orange-500 p-2 rounded text-white'onClick={()=>dispatch({type:"ADD_TO_CART",payload:props})}>Add to Cart</button>
    </div>
  )
}

export default Product
