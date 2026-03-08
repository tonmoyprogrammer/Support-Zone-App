import React from 'react';
import img1 from"../../assets/vector1.png"
const Banner = ({count,resolved}) => {
    return (
        <div className='bg-[#62738210] py-20 '>

            <div className="max-w-11/12 mx-auto flex
             flex-col md:flex-row justify-between gap-10">
            <div className="flex  justify-between items-center 
            bg-gradient-to-r from-purple-600 via-purple-500 to-purple-800
             w-full rounded-3xl">
               <img src={img1} alt="" />
                <div className="mx-auto align-middle items-center text-center space-y-2">
                <p className="text-2xl text-white">In Progress</p>
                <p className='font-semibold text-white text-4xl'>{count.length}</p>
                </div>
               <img src={img1} alt="" />

            </div>
            <div className="flex justify-between items-center 
            bg-gradient-to-r from-green-300 via-green-500  to-green-800
             w-full rounded-3xl">
               <img src={img1} alt="" />
                <div className="mx-auto text-center">
                    <p className="text-2xl text-white ">Resolved</p>
                <p className='font-semibold text-white text-4xl'>{resolved.length}</p>
                </div>
               <img src={img1} alt="" />

            </div>

            </div>

        </div>
    );
};

export default Banner;