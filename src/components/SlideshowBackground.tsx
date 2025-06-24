import { useEffect, useState } from 'react';

const images = [
    '/assets/images/gallery/h1.jpg',
    '/assets/images/gallery/h2.jpg',
    '/assets/images/gallery/h3.jpg',
];

const SlideshowBackground = () => {
    const [index, setIndex] = useState(0);

    useEffect(() => {
        const interval = setInterval(() => {
            setIndex((prev) => (prev + 1) % images.length);
        }, 4000);
        return () => clearInterval(interval);
    }, []);

    return (
        <div className="absolute inset-0 w-full h-full z-0 pointer-events-none">
            {images.map((img, i) => (
                <img
                    key={img}
                    src={img}
                    alt="Slideshow background"
                    className={`w-full h-full object-cover absolute inset-0 transition-opacity duration-1000 ${i === index ? 'opacity-100' : 'opacity-0'}`}
                    draggable={false}
                />
            ))}
            {/* Overlay for readability */}
            <div className="absolute inset-0 bg-black/40"></div>
        </div>
    );
};

export default SlideshowBackground; 