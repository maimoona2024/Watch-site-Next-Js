import React from 'react'
import Link from 'next/link'
import { FaShoppingCart } from 'react-icons/fa'
const Header = () => {
  return (
    <header className='header bg-black text-white p-4 flex justify-between items-center'>
        <h1 className='logo fade-in font-bold text-2xl hover:text-gray-400 cursor-pointer'>Watch World</h1>
        <nav className='nav flex gap-8'>
            <Link className='font-bold hover:text-gray-400' href="/">Home</Link>
            <Link className='font-bold hover:text-gray-400' href="/about">About</Link>
            <Link className='font-bold hover:text-gray-400' href="/watches">Watches</Link>
            <Link className='font-bold hover:text-gray-400' href="/contact">Contact</Link>
            <FaShoppingCart className='text-lg hover:text-gray-400 cursor-pointer' />
        </nav>
    </header>
  )
}

export default Header
