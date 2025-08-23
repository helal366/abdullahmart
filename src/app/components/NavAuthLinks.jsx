import React from 'react'
import LoginButton from './LoginButton';
import LogoutButton from './LogoutButton';
import Link from 'next/link';

export default function NavAuthLinks({session}) {
  return (
    <>
        {
              session?.user ? (
                  <li className='authButton'>
                    <LogoutButton />
                  </li>
              ) : (
                  <ul className='flex justify-end gap-5 text-black'>
                    <li className='authButton'>
                      <LoginButton />
                    </li>
                    <li className='authButton'>
                      <Link href='/register'>Register</Link>
                    </li>
                  </ul>
              )
            }
    </>
  )
}
