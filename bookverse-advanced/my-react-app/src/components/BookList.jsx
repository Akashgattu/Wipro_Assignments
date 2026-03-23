import React from "react";
import BookCard from "./BookCard";

const books = [
  {
    id: 1,
    title: "Wings of Fire",
    author: "APJ Abdul Kalam",
    bio: "Scientist and former President of India.",
    topBooks: ["Ignited Minds", "India 2020", "My Journey"],
  },
  {
    id: 2,
    title: "Harry Potter",
    author: "J.K. Rowling",
    bio: "British author, best known for Harry Potter.",
    topBooks: ["Fantastic Beasts", "The Casual Vacancy", "Cormoran Strike"],
  },
];

function BookList({ onSelectAuthor, searchText }) {
  const filteredBooks = books.filter((book) =>
    book.title.toLowerCase().includes(searchText.toLowerCase()) ||
    book.author.toLowerCase().includes(searchText.toLowerCase())
  );

  return (
    <div className="row">
      {filteredBooks.length > 0 ? (
        filteredBooks.map((book) => (
          <BookCard
            key={book.id}
            book={book}
            onClick={() => onSelectAuthor(book)}
          />
        ))
      ) : (
        <p className="text-center">No books found</p>
      )}
    </div>
  );
}

export default BookList;