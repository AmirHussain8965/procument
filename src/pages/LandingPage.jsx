import React from 'react'
import Hero from '../components/hero/Hero';
import Header from '../components/header/Header';
import Balance from '../components/balance/Balance';
import PDS from '../components/pds/PDS';
import Contact from '../components/contact/Contact';
import Map from '../components/map/Map';
import Works from '../components/works/Works';

const LandingPage = () => {
    return (
        <>
            <Header />
            <Hero />
            <Balance />
            <PDS />
            <Works/>
            <Contact />
            <Map />
        </>
    )
}

export default LandingPage;