import React from 'react'
import { useParams } from 'react-router-dom'

const VideoPlayer = ({ movies }) => {
    const { id } = useParams()
    const movie = movies.find(movie => movie.id === parseInt(id))

    if (!movie) {
        return <h2 className="text-center text-gray-700 mt-10">Movie not found</h2>
    }

    return (
        <div className="flex flex-col items-center justify-center min-h-screen bg-gray-100">
            <h1 className="text-3xl font-bold text-gray-800 mb-6">{movie.title}</h1>
            <video
                className="w-screen h-[60vh] max-w-3xl bg-black"
                controls
                src={movie.mirrors[0]?.url}
            />
        </div>
    )
}

export default VideoPlayer
