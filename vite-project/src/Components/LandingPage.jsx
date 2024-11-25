import React from 'react';
import { useSelector } from 'react-redux';
import BookCard from './BookCard';


function LandingPage(){
    const books = useSelector((state) => state.books.items); 
    const famousBooks = books.slice(0, 10); 

    return (
        <div>
          <h1 className="text-3xl md:text-4xl font-bold text-center text-blue-600 mb-6">
            Welcome to the Virtual Library
          </h1>
          <h2 className="text-2xl font-semibold text-center text-gray-800 mb-4">
          <u>Famous Books</u>
          </h2>
  <div className="grid place-items-center min-h-screen bg-gray-100">
    <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-3 gap-10 w-full">
      {famousBooks.map((book) => (
        <BookCard key={book.id} book={book} />
      ))}
    </div>
  </div>
</div>
            
 );

}

export default LandingPage;