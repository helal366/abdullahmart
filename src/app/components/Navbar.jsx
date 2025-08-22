"use client";
import Link from 'next/link';
import { usePathname } from 'next/navigation';
import React from 'react';
import LoginButton from './LoginButton';

export default function Navbar() {
  const pathname=usePathname();
  if(!pathname.includes('dashboard')){
    return (
      <section>
        <nav className='flex justify-between bg-green-100 py-6 padding border-b border-gray-500/80'>
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
                {/* <Link href='/login'>
                </Link> */}
                <LoginButton/>
              </li>
              <li className='authButton'>
                <Link href='/register'>Register</Link>
              </li>
            </ul>
          </div>
        </nav>
      </section>
    )
  }else{
    return <></>
  }
}
