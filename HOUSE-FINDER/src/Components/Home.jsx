import React, { useState, useEffect } from "react";
import ApartmentCard from "./ApartmentCard";
import ApartmentDetail from "./ApartmentDetails";
import AddApartmentForm from "./ApartmentForm";



function Home() {
  const [apartments, setApartments] = useState([]);
  const [selectedApartment, setSelectedApartment] = useState(null);
  const URL = "https://nairobi-house-finder-backend.onrender.com/apartments"
;

  useEffect(() => {
    fetch(URL)
      .then((res) => res.json())
      .then((data) => setApartments(data));
  }, []);

  const toggleInterested = async (id) => {
    const apt = apartments.find((a) => a.id === id);
    if (!apt) return;

    const updated = { ...apt, interested: !apt.interested };

    const res = await fetch(`${URL}/${id}`, {
      method: "PATCH",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ interested: updated.interested }),
    });

    if (res.ok) {
      setApartments((prev) =>
        prev.map((a) => (a.id === id ? updated : a))
      );

      if (selectedApartment?.id === id) {
        setSelectedApartment(updated);
      }
    }
  };

  const handleSelect = (apt) => setSelectedApartment(apt);
  const handleClose = () => setSelectedApartment(null);

  const addApartment = async (newApt) => {
    const res = await fetch(URL, {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ ...newApt, interested: false }),
    });

    if (res.ok) {
      const added = await res.json();
      setApartments((prev) => [...prev, added]);
    }
  };

  return (
    <div className="app-container">
      <section className="home-hero">
        <h1>Welcome to Nairobi Apartment Finder</h1>
        <p>Find your dream apartment in the city today.</p>
      </section>

      <section className="apartmentList">
        {apartments.map((apt) => (
          <ApartmentCard
            key={apt.id}
            apartment={apt}
            toggleInterested={toggleInterested}
            onSelect={handleSelect}
          />
        ))}
      </section>

      {selectedApartment && (
        <ApartmentDetail apartment={selectedApartment} onClose={handleClose} />
      )}

      <section>
        <AddApartmentForm addApartment={addApartment} />
      </section>
    </div>
  );
}

export default Home;
