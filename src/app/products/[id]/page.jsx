import { getProducts } from '@/app/actions/products/getProducts';
import NotFound from '@/app/not-found';
import Image from 'next/image';
import Link from 'next/link';
import React from 'react'

export const metadata = {
  title: "Product Details",
  description: "The selected product details are shown here.",
};

export default async function ProductDetails({ params }) {
  const id = params?.id;
   const products = await getProducts();
   
const singleData = products.find(d => d?._id.toString() === id);
  if (!singleData) {
    return <NotFound />
  }
  return (
    <section className='padding py-10'>
      <h2 className='text-green-800 text-4xl font-bold mb-10 text-center bg-green-100 py-5 rounded-lg border border-gray-400/50'>
        Details of {singleData?.name}
      </h2>

      <div className='grid md:grid-cols-[48.5%_48.5%] gap-[3%]'>
        {/* image */}
        <div className='w-full flex justify-center rounded-lg'>
          <Image
            src={singleData?.image}
            alt={singleData?.name}
            width={500}
            height={500}
            className='w-full max-h-[500px] rounded-lg border border-gray-400/50' />
        </div>
        <div>
          <h2 className='text-3xl font-semibold mb-1 text-green-800'>{singleData?.name}</h2>
          <p className='text-justify mb-5 font-semibold text-green-700'>{singleData?.tagline}</p>
          <p className='text-justify mb-5'>{singleData?.description}</p>
           <p className='mb-8'>
            <span className='font-semibold'>Price: </span> Tk. {singleData?.price} ({singleData?.unit})
          </p>
           
          <Link href={'/products'}>
            <button className='authButton'>
              Back To Products
            </button>
          </Link>
        </div>
      </div>
    </section>
  )
}
