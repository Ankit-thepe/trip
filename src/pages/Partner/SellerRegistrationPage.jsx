import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { Store, Package, FileText, Shield, Check, ChevronRight } from 'lucide-react';

// Import the seller-specific phase components
import Phase1SellerInfo from '../../components/Partner/AutoParts/Phase1SellerInfo';
import Phase2SellerOperational from '../../components/Partner/AutoParts/Phase2SellerOperational';
import Phase3SellerDocuments from '../../components/Partner/AutoParts/Phase3SellerDocuments';
import Phase4SellerContract from '../../components/Partner/AutoParts/Phase4SellerContract';
import ConfirmationPage from '../../components/Partner/AutoParts/ConfirmationPage'; // Reusing confirmation page

const SellerRegistrationPage = () => {
    const [phase, setPhase] = useState(1);
    const [formData, setFormData] = useState({
        storeName: '', businessType: '', ownerName: '', email: '', phone: '', address: '', city: '', pincode: '',
        brandsDealt: '', partCategories: [], deliveryOptions: [], logisticsPartner: '',
        gstin: '', businessReg: null, panCard: null, aadhaarCard: null,
        accountHolderName: '', accountNumber: '', ifscCode: '',
        agreement: false,
    });
    const [errors, setErrors] = useState({});

    const phases = [
        { num: 1, title: 'Business Information', desc: 'Store, owner, & address details', icon: <Store/> },
        { num: 2, title: 'Operational Details', desc: 'Products & logistics', icon: <Package/> },
        { num: 3, title: 'Business Documents', desc: 'Legal & bank details', icon: <FileText/> },
        { num: 4, title: 'Partner Contract', desc: 'Terms & conditions', icon: <Shield/> },
    ];

    const validate = () => {
        const newErrors = {};
        if (phase === 1) {
            if (!formData.storeName) newErrors.storeName = 'Store name is required.';
            if (!formData.businessType) newErrors.businessType = 'Please select a business type.';
            if (!formData.ownerName) newErrors.ownerName = 'Owner name is required.';
            if (!/^\S+@\S+\.\S+$/.test(formData.email)) newErrors.email = 'A valid email is required.';
        }
        if (phase === 2) {
            if (formData.partCategories.length === 0) newErrors.partCategories = 'Select at least one category.';
        }
        if (phase === 3) {
            if (!formData.gstin) newErrors.gstin = 'GSTIN is required.';
            if (!formData.panCard) newErrors.panCard = 'PAN card is required.';
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
                console.log("Submitting Seller Form:", formData);
                setPhase(5);
            }
        }
    };

    const handleBack = () => setPhase(p => p - 1);
    
    const renderPhaseContent = () => {
        switch (phase) {
            case 1: return <Phase1SellerInfo data={formData} setData={setFormData} errors={errors} />;
            case 2: return <Phase2SellerOperational data={formData} setData={setFormData} errors={errors} />;
            case 3: return <Phase3SellerDocuments data={formData} setData={setFormData} errors={errors} />;
            case 4: return <Phase4SellerContract data={formData} setData={setFormData} errors={errors} />;
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
                            <h3 className="font-bold text-lg mb-4">Become a Seller Partner</h3>
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

export default SellerRegistrationPage;
