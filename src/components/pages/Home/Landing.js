import React from 'react';

const Landing = () => {
    return (
        <div className='mb-sm-5 md:visible items-center h-[85vh] md:bg-hero-image bg-no-repeat bg-cover z-10' rel="preload">
            <div className='flex flex-col gap-[16px] mt-[40px] justify-center items-center'>
                <h2 className='logo  mb-md-4 text-[40px] font-bold text-green-500'>InsureHub</h2>
                <h1 className='motto  text-[32px] font-mediums text-gray-00'>We Promise To Keep You Alright</h1>
                <p className=' text-[24px] mt-md-3 text-gray-500'>
                    Instant everything. Great price. Big heart.
                </p>
            </div>
        </div>
    );
};

export default Landing;
