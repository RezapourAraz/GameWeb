import { combineReducers } from "redux";
import gameReducer from "./gamesReducer";
import wishReducer from "./wishReducer";

const rootReducer = combineReducers({
    games: gameReducer,
    wishList: wishReducer,
})

export default rootReducer;