'use client'
  import React, { useState } from 'react';

const Popup = () => {
  const [showPopup, setShowPopup] = useState(false);

  const togglePopup = () => {
    setShowPopup(!showPopup);
  };

  return (
    <div>
      <button
        onClick={togglePopup}
        className="bg-blue-500 hover:bg-blue-600 text-white font-bold py-2 px-4 rounded"
      >
        Show Popup
      </button>
      {showPopup && (
        <div className="fixed top-0 left-0 w-full h-full flex items-center justify-center z-50">
          <div className="bg-white p-4 rounded shadow-md">
            <h2 className="text-xl font-semibold">Popup Content</h2>
            <p>This is the content of your popup.</p>
            <button
              onClick={togglePopup}
              className="bg-blue-500 hover:bg-blue-600 text-white font-bold py-2 px-4 rounded mt-4"
            >
              Close
            </button>
          </div>
        </div>
      )}
    </div>
  );
};

export default Popup;
