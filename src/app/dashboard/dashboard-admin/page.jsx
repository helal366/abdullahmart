"use client";
import { useSession } from 'next-auth/react';
import React from 'react'

export default function AdminDashboard() {
  const { data: session, status } = useSession();
  const userName = session?.user?.username || session?.user?.email;
  const userRole = session?.user?.role || "User";
  return (
    <section className="p-6 flex flex-col items-center justify-center min-h-[300px]">
      <h2 className="text-3xl font-bold text-green-900 mb-3">
        Welcome, {userName}!
      </h2>
      <p className="text-black text-lg max-w-xl text-center">
        <span >You are logged in as </span> 
        <span className='text-green-800 font-semibold text-xl'>
          {userRole}
        </span>.
      </p>

      <p>
        This is your dashboard where you can manage your account, view data, and access all your tools efficiently.
      </p>
    </section>
  )
}
