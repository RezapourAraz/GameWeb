import React from 'react';
// components
import Header from '../components/shared/Header';
import Banner from '../components/Banner';
import Services from '../components/Services';
import Popular from '../components/Popular';

const Landing = () => {
    return (
        <>
        <Header />
        <Banner />
        <Services />
        <Popular />
        </>
    );
};

export default Landing;