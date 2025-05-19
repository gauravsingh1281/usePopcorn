import { StrictMode, useState } from "react";
import { createRoot } from "react-dom/client";
// import './index.css'
// import App from './App.jsx'
import StarRating from "./components/StarRating";
function Test() {
  const [movieRated, setMovieRated] = useState(0);
  return (
    <div>
      <StarRating color={"blue"} maxRating={7} onSetRating={setMovieRated} />
      <p>Movie was rated {movieRated} star</p>
    </div>
  );
}

createRoot(document.getElementById("root")).render(
  <StrictMode>
    {/* <App /> */}
    <StarRating
      maxRating={5}
      messages={["Terrible", "Bad", "Okay", "Good", "Amazing"]}
    />
    <StarRating maxRating={10} size={34} color={"lime"} defaultRating={3} />
    <Test />
  </StrictMode>
);
