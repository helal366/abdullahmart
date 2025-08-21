import Link from 'next/link'
import React from 'react'

export default function Navbar() {
  return (
    <div>
        <nav className='flex justify-between bg-slate-200 py-6 padding'>
          <div>
            <img className='h-10 border-2 border-white rounded-md' src='/logo1.png' alt="Logo" />
          </div>
          <ul className='flex justify-center gap-6'>
            <Link href="/">
            <li className='cursor-pointer'>Home</li>
            </Link>

            <Link href="/products">
            <li className='cursor-pointer'>Products</li>
            </Link>

            <Link href="/about">
            <li className='cursor-pointer'>About</li>
            </Link>
          </ul>
          <div>

          </div>
        </nav>
    </div>
  )
}
