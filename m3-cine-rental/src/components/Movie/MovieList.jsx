import { getAllMovies } from '../../data/movies';
import MovieCard from './MovieCard';

const MovieList = () => {
  const movies = getAllMovies();

  return (
    <div className="content">
      <div className="grid gap-7 sm:grid-cols-2 xl:grid-cols-3">
        {movies.map((movie) => (
          <MovieCard key={movie.id} movie={movie} />
        ))}
      </div>
    </div>
  );
};

export default MovieList;
