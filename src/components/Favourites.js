import React from "react";
import { useBook } from "../contexts/BookContext";
import { Link } from "react-router-dom";
function Favourites() {
  const { favourites, deleteFavourites } = useBook();
  
  const truncateOverview = (text, max) => {
    if (!text) return null;
    if (text.length <= max) return text;
    if (text.length > max) {
      return `${text.substring(0, max)}...`;
    }
  };

  return (
    <div className="container">
      <div className="row books">
        {favourites.length > 0 ? (
          favourites.map((book) => (
            <div className="col-lg-4 col-md-6 col-sm-12" key={book.id}>
              <div className="card">
                <img
                  src={book.image_url}
                  className="card-image card-img-top"
                  alt=""
                />

                <div className="card-body">
                  <div className="card-title">{book.title}</div>
                  <div className="card-author">
                    <small>by {book.authors}</small>
                  </div>
                  <div className="card-text text-muted">
                    {truncateOverview(book.description, 150)}
                  </div>
                </div>
                <div className="card-footer d-flex justify-content-between align-items-center">
                  <div>
                    <Link
                      to={`/book/${book.id}`}
                      type="button"
                      className="btn btn_details"
                    >
                      See Details
                    </Link>
                  </div>
                  <button
                    type="button"
                    className="btn text-muted"
                    onClick={() => deleteFavourites(book)}
                  >
                    Remove from favorites
                    <i className="fav fa-solid fa-star fa-lg"></i>
                  </button>
                </div>
              </div>
            </div>
          ))
        ) : (
          <div className="alert">UNFORTUNATELY, THERE IS NO FAVOURITE BOOK</div>
        )}
      </div>
    </div>
  );
}

export default Favourites;
