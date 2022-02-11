import React from 'react';
// Components
import Header from '../components/shared/Header';
import GamesList from '../components/GamesList';
import Footer from '../components/Footer';

const Games = () => {
    return (
        <>
            <Header />
            <GamesList/>
            <Footer />
        </>
    );
};

export default Games;