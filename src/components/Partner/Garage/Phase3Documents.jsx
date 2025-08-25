import React from 'react';
import { InputField, FileUploadField, FormSection } from './helpers';

const Phase3Documents = ({ data, setData, errors }) => {
    const handleFileChange = (e) => setData({ ...data, [e.target.name]: e.target.files[0] });
    const handleChange = (e) => setData({ ...data, [e.target.name]: e.target.value });

    return (
        <div>
            <h2 className="text-2xl font-bold text-gray-900 mb-4">Document Verification</h2>
            <FormSection title="Owner Documents">
                <FileUploadField id="panCard" label="Owner's PAN Card" fileName={data.panCard?.name} onChange={handleFileChange} error={errors.panCard} />
                <FileUploadField id="aadhaarCard" label="Owner's Aadhaar Card" fileName={data.aadhaarCard?.name} onChange={handleFileChange} error={errors.aadhaarCard} />
            </FormSection>

            <FormSection title="Garage Documents">
                <InputField id="gstin" label="GSTIN" value={data.gstin} onChange={handleChange} error={errors.gstin} />
                <FileUploadField id="shopLicense" label="Shop & Establishment License" fileName={data.shopLicense?.name} onChange={handleFileChange} error={errors.shopLicense} />
            </FormSection>

            <FormSection title="Bank Account Details">
                <InputField id="accountHolderName" label="Account Holder Name" value={data.accountHolderName} onChange={handleChange} error={errors.accountHolderName} />
                <InputField id="accountNumber" label="Account Number" value={data.accountNumber} onChange={handleChange} error={errors.accountNumber} />
                <InputField id="ifscCode" label="IFSC Code" value={data.ifscCode} onChange={handleChange} error={errors.ifscCode} />
            </FormSection>
        </div>
    );
};

export default Phase3Documents;
