import React from 'react';
import { InputField, FormSection } from '../AutoParts/helpers'; // Reusing helpers
import { Store, User, Mail, Phone, MapPin } from 'lucide-react';

const Phase1SellerInfo = ({ data, setData, errors }) => {
    const handleChange = (e) => setData({ ...data, [e.target.name]: e.target.value });

    return (
        <div>
            <h2 className="text-2xl font-bold text-gray-900 mb-4">Seller & Business Information</h2>
            <FormSection title="Business Details">
                <div className="md:col-span-2">
                    <InputField id="storeName" label="Store / Business Name" value={data.storeName} onChange={handleChange} error={errors.storeName} icon={<Store size={18}/>} placeholder="e.g., National Auto Parts" />
                </div>
                <div className="md:col-span-2">
                    <label className="block text-sm font-medium text-gray-700 mb-1">Business Type</label>
                    <div className="flex flex-wrap gap-4 mt-2">
                        {['Retailer', 'Wholesaler', 'Distributor', 'Manufacturer'].map(type => (
                            <label key={type} className="flex items-center">
                                <input type="radio" name="businessType" value={type} checked={data.businessType === type} onChange={handleChange} className="h-4 w-4 text-indigo-600 focus:ring-indigo-500" />
                                <span className="ml-2">{type}</span>
                            </label>
                        ))}
                    </div>
                    {errors.businessType && <p className="text-red-500 text-xs mt-1">{errors.businessType}</p>}
                </div>
            </FormSection>

            <FormSection title="Owner / Contact Person Details">
                <InputField id="ownerName" label="Full Name" value={data.ownerName} onChange={handleChange} error={errors.ownerName} icon={<User size={18}/>} placeholder="e.g., Sunil Verma" />
                <InputField id="email" label="Email Address" value={data.email} onChange={handleChange} error={errors.email} icon={<Mail size={18}/>} placeholder="seller@example.com" />
                <InputField id="phone" label="Phone Number" value={data.phone} onChange={handleChange} error={errors.phone} icon={<Phone size={18}/>} placeholder="9876543210" />
            </FormSection>

            <FormSection title="Business Address">
                <div className="md:col-span-2">
                    <InputField id="address" label="Street Address / Shop Number" value={data.address} onChange={handleChange} error={errors.address} icon={<MapPin size={18}/>} placeholder="Plot No. 45, Auto Market" />
                </div>
                <InputField id="city" label="City" value={data.city} onChange={handleChange} error={errors.city} />
                <InputField id="pincode" label="Pincode" value={data.pincode} onChange={handleChange} error={errors.pincode} />
            </FormSection>
        </div>
    );
};

export default Phase1SellerInfo;
