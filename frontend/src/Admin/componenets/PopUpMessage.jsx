import React, { useState } from "react";

function PopUpMessage() {
  const [showMessage, setShowMessage] = useState(false);

  const handleShowMessage = () => {
    setShowMessage(true);
    setTimeout(() => {
      setShowMessage(false); // Hide the message after 5 seconds
    }, 5000);
  };

  return (
    <div className="flex justify-center items-center min-h-screen">
      <button
        onClick={handleShowMessage}
        className="bg-blue-500 text-white px-4 py-2 rounded shadow hover:bg-blue-600"
      >
        Show Message
      </button>

      {showMessage && (
        <div className="fixed top-4 right-4 bg-green-500 text-white p-4 rounded shadow-lg w-64">
          <p>This is a pop-up message!</p>
          {/* Decreasing Line with Animation */}
        </div>
      )}
    </div>
  );
}

export default PopUpMessage;
