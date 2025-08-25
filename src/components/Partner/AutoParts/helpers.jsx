import React from 'react';
import { FileUp } from 'lucide-react';

// Input Field Component
export const InputField = ({ id, label, value, onChange, error, icon, type = 'text', placeholder }) => (
  <div className="w-full">
    <label htmlFor={id} className="block text-sm font-medium text-gray-700 mb-1">{label}</label>
    <div className="relative">
      {icon && <span className="absolute inset-y-0 left-0 flex items-center pl-3 text-gray-400">{icon}</span>}
      <input
        type={type} id={id} name={id} value={value} onChange={onChange} placeholder={placeholder}
        className={`w-full ${icon ? 'pl-10' : 'pl-3'} p-2.5 border rounded-md focus:ring-2 transition-colors ${error ? 'border-red-500 focus:ring-red-300' : 'border-gray-300 focus:ring-indigo-300'} focus:outline-none`}
      />
    </div>
    {error && <p className="text-red-500 text-xs mt-1">{error}</p>}
  </div>
);

// File Upload Component
export const FileUploadField = ({ id, label, fileName, onChange, error, helpText }) => (
    <div>
        <label className="block text-sm font-medium text-gray-700">{label}</label>
        <div className={`mt-1 flex justify-center px-6 pt-5 pb-6 border-2 ${error ? 'border-red-300' : 'border-gray-300'} border-dashed rounded-md`}>
            <div className="space-y-1 text-center">
                <FileUp className="mx-auto h-12 w-12 text-gray-400" />
                <div className="flex text-sm text-gray-600">
                    <label htmlFor={id} className="relative cursor-pointer bg-white rounded-md font-medium text-indigo-600 hover:text-indigo-500 focus-within:outline-none">
                        <span>Upload a file</span>
                        <input id={id} name={id} type="file" className="sr-only" onChange={onChange} />
                    </label>
                    <p className="pl-1">or drag and drop</p>
                </div>
                <p className="text-xs text-gray-500">{helpText || 'PNG, JPG, PDF up to 10MB'}</p>
            </div>
        </div>
        {fileName && <p className="text-sm text-green-600 mt-1">File selected: {fileName}</p>}
        {error && <p className="text-red-500 text-xs mt-1">{error}</p>}
    </div>
);

// Form Section Wrapper
export const FormSection = ({ title, children }) => (
    <div className="bg-white p-6 rounded-lg border border-gray-200 shadow-sm mb-6">
        <h3 className="text-lg font-semibold text-gray-800 border-b border-gray-200 pb-3 mb-4">{title}</h3>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {children}
        </div>
    </div>
);
