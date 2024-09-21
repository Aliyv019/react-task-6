import React, { useState } from 'react'
import useFetchData from '../../components/CustomHooks/FetchData'

export default function Aboutus() {
  const [input, setInput] = useState("")
  const [city, setCity] = useState("")
  const handleinputchange=(e)=>{
    setInput(e.target.value)
  }
  const handlesubmit=(e)=>{
    e.preventDefault()
    // console.log("hello");
    setCity(input)
  }
  const data=useFetchData(`https://restcountries.com/v3.1/name/${city}`)
  console.log(data);
  
  return (
    <div className='flex flex-col items-center justify-center gap-4'>
      <form onSubmit={handlesubmit}>
        <input type="text" onChange={handleinputchange} className='border border-slate-500 rounded-xl p-2' placeholder='Enter your city' />
        <button type="submit" className=' bg-blue-600 text-white p-2 rounded-xl'>Submit</button>
      </form>
      {data && data.length > 0 ? (
        <div className="flex flex-col items-center justify-center border border-slate-200 w-fit rounded-xl p-2">
          <h1 className="text-2xl font-bold">Capital:{data[0].capital[0]}</h1> 
          <h2>Flag:</h2>
          <img src={data[0].flags.png} alt="" />
        </div>
      ) : (
        <p>No data found</p> 
      )}
    </div>
  )
}
