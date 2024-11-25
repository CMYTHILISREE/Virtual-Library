import React, { useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { addItem } from "../utils/booksSlice";
import { useNavigate } from 'react-router-dom';


const AddBookForm = () => {
  const [title, setTitle] = useState('');
  const [author, setAuthor] = useState('');
  const [category, setCategory] = useState('');
  const [description, setDescription] = useState('');
  const [rating, setRating] = useState('');
  const [image, setImage] = useState(null);
  const [error, setError] = useState('');
  
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const books = useSelector((state) => state.books.items);

  const handleImageUpload = (e) => {
    const file = e.target.files[0];
    if (file) {
      setImage(URL.createObjectURL(file)); // Generate a preview URL
    }
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    if (!title || !author || !category || !description || !rating || !image) {
      setError('All fields are required.');
      return;
    }

    const nextId = books.length > 0 ? Math.max(...books.map(book => book.id)) + 1 : 1;

    const newBook = {
      id: nextId,
      title,
      author,
      category,
      description,
      rating: parseFloat(rating),
      image, 
    };

    dispatch(addItem(newBook));
    navigate('/browse-books');
  };

  return (
    <div className="add-book-container mx-auto max-w-xl p-6 bg-white shadow-lg rounded-lg">
  <h2 className="text-2xl font-bold text-center text-gray-800 mb-6">Add a New Book</h2>
  {error && <p className="text-red-500 text-sm mb-4">{error}</p>}
  <form className="space-y-4" onSubmit={handleSubmit}>
    <div>
      <label className="block text-sm font-medium text-gray-700 mb-1">Title:</label>
      <input 
        type="text" 
        value={title} 
        className="form-input w-full px-3 py-2 border rounded-md shadow-sm focus:outline-none focus:ring focus:ring-blue-300" 
        onChange={(e) => setTitle(e.target.value)} 
        required 
      />
    </div>
    <div >
      <label className="block text-sm font-medium text-gray-700 mb-1">Author:</label>
      <input 
        type="text" 
        className="form-input w-full px-3 py-2 border rounded-md shadow-sm focus:outline-none focus:ring focus:ring-blue-300" 
        value={author} 
        onChange={(e) => setAuthor(e.target.value)} 
        required 
      />
    </div>
    <div >
      <label className="block text-sm font-medium text-gray-700 mb-1">Category:</label>
      <input 
        type="text" 
        className="form-input w-full px-3 py-2 border rounded-md shadow-sm focus:outline-none focus:ring focus:ring-blue-300" 
        value={category} 
        onChange={(e) => setCategory(e.target.value)} 
        required 
      />
    </div>
    <div >
      <label className="block text-sm font-medium text-gray-700 mb-1">Description:</label>
      <textarea 
        className="form-textarea w-full px-3 py-2 border rounded-md shadow-sm focus:outline-none focus:ring focus:ring-blue-300" 
        value={description} 
        onChange={(e) => setDescription(e.target.value)} 
        required 
      />
    </div>
    <div >
      <label className="block text-sm font-medium text-gray-700 mb-1">Rating (1 to 5):</label>
      <input 
        type="number" 
        className="form-input w-full px-3 py-2 border rounded-md shadow-sm focus:outline-none focus:ring focus:ring-blue-300" 
        value={rating} 
        min="1" 
        max="5" 
        onChange={(e) => setRating(e.target.value)} 
        required 
      />
    </div>
    <div >
      <label className="block text-sm font-medium text-gray-700 mb-1">Book Cover Image:</label>
      <input 
        type="file" 
        accept="image/*" 
        onChange={handleImageUpload} 
        className="form-input w-full px-3 py-2 border rounded-md shadow-sm focus:outline-none focus:ring focus:ring-blue-300" 
        required 
      />
    </div>
    {image && <img src={image} alt="Book Preview" className="w-full h-auto mt-4 rounded-md shadow-md" />}
    <button 
      type="submit" 
      className="w-full bg-blue-500 text-white font-medium py-2 px-4 rounded-md hover:bg-blue-600 focus:outline-none focus:ring focus:ring-blue-300">
      Add Book
    </button>
  </form>
</div>
  );
};

export default AddBookForm;