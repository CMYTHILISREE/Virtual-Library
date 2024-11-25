import React, { useState, useEffect } from "react";
import { useSelector } from "react-redux";
import BookCard from "./BookCard";


function BrowseBooks() {
  const books = useSelector((state) => state.books.items);
  const [searchQuery, setSearchQuery] = useState("");
  const [searchBy, setSearchBy] = useState("title");
  const [filteredBooks, setFilteredBooks] = useState(books);
  const categories = ["Fiction", "Non-Fiction", "Sci-Fi", "History"]; 

  
  useEffect(() => {
    const filterBooks = () => {
      let filtered = books;
      if (searchQuery) {
        filtered = books.filter((book) =>
          book[searchBy]?.toLowerCase().includes(searchQuery.toLowerCase())
        );
      }
      setFilteredBooks(filtered);
    };
    filterBooks();
  }, [books, searchQuery, searchBy]);

  const handleCategoryChange = (category) => {
    if (category) {
      setFilteredBooks(books.filter((book) => book.category === category));
    } else {
      setFilteredBooks(books);
    }
  };

  return (
    <div className="container mx-auto p-6">
  <h2 className="text-2xl font-bold mb-4 text-center  text-gray-800">Browse Books</h2>

  <div className="flex flex-col md:flex-row justify-between items-center mb-6 gap-4">
    
    <div className="flex items-center gap-2 w-full md:w-auto">
      <input
        type="text"
        className="border border-gray-300 rounded-lg px-4 py-2 w-full md:w-64 focus:outline-none focus:ring-2 focus:ring-blue-500"
        placeholder={`Search by ${searchBy}...`}
        value={searchQuery}
        onChange={(e) => setSearchQuery(e.target.value)}
      />
      <select
        className="border border-gray-300 rounded-lg px-4 py-2 bg-white focus:outline-none focus:ring-2 focus:ring-blue-500"
        value={searchBy}
        onChange={(e) => setSearchBy(e.target.value)}
      >
        <option value="title">Title</option>
        <option value="author">Author</option>
      </select>
    </div>

    
    <select
      className="border border-gray-300 rounded-lg px-4 py-2 bg-white focus:outline-none focus:ring-2 focus:ring-blue-500"
      onChange={(e) => handleCategoryChange(e.target.value)}>
      <option value="">All Categories</option>
      {categories.map((category) => (
        <option key={category} value={category}>
          {category}
        </option>
      ))}
    </select>
  </div>


  <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-3 gap-6">
    {filteredBooks.length > 0 ? (filteredBooks.map((book) => <BookCard key={book.id} book={book} />)
    ) : (
      <p className="col-span-full text-center text-gray-500">No books found.</p>
    )}
  </div>
</div>
  );
}

export default BrowseBooks;