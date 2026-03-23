import React from "react";

const BookCard = ({ book, view }) => {
  return (
    <div
      style={{
        border: "1px solid #ccc",
        padding: "10px",
        margin: "10px",
        width: view === "grid" ? "200px" : "100%",
        display: view === "grid" ? "inline-block" : "block",
      }}
    >
      <h3>{book.title}</h3>
      <p><b>Author:</b> {book.author}</p>
      <p><b>Price:</b> ₹{book.price}</p>
    </div>
  );
};

export default BookCard;