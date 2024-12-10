import './globals.css';
import React from 'react';
import Link from 'next/link';
import { FaHome, FaImage, FaInfoCircle } from 'react-icons/fa'; // Import react-icons

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <body className="flex h-screen">
        {/* Left Navigation */}
        <aside className="w-20 h-full bg-black text-white flex flex-col items-center py-4">
          <Link href="/" className="mb-4 flex items-center">
            <FaHome className="mr-2" />
            <span>Home</span>
          </Link>
          <Link href="/gallery" className="mb-4 flex items-center">
            <FaImage className="mr-2" />
            <span>Gallery</span>
          </Link>
          <Link href="/about" className="mb-4 flex items-center">
            <FaInfoCircle className="mr-2" />
            <span>About</span>
          </Link>
        </aside>
        {/* Main Content */}
        <main className="flex-1 overflow-hidden">
          {children}
        </main>
      </body>
    </html>
  );
}
