import React, { useState } from 'react'

export default function CartItems({item, setCartTotal,cartTotal}) {
  const [quantity, setQuantity] = useState(1)
  const handleincrement = () => {
    setQuantity(quantity + 1)
    setCartTotal(cartTotal + item.price)
  }
  const handledecrement = () => {
    if(quantity > 1){
      setQuantity(quantity - 1)
      setCartTotal(cartTotal - item.price)
    }
  }
  return (
    <div className='flex items-center justify-between gap-4 border-y border-slate-300 p-4 w-full'>
      <div className='flex items-center gap-3'>
        <img className='w-16 h-16 object-cover' src={item.img} alt="" />
        <div className='flex flex-col items-start'>
          <h3>{item.name}</h3>
          <h3>${item.price}</h3>
        </div>
      </div>
      <div className='flex flex-col-reverse items-center bg-white rounded-full p-2'>
        <button onClick={handledecrement}>-</button>
        <p>{quantity}</p>
        <button onClick={handleincrement}>+</button>
      </div>
    </div>
  )
}
