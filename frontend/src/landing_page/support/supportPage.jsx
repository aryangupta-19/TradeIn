import React from 'react';
import Navbar from '../navbar';
import Hero from './hero';
import CreateTicket from './createTicket';
import Footer from '../footer';

function SupportPage() {
    return (
       <div>
            <Hero/>
            <CreateTicket/>
       </div>
    );
}

export default SupportPage;