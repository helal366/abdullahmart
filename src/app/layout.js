import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import Navbar from "./components/Navbar";
import Footer from "./components/Footer";
import NextAuthSessionProvider from "@/Providers/NextAuthSessionProvider";
import { auth } from "@/auth"; // from NextAuth (server side)

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata = {
  title: {
    default: "abdullahMart",
    template: "%s | abdullahMart"
  },
  description: "abdullahMart is an e-commerce website to provide safe healthy food items.",
};

export default async function RootLayout({ children }) {
   const session = await auth(); 
  return (
    <html lang="en">
      <NextAuthSessionProvider session={session}>
        <body
          suppressHydrationWarning
          className={`${geistSans.variable} ${geistMono.variable} antialiased`}
        >
          <Navbar />
          <main className="min-h-screen">
            {children}
          </main>
          <Footer />
        </body>
      </NextAuthSessionProvider>
    </html>
  );
}
