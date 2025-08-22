import React from 'react'

export const metadata = {
  title: "About",
  description: "The informations about the web page are included here.",
};

export default function About() {
  return (
    <div className="max-w-5xl mx-auto px-6 py-12">
      {/* Header */}
      <h1 className="text-4xl font-bold text-center text-black mb-6">
        About <span className="text-green-900">AbdullahMart</span>
      </h1>
      <p className="text-center text-lg text-black mb-12">
        Your trusted online marketplace delivering quality products with care and reliability.
      </p>

      {/* Mission & Vision */}
      <div className="grid md:grid-cols-2 gap-10 mb-12">
        <div className="bg-green-50 shadow-md p-6 rounded-xl">
          <h2 className="text-2xl font-semibold text-green-800 mb-3">Our Mission</h2>
          <p className="text-gray-600 leading-relaxed">
            At AbdullahMart, our mission is to make shopping simple, affordable, 
            and reliable for everyone. We strive to connect customers with quality 
            products while ensuring fast delivery and excellent service.
          </p>
        </div>
        <div className="bg-green-50 shadow-md p-6 rounded-xl">
          <h2 className="text-2xl font-semibold text-green-800 mb-3">Our Vision</h2>
          <p className="text-black leading-relaxed">
            We envision becoming one of the most customer-centric online stores, 
            where people can discover and shop for everything they need in a seamless, 
            enjoyable, and secure way.
          </p>
        </div>
      </div>

      {/* Values */}
      <div className="mb-12">
        <h2 className="text-2xl font-semibold text-green-900 mb-6 text-center">
          Our Core Values
        </h2>
        <div className="grid md:grid-cols-3 gap-8">
          <div className="p-6 bg-green-50 shadow-md rounded-xl text-center">
            <h3 className="text-lg font-semibold mb-2 text-green-800">Quality</h3>
            <p className="text-black">We deliver only the best, ensuring satisfaction in every purchase.</p>
          </div>
          <div className="p-6 bg-green-50 shadow-md rounded-xl text-center">
            <h3 className="text-lg font-semibold mb-2 text-green-800">Trust</h3>
            <p className="text-black">Our platform is built on transparency, reliability, and consistency.</p>
          </div>
          <div className="p-6 bg-green-50 shadow-md rounded-xl text-center">
            <h3 className="text-lg font-semibold mb-2 text-green-800">Customer First</h3>
            <p className="text-black">We listen, we care, and we prioritize your shopping experience.</p>
          </div>
        </div>
      </div>

      {/* Contact Info */}
      <div className="bg-green-50 p-8 rounded-xl shadow-md">
        <h2 className="text-2xl font-semibold text-green-900 mb-4">Contact Us</h2>
        <p className="text-black mb-4">
          Have questions, feedback, or need support? We’d love to hear from you.
        </p>
        <ul className="space-y-2 text-black">
          <li><strong>Email:</strong> support@abdullahmart.com</li>
          <li><strong>Phone:</strong> +880 1234-567890</li>
          <li><strong>Address:</strong> Dhaka, Bangladesh</li>
        </ul>
      </div>
    </div>
  );
}

