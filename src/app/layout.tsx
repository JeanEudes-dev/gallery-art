import './globals.css';
import React from 'react';
import Link from 'next/link';
import { FaHome, FaImage, FaInfoCircle } from 'react-icons/fa'; // Import react-icons

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <body className="flex h-screen">
        {/* Left Navigation */}
        <aside className="w-16 md:w-48 h-full bg-black text-white flex flex-col items-center md:items-start py-6">
          <div className="mb-8">
            <h1 className="text-xl md:text-2xl font-bold pl-4 hidden md:block">WORLD ART</h1>
          </div>
          <nav className="space-y-6">
            <Link href="/" className="flex items-center text-sm md:text-base hover:text-gray-400 transition pl-4">
              <FaHome className="mr-2" />
              <span className="hidden md:inline">Home</span>
            </Link>
            <Link href="/gallery" className="flex items-center text-sm md:text-base hover:text-gray-400 transition pl-4">
              <FaImage className="mr-2" />
              <span className="hidden md:inline">Gallery</span>
            </Link>
            <Link href="/about" className="flex items-center text-sm md:text-base hover:text-gray-400 transition pl-4">
              <FaInfoCircle className="mr-2" />
              <span className="hidden md:inline">About</span>
            </Link>
          </nav>
        </aside>

        {/* Main Content */}
        <main className="flex-1 bg-gray-50 overflow-auto p-1 md:p-1">
          {children}
        </main>
      </body>
    </html>
  );
}