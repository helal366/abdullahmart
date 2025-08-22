import NotFound from '@/app/not-found';
import Image from 'next/image';
import Link from 'next/link';
import React from 'react'

export const metadata = {
  title: "Product Details",
  description: "The selected product details are shown here.",
};

export default function ProductDetails({ params }) {
  const id = params?.id;
const data = [
    {
      id: "64e4c5f92a3d9c7a1f3e9b12",
      name: "Almonds",
      image: "https://i.postimg.cc/jqBnHVbK/almonds.jpg",
      price: 1600,
      unit: "1kg",
      tagline: "Fuel Your Day the Almond Way.",
      description: "Almonds are nutrient-dense edible seeds of the almond tree, rich in healthy fats, protein, fiber, vitamins (especially vitamin E), and minerals like magnesium and calcium. They are known to support heart health, improve brain function, aid in weight management, and promote healthy skin. Almonds can be eaten raw, roasted, soaked, or used in products like almond milk, oil, and flour."
    },
    {
      id: "64e4c6007a4b8e9f2c5d1a34",
      name: "Walnuts",
      image: "https://i.postimg.cc/t4pTkpm0/Walnut.webp",
      price: 1400,
      unit: "1kg",
      tagline: "The Brain’s Best Friend.",
      description: "Walnuts are nutrient-rich nuts known for their high content of omega-3 fatty acids, antioxidants, and essential vitamins and minerals. They support brain health, improve heart function, boost immunity, and promote healthy skin. Walnuts are commonly eaten raw, roasted, or added to salads, desserts, and baked goods."
    },
    {
      id: "64e4c60f8b7d2e4c9a1b7f56",
      name: "Honey",
      image: "https://i.postimg.cc/qBKvdzPV/honey.png",
      price: 1000,
      unit: "1kg",
      tagline: "Nature’s Nectar in Every Drop.",
      description: "Honey is a natural sweetener produced by honeybees from the nectar of flowers. It is rich in antioxidants, enzymes, vitamins, and minerals, making it both a food and a traditional remedy. Known for its antibacterial and anti-inflammatory properties, honey supports digestion, soothes sore throats, boosts energy, and promotes skin health. It is widely used in beverages, desserts, skincare, and natural medicine."
    },
    {
      id: "64e5a1b4c9f1a7d2e3b4c8a1",
      name: "Chia Seeds",
      image: "https://i.postimg.cc/Y9YKTmhd/chia-seeds.webp",
      price: 600,
      unit: "1kg",
      tagline: "Tiny Seeds, Mighty Nutrition.",
      description: "Chia Seeds are tiny black or white seeds from the Salvia hispanica plant, native to Central and South America. They’re rich in fiber, omega-3 fatty acids, protein, antioxidants, and essential minerals like calcium and magnesium. When soaked in liquid, chia seeds absorb many times their weight in water, forming a gel-like texture, which makes them popular in puddings, smoothies, and as an egg substitute in vegan baking."
    },
    {
      id: "64f7c2d9b1a8e4f2d7c9b5a3",
      name: "Premium Ajwa Dates",
      image: "https://i.postimg.cc/FsqpkCPJ/ajwa-premium-dates.jpg",
      price: 1800,
      unit: "1kg",
      tagline: "Nature’s sweetest treasure, handpicked for you.",
      description: "Premium Ajwa Dates are a prized variety of dates grown in Medina, Saudi Arabia, known for their rich, soft texture, natural sweetness, and distinctive dark color. They are highly valued for their nutritional benefits, including being a good source of fiber, antioxidants, and essential minerals, while also holding cultural and traditional significance."
    },
    {
      id: "6501d4f7e2b3c9a1f4b7d2e8",
      name: "Egyptian Medjul Dates",
      image: "https://i.postimg.cc/3NqXpWZH/egyptian-medjul-dates.jpg",
      price: 2200,
      unit: "1kg",
      tagline: "Juicy, golden, and naturally delightful.",
      description: "Egyptian Medjool Dates are large, soft, and naturally sweet dates, often called the “king of dates” for their rich flavor and chewy texture. Grown in Egypt’s ideal climate, they are packed with fiber, potassium, and antioxidants, making them both a healthy snack and a natural energy booster."
    },
    {
      id: "6512e9b8a7c4f1d3e2b5a9c6",
      name: "Extra Virgin Coconut Oil",
      image: "https://i.postimg.cc/CxkGBhBW/extra-virgin-coconut-oil.jpg",
      price: 1600,
      unit: "1000mL",
      tagline: "Pure, natural goodness for your body and hair.",
      description: "Extra Virgin Coconut Oil is a natural, unrefined oil extracted from fresh coconut meat without the use of heat or chemicals. It retains its pure aroma, flavor, and nutrients, making it rich in healthy fats, antioxidants, and antimicrobial properties. Commonly used in cooking, skincare, and haircare, it is valued for its versatility and health benefits."
    },
    {
      id: "6524f7a1d9c3e8b2a4f1c7d5",
      name: "Ghee",
      image: "https://i.postimg.cc/gjxRYmbt/ghee.jpg",
      price: 1600,
      unit: "1kg",
      tagline: "Rich in tradition, pure in taste.",
      description: "Ghee is a type of clarified butter traditionally used in South Asian cooking, made by simmering butter to remove water and milk solids. It has a rich, nutty flavor, a high smoke point, and is valued for its nutritional benefits, including healthy fats and fat-soluble vitamins. Commonly used in cooking, Ayurveda, and rituals, ghee is prized for both taste and wellness."
    },
    {
      id: "6536a2d4b9e7c1f8d3a5e2c7",
      name: "Moringa Powder",
      image: "https://i.postimg.cc/V6VrZp0q/moringa-powder.jpg",
      price: 800,
      unit: "500gm",
      tagline: "Nature’s powerhouse in every scoop.",
      description: "Moringa Powder is made from the dried leaves of the Moringa oleifera tree, often called the “drumstick tree” or “miracle tree.” It is rich in vitamins, minerals, antioxidants, and plant protein, making it a popular superfood. Commonly added to smoothies, teas, and recipes, moringa powder is valued for supporting energy, immunity, and overall wellness."
    },
    {
      id: "6548c3b1f2a9e7d4c8b5a1f6",
      name: "Spirulina",
      image: "https://i.postimg.cc/QMMc6pnr/spirulina.jpg",
      price: 2600,
      unit: "200gm",
      tagline: "Boost your energy, naturally.",
      description: "Spirulina is a blue-green algae known as a nutrient-dense superfood. Packed with protein, vitamins, minerals, and antioxidants, it supports energy, immunity, and overall wellness. Commonly available in powder or tablet form, spirulina is often added to smoothies, juices, and health supplements for a natural nutrient boost."
    },
    {
      id: "655ad7e2b4c1f9a8d3e6b2c4",
      name: "Turmeric Powder",
      image: "https://i.postimg.cc/QMPK0vTp/turmeric-powderjpg.jpg",
      price: 300,
      unit: "150gm",
      tagline: "Golden spice for health and vitality.",
      description: "Turmeric Powder is a bright yellow spice made from the dried root of the turmeric plant (Curcuma longa). Renowned for its warm, earthy flavor and natural anti-inflammatory properties, it is widely used in cooking, herbal remedies, and wellness practices. Rich in antioxidants, turmeric powder supports digestion, immunity, and overall health."
    },
  ];
  const singleData = data.find(d => d?.id === id);
  if (!singleData) {
    return <NotFound />
  }
  return (
    <section className='padding py-10'>
      <h2 className='text-green-800 text-4xl font-bold mb-10 text-center bg-green-100 py-5 rounded-lg border border-gray-400/50'>
        Single Product Details
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
