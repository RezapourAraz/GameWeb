const initState ={
    wishlist: [],
    counter: 0,
}

const wishReducer = (state=initState, action) => {
    switch (action.type) {
        case "ADD_ITEM":
            if (!state.wishlist.find(item => item.id === action.payload.id)) {
                state.wishlist.push({
                    ...action.payload,
                    ...state.counter++
                })
            }
            return {
                ...state,
                wishlist: [...state.wishlist]
            }
        case "REMOVE_ITEM":
            const newWishList = state.wishlist.filter(item => item.id !== action.payload.id)
            state.counter--
            return {
                ...state,
                wishlist: [...newWishList]
            }
        case "CLEAR":
            return {
                wishlist: [],
                counter: 0,
            }
        default:
            return state;
    }
}

export default wishReducer; 