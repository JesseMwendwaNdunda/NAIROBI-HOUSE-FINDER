import React from "react";

// Component to render a single apartment card
function ApartmentCard({ apartment, onSelect, toggleInterested }) {
  // Called when the whole card is clicked
  function handleCardClick() {
    onSelect(apartment);  // Notify parent which apartment was selected
  }

   // Called when the "Interested" button is clicked
  function handleInterestedClick(event) {
    event.stopPropagation();   // Prevent card's click handler from firing
    toggleInterested(apartment.id);  // Toggle interested state in parent
  }

  // Fallback image if apartment has no photos
  const image = apartment.photos?.[0] || "https://via.placeholder.com/150";

  // Fallback name and location if missing
  const name = apartment.name || "Unnamed Apartment";
  const location = apartment.location || "Location not specified";

  // Display different button text based on interest state
  const interested = apartment.interested ? "Interested ✓" : "Interested?";

  // Card layout with image, name, location, and interested button
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

// Export the component so it can be used in other parts of the app
export default ApartmentCard;
