import React, { useState } from 'react'

export default function Card({data,setCartItems,setCartTotal,cartitems,cartTotal}) {
  const [isButtonDisabled, setIsButtonDisabled] = useState(false);
  const handeButtonDisable=()=>{
    setIsButtonDisabled(true)
  }

  const handleAddtoCart = (e) => {
    handeButtonDisable()
    setCartItems([...cartitems,data]);
    setCartTotal(cartTotal + data.price);
    console.log(cartitems);
    console.log(cartTotal);
  };
  return (
    <div className=' border rounded-md shadow-slate-400 p-3 shadow-lg flex flex-col items-center gap-2 w-80'>
        <img className=' h-64 w-64 object-cover' src={data.img} alt={`this is a ${data.name}`} />
        <h1 className='text-xl font-semibold'>{data.name}</h1>
        <p className='text-sm'>{data.price}$ +Delivery</p>
        <button onClick={(e)=>{handleAddtoCart(e)}} disabled={isButtonDisabled} className=' bg-blue-500 text-white p-2 rounded'>{isButtonDisabled ? "Item is in cart" : "Add to Cart"}</button>
    </div>
  )
}