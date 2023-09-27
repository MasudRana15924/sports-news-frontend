import React from 'react';
import Hero from '../../components/hero/Hero';
import Sports from '../sports/Sports';

const Maindashboard = () => {
    return (
        <div className="w-3/4 mx-auto">
           <Hero></Hero>
           <Sports></Sports>
        </div>
    );
};

export default Maindashboard;