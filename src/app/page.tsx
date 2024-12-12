'use client'
import { motion } from 'framer-motion';

export default function HomePage() {
  return (
    <section className="h-screen flex items-center justify-center bg-gradient-to-br from-indigo-100 via-white to-indigo-200">
      <motion.div
        className="text-center"
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 1, ease: 'easeOut' }}
      >
        <h1 className="text-6xl font-extrabold mb-6 text-indigo-900 leading-tight">
          Immerse Yourself in Art
        </h1>
        <p className="text-lg text-indigo-700 mb-8 max-w-md mx-auto">
          Explore a curated collection of timeless masterpieces and modern creativity.
        </p>
        <motion.a
          href="/gallery"
          className="bg-indigo-600 text-white py-3 px-6 rounded-full shadow-lg hover:bg-indigo-500 hover:shadow-2xl transition-all duration-300"
          whileHover={{ scale: 1.05 }}
          whileTap={{ scale: 0.95 }}
        >
          Explore Gallery
        </motion.a>
      </motion.div>
    </section>
  );
}

