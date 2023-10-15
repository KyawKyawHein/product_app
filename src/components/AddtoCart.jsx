import React, { useEffect, useState } from 'react'
import { StateContextCustom } from '../context/StateContext'
import Cart from './Cart';
import { Link } from 'react-router-dom';

const AddtoCart = () => {
    const {state:{cart},dispatch} = StateContextCustom()
    const [mainTotal,setMainTotal] = useState(0)

    const increaseTotal = (price)=>{
        setMainTotal(mainTotal+price)
    }

    const decreaseTotal = (price)=>{
        setMainTotal((mainTotal-price))
    }

    const removeFromCart = (removeCart)=>{
        // const filteredCart=cart.filter((obj)=>obj.id!=removeCart.id);
        dispatch({type:"REMOVE_FROM_CART",payload:removeCart})  
    }

    useEffect(()=>{
        setMainTotal(total)
    },[])
    const total = cart?.reduce((pv,cv)=>pv+cv.price,0);
  return (
    <>
        {
        cart.length>0?(
            <div className='flex justify-center flex-col items-center h-full'>
                <div className="relative">
                    <table className="table-auto w-full text-sm text-left text-gray-500 dark:text-gray-400">
                        <thead className="text-xs text-gray-700 uppercase bg-gray-50 dark:bg-gray-700 dark:text-gray-400">
                            <tr>
                                <th scope="col" className="px-6 py-3 ">
                                    Image
                                </th>
                                <th scope="col" className="px-6 py-3">
                                    Name
                                </th>
                                <th scope="col" className="px-6 py-3">
                                    Price
                                </th>
                                <th scope="col" className="px-6 py-3">
                                    Quantity
                                </th>
                                <th scope="col" className="px-6 py-3">
                                    Control
                                </th>
                            </tr>
                        </thead>
                        <tbody>
                        {
                            cart?.map((product)=>{
                                return(
                                    <Cart key={product.id} {...product} increaseTotal={increaseTotal} decreaseTotal={decreaseTotal} removeFromCart={removeFromCart} />
                                )
                            })
                        }
                        <tr>
                                <td colSpan={2} className='text-center text-3xl text-black'>
                                    <h1 className='mt-4'>Total :</h1>
                                </td>
                                <td className='text-3xl text-black text-center'>
                                    <h1 className="mt-4">{mainTotal.toFixed(2)}</h1>
                                </td>
                        </tr>
                        </tbody>
                    </table>
                </div>
            </div>):(
                    <div className='bg-red-500 text-center p-5 mt-[200px]'>
                        <h1 className='text-3xl text-white font-bold mb-2'>No item</h1>
                        <Link to={'/'}>
                            <button  className="p-2 px-5 bg-green-500 rounded">Fill Data</button>
                        </Link>
                    </div>
            )
    }
    </>
  )
}

export default AddtoCart
