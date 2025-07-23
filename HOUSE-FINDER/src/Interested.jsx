import { useEffect, useState } from "react";
import ApartmentCard from "../Components/ApartmentCard";

function Interested() {
  const [apartments, setApartments] = useState([]);

  useEffect(() => {
    fetch("http://localhost:3000/apartments")
      .then((res) => res.json())
      .then((data) => {
        const interestedOnly = data.filter((apt) => apt.interested);
        setApartments(interestedOnly);
      })
      .catch((err) => console.error("Error fetching apartments:", err));
  }, []);

  return (
    <div className="ApartmentList">
      {apartments.length ? (
        apartments.map((apartment) => (
          <ApartmentCard
            key={apartment.id}
            apartment={apartment}
            onToggleInterested={() => {}}
          />
        ))
      ) : (
        <p>No interested apartments yet</p>
      )}
    </div>
  );
}

export default Interested;
