import Link from 'next/link'
import React from 'react'

export default function Navbar() {
  return (
    <section>
      <nav className='flex justify-between bg-green-200 py-6 padding border-b border-gray-500/80'>
        <div>
          <img className='h-10 border-2 border-green-700 rounded-md' src='/logo1.png' alt="Logo" />
        </div>
        <ul className='flex justify-center gap-5 text-black'>
          <li className='authButton '>
            <Link href="/">
              Home
            </Link>
          </li>

          <li className='authButton'>
            <Link href="/products">
              Products
            </Link>
          </li>

          <li className='authButton'>
            <Link href="/about">
              About
            </Link>
          </li>
        </ul>
        <div>
          <ul className='flex justify-end gap-5 text-black'>
            <li className='authButton'>
              <Link href='/login'>Login</Link>
            </li>
            <li className='authButton'>
              <Link href='/register'>Register</Link>
            </li>
          </ul>
        </div>
      </nav>
    </section>
  )
}
