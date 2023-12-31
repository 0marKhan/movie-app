import { Route, Routes } from "react-router-dom";
import Navbar from "./components/Navbar";
import MovieDetails from "./pages/MovieDetails";

import Home from "./pages/Home";
import MoviesPage from "./pages/MoviesPage";

function App() {
  return (
    <>
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/details" element={<MovieDetails />} />
        <Route path="/movie-page" element={<MoviesPage />} />
      </Routes>
    </>
  );
}

export default App;
