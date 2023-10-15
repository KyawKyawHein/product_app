import React from 'react'
import {AiOutlineShoppingCart} from 'react-icons/ai'
import { StateContextCustom } from '../context/StateContext'
import { Link } from 'react-router-dom'

const Nav = () => {
    const {search,setSearch,state:{cart}} = StateContextCustom()
    console.log(cart);
  return (
    <div className='flex justify-around items-center p-1'>
      <Link to={'/'}><h2 className='text-orange-500 text-2xl font-bold'>Shop</h2></Link>
      <div className="flex items-center gap-3">
        <input type="text" name='search' value={search} onChange={(e)=>setSearch(e.target.value)} placeholder='Search Meal' className='border mt-2 border-orange-400 rounded p-2 outline-none' />
        <Link to={'/addtocart'}>
        <div className='mt-2 relative'>
            <span className='text-3xl text-orange-500 cursor-pointer'><AiOutlineShoppingCart/></span>
            <span className='px-1 bg-orange-500 roudned rounded-full text-white flex justify-center items-center absolute top-[-10px] right-[-2px]'>{cart.length}</span>
        </div>
        </Link>
      </div>
    </div>
  )
}

export default Nav
