import React from 'react';
import { useSelector } from 'react-redux';
import { useParams } from 'react-router-dom';
// components
import Header from '../components/shared/Header';
import GameDetailes from '../components/GameDetailes';

const Detaile = () => {
    const params = useParams()
    
    const { upComing } = useSelector(state => state.games);
    const game = [];
    upComing.map(item => {
        if (item.id === Number(params.id)) {
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