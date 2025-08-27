import React from 'react';

const Icon = ({ path, className = "w-6 h-6" }) => (
  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" className={className}>
    <path fillRule="evenodd" d={path} clipRule="evenodd" />
  </svg>
);

export const CalendarIcon = () => <Icon path="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm0 18c-4.41 0-8-3.59-8-8s3.59-8 8-8 8 3.59 8 8-3.59 8-8 8zm-1-13h2v5h-2zm0 6h2v2h-2z" />;
export const LocationIcon = () => <Icon path="M12 2C8.13 2 5 5.13 5 9c0 5.25 7 13 7 13s7-7.75 7-13c0-3.87-3.13-7-7-7zm0 9.5c-1.38 0-2.5-1.12-2.5-2.5s1.12-2.5 2.5-2.5 2.5 1.12 2.5 2.5-1.12 2.5-2.5 2.5z" />;
export const TicketIcon = () => <Icon path="M20 12V8c0-1.1-.9-2-2-2H6c-1.1 0-2 .9-2 2v4c1.1 0 2 .9 2 2s-.9 2-2 2v4c0 1.1.9 2 2 2h12c1.1 0 2-.9 2-2v-4c-1.1 0-2-.9-2-2s.9-2 2-2zm-2 6H6v-2h12v2zm0-6H6v-2h12v2z" />;
export const CheckCircleIcon = () => <Icon path="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm-2 15l-5-5 1.41-1.41L10 14.17l7.59-7.59L19 8l-9 9z" className="w-16 h-16 text-green-500 mx-auto" />;
export const QRIcon = () => <Icon path="M3 11h8V3H3v8zm2-6h4v4H5V5zM3 21h8v-8H3v8zm2-6h4v4H5v-4zm8-12v8h8V3h-8zm6 6h-4V5h4v4zm-2 12h2v-2h-2v2zm-4-4h2v-2h-2v2zm-4 4h2v-2h-2v2zm-2-2h2v-2h-2v2zm-2-2h2v-2h-2v2zm-2-2h2v-2h-2v2zm-2-2h2v-2h-2v2zm12-2h2v-2h-2v2z" className="w-32 h-32 text-gray-800" />;
export const PlusIcon = () => <Icon path="M12 4a1 1 0 0 1 1 1v6h6a1 1 0 1 1 0 2h-6v6a1 1 0 1 1-2 0v-6H5a1 1 0 1 1 0-2h6V5a1 1 0 0 1 1-1z" />;
export const MinusIcon = () => <Icon path="M5 11a1 1 0 1 0 0 2h14a1 1 0 1 0 0-2H5z" />;
export const CheckIcon = () => <Icon path="M16.707 5.293a1 1 0 0 1 0 1.414l-8 8a1 1 0 0 1-1.414 0l-4-4a1 1 0 0 1 1.414-1.414L8 12.586l7.293-7.293a1 1 0 0 1 1.414 0z" className="w-5 h-5 text-blue-500" />;