'use client';

import { useState, useEffect } from 'react';
import Link from 'next/link';
import { Artwork } from '../types/art';
import { fetchArtworks } from '../utils/api';
import Image from 'next/image';

export default function GalleryPage() {
    const [artworks, setArtworks] = useState<Artwork[]>([]);
    const [loading, setLoading] = useState<boolean>(true);
    const [error, setError] = useState<string | null>(null);

    useEffect(() => {
        const loadArtworks = async () => {
            try {
                const { data } = await fetchArtworks<Artwork[]>('/artworks');
                setArtworks(data);
            } catch (err) {
                console.log(err)
                setError('Failed to load artworks');
            } finally {
                setLoading(false);
            }
        };

        loadArtworks();
    }, []);

    if (loading) {
        return <div className="h-screen flex items-center justify-center">Loading...</div>;
    }

    if (error) {
        return <div className="h-screen flex items-center justify-center">{error}</div>;
    }

    return (
        <section className="h-screen overflow-x-auto whitespace-nowrap px-4">
            {artworks.map((artwork) => (
                <Link
                    key={artwork.id}
                    href={`/art/${artwork.id}`}
                    className="inline-block mx-2"
                >
                    <div className="w-64 h-80 bg-gray-200 flex items-center justify-center">
                        <Image
                            src={`https://www.artic.edu/iiif/2/${artwork.image_id}/full/300,/0/default.jpg`}
                            alt={artwork.title}
                            className="object-cover rounded"
                            width={300}
                            height={200}
                            sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                            priority={artworks.indexOf(artwork) === 0}
                        />
                    </div>
                    <p className="mt-2 text-center">{artwork.title}</p>
                </Link>
            ))}
        </section>
    );
}
