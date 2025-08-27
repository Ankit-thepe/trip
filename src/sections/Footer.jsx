import React from 'react';

const Footer = () => (
    <footer className="bg-gray-800 text-white text-center p-8">
        <p>&copy; {new Date().getFullYear()} Evently. All Rights Reserved.</p>
        <p className="text-sm text-gray-400">Your premier destination for live experiences.</p>
    </footer>
);

export default Footer;