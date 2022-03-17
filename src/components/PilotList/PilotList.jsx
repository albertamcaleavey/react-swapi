import React, { useState, useEffect } from "react";
import StarshipDetails from "../../pages/StarshipDetails/StarshipDetails";
import { getPilots } from "../../services/sw-api";
import { useLocation } from "react-router-dom";

const PilotList = (props) => {
  const [pilotList, setPilotList] = useState([])

  let location = useLocation()
  
  useEffect(()=> {
    getPilots(location.state.starship.pilots).then(pilots => setPilotList(pilots))
  }, [])
  
  console.log(location)

  return (  
    <>
    {pilotList.length ?
    <>
    <p>PILOTS: </p>
    <ul>
      {pilotList.map((pilot, index)=> (
        <li key={pilot.name}>{pilot.name}</li>
      ))}
    </ul>
    </>
    :
    <>
    <p>No pilots</p>
    </>
    }
    </>
  );
}
export default PilotList;