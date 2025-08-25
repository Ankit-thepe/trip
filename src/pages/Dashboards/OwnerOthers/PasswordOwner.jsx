import React, { useState } from 'react';
import { User, Mail, Phone, Lock, Eye, EyeOff, ShieldAlert } from 'lucide-react';

// --- Helper: Input Field Component ---
const SettingsInputField = ({ id, label, type, value, onChange, icon, disabled = false }) => (
    <div>
        <label htmlFor={id} className="block text-sm font-medium text-gray-700 mb-1">{label}</label>
        <div className="relative">
            <span className="absolute inset-y-0 left-0 flex items-center pl-3 text-gray-400">{icon}</span>
            <input
                type={type}
                id={id}
                name={id}
                value={value}
                onChange={onChange}
                disabled={disabled}
                className="w-full pl-10 p-3 border rounded-lg focus:ring-2 focus:ring-indigo-500 focus:outline-none transition-colors bg-gray-50 disabled:bg-gray-200 disabled:cursor-not-allowed"
            />
        </div>
    </div>
);

// --- Main Password Owner Page Component ---
export default function PasswordOwner() {
    const [isEditing, setIsEditing] = useState(false);
    const [showPassword, setShowPassword] = useState(false);
    const [userInfo, setUserInfo] = useState({
        name: 'Ramesh Kumar',
        email: 'ramesh.k@example.com',
        phone: '9876543210',
    });
    const [passwords, setPasswords] = useState({
        current: '',
        new: '',
        confirm: '',
    });

    const handleInfoChange = (e) => {
        setUserInfo({ ...userInfo, [e.target.name]: e.target.value });
    };

    const handlePasswordChange = (e) => {
        setPasswords({ ...passwords, [e.target.name]: e.target.value });
    };
    
    const handleSaveChanges = (e) => {
        e.preventDefault();
        // Add logic to save user info to the backend here
        console.log('Saving user info:', userInfo);
        setIsEditing(false);
        // Add a notification for success
    };

    const handleChangePassword = (e) => {
        e.preventDefault();
        // Add logic to change password here
        console.log('Changing password...');
        // Add validation and success/error notifications
    };

    return (
        <div className="bg-gray-100 min-h-screen p-4 sm:p-6 lg:p-8 font-sans">
            <div className="max-w-4xl mx-auto">
                {/* --- Header --- */}
                <div className="mb-8">
                    <h1 className="text-4xl font-extrabold text-gray-900">Account & Security</h1>
                    <p className="mt-2 text-lg text-gray-600">Manage your personal information, change your password, and secure your account.</p>
                </div>

                {/* --- Section 1: Personal Information --- */}
                <div className="bg-white p-6 rounded-xl shadow-sm mb-8">
                    <div className="flex justify-between items-center border-b pb-4 mb-6">
                        <h2 className="text-2xl font-bold text-gray-800">Personal Information</h2>
                        {!isEditing ? (
                            <button onClick={() => setIsEditing(true)} className="px-4 py-2 text-sm font-semibold text-white bg-indigo-600 rounded-md hover:bg-indigo-700">
                                Edit
                            </button>
                        ) : (
                            <div className="flex gap-2">
                                <button onClick={() => setIsEditing(false)} className="px-4 py-2 text-sm font-semibold text-gray-700 bg-gray-200 rounded-md hover:bg-gray-300">
                                    Cancel
                                </button>
                                <button onClick={handleSaveChanges} className="px-4 py-2 text-sm font-semibold text-white bg-green-600 rounded-md hover:bg-green-700">
                                    Save Changes
                                </button>
                            </div>
                        )}
                    </div>
                    <form className="grid grid-cols-1 md:grid-cols-2 gap-6">
                        <SettingsInputField id="name" label="Full Name" type="text" value={userInfo.name} onChange={handleInfoChange} icon={<User size={18}/>} disabled={!isEditing} />
                        <SettingsInputField id="email" label="Email Address" type="email" value={userInfo.email} onChange={handleInfoChange} icon={<Mail size={18}/>} disabled={!isEditing} />
                        <SettingsInputField id="phone" label="Phone Number" type="tel" value={userInfo.phone} onChange={handleInfoChange} icon={<Phone size={18}/>} disabled={!isEditing} />
                    </form>
                </div>

                {/* --- Section 2: Change Password --- */}
                <div className="bg-white p-6 rounded-xl shadow-sm mb-8">
                    <h2 className="text-2xl font-bold text-gray-800 border-b pb-4 mb-6">Change Password</h2>
                    <form onSubmit={handleChangePassword} className="space-y-6 max-w-md">
                         <div>
                            <label htmlFor="current" className="block text-sm font-medium text-gray-700 mb-1">Current Password</label>
                            <div className="relative">
                                <span className="absolute inset-y-0 left-0 flex items-center pl-3 text-gray-400"><Lock size={18}/></span>
                                <input id="current" name="current" type={showPassword ? 'text' : 'password'} value={passwords.current} onChange={handlePasswordChange} className="w-full pl-10 p-3 border rounded-lg focus:ring-2 focus:ring-indigo-500 focus:outline-none"/>
                            </div>
                        </div>
                        <div>
                            <label htmlFor="new" className="block text-sm font-medium text-gray-700 mb-1">New Password</label>
                            <div className="relative">
                                <span className="absolute inset-y-0 left-0 flex items-center pl-3 text-gray-400"><Lock size={18}/></span>
                                <input id="new" name="new" type={showPassword ? 'text' : 'password'} value={passwords.new} onChange={handlePasswordChange} className="w-full pl-10 p-3 border rounded-lg focus:ring-2 focus:ring-indigo-500 focus:outline-none"/>
                            </div>
                        </div>
                        <div>
                            <label htmlFor="confirm" className="block text-sm font-medium text-gray-700 mb-1">Confirm New Password</label>
                            <div className="relative">
                                <span className="absolute inset-y-0 left-0 flex items-center pl-3 text-gray-400"><Lock size={18}/></span>
                                <input id="confirm" name="confirm" type={showPassword ? 'text' : 'password'} value={passwords.confirm} onChange={handlePasswordChange} className="w-full pl-10 p-3 border rounded-lg focus:ring-2 focus:ring-indigo-500 focus:outline-none"/>
                            </div>
                        </div>
                        <div className="flex items-center justify-between">
                            <label className="flex items-center text-sm text-gray-600 cursor-pointer">
                                <input type="checkbox" checked={showPassword} onChange={() => setShowPassword(!showPassword)} className="h-4 w-4 text-indigo-600 rounded border-gray-300"/>
                                <span className="ml-2">Show passwords</span>
                            </label>
                            <button type="submit" className="px-6 py-2 font-semibold text-white bg-indigo-600 rounded-md hover:bg-indigo-700">
                                Update Password
                            </button>
                        </div>
                    </form>
                </div>

                {/* --- Section 3: Account Actions --- */}
                <div className="bg-white p-6 rounded-xl shadow-sm border-l-4 border-red-500">
                     <h2 className="text-2xl font-bold text-gray-800 mb-2">Account Actions</h2>
                     <p className="text-gray-600 mb-6">Be careful, these actions are permanent and cannot be undone.</p>
                     <button className="flex items-center px-4 py-2 font-semibold text-white bg-red-600 rounded-md hover:bg-red-700">
                        <ShieldAlert size={18} className="mr-2"/> Deactivate Account
                     </button>
                </div>
            </div>
        </div>
    );
}
