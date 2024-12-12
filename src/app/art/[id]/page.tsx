'use client';

import { Artwork } from '@/app/types/art';
import axios from 'axios';
import Image from 'next/image';
import { useState, useEffect } from 'react';
import { motion } from 'framer-motion';

interface ArtViewPageProps {
    params: { id: string };
}

export default function ArtViewPage({ params }: ArtViewPageProps) {
    const { id } = params;

    const [artwork, setArtwork] = useState<Artwork | null>(null);
    const [loading, setLoading] = useState<boolean>(true);
    const [error, setError] = useState<string | null>(null);

    useEffect(() => {
        async function fetchArtwork() {
            try {
                const response = await axios.get(`https://api.artic.edu/api/v1/artworks/${id}`);
                setArtwork(response.data.data);
            } catch (err) {
                console.log(err);
                setError('Failed to load artwork data');
            } finally {
                setLoading(false);
            }
        }

        fetchArtwork();
    }, [id]);

    if (loading) {
        return <div className="h-screen flex items-center justify-center text-gray-600">Loading...</div>;
    }

    if (error) {
        return <div className="h-screen flex items-center justify-center text-red-600">{error}</div>;
    }

    if (!artwork) {
        return <div className="h-screen flex items-center justify-center text-gray-600">No artwork found.</div>;
    }

    return (
        <section className="p-6 bg-gradient-to-br from-gray-100 via-white to-gray-200 min-h-screen">
            <div className="max-w-5xl mx-auto">
                <motion.div
                    className="relative w-full h-[500px] mb-6 rounded-lg overflow-hidden shadow-lg"
                    initial={{ opacity: 0, scale: 0.95 }}
                    animate={{ opacity: 1, scale: 1 }}
                    transition={{ duration: 0.5 }}>
                    {artwork.image_id ? (
                        <Image
                            src={`https://www.artic.edu/iiif/2/${artwork.image_id}/full/843,/0/default.jpg`}
                            alt={artwork.title}
                            width={843}
                            height={500}
                            className="object-cover w-full h-full"
                        />
                    ) : (
                        <div className="bg-gray-300 h-full w-full flex items-center justify-center">
                            <span className="text-gray-500">Image not available</span>
                        </div>
                    )}
                </motion.div>
                <motion.h1
                    className="text-4xl font-extrabold mb-4 text-center text-gray-800"
                    initial={{ y: -20, opacity: 0 }}
                    animate={{ y: 0, opacity: 1 }}
                    transition={{ duration: 0.5 }}>
                    {artwork.title}
                </motion.h1>
                <motion.p
                    className="text-lg text-center text-gray-700 mb-6"
                    initial={{ y: -10, opacity: 0 }}
                    animate={{ y: 0, opacity: 1 }}
                    transition={{ duration: 0.5 }}>
                    {artwork.artist_display || 'Unknown Artist'}
                </motion.p>
                <motion.div
                    className="text-gray-600 leading-relaxed text-justify bg-white p-6 rounded-lg shadow-md"
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    transition={{ duration: 0.5 }}>
                    {artwork.publication_history || 'No description available.'}
                </motion.div>
            </div>
        </section>
    );
}
