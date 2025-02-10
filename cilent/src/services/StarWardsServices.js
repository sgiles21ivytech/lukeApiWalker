import axios from 'axios'

const STARWARS_INSTANCE = axios.create({
    baseURL : 'https://swapi.dev/api/' // attach topic and id after
})

export const getStarWarsData = async (topic, id) => {
    try {
        const res = await STARWARS_INSTANCE.get(`/${topic}/${id}`)
        return res.data
    } catch(error) {throw error}
}