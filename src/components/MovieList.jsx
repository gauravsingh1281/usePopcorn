import { useState } from "react";
import { tempMovieData } from "../data/initialData";
import Movie from "./Movie";
export default function MovieList() {
  const [movies, setMovies] = useState(tempMovieData);
  return (
    <ul className="list">
      {movies?.map((movie) => (
        <Movie movie={movie} key={movie.imdbID} />
      ))}
    </ul>
  );
}
