import { useMoviesStore } from "../store/movies.store";

const FavoriteButton = ({ movie }) => {
  const favorites = useMoviesStore(state => state.favorites);
  const addFavorite = useMoviesStore(state => state.addFavorite);
  const removeFavorite = useMoviesStore(state => state.removeFavorite);

  const isFav = favorites.some((m) => m.id === movie.id);

  return (
    <button
      className="btn btn-sm btn-warning"
      onClick={() => {
        isFav ? removeFavorite(movie.id) : addFavorite(movie);
      }}
    >
      {isFav ? "★" : "☆"}
    </button>
  );
};

export default FavoriteButton;
