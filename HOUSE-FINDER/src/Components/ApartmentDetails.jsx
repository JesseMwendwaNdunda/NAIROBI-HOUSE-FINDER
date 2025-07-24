import React, { useState } from "react";

function ApartmentDetail({ apartment, onClose }) {
  const [lightboxImg, setLightboxImg] = useState(null);

  if (!apartment) return null;

  return (
    <div className="modal-overlay" onClick={onClose}>
      <div className="modal-content" onClick={(e) => e.stopPropagation()}>
        <button className="close-btn" onClick={onClose}>
          close
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
              className="gallery-thumb"
              onClick={() => setLightboxImg(photo)}
            />
          ))}
        </div>

        {lightboxImg && (
          <div className="lightbox" onClick={() => setLightboxImg(null)}>
            <img src={lightboxImg} alt="Full view" />
          </div>
        )}
      </div>
    </div>
  );
}

export default ApartmentDetail
