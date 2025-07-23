import { useState } from "react";
import React, [useEffect, useState] from 'react';
import ApartmentCard from "../Components/ApartmentCard";

function Interested(){
    const[apartments, setApartments]= useState([]);

    useEffect(()=>{
        fetch("http://localhost:3000/apartments")
        .then((res) => res.json())
        .then((data)=>{
            setApartments
        },[])

        

    })

}