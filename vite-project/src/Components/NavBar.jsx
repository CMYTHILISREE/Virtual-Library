import React from "react";
import { Link } from "react-router-dom";



function NavBar(){
    return (
       
        <ul className="flex justify-evenly text-xl font-mono space-x-2 md:space-x-10 items-center">
            <li className="p-1 md:p-3 bg-teal-400 rounded-lg shadow-lg text-white hover:bg-teal-500 transition-colors"><Link  to="/">Home</Link></li>
            <li className="p-1 md:p-3 bg-teal-400 rounded-lg shadow-lg text-white hover:bg-teal-500 transition-colors"><Link to="/browse-books">Browse Books</Link></li>
            <li className="p-1 md:p-3 bg-teal-400 rounded-lg shadow-lg text-white hover:bg-teal-500 transition-colors"><Link to="/add-book">Add Book</Link></li>
        </ul>
       
    );

}

export default NavBar;