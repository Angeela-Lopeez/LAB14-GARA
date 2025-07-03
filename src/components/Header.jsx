import { useState, useEffect } from "react";
import { useMoviesStore } from "../store/movies.store";
import { Link } from "react-router-dom";
import { adaptTmdbToMovie } from "../utils/movies.util";

const Header = () => {
  const [term, setTerm] = useState("");
  const getMovies = useMoviesStore((state) => state.getMovies);

  useEffect(() => {
    const timeout = setTimeout(() => {
      if (term.length > 0) {
        fetch(`https://api.themoviedb.org/3/search/movie?query=${term}&api_key=${import.meta.env.VITE_API_TOKEN}`)
          .then(res => res.json())
          .then((data) => {
            useMoviesStore.getState().setMovies(
              data.results.map(adaptTmdbToMovie)
            );
          });
      } else {
        getMovies();
      }
    }, 500);

    return () => clearTimeout(timeout);
  }, [term]);

  return (
    <header>
      <nav className="navbar navbar-expand-lg bg-body-tertiary">
        <div className="container">
          <a className="navbar-brand" href="#">The Movies</a>

          <button
            className="navbar-toggler"
            type="button"
            data-bs-toggle="collapse"
            data-bs-target="#navbarSupportedContent"
          >
            <span className="navbar-toggler-icon"></span>
          </button>

          <div className="collapse navbar-collapse" id="navbarSupportedContent">
            <form className="d-flex me-auto" role="search">
              <input
                className="form-control me-2"
                type="search"
                placeholder="Buscar película..."
                aria-label="Search"
                value={term}
                onChange={(e) => setTerm(e.target.value)}
              />
            </form>
            <ul className="navbar-nav ms-auto mb-2 mb-lg-0">
              <li className="nav-item">
                <Link className="nav-link" to="/favorites">Favoritos</Link>
              </li>
            </ul>
          </div>
        </div>
      </nav>
    </header>
  );
};

export default Header;
