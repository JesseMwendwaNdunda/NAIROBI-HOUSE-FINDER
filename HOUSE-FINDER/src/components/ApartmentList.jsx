import React from "react"
import ApartmentCard from "./ApartmentCard"

function ApartmentList ({apartments,toggleInterested,onSelect})

if (apartments.length=== 0){
    return
     <p>
        No apartments found .Please add some!
     </p>
}