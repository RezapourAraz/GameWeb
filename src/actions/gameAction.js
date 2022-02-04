import axios from "axios";
import { popularGamesURL } from "../services/api";
import { upComingGamesURL } from "../services/api";
import { newGamesURL } from "../services/api";

const fetchGamesRequest = () => {
    return {
        type: "FETCH_GAMES_REQUEST",
    }
}

const fetchGamesSuccess = (popular, upComing, newGames) => {
    return {
        type: "FETCH_GAMES_SUCCESS",
        payload: {
            popular: popular.data.results,
            upComing: upComing.data.results,
            newGames: newGames.data.results
        }
    }
}

const fetchGames = () => async (dispatch) => {
        dispatch(fetchGamesRequest())
        const popular = await axios.get(popularGamesURL())
        const upComing = await axios.get(upComingGamesURL())
        const newGames = await axios.get(newGamesURL())
        dispatch(fetchGamesSuccess(popular, upComing, newGames))
}

export default fetchGames;