import Image from 'next/image'
import Link from 'next/link'
import React from 'react';
import { getProducts } from '../actions/products/getProducts';

export const metadata = {
  title: "All Products",
  description: "All the products are shown here.",
};

export default async function ProductsPage() {
  const products = await getProducts();
  return (
    <section className='py-10 padding'>
      <h2 className='text-green-800 text-4xl font-bold mb-10 text-center bg-green-100 py-5 rounded-lg border border-gray-400/50'>
        All Products
      </h2>
      <section className='grid sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5 2xl:grid-cols-6 gap-5'>
        {products.map(d => <div key={d?._id} className='bg-green-100 rounded-lg border border-gray-400/50 flex flex-col'>

          <div className='h-[200px] w-full p-4 rounded-lg overflow-hidden'>
            <Image
              src={d?.image}
              alt={d?.name}
              width={500}
              height={500}
              className='h-full w-full object-cover rounded-lg shadow-xl border border-gray-400/50' />
          </div>
          <div className='flex flex-col flex-1'>
            <h4 className='text-sm px-4 font-semibold'>{d?.name}</h4>
            <p className='text-sm mb-3 px-4'>{d?.tagline}</p>
            <div className='mt-auto px-4 mb-5'>
              <p className='text-sm mb-2'>Tk. {d?.price} ({d?.unit})</p>
              <Link href={`/products/${d?._id}`}>
                <button className='detailsButton'>Details</button>
              </Link>
            </div>
          </div>
        </div>)}
      </section>
    </section>
  )
}
