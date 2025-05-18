import Navbar from "./components/Navbar";
import Main from "./components/Main";
import Search from "./components/Search";
import NumResults from "./components/NumResults";
import MovieListContainer from "./components/MovieListContainer";
import MovieList from "./components/MovieList";
import MovieSummary from "./components/MovieSummary";
import WatchedMovieList from "./components/WatchedMovieList";
import { tempMovieData, tempWatchedData } from "./data/initialData";
import { useState } from "react";

export default function App() {
  const [movies, setMovies] = useState(tempMovieData);
  const [watched, setWatched] = useState(tempWatchedData);
  return (
    <>
      <Navbar>
        <Search />
        <NumResults movies={movies} />
      </Navbar>
      <Main>
        <MovieListContainer>
          <MovieList movies={movies} />
        </MovieListContainer>
        <MovieListContainer>
          <MovieSummary watched={watched} />
          <WatchedMovieList watched={watched} />
        </MovieListContainer>
      </Main>
    </>
  );
}
