import { useEffect, useState } from "react";

const Banner = () => {
    const [currentSlide, setCurrentSlide] = useState(1);
    const totalSlides = 3;

    useEffect(() => {
        const interval = setInterval(() => {
            setCurrentSlide((prevSlide) => (prevSlide % totalSlides) + 1);
        }, 5000);

        return () => clearInterval(interval);
    }, [totalSlides]);

    return (
        <div className="carousel w-full relative">
            {/* Slide 1 */}
            <div
                id="slide1"
                className={`carousel-item relative w-full h-[500px] ${
                    currentSlide === 1 ? "block" : "hidden"
                }`}
            >
                <img
                    src="https://i.ibb.co/61wJH0c/woman-6865977-1280.jpg"
                    alt="Cinematic Adventure"
                    className="w-full h-full object-cover"
                />
                <div className="absolute inset-0 flex items-center justify-center bg-black bg-opacity-60">
                    <h1 className="text-white text-4xl md:text-6xl font-bold text-center px-4">
                        Experience the Magic of{" "}
                        <span className="text-red-500">Cinematography</span>
                    </h1>
                </div>
            </div>

            {/* Slide 2 */}
            <div
                id="slide2"
                className={`carousel-item relative w-full h-[500px] ${
                    currentSlide === 2 ? "block" : "hidden"
                }`}
            >
                <img
                    src="https://i.ibb.co/fCjNddt/ai-generated-8748198-1280.jpg"
                    alt="Movie Thrill"
                    className="w-full h-full object-cover"
                />
                <div className="absolute inset-0 flex items-center justify-center bg-black bg-opacity-60">
                    <h1 className="text-white text-4xl md:text-6xl font-bold text-center px-4">
                        Unleash the Power of{" "}
                        <span className="text-yellow-400">Epic Storytelling</span>
                    </h1>
                </div>
            </div>

            {/* Slide 3 */}
            <div
                id="slide3"
                className={`carousel-item relative w-full h-[500px] ${
                    currentSlide === 3 ? "block" : "hidden"
                }`}
            >
                <img
                    src="https://i.ibb.co/kSSBM4N/ai-generated-8375142-1280.jpg"
                    alt="Hidden Gems"
                    className="w-full h-full object-cover"
                />
                <div className="absolute inset-0 flex items-center justify-center bg-black bg-opacity-60">
                    <h1 className="text-white text-4xl md:text-6xl font-bold text-center px-4">
                        Discover <span className="text-purple-400">Hidden Gems</span>{" "}
                        in Cinema
                    </h1>
                </div>
            </div>
        </div>
    );
};

export default Banner;
