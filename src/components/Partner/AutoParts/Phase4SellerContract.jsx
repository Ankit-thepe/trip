import React from 'react';

const Phase4SellerContract = ({ data, setData, errors }) => (
    <div>
        <h2 className="text-2xl font-bold text-gray-900 mb-4">Seller Partner Contract</h2>
        <div className="p-4 border rounded-lg bg-gray-50 h-64 overflow-y-scroll">
            <h3 className="font-bold mb-2">Seller Terms and Conditions</h3>
            <p className="text-sm text-gray-600 space-y-2">
                This agreement is made between FicnSlot ("the Platform") and you ("the Seller").
                <br/>1. The Seller agrees to list genuine and quality-assured auto parts on the Platform.
                <br/>2. The Platform will charge a transaction fee of 10% on the value of each successfully delivered order.
                <br/>3. Payouts for orders will be settled to the Seller's bank account within 10 working days post-delivery confirmation.
                <br/>4. The Seller is responsible for packaging and handing over the products to the logistics partner in a timely manner.
                <br/>[...more legal text...]
            </p>
        </div>
        <div className="mt-4">
            <label className="flex items-center">
                <input type="checkbox" name="agreement" checked={data.agreement} onChange={(e) => setData({...data, agreement: e.target.checked})} className="h-4 w-4 text-indigo-600 focus:ring-indigo-500" />
                <span className="ml-2 text-sm text-gray-700">I have read and agree to the terms and conditions of the Seller Partner Contract.</span>
            </label>
            {errors.agreement && <p className="text-red-500 text-xs mt-1">{errors.agreement}</p>}
        </div>
    </div>
);

export default Phase4SellerContract;
