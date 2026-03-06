import React from 'react';
import img1 from"../../assets/vector1.png"
const Banner = () => {
    return (
        <div className='bg-[#62738210] py-20'>

            <div className="max-w-11/12 mx-auto flex justify-between gap-10">
            <div className="flex  justify-between items-center 
            bg-gradient-to-r from-purple-600 via-purple-500 to-purple-800
             w-full rounded-3xl">
               <img src={img1} alt="" />
                <div className="text-center">
                    <p className="text-2xl text-white">In-Progress</p>
                <h2 className='font-semibold text-white text-4xl'>0</h2>
                </div>
               <img src={img1} alt="" />

            </div>
            <div className="flex justify-between items-center 
            bg-gradient-to-r from-green-300 via-green-500  to-green-800
             w-full rounded-3xl">
               <img src={img1} alt="" />
                <div className="text-center">
                    <p className="text-2xl text-white">In-Progress</p>
                <h2 className='font-semibold text-white text-4xl'>0</h2>
                </div>
               <img src={img1} alt="" />

            </div>

            </div>

        </div>
    );
};

export default Banner;