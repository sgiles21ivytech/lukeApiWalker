import { useEffect, useState } from "react";
import { Link } from "react-router-dom";

export const People = ({data: {height, name, homeworld}}) => {

    const [homeworldID, setHomeworldID] = useState(null)


    useEffect(()=>{
        if(!homeworld){return}
        let id = ''
        for(let i = homeworld.length-2; i>0; i--){
            if(homeworld[i] == '/'){break}
            id = homeworld[i] + id
        }
        setHomeworldID(id)
    }, [homeworld])  

    return (
      <div className="search-results">
        <p>Name: {name}</p>
        <p>Height: {height}</p>
        <Link to={`/planets/${homeworldID}`}>Home World</Link>
      </div>
    );
}

//https://swapi.dev/api/planets/8/