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
    <div className="starship-detail-container">
      <div className="starship-detail-div">
        <p>NAME: {starshipDetails.name}</p>
        <p>MODEL: {starshipDetails.model}</p>
        <a className="App-link" href="/">RETURN</a>
      </div>
    </div>
      

    </>
    
  );
}
 
export default StarshipDetails;