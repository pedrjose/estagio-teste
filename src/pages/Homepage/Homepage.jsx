import { useEffect, useState } from "react";
import { HomepageSection, CardsGrid } from "./HomepageSCSS.jsx";
import { getNowPlayingMovies } from "../../services/movies.service.js";
import NavbarComponent from "../../components/Navbar/Navbar.jsx";
import CardComponent from "../../components/Card/Card.jsx";

function Homepage() {
  const [movies, setMovies] = useState([]);

  const fetchMovies = async () => {
    try {
      const data = await getNowPlayingMovies();
      setMovies(data);
    } catch (error) {
      console.error("Erro ao buscar filmes:", error);
    }
  };

  useEffect(() => {
    fetchMovies();
  }, []);

  return (
    <>
      <NavbarComponent />
      <HomepageSection>
        <h1>NOW Playing Movies</h1>
        <CardsGrid>
          {movies.map((movie) => (
            <CardComponent key={movie.id} props={movie} />
          ))}
        </CardsGrid>
      </HomepageSection>
    </>
  );
}

export default Homepage;
