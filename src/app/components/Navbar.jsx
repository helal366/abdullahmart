// import Link from 'next/link';
// import { usePathname } from 'next/navigation';
// import React from 'react';
// import NavCenterLinks from './NavCenterLinks';
// import NavAuthLinks from './NavAuthLinks';

// export default function Navbar() {
//   const pathname = usePathname();
//   if (!pathname.includes('dashboard')) {
//     return (
//       <section>
//         <nav className='flex justify-between bg-green-100 py-6 padding border-b border-gray-500/80'>
//           <div>
//             <img className='h-10 border-2 border-green-700 rounded-md' src='/logo1.png' alt="Logo" />
//           </div>
//           <NavCenterLinks />
//           <ul className='flex justify-center gap-5 text-black'>
//             <li className='authButton '>
//               <Link href="/">
//                 Home
//               </Link>
//             </li>

//             <li className='authButton'>
//               <Link href="/products">
//                 Products
//               </Link>
//             </li>

//             <li className='authButton'>
//               <Link href="/about">
//                 About
//               </Link>
//             </li>
//           </ul>
//           <div>
//             <NavAuthLinks />
//           </div>
//         </nav>
//       </section>
//     )
//   } else {
//     return <></>
//   }
// }
import { getServerSession } from "next-auth";
import NavbarClient from "./NavbarClient";
import { authOptions } from "@/lib/authOptions";

export default async function Navbar() {
  const session = await getServerSession(authOptions);
  return <NavbarClient session={session} />;
}
