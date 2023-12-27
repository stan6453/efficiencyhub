import { useState, useEffect } from "react";
import Image from "next/image";

export default function ImageSlider({ images }: { images: string[] }) {
    const [activeImage, setActiveImage] = useState(0);
    const handleArrowClick = (direction: any) => {
        if (direction === 'left') {
            setActiveImage((prev) => (prev - 1 + images.length) % images.length);
        } else {
            setActiveImage((prev) => (prev + 1) % images.length);
        }
    };

    const handleThumbnailClick = (index: any) => {
        setActiveImage(index);
    };

    useEffect(() => {
        const handleKeyDown = (e: any) => {
            if (e.key === 'ArrowLeft') {
                handleArrowClick('left');
            } else if (e.key === 'ArrowRight') {
                handleArrowClick('right');
            }
        };

        window.addEventListener('keydown', handleKeyDown);

        return () => {
            window.removeEventListener('keydown', handleKeyDown);
        };
    }, []);

    return (
        <div className="flex flex-wrap">
            <div>
                <div className="relative mb-4">
                    <Image
                        src={images[activeImage]}
                        alt="Main product image"
                        className="w-full"
                        sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                        width={500}
                        height={500}
                    />
                    <button className="absolute left-0 top-1/2 transform -translate-y-1/2 text-white text-2xl" onClick={() => handleArrowClick('left')}>&lt;</button>
                    <button className="absolute right-0 top-1/2 transform -translate-y-1/2 text-white text-2xl" onClick={() => handleArrowClick('right')}>&gt;</button>
                </div>
                <div className="flex justify-between flex-wrap">
                    {images.map((img, index) => (
                        <Image
                            key={index}
                            src={img}
                            alt={`Thumbnail image ${index}`}
                            className={`w-1/4 cursor-pointer ${index === activeImage ? 'border-2 border-black' : ''}`}
                            onClick={() => handleThumbnailClick(index)}
                            width={500}
                            height={500}
                        />
                    ))}
                </div>
            </div>
            {/* Rest of the product details */}
        </div>
    );
}
