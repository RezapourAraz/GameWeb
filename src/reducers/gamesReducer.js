const initState = {
    loading: false,
    popular: [],
    upComing: [],
    newGames: [],
}

const gameReducer = (state=initState, action) => {
    switch (action.type) {
        case "FETCH_GAMES_REQUEST":
            return {
                ...state,
                loading: true
            }
        case "FETCH_GAMES_SUCCESS":
            return {
                ...state,
                loading: false,
                popular: action.payload.popular,
                upComing: action.payload.upComing,
                newGames: action.payload.newGames,

            }
        default:
            return state;
    }
}
export default gameReducer;