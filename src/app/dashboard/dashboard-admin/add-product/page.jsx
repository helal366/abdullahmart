"use client";
import { useState } from "react";

export default function AddProduct() {
  const [form, setForm] = useState({
    name: "",
    image: "",
    price: "",
    unit: "",
    description: "",
    tagline: "",
    isFavorite: false,
  });
  const [loading, setLoading]=useState(false)

  const handleChange = (e) => {
    const { name, value, type, checked } = e.target;
    setForm((prev) => ({
      ...prev,
      [name]: type === "checkbox" ? checked : value,
    }));
  };

const handleSubmit = async (e) => {
  e.preventDefault();
  setLoading(true);
  try {
    const res = await fetch("/api/products", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(form),
    });

    let data = {};
    try {
      data = await res.json(); // safely parse JSON
    } catch {
      data = { message: "No response body" };
    }

    if (res.ok) {
      alert(data.message || "Product added successfully!");
      setForm({
        name: "",
        image: "",
        price: "",
        unit: "",
        description: "",
        tagline: "",
        isFavorite: false,
      });
    } else {
      alert(`Error: ${data.message}`);
    }
  } catch (error) {
    console.error(error);
    alert("Something went wrong");
  } finally{
    setLoading(false)
  }
};


  return (
    <div className="p-6 max-w-3xl mx-auto bg-green-100 my-10 text-black border border-gray-500/50 rounded-lg">
      <h1 className="text-2xl font-bold mb-4">Add New Product</h1>
      <form onSubmit={handleSubmit} className="space-y-4">
        <input
          type="text"
          name="name"
          value={form.name}
          onChange={handleChange}
          placeholder="Product Name"
          className="w-full p-2 border rounded bg-white"
          required
        />
        <input
          type="text"
          name="image"
          value={form.image}
          onChange={handleChange}
          placeholder="Image URL"
          className="w-full p-2 border rounded bg-white"
          required
        />
        <input
          type="number"
          name="price"
          value={form.price}
          onChange={handleChange}
          placeholder="Price"
          className="w-full p-2 border rounded bg-white"
          required
        />
        <input
          type="text"
          name="unit"
          value={form.unit}
          onChange={handleChange}
          placeholder="Unit (e.g., 1kg)"
          className="w-full p-2 border rounded bg-white"
          required
        />
        <input
          type="text"
          name="tagline"
          value={form.tagline}
          onChange={handleChange}
          placeholder="Tagline"
          className="w-full p-2 border rounded bg-white"
        />
        <textarea
          name="description"
          value={form.description}
          onChange={handleChange}
          placeholder="Description"
          className="w-full p-2 border rounded bg-white"
          required
        />
        <label className="flex items-center gap-2 ">
          <input
            type="checkbox"
            name="isFavorite"
            checked={form.isFavorite}
            onChange={handleChange}
          />
          Mark as Favorite
        </label>
        <button
          type="submit"
          className="authButton"
          disabled={loading}
        >
         {loading? 'Adding...':' Add Product'}
        </button>
      </form>
    </div>
  );
}
