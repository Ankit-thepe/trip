import React from 'react';

const Phase4Contract = ({ data, setData, errors }) => (
    <div>
        <h2 className="text-2xl font-bold text-gray-900 mb-4">Partner Contract</h2>
        <div className="p-4 border rounded-lg bg-gray-50 h-64 overflow-y-scroll">
            <h3 className="font-bold mb-2">Terms and Conditions</h3>
            <p className="text-sm text-gray-600 space-y-2">
                This agreement is made between FicnSlot ("the Platform") and you ("the Partner").
                <br/>1. The Partner agrees to provide services as described in their uploaded menu with professionalism and care.
                <br/>2. The Platform will charge a commission of 15% on every booking made through the platform.
                <br/>3. Payments will be settled to the Partner's provided bank account within 7 working days of service completion.
                <br/>4. The Partner is responsible for maintaining all necessary licenses and permits.
                <br/>[...more legal text...]
            </p>
        </div>
        <div className="mt-4">
            <label className="flex items-center">
                <input type="checkbox" name="agreement" checked={data.agreement} onChange={(e) => setData({...data, agreement: e.target.checked})} className="h-4 w-4 text-indigo-600 focus:ring-indigo-500" />
                <span className="ml-2 text-sm text-gray-700">I have read and agree to the terms and conditions of the Partner Contract.</span>
            </label>
            {errors.agreement && <p className="text-red-500 text-xs mt-1">{errors.agreement}</p>}
        </div>
    </div>
);

export default Phase4Contract;
