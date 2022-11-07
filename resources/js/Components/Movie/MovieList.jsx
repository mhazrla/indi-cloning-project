import axios from "axios";
import { useEffect, useState } from "react";
import MovieCard from "./MovieCard";
import tmdb from "@/src/tmdb";

// const Movies = [
//     {
//         title: "Sweet Tooth: El niño ciervo",
//         date: "Dec 15, 2021",
//         imageUrl:
//             "https://www.themoviedb.org/t/p/w600_and_h900_bestv2/ujr5pztc1oitbe7ViMUOilFaJ7s.jpg",
//         rating: 7.8,
//         category: ["Action", "Adult", "Comedy"],
//     },
//     {
//         title: "Sweet Tooth: El niño ciervo",
//         date: "Dec 15, 2021",
//         imageUrl:
//             "https://www.themoviedb.org/t/p/w600_and_h900_bestv2/ujr5pztc1oitbe7ViMUOilFaJ7s.jpg",
//         rating: 7.8,
//         category: ["Action", "Adult", "Comedy"],
//     },
//     {
//         title: "Sweet Tooth: El niño ciervo",
//         date: "Dec 15, 2021",
//         imageUrl:
//             "https://www.themoviedb.org/t/p/w600_and_h900_bestv2/ujr5pztc1oitbe7ViMUOilFaJ7s.jpg",
//         rating: 7.8,
//         category: ["Action", "Adult", "Comedy"],
//     },
//     {
//         title: "Sweet Tooth: El niño ciervo",
//         date: "Dec 15, 2021",
//         imageUrl:
//             "https://www.themoviedb.org/t/p/w600_and_h900_bestv2/ujr5pztc1oitbe7ViMUOilFaJ7s.jpg",
//         rating: 7.8,
//         category: ["Action", "Adult", "Comedy"],
//     },
//     {
//         title: "Sweet Tooth: El niño ciervo",
//         date: "Dec 15, 2021",
//         imageUrl:
//             "https://www.themoviedb.org/t/p/w600_and_h900_bestv2/ujr5pztc1oitbe7ViMUOilFaJ7s.jpg",
//         rating: 7.8,
//         category: ["Action", "Adult", "Comedy"],
//     },
//     {
//         title: "Sweet Tooth: El niño ciervo",
//         date: "Dec 15, 2021",
//         imageUrl:
//             "https://www.themoviedb.org/t/p/w600_and_h900_bestv2/ujr5pztc1oitbe7ViMUOilFaJ7s.jpg",
//         rating: 7.8,
//         category: ["Action", "Adult", "Comedy"],
//     },
//     {
//         title: "Sweet Tooth: El niño ciervo",
//         date: "Dec 15, 2021",
//         imageUrl:
//             "https://www.themoviedb.org/t/p/w600_and_h900_bestv2/ujr5pztc1oitbe7ViMUOilFaJ7s.jpg",
//         rating: 7.8,
//         category: ["Action", "Adult", "Comedy"],
//     },
// ];

const MovieList = () => {
    const [movies, setMovies] = useState([]);
    useEffect(() => {
        const fetchMovies = async () => {
            const { data } = await tmdb.get("movie/popular");
            setMovies(data.results);
        };

        fetchMovies();
    }, []);

    return (
        <div className="md:grid md:grid-cols-2 lg:grid-cols-5 auto-rows-max md:gap-1 bg-gray-100">
            {movies.map((movie, i) => {
                return <MovieCard key={i} {...movie} />;
            })}
        </div>
    );
};

export default MovieList;
