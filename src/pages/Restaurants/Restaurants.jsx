import React from 'react'
import Sidebar from '../../components/Restaurant/Sidebar/Sidebar'
import Cards from '../../components/Restaurant/Cards/Cards'

export default function Restaurants({cartitems,setCartItems,cartTotal,setCartTotal}) {
  return (
    <div className='flex justify-between w-full'>
        <Sidebar/>
        <Cards cartitems={cartitems} setCartItems={setCartItems} cartTotal={cartTotal} setCartTotal={setCartTotal}/>
    </div>
  )
}
