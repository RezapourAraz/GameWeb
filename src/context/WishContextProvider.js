import React, { useReducer, createContext } from 'react';

const initialState = {
    wishList: [],
    counter: 0,
}

const wishReducer = (state, action) => {
    switch(action.type) {
        case "ADD_ITEM":
            if(!state.wishList.find(item => item.id === action.payload.id)) {
                state.wishList.push({
                    ...action.payload,
                    ...state.counter++
                })
            }
            return {
                ...state,
                wishList: [...state.wishList]
            }
        case "REMOVE_ITEM":
            const newwihlist = state.wishList.filter(item => item.id !== action.payload.id)
            state.counter--
            return {
                ...state,
                wishList: [...newwihlist],
            }
            case "CLEAR":
            return {
                wishList: [],
                counter: 0
            }
        default:
            return state;
    }   
}


export const WishContext = createContext()

const WishContextProvider = ({children}) => {

    const [state, dispatch] = useReducer(wishReducer, initialState);

    return (
        <WishContext.Provider value={{state, dispatch}}>
            {children}
        </WishContext.Provider>
    );
};

export default WishContextProvider;