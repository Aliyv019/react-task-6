import React from 'react'

export default function CartItems({item}) {
  return (
    <div className='flex items-center gap-4 border-y border-slate-300 p-4 w-full'>
      <img className='w-16 h-16 object-cover' src={item.img} alt="" />
      <div className='flex flex-col items-start'>
        <h3>{item.name}</h3>
        <h3>${item.price}</h3>
      </div>

    </div>
  )
}
