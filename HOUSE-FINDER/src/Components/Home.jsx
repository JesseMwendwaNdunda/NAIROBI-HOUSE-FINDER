import {useState, useEffect} from "react"
import ApartmentCard from "./ApartmentCard"


function Home(){
     const [apartments, setApartments] =useState([])
      useEffect(() => {
    fetch("http://localhost:3000/apartments")
      .then((res) => res.json())
      .then((data) => setApartments(data));
  }, []);
}
