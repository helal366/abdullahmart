import Image from 'next/image'
import React from 'react'

export default function HomeBanner() {
  return (
    <section className='pb-10'>
        <div className='w-full max-h-[600px] rounded-lg border-3 border-gray-400/50'>
            <Image 
            src="https://i.postimg.cc/g2Q0WmtT/banner3.png"
            alt="Banner"
            width={1600}
            height={900}
            className='w-full h-full'/>
        </div>
    </section>
  )
}
