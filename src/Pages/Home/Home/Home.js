import React from 'react';
import Banner from '../Banner/Banner';
import BeingDeveloper from '../BeingDeveloper/BeingDeveloper';
import Header from '../Header/Header';
import Projects from '../Projects/Projects';

const Home = () => {
    return (
        <div>
            <Header />
            <Banner />
            <BeingDeveloper />
            <Projects />
        </div>
    );
};

export default Home;