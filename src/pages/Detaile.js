import React, { useContext } from 'react';
import { useParams } from 'react-router-dom';
// Context
import { GamesContext } from '../context/GamesContextProvider';
// components
import Header from '../components/shared/Header';
import GameDetailes from '../components/GameDetailes';

const Detaile = () => {
    const params = useParams()
    const games = useContext(GamesContext);
    const game = [];
    games.map(item => {
        if (item.id == params.id) {
            game.push(item)
        }
        return game;
    })
    
    return (
        <>
            <Header />
            {
                game.map(item => <GameDetailes key={item.id} data={item} /> )
            }
        </>
    );
};

export default Detaile;