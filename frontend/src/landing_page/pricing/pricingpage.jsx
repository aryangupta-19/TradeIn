import React from 'react';
import Navbar from '../navbar';
import BrokeragePage from './brokerage';
import Hero from './hero';
import Footer from '../footer';
import AccountInfo from './accountingInfo';
import Charges from './Charges';

function PricingPage() {
    return (
        <div>
            <Hero/>
            <BrokeragePage/>
            <AccountInfo/>
            <Charges/>
        </div>
    );
}

export default PricingPage;