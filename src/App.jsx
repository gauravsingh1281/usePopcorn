import Navbar from "./components/Navbar";
import Main from "./components/Main";
import Search from "./components/Search";
import NumResults from "./components/NumResults";
import MovieListContainer from "./components/MovieListContainer";
import WatchedMovieListContainer from "./components/WatchedMovieListContainer";
import MovieList from "./components/MovieList";
import { tempMovieData } from "./data/initialData";
import { useState } from "react";

export default function App() {
  const [movies, setMovies] = useState(tempMovieData);
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
        <WatchedMovieListContainer />
      </Main>
    </>
  );
}
