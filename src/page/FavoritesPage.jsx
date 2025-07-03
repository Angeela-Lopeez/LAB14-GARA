import { useMoviesStore } from "../store/movies.store";
import CardList from "../components/CardList";

const FavoritesPage = () => {
  const favorites = useMoviesStore((state) => state.favorites);

  return (
    <div className="container py-4">
      <h2>Mis Favoritos</h2>
      {favorites.length === 0 ? (
        <p>No tienes películas favoritas aún.</p>
      ) : (
        <CardList data={favorites} />
      )}
    </div>
  );
};

export default FavoritesPage;
