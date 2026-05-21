import React from 'react';
import Education from './education';
import Award from './award';
import Pricing from './price';
import Stats from './stats';
import Hero from './hero';
import OpenAccount from '../openAccount';
import Navbar from '../navbar';
import Footer from '../footer';

function HomePage() {
    return ( 
        <div>
            {/* <Navbar/> */}
            <Hero/>
            <Award/>
            <Stats/>
            <Pricing/>
            <Education></Education>
            <OpenAccount/>
            {/* <Footer/> */}
        </div>

    );
}

export default HomePage;