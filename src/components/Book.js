import React, { useState, useEffect } from "react";
import axios from "axios";
import { Link } from "react-router-dom";
import { useBook } from "../contexts/BookContext";
import { Alert } from "react-bootstrap";
function Book() {
  const { addFavourites, deleteFavourites, favourites, show, setShow } =
    useBook();
  const [books, setBooks] = useState([]);

  useEffect(() => {
    axios
      .get("https://example-data.draftbit.com/books")
      .then((res) => setBooks(res.data))
      .catch((err) => console.log(err));
  }, [books]);

  const truncateOverview = (text, max) => {
    if (!text) return null;
    if (text.length <= max) return text;
    if (text.length > max) {
      return `${text.substring(0, max)}...`;
    }
  };
  const favouriteControl = (id) => {
    return favourites.some((fav) => fav.id === id);
  };

  return (
    <>
      <Alert show={show} variant="success" className="alert_fav">
        THE BOOK ADDED TO FAVOURITES LIST
      </Alert>
      {books.map((book) => (
        <div className="col-lg-3 col-md-6 col-sm-12" key={book.id}>
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
              {favouriteControl(book.id) ? (
                <button
                  type="button"
                  className="btn text-muted"
                  onClick={() => deleteFavourites(book)}
                >
                  <i className="fav fa-solid fa-star fa-lg"></i>
                </button>
              ) : (
                <button
                  type="button"
                  className="btn text-muted"
                  onClick={() => addFavourites(book)}
                >
                  <i className="fav-no fa-solid fa-star fa-lg"></i>
                </button>
              )}
            </div>
          </div>
        </div>
      ))}
    </>
  );
}

export default Book;
