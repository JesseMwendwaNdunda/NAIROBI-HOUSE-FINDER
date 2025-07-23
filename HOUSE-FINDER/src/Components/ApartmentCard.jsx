import React from "react";

function ApartmentCard({ apartment, onSelect, toggleInterested }) {
  function handleCardClick() {
    onSelect(apartment);
  }

  function handleInterestedClick(event) {
    event.stopPropagation();
    toggleInterested(apartment.id);
  }

  const image = apartment.photos?.[0] || "https://via.placeholder.com/150";
  const name = apartment.name || "Unnamed Apartment";
  const location = apartment.location || "Location not specified";
  const interested = apartment.interested ? "Interested ✓" : "Interested?";
  return (
    <div
      className="apartment-card"
      onClick={handleCardClick}
      style={{ cursor: "pointer" }}
    >
     <img src={image} alt={name} className="thumbnail" />
      <h3>{name}</h3>
      <p>{location}</p>
      <button onClick={handleInterestedClick}>{interested}</button>
    </div>
  );
}

export default ApartmentCard;
