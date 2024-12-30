
const Banner = () => {

    return (
        <div className="carousel w-full mt-10">
            <div id="slide1" className="carousel-item relative w-full">
                <img
                    src="https://i.ibb.co/61wJH0c/woman-6865977-1280.jpg"
                    className="w-full object-cover h-[500px]"
                    alt="Slide 1"
                />
                <div className="absolute inset-0 bg-black bg-opacity-50 flex items-center justify-center">
                    <h2 className="text-white text-4xl md:text-6xl font-bold text-center">
                        Dive Into the <span className="text-red-500">World of Movies</span>
                    </h2>
                </div>
                <div className="absolute left-5 right-5 top-1/2 flex -translate-y-1/2 transform justify-between">
                    <a href="#slide3" className="btn btn-circle">❮</a>
                    <a href="#slide2" className="btn btn-circle">❯</a>
                </div>
            </div>

            <div id="slide2" className="carousel-item relative w-full">
                <img
                    src="https://i.ibb.co/fCjNddt/ai-generated-8748198-1280.jpg"
                    className="w-full object-cover h-[500px]"
                    alt="Slide 2"
                />
                <div className="absolute inset-0 bg-black bg-opacity-50 flex items-center justify-center">
                    <h2 className="text-white text-4xl md:text-6xl font-bold text-center">
                        Explore the <span className="text-blue-500">Magic of Storytelling</span>
                    </h2>
                </div>
                <div className="absolute left-5 right-5 top-1/2 flex -translate-y-1/2 transform justify-between">
                    <a href="#slide1" className="btn btn-circle">❮</a>
                    <a href="#slide3" className="btn btn-circle">❯</a>
                </div>
            </div>

            <div id="slide3" className="carousel-item relative w-full">
                <img
                    src="https://i.ibb.co/kSSBM4N/ai-generated-8375142-1280.jpg"
                    className="w-full object-cover h-[500px]"
                    alt="Slide 3"
                />
                <div className="absolute inset-0 bg-black bg-opacity-50 flex items-center justify-center">
                    <h2 className="text-white text-4xl md:text-6xl font-bold text-center">
                        Relive the <span className="text-green-500">Golden Moments</span>
                    </h2>
                </div>
                <div className="absolute left-5 right-5 top-1/2 flex -translate-y-1/2 transform justify-between">
                    <a href="#slide2" className="btn btn-circle">❮</a>
                    <a href="#slide1" className="btn btn-circle">❯</a>
                </div>
            </div>
        </div>

    );
};

export default Banner;
