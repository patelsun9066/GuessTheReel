
function MovieTile(randomMovies) {
    return (
        <div className="blur-sm hover:blur-none transition duration-350 ease-in-out">
            <img src={`https://image.tmdb.org/t/p/w300/${randomMovies.randomMovies.moviePoster}`}/>
        </div>
    )
};

export default MovieTile;