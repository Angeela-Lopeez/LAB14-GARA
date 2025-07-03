import { create } from "zustand";
import { getMovies } from "../services/movies.service";
import { adaptTmdbToMovie } from "../utils/movies.util";

export const useMoviesStore = create((set) => ({
  movies: [],
  favorites: [],
  getMovies: async () => {
    const movies = await getMovies();
    set({ movies: movies.map(adaptTmdbToMovie) });
  },
  setMovies: (movies) => set({ movies }),
  addFavorite: (movie) =>
    set((state) => {
      const updated = [...state.favorites, movie];
      localStorage.setItem("favorites", JSON.stringify(updated));
      return { favorites: updated };
    }),
  removeFavorite: (id) =>
    set((state) => {
      const updated = state.favorites.filter((m) => m.id !== id);
      localStorage.setItem("favorites", JSON.stringify(updated));
      return { favorites: updated };
    }),
  loadFavorites: () => {
    const favs = JSON.parse(localStorage.getItem("favorites")) || [];
    set({ favorites: favs });
  },
}));
