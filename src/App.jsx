import { BrowserRouter, Route, Routes } from "react-router-dom";

import Homepage from "./pages/Homepage/Homepage.jsx";
import TopRatedPage from "./pages/TopRatedPage/TopRatedPage.jsx";
import RatingMoviePage from "./pages/RatingMoviesPage/RatingMoviesPage.jsx";

function App() {
  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Homepage />} />
          <Route path="/top" element={<TopRatedPage />} />
          <Route path="/rating" element={<RatingMoviePage />} />
        </Routes>
      </BrowserRouter>
    </>
  );
}

export default App;
