import NotFound from '@/app/not-found';
import Image from 'next/image';
import React from 'react'

export default function ProductDetails({ params }) {
  const id = params?.id;
  const data = [
    {
      id: "64e4c5f92a3d9c7a1f3e9b12",
      name: "Almonds",
      image: "/almonds.jpg",
      description: "Almonds are nutrient-dense edible seeds of the almond tree, rich in healthy fats, protein, fiber, vitamins (especially vitamin E), and minerals like magnesium and calcium. They are known to support heart health, improve brain function, aid in weight management, and promote healthy skin. Almonds can be eaten raw, roasted, soaked, or used in products like almond milk, oil, and flour."
    },
    {
      id: "64e4c6007a4b8e9f2c5d1a34",
      name: "Walnuts",
      image: "/walnut.webp",
      description: "Walnuts are nutrient-rich nuts known for their high content of omega-3 fatty acids, antioxidants, and essential vitamins and minerals. They support brain health, improve heart function, boost immunity, and promote healthy skin. Walnuts are commonly eaten raw, roasted, or added to salads, desserts, and baked goods."
    },
    {
      id: "64e4c60f8b7d2e4c9a1b7f56",
      name: "Honey",
      image: "/honey.webp",
      description: "Honey is a natural sweetener produced by honeybees from the nectar of flowers. It is rich in antioxidants, enzymes, vitamins, and minerals, making it both a food and a traditional remedy. Known for its antibacterial and anti-inflammatory properties, honey supports digestion, soothes sore throats, boosts energy, and promotes skin health. It is widely used in beverages, desserts, skincare, and natural medicine."
    },
    {
      id: "64e5a1b4c9f1a7d2e3b4c8a1",
      name: "Chia Seeds",
      image: "/chia_seeds.webp",
      description: "Chia Seeds are tiny black or white seeds from the Salvia hispanica plant, native to Central and South America. They’re rich in fiber, omega-3 fatty acids, protein, antioxidants, and essential minerals like calcium and magnesium. When soaked in liquid, chia seeds absorb many times their weight in water, forming a gel-like texture, which makes them popular in puddings, smoothies, and as an egg substitute in vegan baking."
    },
    {
      id: "64f7c2d9b1a8e4f2d7c9b5a3",
      name: "Premium Ajwa Dates",
      image: "/ajwa_premium_dates.jpg",
      description: "Premium Ajwa Dates are a prized variety of dates grown in Medina, Saudi Arabia, known for their rich, soft texture, natural sweetness, and distinctive dark color. They are highly valued for their nutritional benefits, including being a good source of fiber, antioxidants, and essential minerals, while also holding cultural and traditional significance."
    },
    {
      id: "6501d4f7e2b3c9a1f4b7d2e8",
      name: "Egyptian Medjul Dates",
      image: "/egyptian_medjul_dates.jpg",
      description: "Egyptian Medjool Dates are large, soft, and naturally sweet dates, often called the “king of dates” for their rich flavor and chewy texture. Grown in Egypt’s ideal climate, they are packed with fiber, potassium, and antioxidants, making them both a healthy snack and a natural energy booster."
    },
    {
      id: "6512e9b8a7c4f1d3e2b5a9c6",
      name: "Extra Virgin Coconut Oil",
      image: "/extra_virgin_coconut_oil.jpg",
      description: "Extra Virgin Coconut Oil is a natural, unrefined oil extracted from fresh coconut meat without the use of heat or chemicals. It retains its pure aroma, flavor, and nutrients, making it rich in healthy fats, antioxidants, and antimicrobial properties. Commonly used in cooking, skincare, and haircare, it is valued for its versatility and health benefits."
    },
    {
      id: "6524f7a1d9c3e8b2a4f1c7d5",
      name: "Ghee",
      image: "/ghee.jpg",
      description: "Ghee is a type of clarified butter traditionally used in South Asian cooking, made by simmering butter to remove water and milk solids. It has a rich, nutty flavor, a high smoke point, and is valued for its nutritional benefits, including healthy fats and fat-soluble vitamins. Commonly used in cooking, Ayurveda, and rituals, ghee is prized for both taste and wellness."
    },
    {
      id: "6536a2d4b9e7c1f8d3a5e2c7",
      name: "Moringa Powder",
      image: "/moringa_powder.jpg",
      description: "Moringa Powder is made from the dried leaves of the Moringa oleifera tree, often called the “drumstick tree” or “miracle tree.” It is rich in vitamins, minerals, antioxidants, and plant protein, making it a popular superfood. Commonly added to smoothies, teas, and recipes, moringa powder is valued for supporting energy, immunity, and overall wellness."
    },
    {
      id: "6548c3b1f2a9e7d4c8b5a1f6",
      name: "Spirulina",
      image: "/spirulina.jpg",
      description: "Spirulina is a blue-green algae known as a nutrient-dense superfood. Packed with protein, vitamins, minerals, and antioxidants, it supports energy, immunity, and overall wellness. Commonly available in powder or tablet form, spirulina is often added to smoothies, juices, and health supplements for a natural nutrient boost."
    },
    {
      id: "655ad7e2b4c1f9a8d3e6b2c4",
      name: "Turmeric Powder",
      image: "/turmeric_powder.jpg",
      description: "Turmeric Powder is a bright yellow spice made from the dried root of the turmeric plant (Curcuma longa). Renowned for its warm, earthy flavor and natural anti-inflammatory properties, it is widely used in cooking, herbal remedies, and wellness practices. Rich in antioxidants, turmeric powder supports digestion, immunity, and overall health."
    },
  ]
  const singleData = data.find(d => d?.id === id);
  if (!singleData) {
    return <NotFound />
  }
  return (
    <section className='padding py-10'>
      <h2 className='text-green-600 text-4xl font-bold mb-10 text-center'>Single Product Details
      </h2>

      <div className='grid md:grid-cols-[48.5%_48.5%] gap-[3%]'>
        <div className='w-full flex justify-center'>
          <Image
            src={singleData?.image}
            alt={singleData?.name}
            width={500}
            height={500}
            className='w-full max-h-[500px] rounded-lg border border-gray-400/50' />
        </div>
        <div>
          <h2 className='text-3xl font-semibold my-5'>{singleData?.name}</h2>
          <p className='text-justify'>{singleData?.description}</p>
        </div>
      </div>
    </section>
  )
}
