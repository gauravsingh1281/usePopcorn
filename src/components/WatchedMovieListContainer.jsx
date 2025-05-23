import { useState } from "react";
import { tempWatchedData } from "../data/initialData";
import MovieSummary from "./MovieSummary";
import WatchedMovieList from "./WatchedMovieList";
export default function WatchedMovieListContainer() {
  const [isOpen2, setIsOpen2] = useState(true);

  return (
    <div className="box">
      <button
        className="btn-toggle"
        onClick={() => setIsOpen2((open) => !open)}
      >
        {isOpen2 ? "–" : "+"}
      </button>
      {isOpen2 && <></>}
    </div>
  );
}
