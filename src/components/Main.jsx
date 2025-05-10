import MovieListContainer from "./MovieListContainer";
import WatchedMovieListContainer from "./WatchedMovieListContainer";

export default function Main({ movies }) {
  return (
    <main className="main">
      <MovieListContainer movies={movies} />
      <WatchedMovieListContainer />
    </main>
  );
}
