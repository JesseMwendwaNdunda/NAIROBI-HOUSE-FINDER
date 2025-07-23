import React, { useEffect, useState } from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Home from "./Components/Home"; // Make sure this is correct path
import AddApartmentForm from "./Components/ApartmentForm";
import ApartmentList from "./Components/ApartmentList";
import ApartmentDetail from "./Components/ApartmentDetails";

function App() {
  const [apartments, setApartments] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  const [selectedApartment, setSelectedApartment] = useState(null);

  const URL = "http://localhost:3000/apartments";

  useEffect(() => {
    fetchApartments();
  }, []);

  const fetchApartments = async () => {
    try {
      const res = await fetch(URL);
      if (!res.ok) throw new Error("Failed to fetch apartments");
      const data = await res.json();
      setApartments(data);
    } catch (err) {
      setError(err.message);
    } finally {
      setLoading(false);
    }
  };

  const toggleInterested = async (id) => {
    const apt = apartments.find((a) => a.id === id);
    if (!apt) return;

    const updatedApartment = { ...apt, interested: !apt.interested };

    try {
      const res = await fetch(`${URL}/${id}`, {
        method: "PATCH",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ interested: updatedApartment.interested }),
      });
      if (!res.ok) throw new Error("Failed to update");

      setApartments((prev) =>
        prev.map((a) => (a.id === id ? updatedApartment : a))
      );

      if (selectedApartment?.id === id) {
        setSelectedApartment(updatedApartment);
      }
    } catch (err) {
      alert(err.message);
    }
  };

  const addApartment = async (newApartment) => {
    try {
      const res = await fetch(URL, {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ ...newApartment, interested: false }),
      });

      if (!res.ok) throw new Error("Failed to add apartment");
      const added = await res.json();
      setApartments((prev) => [...prev, added]);
    } catch (err) {
      alert(err.message);
    }
  };

  const handleSelectApartment = (apt) => {
    setSelectedApartment(apt);
  };

  const handleCloseDetail = () => {
    setSelectedApartment(null);
  };

  if (loading) return <p>Loading apartments...</p>;
  if (error) return <p>Error: {error}</p>;

  return (
    <Router>
      <div className="app-container">
        <header>
          <h1>Nairobi Apartment Finder</h1>
        </header>
        <main>
          <Routes>
            <Route path="/" element={<Home />} />
            <Route
              path="/apartments"
              element={
                <>
                  <AddApartmentForm addApartment={addApartment} />
                  {selectedApartment ? (
                    <ApartmentDetail
                      apartment={selectedApartment}
                      onClose={handleCloseDetail}
                    />
                  ) : (
                    <ApartmentList
                      apartments={apartments}
                      toggleInterested={toggleInterested}
                      onSelect={handleSelectApartment}
                    />
                  )}
                </>
              }
            />
          </Routes>
        </main>
        <footer>
          <p>© 2025 Nairobi Apartment Finder</p>
        </footer>
      </div>
    </Router>
  );
}

export default App;
