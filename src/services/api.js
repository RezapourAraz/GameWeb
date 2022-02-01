import axios from "axios";
// KEY
const KEY = "5ed4374ef87e4262825799d05e5c229e";
// URL
const BASE_URL = "https://api.rawg.io/api/";

const getGames = async (title) => {
    const res = await axios.get(`${BASE_URL}${title}?key=${KEY}&dates=2020-01-01,2022-02-01`);
    return res.data.results;
}
const getPopulars = async (title) => {
    const res = await axios.get(`${BASE_URL}${title}?key=${KEY}&dates=2020-01-01,2022-02-01`);
    return res.data.results;
}

export { getGames, getPopulars };