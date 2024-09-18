import React from 'react'
import CartItems from '../CartItems/CartItems'

export default function Cartinner({cartitems,cartTotal,setCartTotal}) {
    
    return (
    <div className='flex flex-col gap-4 p-4 w-full'>
        {cartitems.map((item)=>(
            <CartItems item={item} setCartTotal={setCartTotal} cartTotal={cartTotal}/>
        ))}

        
        <button className='flex justify-between items-center p-4 bg-blue-200 rounded-full text-red-500 font-bold'>
            <h3>Checkout</h3>
            <h3>${cartTotal}</h3>
        </button>
    </div>
  )
}
