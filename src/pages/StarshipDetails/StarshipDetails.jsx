import React, { useState, useEffect } from "react";
import { useLocation } from "react-router-dom";
import { getDetails } from "../../services/sw-api";

const StarshipDetails = (props) => {
  const [starshipDetails, setStarshipDetails] = useState({})

  let location = useLocation()

  useEffect(() => {
    getDetails(location.state.starship.url)
    .then(starshipDetails => setStarshipDetails(starshipDetails))
  })
  return (  
    <>
      <div className="starship-detail-div">
        <p>Name: {starshipDetails.name}</p>
        <p>Model: {starshipDetails.model}</p>
        <a className="App-link" href="/">RETURN</a>
      </div>

    </>
    
  );
}
 
export default StarshipDetails;