import React from 'react';
import { Routes } from 'react-router';
import Footer from '../../Shared/Footer/Footer';
import Header from '../../Shared/Header/Header';
import Banner from '../Banner/Banner';
import BeingDeveloper from '../BeingDeveloper/BeingDeveloper';
import Email from '../Email/Email';
import Projects from '../Projects/Projects';

const Home = () => {
    return (
        <div>
            <Header />
            <Banner />
            <BeingDeveloper />
            <Projects />
            <Email />
            <Footer />
        </div>
    );
};

export default Home;