import React from 'react';
import heroOne from '../../assets/hero1.jpg';
import heroTwo from '../../assets/hero2.jpg';
import heroThree from '../../assets/hero3.jpg';
import heroFour from '../../assets/hero4.jpg';

const Hero = () => {
    return (
        <div className="w-full lg:flex justify-between gap-4 mt-16 lg:mt-24">
            <div className="w-3/4 hidden lg:block ">
                <img src={heroOne} alt="" className="w-full h-full" />
            </div>
            <div className="w-full ">
                <div className="w-full flex gap-2">
                    <div className="w-full">
                        <img src={heroTwo} alt="" className="w-full " />
                    </div>
                    <div className="w-full">
                        <img src={heroThree} alt="" className="w-full" />
                    </div>
                </div>
                <div className="w-full flex gap-2">
                    <div className="w-full">
                        <img src={heroFour} alt="" className="w-full " />
                    </div>
                    <div className="w-full">
                        <img src={heroTwo} alt="" className="w-full" />
                    </div>
                </div>
            </div>
            <div className="w-2/4  hidden lg:block ">
                <img src={heroOne} alt="" className="w-full h-full" />
            </div>

        </div>
    );
};

export default Hero;