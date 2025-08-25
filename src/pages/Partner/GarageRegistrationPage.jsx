import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { Building, Clock, FileText, Shield, Check, ChevronRight } from 'lucide-react';

// Import the phase components
import Phase1Info from '../../components/Partner/Garage/Phase1Info';
import Phase2Operational from '../../components/Partner/Garage/Phase2Operational';
import Phase3Documents from '../../components/Partner/Garage/Phase3Documents';
import Phase4Contract from '../../components/Partner/Garage/Phase4Contract';
import ConfirmationPage from '../../components/Partner/Garage/ConfirmationPage';

const GarageRegistrationPage = () => {
    const [phase, setPhase] = useState(1);
    const [formData, setFormData] = useState({
        garageName: '', businessType: '', ownerName: '', email: '', phone: '', address: '', city: '', pincode: '',
        vehicleTypes: [], servicesPdf: null, workingHoursFrom: '09:00', workingHoursTo: '18:00',
        panCard: null, aadhaarCard: null, gstin: '', shopLicense: null, accountHolderName: '', accountNumber: '', ifscCode: '',
        agreement: false,
    });
    const [errors, setErrors] = useState({});

    const phases = [
        { num: 1, title: 'Garage Information', desc: 'Name, location, and contact', icon: <Building/> },
        { num: 2, title: 'Menu and operational details', desc: 'Services & timings', icon: <Clock/> },
        { num: 3, title: 'Garage documents', desc: 'Legal & bank details', icon: <FileText/> },
        { num: 4, title: 'Partner contract', desc: 'Terms & conditions', icon: <Shield/> },
    ];

    const validate = () => {
        const newErrors = {};
        if (phase === 1) {
            if (!formData.garageName) newErrors.garageName = 'Garage name is required.';
            if (!formData.businessType) newErrors.businessType = 'Please select a business type.';
            if (!formData.ownerName) newErrors.ownerName = 'Owner name is required.';
            if (!/^\S+@\S+\.\S+$/.test(formData.email)) newErrors.email = 'A valid email is required.';
            if (!/^\d{10}$/.test(formData.phone)) newErrors.phone = 'A valid 10-digit phone number is required.';
            if (!formData.address) newErrors.address = 'Address is required.';
        }
        if (phase === 2) {
            if (formData.vehicleTypes.length === 0) newErrors.vehicleTypes = 'Select at least one vehicle type.';
            if (!formData.servicesPdf) newErrors.servicesPdf = 'Please upload your services PDF.';
        }
        if (phase === 3) {
            if (!formData.panCard) newErrors.panCard = 'PAN card is required.';
            if (!formData.aadhaarCard) newErrors.aadhaarCard = 'Aadhaar card is required.';
            if (!formData.gstin) newErrors.gstin = 'GSTIN is required.';
            if (!formData.shopLicense) newErrors.shopLicense = 'Shop license is required.';
        }
        if (phase === 4) {
            if (!formData.agreement) newErrors.agreement = 'You must agree to the terms.';
        }
        setErrors(newErrors);
        return Object.keys(newErrors).length === 0;
    };

    const handleNext = () => {
        if (validate()) {
            if (phase < 4) {
                setPhase(p => p + 1);
            } else {
                console.log("Submitting form:", formData);
                setPhase(5); // Go to confirmation page
            }
        }
    };

    const handleBack = () => setPhase(p => p - 1);
    
    const renderPhaseContent = () => {
        switch (phase) {
            case 1: return <Phase1Info data={formData} setData={setFormData} errors={errors} />;
            case 2: return <Phase2Operational data={formData} setData={setFormData} errors={errors} />;
            case 3: return <Phase3Documents data={formData} setData={setFormData} errors={errors} />;
            case 4: return <Phase4Contract data={formData} setData={setFormData} errors={errors} />;
            case 5: return <ConfirmationPage />;
            default: return null;
        }
    };

    return (
        <div className="bg-gray-50 min-h-screen">
            <div className="container mx-auto px-4 py-8">
                <div className="flex flex-col lg:flex-row gap-8">
                    {/* Sidebar */}
                    <aside className="lg:w-1/3 xl:w-1/4">
                        <div className="p-6 bg-white rounded-lg border border-gray-200 shadow-sm sticky top-8">
                            <h3 className="font-bold text-lg mb-4">Complete your registration</h3>
                            <ul className="space-y-4">
                                {phases.map(p => (
                                    <li key={p.num} className="flex items-start">
                                        <div className={`mr-4 mt-1 flex-shrink-0 h-10 w-10 rounded-full flex items-center justify-center ${phase === p.num ? 'bg-indigo-600 text-white' : phase > p.num ? 'bg-green-500 text-white' : 'bg-gray-200 text-gray-500'}`}>
                                            {phase > p.num ? <Check/> : p.icon}
                                        </div>
                                        <div>
                                            <h4 className={`font-semibold ${phase === p.num ? 'text-indigo-700' : 'text-gray-800'}`}>{p.title}</h4>
                                            <p className="text-sm text-gray-500">{p.desc}</p>
                                            {phase === p.num && <span className="text-indigo-600 text-sm font-bold mt-1 block">Continue &rarr;</span>}
                                        </div>
                                    </li>
                                ))}
                            </ul>
                            <div className="mt-6 border-t pt-4">
                                <Link to="/help" className="flex justify-between items-center text-sm text-gray-600 hover:text-indigo-600">
                                    <span>Need help? Contact support</span>
                                    <ChevronRight size={16}/>
                                </Link>
                            </div>
                        </div>
                    </aside>

                    {/* Main Content */}
                    <main className="lg:w-2/3 xl:w-3/4">
                       {renderPhaseContent()}
                       {phase < 5 && (
                           <div className="mt-6 p-4 bg-white rounded-lg border border-gray-200 shadow-sm flex justify-between items-center">
                               <button onClick={handleBack} disabled={phase === 1} className="px-5 py-2 text-sm font-semibold text-gray-700 bg-gray-200 rounded-md hover:bg-gray-300 disabled:opacity-50 disabled:cursor-not-allowed">
                                   Back
                               </button>
                               <button onClick={handleNext} className="px-5 py-2 text-sm font-semibold text-white bg-indigo-600 rounded-md hover:bg-indigo-700">
                                   {phase === 4 ? 'Agree & Submit' : 'Next'}
                               </button>
                           </div>
                       )}
                    </main>
                </div>
            </div>
        </div>
    );
}

export default GarageRegistrationPage;
