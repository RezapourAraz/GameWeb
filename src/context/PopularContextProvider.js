import React, { createContext, useState, useEffect } from 'react';
// API
import { getGames } from '../services/api';

// Create Games Context
export const PopularContext = createContext()

const PopularContextProvider = ({children}) => {

    const [ popular, setPopular ] = useState([]);
    useEffect(() => {
        const fetchAPI = async () => {
            setPopular(await getGames("publishers"));
        }
        fetchAPI();
    },[]);

    return (
        <PopularContext.Provider value={popular}>
            {children}
        </PopularContext.Provider>
    );
};

export default PopularContextProvider;