import React from 'react'

export default function ProductsPage() {
  const data=[
    {
      id:"64e4c5f92a3d9c7a1f3e9b12",
      name: "Almonds",
      image: "/almonds.jpg",
      description: "Almonds are nutrient-dense edible seeds of the almond tree, rich in healthy fats, protein, fiber, vitamins (especially vitamin E), and minerals like magnesium and calcium. They are known to support heart health, improve brain function, aid in weight management, and promote healthy skin. Almonds can be eaten raw, roasted, soaked, or used in products like almond milk, oil, and flour."
    },
    {
      id: "64e4c6007a4b8e9f2c5d1a34",
      name: "Walnuts",
      image: "/walnut.webp",
      description:"Walnuts are nutrient-rich nuts known for their high content of omega-3 fatty acids, antioxidants, and essential vitamins and minerals. They support brain health, improve heart function, boost immunity, and promote healthy skin. Walnuts are commonly eaten raw, roasted, or added to salads, desserts, and baked goods."
    },
    {
      id:"64e4c60f8b7d2e4c9a1b7f56",
      name: "Honey",
      image: "/honey.webp",
      description:"Honey is a natural sweetener produced by honeybees from the nectar of flowers. It is rich in antioxidants, enzymes, vitamins, and minerals, making it both a food and a traditional remedy. Known for its antibacterial and anti-inflammatory properties, honey supports digestion, soothes sore throats, boosts energy, and promotes skin health. It is widely used in beverages, desserts, skincare, and natural medicine."
    }
  ]
  return (
    <div>
        <h2 className='text-bold text-green-600 text-4xl'>Products Page

        </h2>
    </div>
  )
}
