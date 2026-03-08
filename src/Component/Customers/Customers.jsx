import React, { use } from 'react';
import Customer from '../Customer/Customer';

const Customers = ({customers,handleCount}) => {
   
    
    
    return (
        <div className='grid grid-cols-1 md:grid-cols-2  gap-4 mt-5 pb-15 '>

            {
                customers.map(customer => <Customer key={customer.id} 
                    handleCount={handleCount} customer={customer}></Customer>)
            }
            
        </div>
    );
};

export default Customers;