'use client';

import { Artwork } from '@/app/types/art';
import axios from 'axios';
import Image from 'next/image';
import { useState, useEffect } from 'react';

interface ArtViewPageProps {
    params: { id: string };
}

export default function ArtViewPage({ params }: ArtViewPageProps) {
    // Ensure 'params' is correctly typed and use destructuring
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
        return <p>Loading...</p>;
    }

    if (error) {
        return <p>{error}</p>;
    }

    if (!artwork) {
        return <p>No artwork found.</p>;
    }

    return (
        <section className="p-6">
            <div className="max-w-4xl mx-auto">
                <div className="relative w-full h-[500px] mb-4">
                    {artwork.image_id ? (
                        <Image
                            src={`https://www.artic.edu/iiif/2/${artwork.image_id}/full/843,/0/default.jpg`}
                            alt={artwork.title}
                            width={843}
                            height={500}
                            className="object-contain"
                        />
                    ) : (
                        <div className="bg-gray-300 h-full w-full flex items-center justify-center">
                            <span className="text-gray-500">Image not available</span>
                        </div>
                    )}
                </div>
                <h1 className="text-3xl font-bold mb-2">{artwork.title}</h1>
                <p className="text-lg">{artwork.artist_display}</p>
                <p className="mt-4">{artwork.publication_history || 'No description available.'}</p>
            </div>
        </section>
    );
}
