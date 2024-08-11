import React, { useEffect, useState } from "react"
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom'
import "./index.css"
import Card from "./Card"
import VideoPlayer from "./Components/VideoPlayer"
import SearchIcon from "./search.svg"
import Loader from './Loader'

const API_URL = "http://192.168.83.212/api/v1/movies?includes=categories,mirrors&order_by=adate,desc|id,desc"

const App = () => {
    const [searchTitle, setSearchTitle] = useState("")
    const [movies, setMovies] = useState([])
    const [loading, setLoading] = useState(false)

    const searchMovies = (e) => {
        let searchValue = e.target.value
        setSearchTitle(searchValue)
    }

    const getMovies = async (title) => {
        let response = await fetch(`${API_URL}&title=*${title}*&limit=250`)
        let data = await response.json()
        console.log("🚀 ~ getMovies ~ data:", data)
        setMovies(data.data)
        setLoading(true)
    }

    const movieSearch = () => {
        setLoading(false)
        getMovies(searchTitle)
    }

    useEffect(() => {
        getMovies('spy')
    }, []);

    return (
        <Router>
            <div className="app  min-h-screen flex flex-col items-center">
                <h1 className="text-4xl font-bold text-gray-800 mt-8">Movie Land</h1>
                <div className="search flex items-center mt-6">
                    <input
                        className="p-3 w-80 text-gray-800 border border-gray-300 rounded-l-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
                        placeholder="What are you searching for?"
                        value={searchTitle}
                        onChange={searchMovies}
                    />
                    <img
                        src={SearchIcon}
                        alt="search"
                        className="cursor-pointer p-3 bg-blue-500 rounded-r-lg hover:bg-blue-700"
                        onClick={movieSearch}
                    />
                </div>
                <Routes>
                    <Route 
                        path="/" 
                        element={
                            <div className="container mt-10 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                                {loading ?
                                    movies?.length > 0 ?
                                        movies.map((movie) => (
                                            <Card movie={movie} key={movie?.id} />
                                        ))
                                        :
                                        <div className="empty text-center">
                                            <h2 className="text-2xl text-gray-600">The movie does not exist</h2>
                                        </div>
                                    :
                                    <Loader />
                                }
                            </div>
                        }
                    />
                    <Route path="/movie/:id" element={<VideoPlayer movies={movies} />} />
                </Routes>
            </div>
        </Router>
    );
}

export default App;
