import React from 'react';
// components
import Header from '../components/shared/Header';
import Banner from '../components/Banner';
import Services from '../components/Services';
import Popular from '../components/Popular';
import Footer from '../components/Footer';

const Landing = () => {
    return (
        <>
        <Header />
        <Banner />
        <Services />
        <Popular />
        <Footer />
        </>
    );
};

export default Landing;