export default function HomePage() {
  return (
    <section className="h-screen flex items-center justify-center">
      <div className="text-center">
        <h1 className="text-4xl font-bold mb-4">Welcome to the Art Gallery</h1>
        <p className="text-lg mb-6">Discover, explore, and connect with timeless art.</p>
        <a
          href="/gallery"
          className="bg-black text-white py-2 px-4 rounded hover:bg-gray-800 transition">
          Explore Gallery
        </a>
      </div>
    </section>
  );
}
