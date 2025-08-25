import React from 'react';
import { FormSection } from '../AutoParts/helpers'; // Reusing helpers
import { Tag, Truck, Package, CheckSquare } from 'lucide-react';

const Phase2SellerOperational = ({ data, setData, errors }) => {
    const handleCheckboxChange = (e, field) => {
        const { value, checked } = e.target;
        setData(prev => ({
            ...prev,
            [field]: checked ? [...prev[field], value] : prev[field].filter(v => v !== value)
        }));
    };

    return (
        <div>
            <h2 className="text-2xl font-bold text-gray-900 mb-4">Operational Details</h2>
            <FormSection title="Product Information">
                <div className="md:col-span-2">
                    <label className="block text-sm font-medium text-gray-700 mb-1">Brands Dealt (comma-separated)</label>
                    <div className="relative">
                        <Tag className="absolute inset-y-0 left-0 flex items-center pl-3 text-gray-400" size={18} />
                        <input
                            type="text" name="brandsDealt" value={data.brandsDealt} onChange={(e) => setData({...data, brandsDealt: e.target.value})}
                            placeholder="e.g., Bosch, LUK, Valeo"
                            className="w-full pl-10 p-2.5 border rounded-md focus:ring-2 border-gray-300 focus:ring-indigo-300 focus:outline-none"
                        />
                    </div>
                </div>
                <div className="md:col-span-2">
                    <label className="block text-sm font-medium text-gray-700 mb-2">Categories of Parts Sold</label>
                    <div className="grid grid-cols-2 lg:grid-cols-3 gap-3">
                        {['Engine Parts', 'Brakes', 'Suspension', 'Filters', 'Body Parts', 'Electricals'].map(cat => (
                           <label key={cat} className="flex items-center"><input type="checkbox" value={cat} checked={data.partCategories.includes(cat)} onChange={(e) => handleCheckboxChange(e, 'partCategories')} className="h-4 w-4 text-indigo-600" /> <span className="ml-2 text-sm">{cat}</span></label>
                        ))}
                    </div>
                    {errors.partCategories && <p className="text-red-500 text-xs mt-1">{errors.partCategories}</p>}
                </div>
            </FormSection>

            <FormSection title="Logistics & Delivery">
                <div className="md:col-span-2">
                    <label className="block text-sm font-medium text-gray-700 mb-1">Delivery Options</label>
                    <div className="flex flex-wrap gap-4 mt-2">
                        {['Local Delivery', 'State-wide Shipping', 'Pan-India Shipping'].map(opt => (
                            <label key={opt} className="flex items-center"><input type="checkbox" value={opt} checked={data.deliveryOptions.includes(opt)} onChange={(e) => handleCheckboxChange(e, 'deliveryOptions')} className="h-4 w-4 text-indigo-600" /> <span className="ml-2">{opt}</span></label>
                        ))}
                    </div>
                </div>
                <div className="md:col-span-2">
                     <label className="block text-sm font-medium text-gray-700 mb-1">Primary Logistics Partner (Optional)</label>
                     <div className="relative">
                        <Truck className="absolute inset-y-0 left-0 flex items-center pl-3 text-gray-400" size={18} />
                        <input
                            type="text" name="logisticsPartner" value={data.logisticsPartner} onChange={(e) => setData({...data, logisticsPartner: e.target.value})}
                            placeholder="e.g., Delhivery, Blue Dart"
                            className="w-full pl-10 p-2.5 border rounded-md focus:ring-2 border-gray-300 focus:ring-indigo-300 focus:outline-none"
                        />
                    </div>
                </div>
            </FormSection>
        </div>
    );
};

export default Phase2SellerOperational;
