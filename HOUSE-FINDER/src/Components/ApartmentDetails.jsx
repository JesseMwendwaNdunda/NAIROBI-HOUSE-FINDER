import React from "react";

function ApartmentDetail({ apartment, onClose }) {
  if (!apartment) return null;

  return (
    <div className="modal-overlay" onClick={onClose}>
      <div
        className="modal-content"
        onClick={(e) => e.stopPropagation()}
      >
         <button className="close-btn" onClick={onClose}>
          Close
        </button>

        <h2>{apartment.name}</h2>

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
