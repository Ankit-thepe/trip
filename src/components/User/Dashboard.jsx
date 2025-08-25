import React from 'react'
import LeftSidebar from './LeftSidebar';
import RightSidebar from './RightSidebar';

const Dashboard = () => {
  return (
    <div className="grid grid-cols-16 gap-2 bg-gray-100 shadow-lg rounded-2xl p-6 max-w-full min-h-[80vh]">
  {/* Left Sidebar (3 or 4 columns) */}
  <div className="sticky top-0 h-max col-span-16 md:col-span-8 lg:col-span-4 overflow-y-auto">
    <LeftSidebar />
  </div>

  {/* Right Sidebar (8 or 9 columns) */}
  <div className="col-span-16 md:col-span-8 lg:col-span-12 overflow-y-auto">
    <RightSidebar />
  </div>
</div>

  )
}

export default Dashboard;