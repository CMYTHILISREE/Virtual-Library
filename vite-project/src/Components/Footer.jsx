import React from "react";

function Footer() {
  return (
    <div className="bg-gray-50 bottom-0">
      <div className="mx-auto max-w-screen-xl px-4 py-8 sm:px-6 lg:px-8">
        <div className="sm:flex sm:items-center sm:justify-between">
          <div className="flex justify-center text-teal-600 sm:justify-start">
            <h5 className="text-2xl animate-bounce"><u>"A library is a gateway to wisdom and knowledge.Paradise will be a kind of Library"</u></h5>
          </div>

          <p className="mt-4 text-center text-sm text-gray-500 lg:mt-0 lg:text-right">
            Copyright &copy; 2024. All rights reserved.
          </p>
        </div>
      </div>
    </div>
  );
}

export default Footer;