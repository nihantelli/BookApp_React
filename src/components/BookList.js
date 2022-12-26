import React from "react";
import Book from "./Book";
function BookList() {
  return (
    <div className="container">
      <h1 className="main-title text-center py-5">Book List</h1>
      <div className="row books">
        <Book />
      </div>
    </div>
  );
}

export default BookList;
