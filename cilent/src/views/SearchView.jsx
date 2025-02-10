import { useEffect, useState } from "react";
import { useParams } from "react-router-dom"
import { getStarWarsData } from "../services/StarWardsServices";
import { People} from "../components/People";
import { Planet } from "../components/Planet";
import { Error } from "../components/Error";

export const SearchView = () => {
    const { topic, id } = useParams();
    const [data, setData] = useState({})

    useEffect(()=>{
        getStarWarsData(topic, id)
        .then(res => setData(res))
        .catch(()=> setData(null))
    }, [topic, id])

    if (!data) {return <Error/>}
    if (topic == 'planets') {return <Planet data={data}/>}
    if (topic == 'people') {return <People data={data}/>}
};
