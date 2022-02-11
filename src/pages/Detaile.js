import React from 'react';
import { useSelector } from 'react-redux';
import { useParams } from 'react-router-dom';
// components
import Header from '../components/shared/Header';
import GameDetailes from '../components/GameDetailes';
import Footer from '../components/Footer';

const Detaile = () => {
    const params = useParams()
    const { allGames } = useSelector(state => state.games);
    const game = [];
    allGames.map(item => {
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
            <Footer />
        </>
    );
};

export default Detaile;