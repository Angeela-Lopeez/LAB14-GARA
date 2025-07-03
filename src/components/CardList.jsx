import FavoriteButton from "./FavoriteButton";

const CardList = ({ data }) => {
  return (
    <div className="row row-cols-1 row-cols-sm-2 row-cols-md-3 g-3">
      {data.map((item) => {
        const { id, title, rating, poster } = item;

        return (
          <div key={id} className="col">
            <div className="card shadow-sm h-100">
              <img
                src={poster}
                className="card-img-top"
                alt="Poster"
              />
              <div className="card-body d-flex flex-column">
                <div className="d-flex justify-content-between align-items-center mb-2">
                  <h5 className="card-title mb-0">{title}</h5>
                  <FavoriteButton movie={item} />
                </div>

                <div className="mt-auto">
                  <div className="d-flex justify-content-between">
                    <button
                      type="button"
                      className="btn btn-sm btn-outline-secondary"
                      disabled
                    >
                      View
                    </button>
                    <button
                      type="button"
                      className="btn btn-sm btn-outline-secondary"
                    >
                      Edit
                    </button>
                  </div>
                  <small className="text-body-secondary mt-2 d-block">
                    Rating: {rating}
                  </small>
                </div>
              </div>
            </div>
          </div>
        );
      })}
    </div>
  );
};

export default CardList;
