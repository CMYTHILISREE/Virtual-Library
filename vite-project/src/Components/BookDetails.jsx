import React from 'react';
import { useSelector } from 'react-redux';
import { useParams, Link } from 'react-router-dom';



const BookDetails = () => {
  const { id } = useParams();
  const books = useSelector((state) => state.books.items);

  const book = books.find((b) => b.id === parseInt(id));

  if (!book) {
    return (
      <div className="book-details-container">
        <h2 className="error-message">Book not found</h2>
        <Link className="back-link" to="/browse-books">Back to Browse Books</Link>
      </div>
    );
  }

  return (
    <div className="flex flex-row space-x-20 my-20 mx-5">
      <div className=" p-1 md:p-5 md:w-fit bg-teal-400 rounded-lg ring-2 ring-teal-500 shadow-xl ml-0 md:ml-10">
      <img src={book.coverImage} alt={book.title} />
      </div>
      <div>
      <h2 className="text-3xl font-serif text-teal-800 mt-3">{book.title}</h2>
      <p className="text-xl"><strong>Author:</strong> {book.author}</p>
      <p className="text-xl"><strong>Category:</strong> {book.category}</p>
      <p className="text-xl"><strong>Description:</strong> {book.description}</p>
      <p className="text-xl"><strong>Rating:</strong> {book.rating}</p>
      <Link className="text-blue-500 hover:text-black" to="/browse-books"><u>Back to Browse Books</u></Link>
      </div>
      </div>
  );
};

export default BookDetails;