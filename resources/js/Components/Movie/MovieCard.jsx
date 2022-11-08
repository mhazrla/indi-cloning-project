import Paginator from "../Paginator";

const getPosterPath = (poster_path) => {
    return `https://www.themoviedb.org/t/p/w220_and_h330_face/${poster_path}`;
};

const MovieCard = ({
    poster_path,
    title,
    release_date,
    genre_ids,
    vote_average,
}) => {
    return (
        <>
            <a
                className="block mx-2 mb-6 p-3 rounded-lg border border-gray-200 bg-white shadow-md hover:bg-red-600 hover:text-gray-100 text-gray-600"
                href="/docs/getting-started/introduction/"
            >
                <div className="relative mb-6">
                    <div className="flex justify-center items-center mb-4 rounded-full bg-primary-100 ">
                        <img
                            className="w-full"
                            src={getPosterPath(poster_path)}
                            alt={title}
                        />
                    </div>
                </div>
                <div className="flex justify-between items-start">
                    <h2 className="mb-2 text-xl font-bold tracking-tight ">
                        {title}
                    </h2>
                    <div className="bg-white text-red-600 font-bold rounded-xl p-2 outline outline-gray-200">
                        {vote_average}
                    </div>
                </div>

                <p className="mb-3  font-normal ">{release_date}</p>

                <div className="relative">
                    {genre_ids.map((value, i) => {
                        return (
                            <span
                                key={i}
                                className="inline-block bg-gray-200 rounded-full px-3 py-1 text-sm font-semibold text-gray-700 mr-2 mb-2"
                            >
                                {value}
                            </span>
                        );
                    })}
                </div>
            </a>
        </>
    );
};

export default MovieCard;
