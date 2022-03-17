import React, { useState, useEffect } from "react";
import { getPilots } from "../../services/sw-api";

const PilotList = (props) => {
  const [pilotList, setPilotList] = useState([
    "https://swapi.dev/api/people/13/", 
    "https://swapi.dev/api/people/14/", 
    "https://swapi.dev/api/people/25/", 
    "https://swapi.dev/api/people/31/",
  ])
  
  useEffect(()=> {
    getPilots(pilotList).then(pilots => setPilotList(pilots))
  }, [pilotList])
  

  return (  
    <>
    {pilotList.name ?
    <>
    
    </>
    
    
    
    
    }
    <p>PILOTS: </p>
    <ul>
      {pilotList.map((pilot, index)=> (
        <li key={pilot.index}>{pilot.name}</li>
      ))}
    </ul>
    </>
  );
}
 
export default PilotList;