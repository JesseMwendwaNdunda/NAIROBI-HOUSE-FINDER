import React from "react";

function ApartmentCard({ apartment, onSelect, toggleInterested }) {
  function handleCardClick() {
    onSelect(apartment);
  }

  function handleInterestedClick(event) {
    event.stopPropagation();
    toggleInterested(apartment.id);
  }

  return (
    <div
      className="apartment-card"
      onClick={handleCardClick}
      style={{ cursor: "pointer" }}
    >
      <h3>{apartment.name}</h3>
      <p>{apartment.location}</p>
      <button onClick={handleInterestedClick}>Interested?</button>
    </div>
  );
}

export default ApartmentCard;
