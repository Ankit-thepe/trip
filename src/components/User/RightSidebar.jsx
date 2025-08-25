import React from 'react'
import AddressActivity from './AddressActivity'
import MyVehicles from './MyVehicles'
import BookingOrderCart from './BookingOrderCart'


const RightSidebar = () => {
  return (
    <div className='mt-4 bg-gray-100 rounded-xl p-6 shadow-md'>
      <AddressActivity />
      <div className="my-8">
        
        <MyVehicles />
      </div>
      <div className="my-8">
        
        <BookingOrderCart />
      </div>
      
    </div>
  )
}

export default RightSidebar