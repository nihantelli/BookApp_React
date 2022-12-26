import React, { useEffect, useState } from "react";
import axios from "axios";
import { useParams } from "react-router-dom";
function BookDetails() {
  const { id } = useParams();
  const [book, setBook] = useState([]);
  useEffect(() => {
    axios
      .get(`https://example-data.draftbit.com/books/${id}`)
      .then((res) => setBook(res.data))
      .catch((err) => console.log(err));
  }, [id]);
  return (
    <div className="container detail_page">
      <div className="detail_header text-center p-5">
        <h1 className="detail_title">{book.title}</h1>

        <img className="detail_image p-3" src={book.image_url} alt="" />
      </div>
      <div className="detail_body text-center p-3">
        <div className="detail_sub_title">AUTHOR:</div>
        <div className="py-2">{book.authors}</div>

        <div className="detail_sub_title">GENRES: </div>
        <div className="py-2"> {book.genres}</div>

        <div className="detail_sub_title">RATING: </div>
        <div className="py-2"> {book.rating}</div>

        <div className="detail_sub_title">SUMMARY: </div>
        <div className="py-2">{book.description}</div>
      </div>
    </div>
  );
}

export default BookDetails;
