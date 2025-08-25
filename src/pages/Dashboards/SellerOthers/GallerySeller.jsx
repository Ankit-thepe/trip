import React, { useState, useRef } from 'react';
import { UploadCloud, Star, Trash2, X, AlertTriangle, CheckCircle, GripVertical, Image as ImageIcon } from 'lucide-react';

// --- IMPORTANT ---
// Make sure these paths are correct relative to where this component file is located.
// If your component is at 'src/pages/owner/GalleryOwner.jsx', this path should be correct.
// import ServiceCentreImage1 from '../../../assets/images/ServiceCentreImage1.png';
// import ServiceCentreImage2 from '../../../assets/images/ServiceCentreImage2.png';
// import ServiceCentreImage3 from '../../../assets/images/ServiceCentreImage3.png';
// import ServiceCentreImage4 from '../../../assets/images/ServiceCentreImage4.png';
// import ServiceCentreImage5 from '../../../assets/images/ServiceCentreImage5.png';

// Using your imported local images for the initial state.
const initialImages = [
  { id: 1, url: new URL('../../../assets/images/ServiceCentreImage1.png', import.meta.url).href, isDisplay: true },
  { id: 2, url: new URL('../../../assets/images/ServiceCentreImage2.png', import.meta.url).href, isDisplay: true },
  { id: 3, url: new URL('../../../assets/images/ServiceCentreImage3.png', import.meta.url).href, isDisplay: false },
  { id: 4, url: new URL('../../../assets/images/ServiceCentreImage4.png', import.meta.url).href, isDisplay: false },
  { id: 5, url: new URL('../../../assets/images/ServiceCentreImage5.png', import.meta.url).href, isDisplay: false },
];


// --- Main Gallery Page Component ---
export default function GallerySeller() {
    const [images, setImages] = useState(initialImages);
    const [selectedImage, setSelectedImage] = useState(null);
    const [notification, setNotification] = useState({ show: false, message: '', type: 'success' });
    const dragItem = useRef(null);
    const dragOverItem = useRef(null);

    const showNotification = (message, type = 'success') => {
        setNotification({ show: true, message, type });
        setTimeout(() => {
            setNotification({ show: false, message: '', type: 'success' });
        }, 3000);
    };

    const handleFileUpload = (e) => {
        const files = Array.from(e.target.files);
        const newImages = files.map((file, index) => ({
            id: Date.now() + index,
            url: URL.createObjectURL(file), // This creates a temporary URL for the uploaded file
            isDisplay: false,
        }));
        setImages(prev => [...prev, ...newImages]);
        showNotification(`${files.length} image(s) uploaded successfully!`);
    };

    const toggleDisplayImage = (id) => {
        const image = images.find(img => img.id === id);
        const displayImagesCount = images.filter(img => img.isDisplay).length;

        if (!image.isDisplay && displayImagesCount >= 4) {
            showNotification('You can only select up to 4 display images.', 'error');
            return;
        }

        setImages(images.map(img => img.id === id ? { ...img, isDisplay: !img.isDisplay } : img));
        showNotification('Display images updated.', 'success');
    };

    const handleDeleteImage = (id) => {
        setImages(images.filter(img => img.id !== id));
        showNotification('Image deleted successfully.', 'error');
    };

    const handleSort = () => {
        const _images = [...images];
        const draggedItemContent = _images.splice(dragItem.current, 1)[0];
        _images.splice(dragOverItem.current, 0, draggedItemContent);
        dragItem.current = null;
        dragOverItem.current = null;
        setImages(_images);
    };

    const displayImages = images.filter(img => img.isDisplay);

    return (
        <div className="bg-gray-100 min-h-screen font-sans">
            <div className="container mx-auto p-4 sm:p-6 lg:p-8">
                
                {/* --- Notification Toast --- */}
                {notification.show && (
                    <div className={`fixed top-5 right-5 z-50 p-4 rounded-lg shadow-lg text-white animate-fade-in-down ${notification.type === 'success' ? 'bg-green-500' : 'bg-red-500'}`}>
                        <div className="flex items-center">
                            {notification.type === 'success' ? <CheckCircle className="mr-2"/> : <AlertTriangle className="mr-2"/>}
                            {notification.message}
                        </div>
                    </div>
                )}

                {/* --- Header --- */}
                <div className="mb-8">
                    <h1 className="text-4xl font-extrabold text-gray-900">Manage Your Garage Gallery</h1>
                    <p className="mt-2 text-lg text-gray-600">Upload new photos, manage your gallery, and select the images that customers see first.</p>
                </div>

                {/* --- Section 1: Main Display Images --- */}
                <div className="bg-white p-6 rounded-xl shadow-sm mb-8">
                    <h2 className="text-2xl font-bold text-gray-800 mb-2">Main Display Images</h2>
                    <p className="text-sm text-gray-500 mb-4">These are the first images users see. Select up to 4 from your gallery. Drag to reorder.</p>
                    {displayImages.length > 0 ? (
                        <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
                            {displayImages.map((image, index) => (
                                <div 
                                    key={image.id} 
                                    className="relative group aspect-video cursor-grab rounded-lg overflow-hidden"
                                    draggable
                                    onDragStart={() => (dragItem.current = index)}
                                    onDragEnter={() => (dragOverItem.current = index)}
                                    onDragEnd={handleSort}
                                    onDragOver={(e) => e.preventDefault()}
                                >
                                    <img src={image.url} alt={`Display ${image.id}`} className="w-full h-full object-cover transition-transform duration-300 group-hover:scale-110" />
                                    <div className="absolute inset-0 bg-opacity-0 group-hover:bg-opacity-40 transition-all duration-300 flex items-center justify-center">
                                        <GripVertical className="text-white opacity-0 group-hover:opacity-100 transition-opacity" size={32}/>
                                    </div>
                                    <button onClick={() => toggleDisplayImage(image.id)} className="absolute top-2 right-2 bg-yellow-400 p-1.5 rounded-full shadow-lg text-white hover:bg-yellow-500 transition-colors">
                                        <Star size={18} className="fill-current" />
                                    </button>
                                </div>
                            ))}
                        </div>
                    ) : (
                        <div className="text-center py-10 border-2 border-dashed rounded-lg bg-gray-50">
                            <ImageIcon className="mx-auto h-12 w-12 text-gray-400" />
                            <p className="mt-2 text-gray-500">No display images selected. Choose from your gallery below.</p>
                        </div>
                    )}
                </div>

                {/* --- Section 2: Upload New Images --- */}
                <div className="bg-white p-6 rounded-xl shadow-sm mb-8">
                    <h2 className="text-2xl font-bold text-gray-800 mb-4">Upload New Images</h2>
                    <div className="border-2 border-dashed border-gray-300 rounded-lg p-6 hover:border-indigo-500 transition-colors">
                        <input type="file" id="file-upload" multiple accept="image/*" onChange={handleFileUpload} className="hidden" />
                        <label htmlFor="file-upload" className="cursor-pointer flex flex-col items-center justify-center text-center">
                            <UploadCloud className="h-12 w-12 text-gray-400" />
                            <h3 className="mt-2 text-sm font-medium text-gray-900"><span className="text-indigo-600">Click to upload</span> or drag and drop</h3>
                            <p className="mt-1 text-xs text-gray-500">PNG, JPG, GIF up to 10MB</p>
                        </label>
                    </div>
                </div>

                {/* --- Section 3: Manage All Images --- */}
                <div className="bg-white p-6 rounded-xl shadow-sm">
                    <h2 className="text-2xl font-bold text-gray-800 mb-4">Your Image Gallery ({images.length})</h2>
                     <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 gap-4">
                        {images.map(image => (
                            <div key={image.id} className="relative group aspect-square rounded-lg overflow-hidden">
                                <img src={image.url} alt={`Garage ${image.id}`} className="w-full h-full object-cover transition-transform duration-300 group-hover:scale-110" />
                                <div className="absolute inset-0 bg-opacity-0 group-hover:bg-opacity-60 transition-all duration-300 flex flex-col items-center justify-center p-2">
                                    <div className="opacity-0 group-hover:opacity-100 transition-opacity duration-300 text-center">
                                        <button onClick={() => setSelectedImage(image)} className="text-white text-sm mb-2 hover:underline">View</button>
                                        <div className="flex space-x-3">
                                            <button onClick={() => toggleDisplayImage(image.id)} title={image.isDisplay ? 'Remove from Display' : 'Add to Display'} className={`p-2 rounded-full ${image.isDisplay ? 'bg-yellow-400' : 'bg-gray-700'} text-white hover:opacity-80 transition-opacity`}>
                                                <Star size={16} />
                                            </button>
                                            <button onClick={() => handleDeleteImage(image.id)} title="Delete Image" className="p-2 rounded-full bg-red-600 text-white hover:bg-red-700 transition-colors">
                                                <Trash2 size={16} />
                                            </button>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        ))}
                    </div>
                </div>
            </div>

            {/* --- Image Preview Modal --- */}
            {selectedImage && (
                <div className="fixed inset-0  z-50 flex items-center justify-center p-4 animate-fade-in">
                    <div className="relative max-w-4xl max-h-full">
                        <img src={selectedImage.url} alt="Preview" className="object-contain max-w-full max-h-[85vh] rounded-lg" />
                        <button onClick={() => setSelectedImage(null)} className="absolute -top-3 -right-3 bg-white text-gray-800 p-2 rounded-full shadow-lg hover:bg-gray-200 transition-colors">
                            <X size={24} />
                        </button>
                    </div>
                </div>
            )}
        </div>
    );
}
