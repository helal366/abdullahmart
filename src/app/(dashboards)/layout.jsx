import React from 'react'

export default function DashboardLayout({children}) {
  return (
    <section>
        <section className='grid grid-cols-12'>
            {/* side bar */}
            <div className='col-span-3'>
                hello
            </div>

            {/* dashboard content */}
            <div className='col-span-9'>
                {children}
            </div>
        </section>
        
    </section>
  )
}
