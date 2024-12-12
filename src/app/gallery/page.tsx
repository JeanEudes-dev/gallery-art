"use client";

import { useState, useEffect, useCallback } from 'react';
import Link from 'next/link';
import { Artwork } from '../types/art';
import { fetchArtworks } from '../utils/api';
import Image from 'next/image';
import { motion } from 'framer-motion';
import Masonry from 'react-masonry-css';

export default function GalleryPage() {
    const [artworks, setArtworks] = useState<Artwork[]>([]);
    const [loading, setLoading] = useState<boolean>(true);
    const [error, setError] = useState<string | null>(null);
    const [page, setPage] = useState<number>(1);
    const [hasMore, setHasMore] = useState<boolean>(true);

    const loadArtworks = useCallback(async () => {
        if (!hasMore) return;
        try {
            const { data, pagination } = await fetchArtworks<Artwork[]>(`/artworks?page=${page}`);
            setArtworks((prev) => [...prev, ...data]);
            setHasMore(pagination.current_page < pagination.total_pages);
            console.log(pagination)
        } catch (err) {
            console.log(err);
            setError('Failed to load artworks');
        } finally {
            setLoading(false);
        }
    }, [page, hasMore]);

    useEffect(() => {
        loadArtworks();
    }, [loadArtworks]);

    const handleScroll = useCallback(() => {

        if (
            window.innerHeight + window.scrollY >= document.documentElement.scrollHeight - 100 &&
            !loading &&
            hasMore
        ) {
            setPage((prevPage) => prevPage + 1);
        }

    }, [loading, hasMore]);

    useEffect(() => {
        window.addEventListener('scroll', handleScroll);
        return () => window.removeEventListener('scroll', handleScroll);
    }, [handleScroll]);

    if (loading && page === 1) {
        return <div className="h-screen flex items-center justify-center">Loading...</div>;
    }

    if (error) {
        return <div className="h-screen flex items-center justify-center">{error}</div>;
    }

    return (
        <section className="px-8 py-12 min-h-screen bg-gradient-to-br from-white via-gray-100 to-gray-300">
            <h1 className="text-4xl font-bold text-center mb-12">World Art Gallery</h1>
            <Masonry
                breakpointCols={{
                    default: 4,
                    1100: 3,
                    768: 2,
                    500: 1,
                }}
                className="flex gap-6"
                columnClassName="masonry-column"
            >
                {artworks.map((artwork, index) => (
                    <motion.div
                        key={artwork.id}
                        className="bg-white shadow-lg rounded-lg overflow-hidden hover:scale-105 transition-transform duration-300 masonry-item"
                        whileHover={{ scale: 1.1 }}
                    >
                        <Link href={`/art/${artwork.id}`}>
                            <Image
                                src={`https://www.artic.edu/iiif/2/${artwork.image_id}/full/600,/0/default.jpg`}
                                alt={artwork.title}
                                className="object-cover w-full h-64"
                                width={300}
                                height={200}
                                sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                                priority={index === 0}
                            />
                            <div className="p-4">
                                <h2 className="text-lg font-semibold mb-2 text-gray-800 truncate">{artwork.title}</h2>
                                <p className="text-sm text-gray-600">{artwork.artist_title || 'Unknown Artist'}</p>
                            </div>
                        </Link>
                    </motion.div>
                ))}

            </Masonry>
            {loading && <div className="text-center mt-4">Loading more...</div>}
        </section>
    );
}
