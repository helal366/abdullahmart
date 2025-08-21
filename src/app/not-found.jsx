import Link from 'next/link'
import React from 'react'

export default function NotFound() {
    return (
        <section className='py-12 flex flex-col items-center padding'>
            <h1 className='text-7xl font-bold text-red-600 text-center mb-8'>404</h1>
            <h2 className='text-5xl font-semibold text-red-600 text-center mb-10'>PAGE NOT FOUND</h2>
            <div>

                <Link href="/" className='outlineButton '>Go Back To Home</Link>
            </div>
        </section>
    )
}
