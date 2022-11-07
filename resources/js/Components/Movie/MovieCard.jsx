const MovieCard = ({ imageUrl, title, date, category, rating }) => {
    return (
        <div className="px-10 grid grid-cols-1 bg-gray-100 sm:grid-cols-1 md:grid-cols-5 lg:grid-cols-5 xl:grid-cols-5 gap-5">
            <div className="rounded overflow-hidden shadow-lg bg-red-500">
                <img className="w-full" src={imageUrl} alt={title} />
                <div className="px-6 py-4">
                    <div className="flex justify-between items-start">
                        <h2 className="text-xl font-bold text-white">
                            {title}
                        </h2>
                        <div className="bg-white text-red-600  font-bold rounded-xl p-1 ">
                            {rating}
                        </div>
                    </div>
                    <div className="mt-2">
                        <div className="text-sm text-gray-200">Year</div>
                        <div className="text-lg text-white">{date}</div>
                    </div>
                </div>
                <div className="px-6 pb-4">
                    <span className="inline-block bg-gray-200 rounded-full px-3 py-1 text-sm font-semibold text-gray-700 mr-2 mb-2">
                        {category}
                    </span>
                    <span className="inline-block bg-gray-200 rounded-full px-3 py-1 text-sm font-semibold text-gray-700 mr-2 mb-2">
                        {category}
                    </span>
                    <span className="inline-block bg-gray-200 rounded-full px-3 py-1 text-sm font-semibold text-gray-700 mr-2 mb-2">
                        {category}
                    </span>
                </div>
            </div>
        </div>
    );
};

export default MovieCard;
