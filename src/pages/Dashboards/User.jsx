import React from 'react';
import Dashboard from "../../components/User/Dashboard";
import Navbar from "../../components/NavbarMain";

function User() {

  return (
    <div className="min-h-screen bg-teal-500">
       <nav className=' w-full h-17 flex items-center px-8 shadow-md rounded-b-2xl mb-4'>
            <Navbar />
       </nav>
      
      <Dashboard />
    </div>

  )
}

export default User;
