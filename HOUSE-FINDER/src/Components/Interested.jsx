
import React from "react";
import ApartmentCard from "./ApartmentCard";


function InterestedPage({ apartments, onSelect, toggleInterested }) {
  return (
    <div className="interestd-container">
      <h2>Interested Apartments</h2>
      {apartments.length === 0 ? (
        <p>No apartments marked as interested yet.</p>
      ) : (
        <div className="apartment-list">
          {apartments.map((apt) => (
            <ApartmentCard
              key={apt.id}
              apartment={apt}
              onSelect={onSelect}
              toggleInterested={toggleInterested}
            />
          ))}
        </div>
      )}
    </div>
  );
}

export default InterestedPage;