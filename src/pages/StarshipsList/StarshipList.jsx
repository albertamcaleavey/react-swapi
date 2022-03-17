import { useEffect, useState } from "react";
import { getStarshipList } from "../../services/sw-api";
import { Link } from "react-router-dom";

const StarshipList = () => {
  const [starshipList, setStarshipList] = useState([])

  useEffect(() => {
    getStarshipList()
    .then(starshipList => setStarshipList(starshipList.results))
  }, [])

  return (  
    <>
    <div>
      {starshipList.map((starship)=> (
        <Link to='/starship'
        state={{starship}}
        key={starship.name} > {starship.name} 
        </Link> 
      ))}
    </div><br></br>
    </>
  );
}

export default StarshipList;