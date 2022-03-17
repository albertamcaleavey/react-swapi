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
    <div className="starship-container">
      {starshipList.map((starship)=> (
        <div key={starship.name}>
          <Link 
          className="App-link"
          to='/starship'
          state={{starship}}> 
          <div className="starship-div">
            {starship.name} 
          </div>
        </Link> 
        </div>
      ))}
    </div>
    </>
  );
}

export default StarshipList;