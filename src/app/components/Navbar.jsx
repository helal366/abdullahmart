import Link from 'next/link'
import React from 'react'

export default function Navbar() {
  return (
    <div>
        <nav className='flex justify-center bg-slate-200 py-6'>
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
        </nav>
    </div>
  )
}
