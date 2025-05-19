import { useEffect, useState } from "react";
import { TopRatedSection, CardsGrid } from "./TopRatedPageSCSS.jsx";
import { getTopRatedMovies } from "../../services/movies.service.js";
import NavbarComponent from "../../components/Navbar/Navbar.jsx";
import CardComponent from "../../components/Card/Card.jsx";

function TopRatedPage() {
  const [movies, setMovies] = useState([]);

  const fetchMovies = async () => {
    try {
      const data = await getTopRatedMovies();
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
      <TopRatedSection>
        <h1>TOP Rated Movies</h1>
        <CardsGrid>
          {movies.map((movie) => (
            <CardComponent key={movie.id} props={movie} />
          ))}
        </CardsGrid>
      </TopRatedSection>
    </>
  );
}

export default TopRatedPage;
