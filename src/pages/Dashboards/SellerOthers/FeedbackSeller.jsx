import React, { useState, useMemo } from 'react';
import { Star, MessageSquare, ThumbsUp, ThumbsDown, Filter } from 'lucide-react';

// --- Mock Data (replace with API call) ---
const mockFeedback = [
    { id: 1, customerName: 'Amit Sharma', rating: 5, comment: 'Excellent and quick service. The staff was very professional and explained everything clearly. My car feels brand new!', date: '2023-10-26' },
    { id: 2, customerName: 'Priya Singh', rating: 4, comment: 'Good service overall. There was a slight delay in getting the car back, but the quality of work was great. Would recommend.', date: '2023-10-25' },
    { id: 3, customerName: 'Rahul Verma', rating: 5, comment: 'Best garage in town! They fixed a complex issue that other mechanics couldn\'t diagnose. Very knowledgeable team.', date: '2023-10-24' },
    { id: 4, customerName: 'Sunita Mehta', rating: 3, comment: 'The service was average. The final bill was a bit higher than the initial quote without much explanation. The cleaning could have been better.', date: '2023-10-22' },
    { id: 5, customerName: 'Vikram Reddy', rating: 1, comment: 'Terrible experience. They damaged my dashboard and refused to take responsibility. Had to wait for hours. Avoid this place!', date: '2023-10-21' },
    { id: 6, customerName: 'Anjali Desai', rating: 4, comment: 'Very satisfied with the periodic maintenance service. The pick-up and drop service is very convenient.', date: '2023-10-20' },
];

// --- Helper: Star Rating Component ---
const StarRating = ({ rating, size = 'w-5 h-5' }) => (
    <div className="flex items-center">
        {[...Array(5)].map((_, i) => (
            <Star key={i} className={`${size} ${i < rating ? 'text-yellow-400 fill-current' : 'text-gray-300'}`} />
        ))}
    </div>
);

// --- Helper: Feedback Card Component ---
const FeedbackCard = ({ feedback }) => (
    <div className="bg-white p-5 rounded-lg border border-gray-200">
        <div className="flex justify-between items-start">
            <div>
                <h3 className="font-bold text-gray-800">{feedback.customerName}</h3>
                <p className="text-xs text-gray-500">{new Date(feedback.date).toLocaleDateString('en-IN', { year: 'numeric', month: 'long', day: 'numeric' })}</p>
            </div>
            <StarRating rating={feedback.rating} />
        </div>
        <p className="text-gray-600 mt-3 text-sm">{feedback.comment}</p>
        <div className="flex items-center gap-4 mt-4 border-t pt-3">
            <button className="flex items-center text-sm text-gray-500 hover:text-green-600">
                <ThumbsUp size={16} className="mr-1" /> Helpful
            </button>
            <button className="flex items-center text-sm text-gray-500 hover:text-red-600">
                <ThumbsDown size={16} className="mr-1" /> Not Helpful
            </button>
        </div>
    </div>
);

// --- Main Customer Feedback Page Component ---
export default function FeedbackSeller() {
    const [filter, setFilter] = useState('all'); // 'all', 5, 4, 3, 2, 1

    const filteredFeedback = useMemo(() => {
        if (filter === 'all') {
            return mockFeedback;
        }
        return mockFeedback.filter(f => f.rating === parseInt(filter));
    }, [filter]);

    const averageRating = (mockFeedback.reduce((acc, f) => acc + f.rating, 0) / mockFeedback.length).toFixed(1);
    
    const ratingDistribution = useMemo(() => {
        const counts = { 5: 0, 4: 0, 3: 0, 2: 0, 1: 0 };
        mockFeedback.forEach(f => {
            counts[f.rating]++;
        });
        return Object.entries(counts).map(([rating, count]) => ({
            rating: parseInt(rating),
            count,
            percentage: (count / mockFeedback.length) * 100
        })).reverse();
    }, []);

    return (
        <div className="bg-gray-100 min-h-screen p-4 sm:p-6 lg:p-8 font-sans">
            <div className="max-w-7xl mx-auto">
                {/* --- Header --- */}
                <div className="mb-8">
                    <h1 className="text-4xl font-extrabold text-gray-900">Customer Feedback</h1>
                    <p className="mt-2 text-lg text-gray-600">Review and analyze what your customers are saying about your service.</p>
                </div>

                {/* --- Analytics Summary Section --- */}
                <div className="grid grid-cols-1 lg:grid-cols-3 gap-6 mb-8">
                    {/* Overall Rating */}
                    <div className="lg:col-span-1 bg-white p-6 rounded-xl shadow-sm flex flex-col justify-center items-center">
                        <p className="text-gray-600 text-sm font-medium">OVERALL RATING</p>
                        <p className="text-5xl font-bold text-gray-900 my-2">{averageRating}</p>
                        <StarRating rating={Math.round(averageRating)} size="w-7 h-7" />
                        <p className="text-gray-500 text-sm mt-2">Based on {mockFeedback.length} reviews</p>
                    </div>

                    {/* Rating Distribution */}
                    <div className="lg:col-span-2 bg-white p-6 rounded-xl shadow-sm">
                        <h3 className="text-lg font-bold text-gray-800 mb-4">Rating Distribution</h3>
                        <div className="space-y-3">
                            {ratingDistribution.map(({ rating, percentage, count }) => (
                                <div key={rating} className="flex items-center gap-3">
                                    <span className="text-sm font-medium text-gray-600">{rating} star</span>
                                    <div className="flex-grow bg-gray-200 rounded-full h-4">
                                        <div className="bg-yellow-400 h-4 rounded-full" style={{ width: `${percentage}%` }}></div>
                                    </div>
                                    <span className="text-sm font-semibold text-gray-700 w-12 text-right">{count}</span>
                                </div>
                            ))}
                        </div>
                    </div>
                </div>

                {/* --- Feedback List Section --- */}
                <div className="bg-white p-6 rounded-xl shadow-sm">
                    <div className="flex flex-col sm:flex-row justify-between items-center border-b pb-4 mb-6">
                        <h2 className="text-2xl font-bold text-gray-800">All Reviews ({filteredFeedback.length})</h2>
                        <div className="flex items-center gap-2 mt-4 sm:mt-0">
                            <Filter size={16} className="text-gray-500" />
                            <select 
                                value={filter} 
                                onChange={(e) => setFilter(e.target.value)}
                                className="p-2 border border-gray-300 rounded-md text-sm focus:ring-2 focus:ring-indigo-500 focus:outline-none"
                            >
                                <option value="all">All Ratings</option>
                                <option value="5">5 Stars</option>
                                <option value="4">4 Stars</option>
                                <option value="3">3 Stars</option>
                                <option value="2">2 Stars</option>
                                <option value="1">1 Star</option>
                            </select>
                        </div>
                    </div>

                    {/* Feedback Cards Grid */}
                    {filteredFeedback.length > 0 ? (
                        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                            {filteredFeedback.map(feedback => (
                                <FeedbackCard key={feedback.id} feedback={feedback} />
                            ))}
                        </div>
                    ) : (
                        <div className="text-center py-16">
                             <MessageSquare className="mx-auto h-12 w-12 text-gray-400" />
                            <p className="mt-4 text-gray-600">No reviews found for this rating.</p>
                        </div>
                    )}
                </div>
            </div>
        </div>
    );
}
