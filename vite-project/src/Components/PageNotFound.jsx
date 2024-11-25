import React from "react";
import { Link } from "react-router";


function PageNotFound(){
    return(
        <div className="min-h-screen flex flex-col items-center justify-center bg-gray-100 text-gray-800">
          <h1 className="text-6xl font-bold mb-4 text-red-500">404</h1>
          <p className="text-2xl font-semibold mb-4">Page Not Found</p>
        <Link className="px-6 py-3 bg-blue-500 text-white rounded-lg hover:bg-blue-600 transition duration-300" to="/">Go back to Home</Link>
      </div>
    );
}
export default PageNotFound;
