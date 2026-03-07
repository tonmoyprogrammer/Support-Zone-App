import React from 'react';

const Footer = () => {
    return (
     <footer className='bg-black py-15'>
         <div className=' w-11/12 mx-auto grid grid-cols-5 gap-10 '>

            <div className="space-y-3 w-full ">
                <h1 className='font-semibold text-2xl text-white'>S-Ticket System</h1>
                <p className="text-gray-400">Lorem Ipsum is simply dummy text of the printing 
                    and typesetting industry. Lorem Ipsum has been the industry's 
                    standard dummy text ever since the 1500s, when an unknown printer took a 
                    galley of type and scrambled it to make a type specimen book.
                </p>
            </div>

            <div className="space-y-3 w-full">
                <h1 className='font-semibold text-2xl text-white'>Company</h1>
                <p className="text-gray-400">About Us</p>
                <p className="text-gray-400">Our Mission</p>
                <p className="text-gray-400">Contact Saled</p>
            </div>

            <div className="space-y-3 w-full">
                <h1 className='font-semibold text-2xl text-white'>Services</h1>
                <p className="text-gray-400">Product & Services</p>
                <p className="text-gray-400">Customer Stories</p>
                <p className="text-gray-400">Download Apps</p>
            </div>

            <div className="space-y-3 w-full">
                <h1  className='font-semibold text-2xl text-white'>Information</h1>
                <p className="text-gray-400">Privacy Policy</p>
                <p className="text-gray-400">Terms & Conditions</p>
                <p className="text-gray-400">Join Us</p>
            </div>

            <div className="space-y-3 w-full ">
                <h1  className='font-semibold text-2xl text-white'>Social Links</h1>
                <div className="flex gap-2  text-gray-400">
                    <img src="https://i.ibb.co.com/M5RmhYfK/fi-5969020.png" alt="" className=''/>
                    <p className="">@CS - Ticket System </p>
                </div>
                <div className="flex gap-2  text-gray-400">
                    <img src="https://i.ibb.co.com/LzhJystW/Group-8.png" alt="" className=''/>
                    <p className="">@CS - Ticket System </p>
                </div>
                <div className="flex gap-2  text-gray-400">
                    <img src="https://i.ibb.co.com/My40jkr8/Group-7.png" alt="" className=''/>
                    <p className="">@CS - Ticket System </p>
                </div>
                <div className="flex gap-2  text-gray-400">
                    <img src="https://i.ibb.co.com/m52MYvWr/Vector-1.png" alt="" className=''/>
                    <p className="">@CS - Ticket System </p>
                </div>
            </div>
         
        </div>

       </footer>
    );
};

export default Footer;