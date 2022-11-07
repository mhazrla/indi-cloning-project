import MovieCard from "./MovieCard";

const Movies = [
    {
        title: "Sweet Tooth: El niño ciervo",
        date: "Dec 15, 2021",
        imageUrl:
            "https://www.themoviedb.org/t/p/w600_and_h900_bestv2/ujr5pztc1oitbe7ViMUOilFaJ7s.jpg",
        rating: 7.8,
        category: ["Action", "Adult", "Comedy"],
    },
    {
        title: "Sweet Tooth: El niño ciervo",
        date: "Dec 15, 2021",
        imageUrl:
            "https://www.themoviedb.org/t/p/w600_and_h900_bestv2/ujr5pztc1oitbe7ViMUOilFaJ7s.jpg",
        rating: 7.8,
        category: ["Action", "Adult", "Comedy"],
    },
    {
        title: "Sweet Tooth: El niño ciervo",
        date: "Dec 15, 2021",
        imageUrl:
            "https://www.themoviedb.org/t/p/w600_and_h900_bestv2/ujr5pztc1oitbe7ViMUOilFaJ7s.jpg",
        rating: 7.8,
        category: ["Action", "Adult", "Comedy"],
    },
    {
        title: "Sweet Tooth: El niño ciervo",
        date: "Dec 15, 2021",
        imageUrl:
            "https://www.themoviedb.org/t/p/w600_and_h900_bestv2/ujr5pztc1oitbe7ViMUOilFaJ7s.jpg",
        rating: 7.8,
        category: ["Action", "Adult", "Comedy"],
    },
    {
        title: "Sweet Tooth: El niño ciervo",
        date: "Dec 15, 2021",
        imageUrl:
            "https://www.themoviedb.org/t/p/w600_and_h900_bestv2/ujr5pztc1oitbe7ViMUOilFaJ7s.jpg",
        rating: 7.8,
        category: ["Action", "Adult", "Comedy"],
    },
    {
        title: "Sweet Tooth: El niño ciervo",
        date: "Dec 15, 2021",
        imageUrl:
            "https://www.themoviedb.org/t/p/w600_and_h900_bestv2/ujr5pztc1oitbe7ViMUOilFaJ7s.jpg",
        rating: 7.8,
        category: ["Action", "Adult", "Comedy"],
    },
    {
        title: "Sweet Tooth: El niño ciervo",
        date: "Dec 15, 2021",
        imageUrl:
            "https://www.themoviedb.org/t/p/w600_and_h900_bestv2/ujr5pztc1oitbe7ViMUOilFaJ7s.jpg",
        rating: 7.8,
        category: ["Action", "Adult", "Comedy"],
    },
];

const MovieList = () => {
    return (
        <div>
            {Movies.map((movie, i) => {
                return <MovieCard key={i} {...movie} />;
            })}
        </div>
    );
};

export default MovieList;
