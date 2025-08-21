import Link from 'next/link'
import React from 'react'

export default function Navbar() {
  return (
    <div>
      <nav className='flex justify-between bg-green-200 py-6 padding'>
        <div>
          <img className='h-10 border-2 border-white rounded-md' src='/logo1.png' alt="Logo" />
        </div>
        <ul className='flex justify-center gap-6 text-black'>
          <li className='cursor-pointer'>
            <Link href="/">
              Home
            </Link>
          </li>

          <li className='cursor-pointer'>
            <Link href="/products">
              Products
            </Link>
          </li>

          <li className='cursor-pointer'>
            <Link href="/about">
              About
            </Link>
          </li>
        </ul>
        <div>
          <ul className='flex justify-end gap-6 text-black'>
            <li >
              <button type="button" className='authButton'>Login</button>
            </li>
            <li className='cursor-pointer'>
              <button type="button" className='authButton'>Register</button>
            </li>
          </ul>
        </div>
      </nav>
    </div>
  )
}
