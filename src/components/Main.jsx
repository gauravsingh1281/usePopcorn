import MovieListContainer from "./MovieListContainer";
import WatchedMovieListContainer from "./WatchedMovieListContainer";

export default function Main() {
  return (
    <main className="main">
      <MovieListContainer />
      <WatchedMovieListContainer />
    </main>
  );
}
