import React, { useEffect, useState } from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Home from "./Components/Home";
import AddApartmentForm from "./Components/ApartmentForm";
import ApartmentList from "./Components/ApartmentList";
import ApartmentDetail from "./Components/ApartmentDetails";
import InterestedPage from "./Components/Interested"; 
import Navbar from "./Components/Navbar";
import "./index.css";

function App() {
  const [apartments, setApartments] = useState([]);
  const [selectedApartment, setSelectedApartment] = useState(null);
  const [filters, setFilters] = useState({
    location: "",
    minPrice: "",
    maxPrice: "",
    bedrooms: "",
  });

  const URL = "http://localhost:3000/apartments";

  useEffect(() => {
    fetch(URL)
      .then((res) => res.json())
      .then(setApartments)
      .catch((err) => console.error("Error fetching:", err));
  }, []);

  const addApartment = (newApt) => {
    fetch(URL, {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ ...newApt, interested: false }),
    })
      .then((res) => res.json())
      .then((added) => setApartments([...apartments, added]));
  };

  const toggleInterested = (id) => {
    const apt = apartments.find((a) => a.id === id);
    if (!apt) return;

    const updated = { ...apt, interested: !apt.interested };

    fetch(`${URL}/${id}`, {
      method: "PATCH",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ interested: updated.interested }),
    }).then(() =>
      setApartments((prev) =>
        prev.map((a) => (a.id === id ? updated : a))
      )
    );
  };

  const handleFilterChange = (e) => {
    setFilters({ ...filters, [e.target.name]: e.target.value });
  };

  const filteredApartments = apartments.filter((apt) => {
    const { location, minPrice, maxPrice, bedrooms } = filters;

    const matchLocation = location
      ? apt.location.toLowerCase().includes(location.toLowerCase())
      : true;
    const matchMinPrice = minPrice ? apt.price >= Number(minPrice) : true;
    const matchMaxPrice = maxPrice ? apt.price <= Number(maxPrice) : true;
    const matchBedrooms = bedrooms ? apt.bedrooms === Number(bedrooms) : true;

    return matchLocation && matchMinPrice && matchMaxPrice && matchBedrooms;
  });

  return (
    <Router>
      <div className="app-container">
        <header>
          <h1>Nairobi Apartment Finder</h1>
        </header>

        <Navbar filters={filters} onFilterChange={handleFilterChange} />

        <main>
          <Routes>
            <Route path="/" element={<Home />} />
            <Route
              path="/add"
              element={<AddApartmentForm addApartment={addApartment} />}
            />
            <Route
              path="/apartments"
              element={
                selectedApartment ? (
                  <ApartmentDetail
                    apartment={selectedApartment}
                    onClose={() => setSelectedApartment(null)}
                  />
                ) : (
                  <ApartmentList
                    apartments={filteredApartments}
                    onSelect={(apt) => setSelectedApartment(apt)}
                    toggleInterested={toggleInterested}
                  />
                )
              }
            />
            <Route
              path="/interested"
              element={
                <InterestedPage
                  apartments={apartments} // ✅ Send full array here
                  onSelect={(apt) => setSelectedApartment(apt)}
                  toggleInterested={toggleInterested}
                />
              }
            />
          </Routes>
        </main>

        <footer>
          <p>
            © 2025 Nairobi Apartment Finder <br />
            Contact us: 0727257310 or 0794906353 <br />
            Email: nairobihousefinder@gmail.com
          </p>
        </footer>
      </div>
    </Router>
  );
}

export default App;
