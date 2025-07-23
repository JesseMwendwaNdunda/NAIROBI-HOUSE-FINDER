import React from "react";

// ApartmentDetail shows a popup with full apartment info
function ApartmentDetail({ apartment, onClose }) {
// If no apartment is selected, don’t show anything
    if (!apartment) return null;

  return (
    // This is the background overlay that closes the modal when clicked
    <div className="modal-overlay" onClick={onClose}>

   {/* This is the main popup box - clicking inside it won't close the modal */}
      <div
        className="modal-content"
        onClick={(e) => e.stopPropagation()} // prevent closing when clicking inside
      >
        {/* Close button at the top */}
         <button className="close-btn" onClick={onClose}>
          Close
        </button>

        {/* Apartment name as a heading */}
        <h2>{apartment.name}</h2>

        {/* Show location */}
        <p>
          <strong>Location:</strong> {apartment.location}
        </p>

        <p>
          <strong>Description:</strong> {apartment.description}
        </p>

        <div className="photo-gallery">
          {apartment.photos.map((photo, index) => (
            <img
              key={index}
              src={photo}
              alt={`Photo ${index + 1} of ${apartment.name}`}
            />
          ))}
        </div>
      </div>
    </div>
  );
}

export default ApartmentDetail;
