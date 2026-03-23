import React, { useState } from "react";
import BookCard from "./BookCard";

const BookList = () => {
  const [view, setView] = useState("grid");
  const [search, setSearch] = useState("");

  const books = [
    { id: 1, title: "Harry Potter", author: "J.K Rowling", price: 500 },
    { id: 2, title: "The Alchemist", author: "Paulo Coelho", price: 300 },
    { id: 3, title: "Rich Dad Poor Dad", author: "Robert Kiyosaki", price: 400 },
    { id: 4, title: "Wings of Fire", author: "A.P.J Abdul Kalam", price: 350 },
  ];

  // Filter books
  const filteredBooks = books.filter((book) =>
    book.title.toLowerCase().includes(search.toLowerCase())
  );

  return (
    <div style={{ textAlign: "center" }}>
      <h1>📚 BookVerse</h1>

      {/* Search Box */}
      <input
        type="text"
        placeholder="Search books..."
        value={search}
        onChange={(e) => setSearch(e.target.value)}
        style={{ padding: "8px", width: "200px" }}
      />

      <br /><br />

      {/* Toggle Buttons */}
      <button onClick={() => setView("grid")}>Grid View</button>
      <button onClick={() => setView("list")} style={{ marginLeft: "10px" }}>
        List View
      </button>

      {/* Book List */}
      <div style={{ marginTop: "20px" }}>
        {filteredBooks.map((book) => (
          <BookCard key={book.id} book={book} view={view} />
        ))}
      </div>
    </div>
  );
};

export default BookList;