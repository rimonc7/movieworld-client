import { useState } from "react";

const FavMovies = ({ favMovie }) => {
    const { movie } = favMovie;
    const [updateMovies, setUpdateMovies] = useState(movie)
    const { poster, title, rating, genre, duration, releaseYear, summary } =updateMovies;

    const handleDelete = _id => {
        fetch(`http://localhost:5000/favoriteMovies/${_id}`,{
            method:"DELETE"
        })
        .then(res=>res.json())
        .then(data=>{
            console.log(data)
            
        })
    }

    return (
        <div className="mb-10">
            <div className="max-w-sm bg-white shadow-lg rounded-lg overflow-hidden flex flex-col h-full">
                <img
                    className="w-full h-64 object-cover"
                    src={poster}
                    alt={title}
                />
                <div className="p-5 flex flex-col flex-grow">
                    <h2 className="text-2xl font-bold mb-2">{title}</h2>
                    <div className="flex items-center gap-2 mb-2">
                        <span className="text-lg font-semibold">{rating}</span>
                    </div>
                    <div className="mb-2">
                        {genre.map((singleGenre, idx) => (
                            <span key={idx} className="inline-block bg-blue-500 text-white py-1 px-3 rounded-full text-sm font-semibold mr-2 mb-2">
                                {singleGenre}
                            </span>
                        ))}
                    </div>
                    <p className="text-sm text-gray-600 mb-2">
                        <span className="font-bold">Release Year: </span>{releaseYear}
                    </p>

                    <p className="text-sm text-gray-600 mb-2">
                        <span className="font-bold">Duration: </span>{duration} mins
                    </p>
                    <p className="text-sm text-gray-700 line-clamp-3 mb-4 flex-grow">
                        {summary}
                    </p>
                </div>
                <div className="flex-shrink-0 mt-auto">
                    <button
                        onClick={() => handleDelete(favMovie._id)}
                        className="w-full bg-blue-500 hover:bg-blue-600 text-white py-2 px-4 rounded"
                    >
                        Delete From Favorite
                    </button>
                </div>
            </div>
        </div>
    );
};

export default FavMovies;
