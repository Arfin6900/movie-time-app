import React from 'react'
import { Link } from 'react-router-dom'

const Card = ({ movie }) => {
    return (
        <div className="bg-white rounded-lg shadow-lg overflow-hidden m-4 transform transition duration-500 hover:scale-105">
            <img 
                className="w-full h-64 object-cover"
                src={movie.poster !== 'N/A' ? movie.poster : 'http://via.placeholder.com/800'} 
                alt={movie.title} 
            />
            <div className="p-6 movie">
                <h3 className="text-2xl font-extrabold text-gray-900 mb-2">{movie.title}</h3>
                <p className="text-sm font-semibold text-blue-600">Genre: <span className="font-normal text-gray-800">{movie.genre}</span></p>
                <p className="text-sm font-semibold text-blue-600">Rating: <span className="font-normal text-gray-800">{movie.rating} ({movie.rated})</span></p>
                <p className="text-sm font-semibold text-blue-600">Duration: <span className="font-normal text-gray-800">{movie.duration}</span></p>
                <p className="text-sm font-semibold text-blue-600">Language: <span className="font-normal text-gray-800">{movie.language}</span></p>
                <p className="text-sm font-semibold text-blue-600">Country: <span className="font-normal text-gray-800">{movie.country}</span></p>
                <p className="text-sm font-semibold text-blue-600">Print: <span className="font-normal text-gray-800">{movie.print}</span></p>
                <p className="text-sm font-semibold text-blue-600 mt-4">Description: <span className="font-normal text-gray-800">{movie.description}</span></p>
                <p className="text-sm font-semibold text-blue-600 mt-4">Actors: <span className="font-normal text-gray-800">{movie.actors}</span></p>
                <p className="text-sm font-semibold text-blue-600 mt-4">Director: <span className="font-normal text-gray-800">{movie.directors}</span></p>
                <p className="text-sm font-semibold text-blue-600 mt-4">Writer: <span className="font-normal text-gray-800">{movie.writer}</span></p>
                <p className="text-sm font-semibold text-blue-600 mt-4">Views: <span className="font-normal text-gray-800">{movie.views}</span> | Downloads: <span className="font-normal text-gray-800">{movie.downloads}</span></p>
                
                <p className="text-sm font-semibold text-blue-600 mt-4">Mirrors:</p>
                <ul className="list-disc pl-5">
                    {movie.mirrors.map((mirror) => (
                        <li key={mirror.id}>
                            <Link
                                to={`/movie/${movie.id}`}
                                className="text-blue-500 hover:text-blue-700"
                            >
                                Watch Now
                            </Link>
                        </li>
                    ))}
                </ul>
                
                <a 
                    className="inline-block mt-4 text-blue-500 font-semibold hover:text-blue-700"
                    href={movie.trailer} 
                    target="_blank" 
                    rel="noopener noreferrer"
                >
                    Watch Trailer
                </a>
            </div>
        </div>
    )
}

export default Card
