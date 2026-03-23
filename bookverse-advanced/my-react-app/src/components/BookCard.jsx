import React from "react";
import PropTypes from "prop-types";

function BookCard({ book, onClick }) {
  return (
    <div className="col-md-4 mb-3">
      <div className="card p-3 shadow" onClick={onClick}>
        <h5>{book.title}</h5>
        <p>Author: {book.author}</p>
      </div>
    </div>
  );
}

BookCard.propTypes = {
  book: PropTypes.object.isRequired,
  onClick: PropTypes.func.isRequired,
};

export default BookCard;