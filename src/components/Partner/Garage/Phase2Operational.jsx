import React from 'react';
import { InputField, FileUploadField, FormSection } from './helpers';
import { Bike, Car, HardHat } from 'lucide-react';

const Phase2Operational = ({ data, setData, errors }) => {
    const handleCheckboxChange = (e, field) => {
        const { value, checked } = e.target;
        setData(prev => ({
            ...prev,
            [field]: checked ? [...prev[field], value] : prev[field].filter(v => v !== value)
        }));
    };

    const handleFileChange = (e) => setData({ ...data, servicesPdf: e.target.files[0] });

    return (
        <div>
            <h2 className="text-2xl font-bold text-gray-900 mb-4">Menu & Operational Details</h2>
            <FormSection title="Vehicle Types Serviced">
                <div className="md:col-span-2 grid grid-cols-2 lg:grid-cols-4 gap-4">
                    {[{ name: '2-Wheelers', icon: <Bike/> }, { name: '4-Wheelers', icon: <Car/> }, { name: 'Commercial', icon: <HardHat/> }].map(type => (
                        <label key={type.name} className={`flex flex-col items-center justify-center p-4 border rounded-lg cursor-pointer transition-all ${data.vehicleTypes.includes(type.name) ? 'bg-indigo-50 border-indigo-500 ring-2 ring-indigo-200' : 'bg-white hover:border-gray-400'}`}>
                            <input type="checkbox" value={type.name} checked={data.vehicleTypes.includes(type.name)} onChange={(e) => handleCheckboxChange(e, 'vehicleTypes')} className="sr-only" />
                            {React.cloneElement(type.icon, { className: `h-8 w-8 ${data.vehicleTypes.includes(type.name) ? 'text-indigo-600' : 'text-gray-500'}` })}
                            <span className="mt-2 text-sm font-semibold">{type.name}</span>
                        </label>
                    ))}
                </div>
                {errors.vehicleTypes && <p className="md:col-span-2 text-red-500 text-xs mt-1">{errors.vehicleTypes}</p>}
            </FormSection>

            <FormSection title="Services & Timings">
                <div className="md:col-span-2">
                    <FileUploadField id="servicesPdf" label="Upload Services Menu (PDF)" fileName={data.servicesPdf?.name} onChange={handleFileChange} error={errors.servicesPdf} helpText="Upload a PDF detailing all services you offer." />
                </div>
                <div>
                    <label className="block text-sm font-medium text-gray-700 mb-1">Working Hours</label>
                    <div className="flex items-center gap-2">
                        <InputField id="workingHoursFrom" label="" type="time" value={data.workingHoursFrom} onChange={(e) => setData({...data, workingHoursFrom: e.target.value})} />
                        <span>to</span>
                        <InputField id="workingHoursTo" label="" type="time" value={data.workingHoursTo} onChange={(e) => setData({...data, workingHoursTo: e.target.value})} />
                    </div>
                </div>
            </FormSection>
        </div>
    );
};

export default Phase2Operational;
