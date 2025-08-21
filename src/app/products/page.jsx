import Link from 'next/link'
import React from 'react'

export default function ProductsPage() {
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
      description: ""
    },
    {
      id:"64f7c2d9b1a8e4f2d7c9b5a3",
      name: "Premium Ajwa Dates",
      image: "",
      description: ""
    },
    {
      id:"6501d4f7e2b3c9a1f4b7d2e8",
      name: "Egyptian Medjul Dates",
      image: "",
      description: ""
    },
    {
      id:"6512e9b8a7c4f1d3e2b5a9c6",
      name: "Extra Virgin Coconut Oil",
      image: "",
      description: ""
    },
    {
      id:"6524f7a1d9c3e8b2a4f1c7d5",
      name: "Ghee",
      image: "",
      description: ""
    },
    {
      id:"6536a2d4b9e7c1f8d3a5e2c7",
      name: "Moringa Powder",
      image: "",
      description: ""
    },
    {
      id:"6548c3b1f2a9e7d4c8b5a1f6",
      name: "Spirulina",
      image: "",
      description: ""
    },
    {
      id:"655ad7e2b4c1f9a8d3e6b2c4",
      name: "Turmeric Powder",
      image: "",
      description: ""
    },
  ]
  return (
    <section className='py-10 padding'>
      <h2 className='text-bold text-green-600 text-4xl font-bold mb-20'>Products Page
      </h2>
      <section className='grid sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5 2xl:grid-cols-6 gap-5'>
        {data.map(d => <div key={d?.id} className='bg-green-100 rouded-lg border border-gray-400/50'>
          <Link href={`/products/${d?.id}`}>
            <img src={d?.image} alt={d?.name} className='max-h-[100px] w-full rounded-t-lg border border-gray-300/50 mb-5 cursor-pointer' />
          </Link>
          <h2 className='text-3xl font-semibold text-center'>{d?.name}</h2>
        </div>)}
      </section>
    </section>
  )
}
