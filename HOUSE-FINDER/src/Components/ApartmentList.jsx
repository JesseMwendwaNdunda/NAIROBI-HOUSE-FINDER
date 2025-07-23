import React from "react";
import ApartmentCard from "./ApartmentCard";

function ApartmentList({ apartments, toggleInterested, onSelect }) {
  if (apartments.length === 0) {
    return <p>No apartments found. Please add some!</p>;
  }

  return (
    <div className="apartmentList">
      {apartments.map((apartment) => {
        return (
          <ApartmentCard
            key={apartment.id}
            apartment={apartment}
            toggleInterested={toggleInterested}
            onSelect={onSelect}
          />
        );
      })}
    </div>
  );
}

export default ApartmentList;