import React, { useState } from 'react'
import {AiOutlinePlus,AiOutlineMinus} from 'react-icons/ai'
import { StateContextCustom } from '../context/StateContext'

const Cart = (props) => {
    const {state:{cart}} = StateContextCustom()
    const {image,title,price,increaseTotal,decreaseTotal,removeFromCart}= props
    const [count,setCount] = useState(1);
    const addQuantity = ()=>{
        setCount(count+1)
        increaseTotal(price)
    }
    const oneItemPrice = count*price;
    const decreaseQuantity= (count)=>{
        if(count>1){
            setCount(count-1)
            decreaseTotal(price)
        }
    }
    const removeCart = ()=>{
        removeFromCart(props,count);
        decreaseTotal(oneItemPrice)
    }
  return (
    <>
        <tr className="bg-white border-b dark:bg-gray-800 p-2 dark:border-gray-700">
            <td>
                <img src={image} className='w-[150px] h-[150px]' alt="" />
            </td>
            <td className="px-6 py-4 font-bold">
                {title}
            </td>
            <td className="px-6 py-4 font-bold">
                {oneItemPrice.toFixed(2)}
            </td>
            <td className="px-6 py-4 flex gap-3 items-center justify-center mt-12">
                <span className="border p-1 border-orange-500 rounded cursor-pointer" onClick={addQuantity}><AiOutlinePlus/></span>
                <span className='font-bold'>{count}</span>
                <span className="border p-1 border-orange-500 rounded cursor-pointer" onClick={decreaseQuantity}><AiOutlineMinus/></span>
            </td>
            <td className="px-6 py-4 font-bold">
                <button className='p-2 rounded text-orange-500 border border-orange-500' onClick={removeCart}>Remove</button>
            </td>
        </tr> 
    </>
  )
}

export default Cart
