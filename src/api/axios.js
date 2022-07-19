import axios from 'axios'

const instance = axios.create({
    baseURL: `https://free-to-play-games-database.p.rapidapi.com/api/`,
});

export default instance;