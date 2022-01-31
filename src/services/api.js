import axios from "axios";
// KEY
const KEY = "5ed4374ef87e4262825799d05e5c229e";
// URL
const BASE_URL = "https://api.rawg.io/api/";

const getGames = async () => {
    const res = await axios.get(`${BASE_URL}games?key=${KEY}&dates=2022-01-01,2022-01-30`);
    return res.data.results;
}

export { getGames };