import React from 'react';
import Banner from '../Banner/Banner';
import BeingDeveloper from '../BeingDeveloper/BeingDeveloper';
import Header from '../Header/Header';

const Home = () => {
    return (
        <div>
            <Header />
            <Banner />
            <BeingDeveloper />
        </div>
    );
};

export default Home;