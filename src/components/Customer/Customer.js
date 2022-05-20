import React from 'react'
import { useSelector } from 'react-redux'
import Customers from './Customers'

const Customer = () => {
  const customers=useSelector(state=>state.customers)
  return (
    <div>
        <h4>Customer Success Manager</h4>
   <form className='w-100'>
   <div className="input-group w-100 p-1">
    <input type="text" placeholder="Add by Name or email" />
   <div className="input-group-btn">
   <button className="input-group-addon" type="submit">Add CSM</button>
   </div>
  </div>
   </form>
   <table class="table">
  <tbody>
   {
     customers.map((customer)=>(

   <Customers  customer={customer}/>
     ))
   }

  </tbody>
</table>
    </div>
  );
};

export default Customer;