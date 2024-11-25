import React from 'react';
import { Link } from 'react-router-dom';



const BookCard = ({ book }) => {
  return (
    <div className="w-64 my-5 mx-5 h-96 bg-slate-300 rounded-3xl text-teal-600 cursor-pointer  flex flex-col items-start justify-center gap-3 hover:bg-gray-900 hover:shadow-2xl hover:shadow-sky-400 transition-shadow">
    <div className="w-full h-[100%] bg-sky-300 rounded-2xl overflow-hidden">
      <img src={book.coverImage} alt={book.title} className="w-full h-full"/>
      </div>
      <div className="px-3  my-3 mx-3 ">
      <h3 className="font-bold text-xl text-center">{book.title}</h3>
      <p className="my-2 text-center">Author: {book.author}</p>
      <p className="text-center">Category: {book.category}</p>
      <p className="text-center">Rating: {book.rating}</p>
      <Link className="pt-3 pl-14 hover:text-white" to={`/book/${book.id}`}><u>View more....</u></Link>
    </div>
    </div>
  );
};

export default BookCard;