import React from "react";

function ApartmentDetail({ apartment, onClose }) {
  if (!apartment) return null;

  return (
    <div className="modal-overlay" onClick={onClose}>
      <div
        className="modal-content"
        onClick={(e) => e.stopPropagation()}
      >
      </div>
    </div>
  );
}

export default ApartmentDetail;
