import React, { createContext, useState, useEffect } from 'react';
// API
import { getGames } from '../services/api';

// Create Games Context
export const GamesContext = createContext()

const GamesContextProvider = ({children}) => {

    const [ games, setGames ] = useState([]);
    useEffect(() => {
        const fetchAPI = async () => {
            setGames(await getGames());
        }
        fetchAPI();
    },[]);

    return (
        <GamesContext.Provider value={games}>
            {children}
        </GamesContext.Provider>
    );
};

export default GamesContextProvider;