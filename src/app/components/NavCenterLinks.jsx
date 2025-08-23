import Link from 'next/link'
import React from 'react'

export default function NavCenterLinks() {
    return (
        <>
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
        </>
    )
}
