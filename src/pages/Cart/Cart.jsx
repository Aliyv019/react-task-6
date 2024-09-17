import React from 'react'
import Cartinner from '../../components/Cartinner/Cartinner'

export default function Cart({cartitems,cartTotal}) {
  
  return (
    <div className='flex bg-slate-200 rounded'>
      <Cartinner cartitems={cartitems} cartTotal={cartTotal}/>
    </div>
  )
}
