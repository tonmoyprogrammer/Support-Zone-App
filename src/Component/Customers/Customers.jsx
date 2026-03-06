import React, { use } from 'react';
import Customer from '../Customer/Customer';

const Customers = ({customers}) => {
    const getCustomers = use(customers);
    
    
    return (
        <div className='grid grid-cols-1 md:grid-cols-2  gap-4 mt-5 mb-15'>

            {
                getCustomers.map(customer => <Customer key={customer.id} customer={customer}></Customer>)
            }
            
        </div>
    );
};

export default Customers;