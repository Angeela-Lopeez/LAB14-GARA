import { useEffect } from "react";
import CardList from "../components/CardList";
import { useMoviesStore } from "../store/movies.store";

const Home = () => {
  const movies = useMoviesStore((state) => state.movies);
  const getMovies = useMoviesStore((state) => state.getMovies);

  useEffect(() => {
  getMovies();
  useMoviesStore.getState().loadFavorites();
}, [getMovies]);


  return (
    <section>
      <div className="container">
        <h2>Las peores películas de la historia</h2>
        <CardList data={movies} />
      </div>
    </section>
  );
}

export default Home;