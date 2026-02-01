import React from 'react';
import Hero from './Hero';
import Brokerage from './Brokerage';
import openAccount from '../OpenAccount';
function PricingPage() {
    return ( 
        <>
        <Hero/>
        <openAccount/>
        <Brokerage/>    
        </>
     );
}

export default PricingPage;