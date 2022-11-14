import { useEffect, useState } from "react";
import MovieCard from "./MovieCard";
import tmdb from "@/src/tmdb";
import Paginator from "../Paginator";

const MovieList = () => {
    const [movies, setMovies] = useState([]);

    useEffect(() => {
        axios
            .get(
                `https://api.themoviedb.org/3/movie/popular?api_key=3d67255a70d3ee3aba3a260b9addd183&language=en-US&page=1`
            )
            .then((res) => {
                setMovies(res.data.results);
                console.log(movies);
            })
            .catch((err) => {
                console.log(err);
            });

        // const fetchMovies = async () => {
        //     const { data } = await tmdb.get("movie/popular");
        //     setMovies(data.results);
        // };
        // fetchMovies();
    }, []);

    return (
        <>
                <Paginator />
            <div className="md:grid md:grid-cols-2 lg:grid-cols-5 auto-rows-max md:gap-1 bg-gray-100">
                {movies.map((movie, i) => {
                    return <MovieCard key={i} {...movie} />;
                })}
            </div>
            <Paginator />
        </>
    );
};

export default MovieList;
