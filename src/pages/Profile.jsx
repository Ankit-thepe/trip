import React from 'react';
// import { useUser } from '../hooks/useApi';
// import { useAuth } from '../hooks/useAuth';

const Profile = () => {
//   const { user, isAuthenticated, logout } = useAuth();
//   const { data: userData, isLoading, error } = useUser();

//   if (!isAuthenticated) {
//     return (
//       <div className="min-h-screen flex items-center justify-center">
//         <div className="text-center">
//           <h2 className="text-2xl font-bold mb-4">Please log in</h2>
//           <a href="/login" className="text-blue-500 hover:underline">
//             Go to Login
//           </a>
//         </div>
//       </div>
//     );
//   }

//   if (isLoading) {
//     return (
//       <div className="min-h-screen flex items-center justify-center">
//         <div className="text-center">
//           <div className="animate-spin rounded-full h-32 w-32 border-b-2 border-blue-500"></div>
//           <p className="mt-4">Loading profile...</p>
//         </div>
//       </div>
//     );
//   }

//   if (error) {
//     return (
//       <div className="min-h-screen flex items-center justify-center">
//         <div className="text-center">
//           <h2 className="text-2xl font-bold mb-4 text-red-600">Error loading profile</h2>
//           <p className="text-gray-600">{error.message}</p>
//         </div>
//       </div>
//     );
//   }

  return (
    <div className="min-h-screen bg-gray-50 py-8">
      <div className="max-w-4xl mx-auto px-4">
        {/* <div className="bg-white rounded-lg shadow-lg p-8">
          <div className="flex justify-between items-center mb-8">
            <h1 className="text-3xl font-bold text-gray-800">Profile</h1>
            <button
              onClick={logout}
              className="px-4 py-2 bg-red-500 text-white rounded hover:bg-red-600 transition"
            >
              Logout
            </button>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-2">
                Username
              </label>
              <div className="p-3 bg-gray-100 rounded-md">
                {user?.username || userData?.username}
              </div>
            </div>
            
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-2">
                Email
              </label>
              <div className="p-3 bg-gray-100 rounded-md">
                {user?.email || userData?.email}
              </div>
            </div>
            
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-2">
                User Type
              </label>
              <div className="p-3 bg-gray-100 rounded-md">
                <span className={`px-2 py-1 rounded text-sm ${
                  user?.userType === 'ADMIN' ? 'bg-red-100 text-red-800' :
                  user?.userType === 'SERVICE_CENTER' ? 'bg-blue-100 text-blue-800' :
                  'bg-green-100 text-green-800'
                }`}>
                  {user?.userType || userData?.userType}
                </span>
              </div>
            </div>
          </div>
          
          {user?.userType === 'SERVICE_CENTER' && (
            <div className="mt-8 pt-8 border-t">
              <h2 className="text-xl font-semibold mb-4">Service Center Actions</h2>
              <div className="space-y-4">
                <a
                  href="/partner-form"
                  className="inline-block px-6 py-3 bg-blue-500 text-white rounded hover:bg-blue-600 transition"
                >
                  Register Service Center
                </a>
              </div>
            </div>
          )}
        </div> */}
      </div>
    </div>
  );
};

export default Profile;