import React, { useState } from 'react'
import { Link } from 'react-router-dom'
import Main_logo from '../../assets/img/Main_logo.svg'
import English from '../../assets/img/english.svg'
import Basket from '../../assets/img/basket.svg'
import Profile from '../../assets/img/profile.svg'


export default function Header() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  return (
    <header className='bg-gray-200 border-gray-200 dark:bg-gray-900 mb-4'>
        
        <div className="max-w-screen px-5 py-3  md:p-12  flex items-center md:justify-between mx-auto">
        <Link to='/' className="flex pl-2 items-center space-x-3 rtl:space-x-reverse justify-self-start order-2 md:order-1">
            <img src={Main_logo} className="h-8" alt="Flowbite Logo" />
        </Link>
        
        <div className="flex items-center md:order-2">

          <button type="button" data-collapse-toggle="navbar-search" aria-controls="navbar-search" aria-expanded="false" className="md:hidden hidden text-gray-500 dark:text-gray-400 hover:bg-gray-100 dark:hover:bg-gray-700 focus:outline-none focus:ring-4 focus:ring-gray-200 dark:focus:ring-gray-700 rounded-lg text-sm p-2.5 me-1">
            <svg className="w-5 h-5" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 20 20">
              <path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="m19 19-4-4m0-7A7 7 0 1 1 1 8a7 7 0 0 1 14 0Z"/>
            </svg>
            <span className="sr-only">Search</span>
          </button>
          <div className="relative hidden md:block">
            <div className="absolute inset-y-0 start-0 flex items-center ps-3 pointer-events-none">
              <svg className="w-4 h-4 text-gray-500 dark:text-gray-400" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 20 20">
                <path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="m19 19-4-4m0-7A7 7 0 1 1 1 8a7 7 0 0 1 14 0Z"/>
              </svg>
              <span className="sr-only">Search icon</span>
            </div>
            <input type="text" id="search-navbar" className="block w-full p-2 ps-10 text-sm text-gray-900 border border-gray-300 rounded-lg bg-gray-50 focus:ring-blue-500 focus:border-blue-500 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" placeholder="Search..."/>
          </div>
          <button onClick={toggleMenu} data-collapse-toggle="navbar-search" type="button" className=" order-1 inline-flex items-center p-2 w-10 h-10 justify-center text-sm text-gray-500 rounded-lg md:hidden hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-gray-200 dark:text-gray-400 dark:hover:bg-gray-700 dark:focus:ring-gray-600" aria-controls="navbar-search" aria-expanded="false">
              <span className="sr-only">Open main menu</span>
              <svg className="w-5 h-5" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 17 14">
                  <path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M1 1h15M1 7h15M1 13h15"/>
              </svg>
          </button>
        </div>
        <div className="items-center justify-between flex order-3 md:w-auto md:order-2">
          <button className={`md:px-3`}><img src={English} alt="" /></button>
          <Link to='/cart' className='px-3 hidden md:flex'><img src={Basket} alt="" /></Link>
          <button className='px-3 hidden md:flex'><img src={Profile} alt="" /></button>
        </div>
          
          <div className={`items-center justify-between w-full md:flex md:w-auto md:order-1 ${isMenuOpen ? 'hidden':'block'}`} id="navbar-search">
            <ul className="flex font-sans text-lg flex-col md:p-0 mt-4 font-medium border rounded-lg md:space-x-8 rtl:space-x-reverse md:flex-row md:mt-0 md:border-0 dark:bg-gray-800 md:dark:bg-gray-900 dark:border-gray-700">
              <li className='flex md:justify-center py-4  text-start'>
                <Link to='/' className="flex text-red-600 md:bg-transparent md:text-gray-900 md:p-0 md:hover:text-blue-700 md:dark:text-blue-500" aria-current="page">Home</Link>
              </li>
              <li className='flex md:justify-center py-4 text-start'>
                <Link to="/restaurants" className="flex text-gray-900 rounded hover:bg-gray-100 md:hover:bg-transparent md:hover:text-blue-700 md:p-0 md:dark:hover:text-blue-500 dark:text-white dark:hover:bg-gray-700 dark:hover:text-white md:dark:hover:bg-transparent dark:border-gray-700">Restaurants</Link>
              </li>
              <li className='flex md:justify-center py-4 text-start'>
                <Link to='/aboutus' className="flex text-gray-900 rounded hover:bg-gray-100 md:hover:bg-transparent md:hover:text-blue-700 md:p-0 dark:text-white md:dark:hover:text-blue-500 dark:hover:bg-gray-700 dark:hover:text-white md:dark:hover:bg-transparent dark:border-gray-700">About us</Link>
              </li>
              <li className='flex md:justify-center py-4 text-start'>
                <Link to='/how-it-works' className="flex text-gray-900 rounded hover:bg-gray-100 md:hover:bg-transparent md:hover:text-blue-700 md:p-0 dark:text-white md:dark:hover:text-blue-500 dark:hover:bg-gray-700 dark:hover:text-white md:dark:hover:bg-transparent dark:border-gray-700">How it works</Link>
              </li>
              <li className='flex md:justify-center py-4 text-start'>
                <Link to='/faqs' className="flex text-gray-900 rounded hover:bg-gray-100 md:hover:bg-transparent md:hover:text-blue-700 md:p-0 dark:text-white md:dark:hover:text-blue-500 dark:hover:bg-gray-700 dark:hover:text-white md:dark:hover:bg-transparent dark:border-gray-700">FAQs</Link>
              </li>
            </ul>
          </div>
        </div>


    </header>
  )
}
