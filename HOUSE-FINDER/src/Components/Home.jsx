import {useState, useEffect} from "react"
import ApartmentCard from "./ApartmentCard"


function Home(){
     const [apartments, setApartments] =useState([])
      useEffect(() => {
    fetch("http://localhost:3000/apartments")
      .then((res) => res.json())
      .then((data) => setApartments(data));
  }, []);

  return (
    <div style={{ padding: "1rem" }}>
      <h1>Welcome to Nairobi Apartment Finder</h1>
      <p>Find your next apartment with ease.</p>
      <div style={styles.grid}>
        {apartments.map((apt) => (
          <ApartmentCard key={apt.id} apartment={apt} />
        ))}
      </div>
    </div>
  );
}

const styles = {
  grid: {
    display: "flex",
    flexWrap: "wrap",
    gap: "1rem"
  }
};

export default Home;




