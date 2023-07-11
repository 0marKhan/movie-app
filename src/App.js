import { Route, Routes } from "react-router-dom";
import Navbar from "./components/Navbar";
import MovieDetails from "./pages/MovieDetails";
import { Provider } from "react-redux";

import Home from "./pages/Home";

function App() {
  return (
    <>
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/details" element={<MovieDetails />} />
      </Routes>
    </>
  );
}

export default App;
