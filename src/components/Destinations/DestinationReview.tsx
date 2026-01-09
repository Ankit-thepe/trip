// src/components/Destinations/DestinationReview.tsx
import React, { useState, useEffect } from 'react';
import { 
  Search, Star, MapPin, Calendar, Users, ThermometerSun, 
  ChevronRight, Heart, Share2, Bookmark, Camera, 
  Navigation, Wallet, Clock, Globe, Coffee, Utensils, 
  Mountain, Building, Palette, TreePine, Sparkles, 
  MessageCircle, Send, Bot, User, X, RefreshCw, 
  Mic, Paperclip, Eye, ThumbsUp, MessageSquare,
  TrendingUp, Compass, Wind, Sunset, Sunrise, Cloud,
  Umbrella, Droplets, WindIcon as WindIcon,
  Zap, AlertCircle, Info, CheckCircle, ExternalLink,
  Filter, Grid, List, Maximize2, Download, Phone,
  Mail, Map, Navigation2, Volume2, Award, Trophy,
  Gift, Tag, Percent, Shield, Lock, Unlock,
  Battery, Wifi, Radio, TV, Coffee as CoffeeIcon,
  Wine, Music, Gamepad2, Dumbbell, Pool,
  Waves, Anchor, Sailboat, Car, Train, Plane,
  Bike, Walk, Truck, Bus, Ship, Rocket,
  Smartphone, Tablet, Laptop, Monitor, Printer,
  Headphones, Speaker, Mic2, Video, Film,
  Book, BookOpen, Newspaper, PenTool, Brush,
  Palette as PaletteIcon, Music2, Guitar, Drum,
  Camera as CameraIcon, Film as FilmIcon, Tv,
  Radio as RadioIcon, Gamepad2 as GamepadIcon,
  Trophy as TrophyIcon, Award as AwardIcon,
  Gift as GiftIcon, Tag as TagIcon,
  Percent as PercentIcon, Shield as ShieldIcon,
  Lock as LockIcon, Unlock as UnlockIcon,
  Battery as BatteryIcon, Wifi as WifiIcon,
  Radio as RadioIcon2, Tv as TvIcon,
  Coffee as CoffeeIcon2, Wine as WineIcon,
  Music as MusicIcon, Gamepad2 as GamepadIcon2,
  Dumbbell as DumbbellIcon, Pool as PoolIcon,
  Waves as WavesIcon, Anchor as AnchorIcon,
  Sailboat as SailboatIcon, Car as CarIcon,
  Train as TrainIcon, Plane as PlaneIcon,
  Bike as BikeIcon, Walk as WalkIcon,
  Truck as TruckIcon, Bus as BusIcon,
  Ship as ShipIcon, Rocket as RocketIcon,
  Smartphone as SmartphoneIcon, Tablet as TabletIcon,
  Laptop as LaptopIcon, Monitor as MonitorIcon,
  Printer as PrinterIcon, Headphones as HeadphonesIcon,
  Speaker as SpeakerIcon, Mic2 as MicIcon,
  Video as VideoIcon, Film as FilmIcon2,
  Book as BookIcon, BookOpen as BookOpenIcon,
  Newspaper as NewspaperIcon, PenTool as PenToolIcon,
  Brush as BrushIcon, Palette as PaletteIcon2,
  Music2 as MusicIcon2, Guitar as GuitarIcon,
  Drum as DrumIcon, Camera as CameraIcon2,
  Film as FilmIcon3, Tv as TvIcon2,
  Radio as RadioIcon3, Gamepad2 as GamepadIcon3
} from 'lucide-react';
import { motion, AnimatePresence } from 'framer-motion';
import { useDestinationReviewStore } from '../../lib/store/destinations/destinationReviewsStore';

export const DestinationReview: React.FC = () => {
  const { 
    selectedDestination, 
    setSelectedDestination,
    destinations,
    getCurrentDestination,
    searchDestinations,
    chatMessages,
    addChatMessage,
    clearChat
  } = useDestinationReviewStore();
  
  const [searchQuery, setSearchQuery] = useState('');
  const [searchResults, setSearchResults] = useState<typeof destinations>([]);
  const [activeTab, setActiveTab] = useState<'overview' | 'places' | 'activities' | 'food' | 'tips' | 'reviews'>('overview');
  const [expandedSections, setExpandedSections] = useState<Record<string, boolean>>({
    weather: true,
    gallery: false,
    places: false,
    activities: false,
    food: false,
    tips: false,
    reviews: false,
    planning: false
  });
  const [chatInput, setChatInput] = useState('');
  const [isChatLoading, setIsChatLoading] = useState(false);
  const [viewMode, setViewMode] = useState<'grid' | 'list'>('grid');
  const [selectedImage, setSelectedImage] = useState<string | null>(null);
  const [isFavorite, setIsFavorite] = useState(false);
  
  const currentDestination = getCurrentDestination();
  
  useEffect(() => {
    if (searchQuery) {
      const results = searchDestinations(searchQuery);
      setSearchResults(results);
    } else {
      setSearchResults([]);
    }
  }, [searchQuery, searchDestinations]);
  
  const handleSearch = (destinationName: string) => {
    setSelectedDestination(destinationName.toLowerCase());
    setSearchQuery('');
    setSearchResults([]);
    setActiveTab('overview');
  };
  
  const toggleSection = (section: string) => {
    setExpandedSections(prev => ({
      ...prev,
      [section]: !prev[section]
    }));
  };
  
  const handleChatSubmit = () => {
    if (!chatInput.trim() || !currentDestination || isChatLoading) return;
    
    const userMessage = chatInput.trim();
    setChatInput('');
    
    addChatMessage({
      text: userMessage,
      sender: 'user',
      relatedTo: currentDestination.name
    });
    
    setIsChatLoading(true);
    
    setTimeout(() => {
      let aiResponse = '';
      const lowerMessage = userMessage.toLowerCase();
      
      if (lowerMessage.includes('weather') || lowerMessage.includes('temperature') || lowerMessage.includes('season')) {
        aiResponse = `The current weather in ${currentDestination.name} is ${currentDestination.currentSeasonStatus.temperature}. It's ${currentDestination.currentSeasonStatus.status.toLowerCase()} season with ${currentDestination.currentSeasonStatus.description}`;
      } else if (lowerMessage.includes('food') || lowerMessage.includes('eat') || lowerMessage.includes('cuisine')) {
        const mustTryFood = currentDestination.foodAndCuisine.find(f => f.mustTry);
        aiResponse = `You must try ${mustTryFood?.name || 'the local cuisine'} in ${currentDestination.name}! It's ${mustTryFood?.description || 'delicious'}. You can find it at ${mustTryFood?.whereToFind?.join(', ') || 'local restaurants'} for around ${mustTryFood?.priceRange || 'reasonable prices'}.`;
      } else if (lowerMessage.includes('place') || lowerMessage.includes('visit') || lowerMessage.includes('see')) {
        const mustVisit = currentDestination.placesToVisit.find(p => p.category === 'Must Visit');
        aiResponse = `Don't miss ${mustVisit?.name || currentDestination.famousPlaces[0]?.name || 'the main attractions'}! ${mustVisit?.description || 'It\'s absolutely stunning.'} Highlights include ${mustVisit?.highlights?.join(', ') || 'beautiful scenery'}.`;
      } else if (lowerMessage.includes('activity') || lowerMessage.includes('do') || lowerMessage.includes('fun')) {
        const mainActivity = currentDestination.activities[0];
        aiResponse = `For ${mainActivity?.type || 'an amazing'} experience, try ${mainActivity?.name || 'the local activities'}. It's ${mainActivity?.difficulty?.toLowerCase() || 'moderate'} difficulty and takes about ${mainActivity?.duration || 'a few hours'}. Estimated cost: ${mainActivity?.estimatedCost || 'varies'}.`;
      } else if (lowerMessage.includes('stay') || lowerMessage.includes('hotel') || lowerMessage.includes('accommodation')) {
        const accommodation = currentDestination.accommodation[0];
        aiResponse = `For ${accommodation?.type || 'accommodation'} in ${currentDestination.name}, expect to pay ${accommodation?.priceRange || 'varying prices'}. Best areas are ${accommodation?.bestAreas?.join(', ') || 'centrally located areas'}.`;
      } else if (lowerMessage.includes('budget') || lowerMessage.includes('cost') || lowerMessage.includes('price')) {
        const budget = currentDestination.quickFacts.find(f => f.label.includes('Budget'));
        aiResponse = `For ${currentDestination.name}, budget around ${budget?.value || '₹2000-4000'} per day. This includes accommodation, food, and local transportation. Activities and souvenirs are extra.`;
      } else if (lowerMessage.includes('time') || lowerMessage.includes('duration') || lowerMessage.includes('days')) {
        const duration = currentDestination.quickFacts.find(f => f.label.includes('Duration'));
        aiResponse = `I recommend spending ${duration?.value || '4-5 days'} in ${currentDestination.name} to fully experience everything. The best time to visit is ${currentDestination.bestTimeToVisit.join(' or ')}.`;
      } else if (lowerMessage.includes('transport') || lowerMessage.includes('travel') || lowerMessage.includes('reach')) {
        const transport = currentDestination.transportation[0];
        aiResponse = `To reach ${currentDestination.name} by ${transport?.mode || 'road'}, it takes about ${transport?.duration || 'several hours'} from ${transport?.fromNearestCity || 'the nearest city'} and costs around ${transport?.cost || 'varies'}. ${transport?.tips?.[0] || 'Book in advance for better rates.'}`;
      } else {
        aiResponse = `For ${currentDestination.name}, I recommend visiting during ${currentDestination.bestTimeToVisit[0] || 'the ideal season'}. Don't miss ${currentDestination.famousPlaces[0]?.name || 'the main attractions'} and try ${currentDestination.foodAndCuisine.find(f => f.mustTry)?.name || 'the local cuisine'}. The current season is ${currentDestination.currentSeasonStatus.status.toLowerCase()} with ${currentDestination.currentSeasonStatus.description}`;
      }
      
      addChatMessage({
        text: aiResponse,
        sender: 'ai',
        relatedTo: currentDestination.name
      });
      
      setIsChatLoading(false);
    }, 1200);
  };
  
  if (!currentDestination) {
    return (
      <div className="py-20 text-center">
        <div className="inline-block p-8 bg-gradient-to-br from-blue-50 to-purple-50 rounded-3xl">
          <Compass className="w-16 h-16 text-blue-400 mx-auto mb-4" />
          <h3 className="text-2xl font-bold text-gray-900 mb-2">Select a Destination</h3>
          <p className="text-gray-600">Choose from Manali, Goa, Meghalaya, or Jaisalmer to explore detailed reviews</p>
        </div>
      </div>
    );
  }
  
  return (
    <div className="py-12">
      {/* Floating Navigation */}
      <div className="fixed right-8 top-1/2 transform -translate-y-1/2 z-40 hidden lg:block">
        <div className="bg-white/90 backdrop-blur-xl rounded-2xl shadow-2xl border border-gray-200 p-4 space-y-3">
          {['overview', 'places', 'activities', 'food', 'tips', 'reviews'].map((tab) => (
            <button
              key={tab}
              onClick={() => setActiveTab(tab as any)}
              className={`w-10 h-10 rounded-xl flex items-center justify-center transition-all ${
                activeTab === tab
                  ? 'bg-gradient-to-br from-blue-500 to-purple-500 text-white shadow-md'
                  : 'bg-gray-100 text-gray-600 hover:bg-gray-200'
              }`}
              title={tab.charAt(0).toUpperCase() + tab.slice(1)}
            >
              {tab === 'overview' && <Globe className="w-5 h-5" />}
              {tab === 'places' && <MapPin className="w-5 h-5" />}
              {tab === 'activities' && <Mountain className="w-5 h-5" />}
              {tab === 'food' && <Utensils className="w-5 h-5" />}
              {tab === 'tips' && <Sparkles className="w-5 h-5" />}
              {tab === 'reviews' && <Star className="w-5 h-5" />}
            </button>
          ))}
        </div>
      </div>
      
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Enhanced Header */}
        <motion.div
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          className="mb-12"
        >
          <div className="text-center mb-10">
            <div className="inline-flex items-center gap-3 bg-gradient-to-r from-blue-600 via-purple-600 to-pink-600 text-white px-6 py-3 rounded-full mb-6 shadow-lg">
              <Compass className="w-5 h-5" />
              <span className="font-semibold">Destination Intelligence</span>
              <span className="bg-white/20 px-2 py-1 rounded-full text-xs">AI-Powered</span>
            </div>
            
            <h1 className="text-5xl md:text-6xl font-bold bg-gradient-to-r from-blue-900 via-purple-900 to-gray-900 bg-clip-text text-transparent mb-4">
              Explore & Experience
            </h1>
            <p className="text-2xl text-gray-600 max-w-3xl mx-auto">
              Comprehensive destination insights with AI-powered recommendations
            </p>
          </div>
          
          {/* Enhanced Search with Filters */}
          <div className="max-w-3xl mx-auto">
            <div className="relative mb-8">
              <div className="flex items-center gap-4 mb-4">
                <div className="flex-1 relative">
                  <div className="absolute left-4 top-1/2 transform -translate-y-1/2 flex items-center gap-2">
                    <Search className="w-5 h-5 text-blue-500" />
                    <div className="w-px h-6 bg-gray-300" />
                  </div>
                  <input
                    type="text"
                    value={searchQuery}
                    onChange={(e) => setSearchQuery(e.target.value)}
                    placeholder="Search destinations: Manali, Goa, Meghalaya, Jaisalmer..."
                    className="w-full pl-16 pr-12 py-5 bg-white border-2 border-gray-300 rounded-2xl shadow-xl focus:outline-none focus:ring-4 focus:ring-blue-500/30 focus:border-blue-500 text-lg transition-all"
                  />
                  {searchQuery && (
                    <button
                      onClick={() => setSearchQuery('')}
                      className="absolute right-4 top-1/2 transform -translate-y-1/2 p-2 hover:bg-gray-100 rounded-xl transition-colors"
                    >
                      <X className="w-5 h-5 text-gray-400" />
                    </button>
                  )}
                </div>
                <button className="px-6 py-5 bg-gradient-to-r from-blue-500 to-purple-500 text-white font-semibold rounded-2xl hover:opacity-90 transition-all shadow-lg">
                  Explore
                </button>
              </div>
              
              {/* Quick Destination Cards */}
              <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
                {destinations.map((dest) => (
                  <motion.button
                    key={dest.id}
                    whileHover={{ scale: 1.05, y: -5 }}
                    whileTap={{ scale: 0.95 }}
                    onClick={() => handleSearch(dest.name)}
                    className={`relative overflow-hidden rounded-2xl p-4 text-left transition-all ${
                      selectedDestination === dest.name.toLowerCase()
                        ? 'ring-4 ring-blue-500/50 shadow-2xl'
                        : 'shadow-lg hover:shadow-xl'
                    }`}
                  >
                    <div className="absolute inset-0 bg-gradient-to-br from-blue-500/10 to-purple-500/10" />
                    <div className="relative">
                      <div className="flex items-center gap-3 mb-3">
                        <div className="w-12 h-12 rounded-xl overflow-hidden">
                          <img
                            src={dest.images[0]}
                            alt={dest.name}
                            className="w-full h-full object-cover"
                          />
                        </div>
                        <div className="flex-1">
                          <div className="font-bold text-gray-900">{dest.name}</div>
                          <div className="text-sm text-gray-600">{dest.location}</div>
                        </div>
                      </div>
                      <div className="flex items-center justify-between">
                        <div className="flex items-center gap-2">
                          <Star className="w-4 h-4 text-yellow-500 fill-current" />
                          <span className="font-semibold">{dest.rating}</span>
                        </div>
                        <div className="text-xs px-2 py-1 bg-gray-100 text-gray-700 rounded-full">
                          {dest.quickFacts.find(f => f.label.includes('Duration'))?.value || '3-4 days'}
                        </div>
                      </div>
                    </div>
                  </motion.button>
                ))}
              </div>
            </div>
          </div>
        </motion.div>
        
        {/* Main Content Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-4 gap-8">
          {/* Left Column - Stats & Quick Info */}
          <div className="lg:col-span-1 space-y-6">
            {/* Destination Stats Card */}
            <motion.div
              initial={{ opacity: 0, x: -20 }}
              animate={{ opacity: 1, x: 0 }}
              className="bg-gradient-to-br from-blue-900 to-purple-900 rounded-3xl p-6 text-white shadow-2xl"
            >
              <div className="flex items-center justify-between mb-6">
                <div>
                  <h3 className="text-2xl font-bold">{currentDestination.name}</h3>
                  <p className="text-white/80 text-sm">{currentDestination.location}, {currentDestination.country}</p>
                </div>
                <button
                  onClick={() => setIsFavorite(!isFavorite)}
                  className="p-2 hover:bg-white/10 rounded-xl transition-colors"
                >
                  <Heart className={`w-6 h-6 ${isFavorite ? 'fill-current text-pink-400' : 'text-white'}`} />
                </button>
              </div>
              
              {/* Rating */}
              <div className="mb-6">
                <div className="flex items-center gap-2 mb-2">
                  <div className="text-4xl font-bold">{currentDestination.rating}</div>
                  <div className="flex items-center">
                    {[1, 2, 3, 4, 5].map((star) => (
                      <Star
                        key={star}
                        className={`w-5 h-5 ${
                          star <= Math.floor(currentDestination.rating)
                            ? 'text-yellow-400 fill-current'
                            : 'text-white/30'
                        }`}
                      />
                    ))}
                  </div>
                </div>
                <div className="text-white/70 text-sm">
                  {currentDestination.reviewCount.toLocaleString()} reviews
                </div>
              </div>
              
              {/* Quick Stats */}
              <div className="space-y-4">
                {currentDestination.quickFacts.map((fact, index) => (
                  <div key={index} className="flex items-center gap-3 p-3 bg-white/10 rounded-xl">
                    <div className="text-2xl">{fact.icon}</div>
                    <div>
                      <div className="text-sm text-white/70">{fact.label}</div>
                      <div className="font-semibold">{fact.value}</div>
                    </div>
                  </div>
                ))}
              </div>
              
              {/* Action Buttons */}
              <div className="grid grid-cols-2 gap-3 mt-6">
                <button className="p-3 bg-white/10 hover:bg-white/20 rounded-xl transition-colors flex items-center justify-center gap-2">
                  <Share2 className="w-5 h-5" />
                  <span className="text-sm">Share</span>
                </button>
                <button className="p-3 bg-white/10 hover:bg-white/20 rounded-xl transition-colors flex items-center justify-center gap-2">
                  <Bookmark className="w-5 h-5" />
                  <span className="text-sm">Save</span>
                </button>
              </div>
            </motion.div>
            
            {/* Weather & Season Card */}
            <motion.div
              initial={{ opacity: 0, x: -20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ delay: 0.1 }}
              className="bg-white rounded-3xl shadow-xl border border-gray-200 p-6"
            >
              <div className="flex items-center justify-between mb-6">
                <div className="flex items-center gap-3">
                  <div className="p-3 bg-gradient-to-br from-blue-500 to-cyan-500 rounded-xl">
                    <ThermometerSun className="w-6 h-6 text-white" />
                  </div>
                  <div>
                    <h3 className="font-bold text-gray-900">Current Weather</h3>
                    <p className="text-sm text-gray-600">Real-time conditions</p>
                  </div>
                </div>
                <div className={`px-3 py-1 rounded-full font-bold text-sm ${
                  currentDestination.currentSeasonStatus.status === 'Perfect' 
                    ? 'bg-green-100 text-green-800'
                    : currentDestination.currentSeasonStatus.status === 'Good'
                    ? 'bg-blue-100 text-blue-800'
                    : 'bg-yellow-100 text-yellow-800'
                }`}>
                  {currentDestination.currentSeasonStatus.status}
                </div>
              </div>
              
              <div className="space-y-4">
                <div className="text-center mb-4">
                  <div className="text-4xl font-bold text-gray-900 mb-2">
                    {currentDestination.currentSeasonStatus.temperature}
                  </div>
                  <p className="text-gray-600">{currentDestination.currentSeasonStatus.description}</p>
                </div>
                
                <div className="grid grid-cols-2 gap-4">
                  <div className="text-center p-3 bg-gray-50 rounded-xl">
                    <Users className="w-5 h-5 text-gray-400 mx-auto mb-2" />
                    <div className="text-sm text-gray-600">Crowd</div>
                    <div className="font-semibold text-gray-900">{currentDestination.currentSeasonStatus.crowdLevel}</div>
                  </div>
                  <div className="text-center p-3 bg-gray-50 rounded-xl">
                    <Calendar className="w-5 h-5 text-gray-400 mx-auto mb-2" />
                    <div className="text-sm text-gray-600">Best Time</div>
                    <div className="font-semibold text-gray-900">{currentDestination.bestTimeToVisit[0]}</div>
                  </div>
                </div>
              </div>
            </motion.div>
            
            {/* Travel Tips Card */}
            <motion.div
              initial={{ opacity: 0, x: -20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ delay: 0.2 }}
              className="bg-gradient-to-br from-green-50 to-emerald-50 rounded-3xl shadow-xl border border-green-100 p-6"
            >
              <div className="flex items-center gap-3 mb-6">
                <div className="p-3 bg-gradient-to-br from-green-500 to-emerald-500 rounded-xl">
                  <Sparkles className="w-6 h-6 text-white" />
                </div>
                <div>
                  <h3 className="font-bold text-gray-900">Pro Tips</h3>
                  <p className="text-sm text-gray-600">Local insights</p>
                </div>
              </div>
              
              <div className="space-y-3">
                {currentDestination.travelTips[0]?.tips.slice(0, 3).map((tip, index) => (
                  <div key={index} className="flex items-start gap-3">
                    <div className="w-6 h-6 bg-white rounded-lg flex items-center justify-center flex-shrink-0 mt-0.5">
                      <CheckCircle className="w-4 h-4 text-green-500" />
                    </div>
                    <p className="text-gray-700 text-sm">{tip}</p>
                  </div>
                ))}
              </div>
              
              <button 
                onClick={() => setActiveTab('tips')}
                className="w-full mt-6 py-3 bg-gradient-to-r from-green-500 to-emerald-500 text-white font-medium rounded-xl hover:opacity-90 transition-all"
              >
                View All Tips
              </button>
            </motion.div>
          </div>
          
          {/* Center Column - Main Content */}
          <div className="lg:col-span-2 space-y-8">
            {/* Hero Image & Navigation */}
            <motion.div
              initial={{ opacity: 0, scale: 0.95 }}
              animate={{ opacity: 1, scale: 1 }}
              className="relative rounded-3xl overflow-hidden group"
            >
              <div className="relative h-96">
                <img
                  src={currentDestination.heroImage}
                  alt={currentDestination.name}
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/20 to-transparent" />
                <div className="absolute bottom-0 left-0 right-0 p-8">
                  <div className="flex items-center justify-between mb-6">
                    <div className="flex items-center gap-4">
                      <div className="px-4 py-2 bg-white/20 backdrop-blur-sm rounded-full text-white">
                        {currentDestination.location}
                      </div>
                      <div className="flex items-center gap-2 bg-white/20 backdrop-blur-sm px-3 py-1.5 rounded-full">
                        <TrendingUp className="w-4 h-4 text-green-300" />
                        <span className="text-white font-bold">#{destinations.findIndex(d => d.id === currentDestination.id) + 1} Trending</span>
                      </div>
                    </div>
                    <div className="flex items-center gap-2">
                      <button className="p-2 bg-white/20 backdrop-blur-sm rounded-xl text-white hover:bg-white/30 transition-colors">
                        <Maximize2 className="w-5 h-5" />
                      </button>
                      <button className="p-2 bg-white/20 backdrop-blur-sm rounded-xl text-white hover:bg-white/30 transition-colors">
                        <Download className="w-5 h-5" />
                      </button>
                    </div>
                  </div>
                  
                  <h1 className="text-4xl font-bold text-white mb-4">{currentDestination.name}</h1>
                  <p className="text-white/90 text-lg max-w-2xl">{currentDestination.description}</p>
                </div>
              </div>
              
              {/* Tab Navigation */}
              <div className="absolute -bottom-6 left-8 right-8">
                <div className="bg-white rounded-2xl shadow-2xl p-1 flex overflow-x-auto">
                  {[
                    { id: 'overview', label: 'Overview', icon: <Globe className="w-5 h-5" /> },
                    { id: 'places', label: 'Places', icon: <MapPin className="w-5 h-5" /> },
                    { id: 'activities', label: 'Activities', icon: <Mountain className="w-5 h-5" /> },
                    { id: 'food', label: 'Food', icon: <Utensils className="w-5 h-5" /> },
                    { id: 'tips', label: 'Tips', icon: <Sparkles className="w-5 h-5" /> },
                    { id: 'reviews', label: 'Reviews', icon: <Star className="w-5 h-5" /> },
                  ].map((tab) => (
                    <button
                      key={tab.id}
                      onClick={() => setActiveTab(tab.id as any)}
                      className={`flex items-center gap-3 px-6 py-4 rounded-xl font-medium whitespace-nowrap transition-all flex-1 justify-center ${
                        activeTab === tab.id
                          ? 'bg-gradient-to-r from-blue-500 to-purple-500 text-white shadow-md'
                          : 'text-gray-600 hover:text-gray-900 hover:bg-gray-50'
                      }`}
                    >
                      {tab.icon}
                      {tab.label}
                    </button>
                  ))}
                </div>
              </div>
            </motion.div>
            
            {/* Tab Content */}
            <AnimatePresence mode="wait">
              <motion.div
                key={activeTab}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -20 }}
                className="pt-12"
              >
                {activeTab === 'overview' && (
                  <div className="space-y-8">
                    {/* Image Gallery */}
                    <div className="bg-white rounded-3xl shadow-xl border border-gray-200 p-8">
                      <div className="flex items-center justify-between mb-8">
                        <div className="flex items-center gap-3">
                          <div className="p-3 bg-gradient-to-br from-pink-500 to-rose-500 rounded-xl">
                            <Camera className="w-6 h-6 text-white" />
                          </div>
                          <div>
                            <h3 className="text-2xl font-bold text-gray-900">Photo Gallery</h3>
                            <p className="text-gray-600">Visual journey through {currentDestination.name}</p>
                          </div>
                        </div>
                        <div className="flex items-center gap-2">
                          <button
                            onClick={() => setViewMode('grid')}
                            className={`p-2 rounded-lg ${viewMode === 'grid' ? 'bg-blue-50 text-blue-600' : 'text-gray-400 hover:text-gray-600'}`}
                          >
                            <Grid className="w-5 h-5" />
                          </button>
                          <button
                            onClick={() => setViewMode('list')}
                            className={`p-2 rounded-lg ${viewMode === 'list' ? 'bg-blue-50 text-blue-600' : 'text-gray-400 hover:text-gray-600'}`}
                          >
                            <List className="w-5 h-5" />
                          </button>
                        </div>
                      </div>
                      
                      <div className={`grid ${viewMode === 'grid' ? 'grid-cols-2 md:grid-cols-4' : 'grid-cols-1'} gap-4`}>
                        {currentDestination.images.map((image, index) => (
                          <motion.div
                            key={index}
                            whileHover={{ scale: 1.05 }}
                            className={`relative rounded-2xl overflow-hidden cursor-pointer ${viewMode === 'list' ? 'h-32' : 'h-48'}`}
                            onClick={() => setSelectedImage(image)}
                          >
                            <img
                              src={image}
                              alt={`${currentDestination.name} ${index + 1}`}
                              className="w-full h-full object-cover"
                            />
                            <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent opacity-0 hover:opacity-100 transition-opacity flex items-end p-4">
                              <span className="text-white text-sm">View</span>
                            </div>
                          </motion.div>
                        ))}
                      </div>
                    </div>
                    
                    {/* Famous Places */}
                    <div className="bg-white rounded-3xl shadow-xl border border-gray-200 p-8">
                      <div className="flex items-center gap-3 mb-8">
                        <div className="p-3 bg-gradient-to-br from-purple-500 to-indigo-500 rounded-xl">
                          <Building className="w-6 h-6 text-white" />
                        </div>
                        <div>
                          <h3 className="text-2xl font-bold text-gray-900">Famous Places</h3>
                          <p className="text-gray-600">Must-visit landmarks and attractions</p>
                        </div>
                      </div>
                      
                      <div className="space-y-6">
                        {currentDestination.famousPlaces.map((place, index) => (
                          <motion.div
                            key={index}
                            whileHover={{ x: 5 }}
                            className="p-6 rounded-2xl border border-gray-200 hover:border-purple-300 transition-colors bg-gradient-to-r from-white to-purple-50/50"
                          >
                            <div className="flex items-start justify-between mb-4">
                              <div>
                                <h4 className="font-bold text-gray-900 text-xl mb-2">{place.name}</h4>
                                <div className="flex items-center gap-3 mb-3">
                                  <span className={`px-3 py-1 rounded-full text-sm font-medium ${
                                    place.type === 'Natural' ? 'bg-green-100 text-green-800' :
                                    place.type === 'Historical' ? 'bg-yellow-100 text-yellow-800' :
                                    'bg-blue-100 text-blue-800'
                                  }`}>
                                    {place.type}
                                  </span>
                                  <span className="text-gray-600">📍 {place.distance}</span>
                                </div>
                              </div>
                              {place.entryFee && (
                                <div className="px-4 py-2 bg-gradient-to-r from-purple-500 to-indigo-500 text-white font-semibold rounded-xl">
                                  {place.entryFee}
                                </div>
                              )}
                            </div>
                            <p className="text-gray-700 mb-4">{place.description}</p>
                            <div className="flex items-center justify-between">
                              <div className="text-sm text-gray-600">
                                ⏰ Best time: {place.bestTime}
                              </div>
                              <button className="px-4 py-2 bg-gradient-to-r from-blue-500 to-purple-500 text-white rounded-xl hover:opacity-90 transition-all text-sm font-medium">
                                Add to Itinerary
                              </button>
                            </div>
                          </motion.div>
                        ))}
                      </div>
                    </div>
                  </div>
                )}
                
                {activeTab === 'places' && (
                  <div className="bg-white rounded-3xl shadow-xl border border-gray-200 p-8">
                    <div className="flex items-center gap-3 mb-8">
                      <div className="p-3 bg-gradient-to-br from-blue-500 to-cyan-500 rounded-xl">
                        <Compass className="w-6 h-6 text-white" />
                      </div>
                      <div>
                        <h3 className="text-2xl font-bold text-gray-900">Places to Visit</h3>
                        <p className="text-gray-600">Curated selection of amazing spots</p>
                      </div>
                    </div>
                    
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                      {currentDestination.placesToVisit.map((place, index) => (
                        <motion.div
                          key={index}
                          whileHover={{ y: -5 }}
                          className="group relative overflow-hidden rounded-2xl border border-gray-200 hover:border-blue-300 transition-all"
                        >
                          <div className="absolute top-4 right-4 z-10">
                            <span className={`px-3 py-1 rounded-full text-xs font-bold ${
                              place.category === 'Must Visit' ? 'bg-red-500 text-white' :
                              place.category === 'Hidden Gem' ? 'bg-green-500 text-white' :
                              'bg-blue-500 text-white'
                            }`}>
                              {place.category}
                            </span>
                          </div>
                          
                          <div className="p-6">
                            <h4 className="font-bold text-gray-900 text-xl mb-3">{place.name}</h4>
                            <p className="text-gray-700 mb-4">{place.description}</p>
                            
                            <div className="mb-6">
                              <div className="font-semibold text-gray-900 mb-2">Highlights</div>
                              <div className="flex flex-wrap gap-2">
                                {place.highlights.map((highlight, idx) => (
                                  <span key={idx} className="px-3 py-1 bg-blue-50 text-blue-700 rounded-full text-sm">
                                    {highlight}
                                  </span>
                                ))}
                              </div>
                            </div>
                            
                            <div>
                              <div className="font-semibold text-gray-900 mb-2">Tips</div>
                              <ul className="space-y-2">
                                {place.tips.map((tip, idx) => (
                                  <li key={idx} className="flex items-start gap-2 text-gray-700 text-sm">
                                    <Sparkles className="w-4 h-4 text-yellow-500 mt-0.5 flex-shrink-0" />
                                    {tip}
                                  </li>
                                ))}
                              </ul>
                            </div>
                          </div>
                          
                          <div className="px-6 pb-6">
                            <button className="w-full py-3 bg-gradient-to-r from-blue-500 to-purple-500 text-white font-medium rounded-xl hover:opacity-90 transition-all">
                              Plan Visit
                            </button>
                          </div>
                        </motion.div>
                      ))}
                    </div>
                  </div>
                )}
                
                {activeTab === 'activities' && (
                  <div className="bg-white rounded-3xl shadow-xl border border-gray-200 p-8">
                    <div className="flex items-center gap-3 mb-8">
                      <div className="p-3 bg-gradient-to-br from-orange-500 to-red-500 rounded-xl">
                        <Zap className="w-6 h-6 text-white" />
                      </div>
                      <div>
                        <h3 className="text-2xl font-bold text-gray-900">Things to Do</h3>
                        <p className="text-gray-600">Exciting activities and experiences</p>
                      </div>
                    </div>
                    
                    <div className="space-y-8">
                      {currentDestination.thingsToDo.map((category, catIndex) => (
                        <div key={catIndex} className="border-l-4 border-blue-500 pl-6">
                          <h4 className="text-xl font-bold text-gray-900 mb-6">{category.category}</h4>
                          <div className="space-y-6">
                            {category.activities.map((activity, actIndex) => (
                              <motion.div
                                key={actIndex}
                                whileHover={{ x: 5 }}
                                className="p-6 rounded-2xl border border-gray-200 hover:border-orange-300 bg-gradient-to-r from-white to-orange-50/50"
                              >
                                <div className="flex items-start justify-between mb-4">
                                  <div className="flex-1">
                                    <div className="flex items-center gap-3 mb-3">
                                      <h5 className="font-bold text-gray-900 text-lg">{activity.name}</h5>
                                      <span className={`px-2 py-1 rounded-full text-xs font-medium ${
                                        activity.difficulty === 'Easy' ? 'bg-green-100 text-green-800' :
                                        activity.difficulty === 'Moderate' ? 'bg-yellow-100 text-yellow-800' :
                                        'bg-red-100 text-red-800'
                                      }`}>
                                        {activity.difficulty}
                                      </span>
                                    </div>
                                    <p className="text-gray-700 mb-4">{activity.description}</p>
                                    <div className="flex items-center gap-6 text-sm text-gray-600">
                                      <span className="flex items-center gap-1">
                                        <Clock className="w-4 h-4" />
                                        {activity.duration}
                                      </span>
                                      <span className="flex items-center gap-1">
                                        <Users className="w-4 h-4" />
                                        {activity.bestFor.join(', ')}
                                      </span>
                                    </div>
                                  </div>
                                  <button className="ml-4 px-6 py-3 bg-gradient-to-r from-orange-500 to-red-500 text-white font-medium rounded-xl hover:opacity-90 whitespace-nowrap">
                                    Book Now
                                  </button>
                                </div>
                              </motion.div>
                            ))}
                          </div>
                        </div>
                      ))}
                      
                      {/* Adventure Activities */}
                      {currentDestination.activities.length > 0 && (
                        <div>
                          <h4 className="text-xl font-bold text-gray-900 mb-6">Adventure Activities</h4>
                          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                            {currentDestination.activities.map((activity, index) => (
                              <motion.div
                                key={index}
                                whileHover={{ y: -5 }}
                                className="p-6 rounded-2xl border border-gray-200 hover:border-red-300 bg-gradient-to-br from-white to-red-50/50"
                              >
                                <div className="flex items-start justify-between mb-4">
                                  <div>
                                    <h5 className="font-bold text-gray-900 text-lg mb-2">{activity.name}</h5>
                                    <span className={`px-2 py-1 rounded-full text-xs font-medium ${
                                      activity.type === 'Adventure' ? 'bg-red-100 text-red-800' :
                                      activity.type === 'Cultural' ? 'bg-purple-100 text-purple-800' :
                                      activity.type === 'Family' ? 'bg-green-100 text-green-800' :
                                      'bg-blue-100 text-blue-800'
                                    }`}>
                                      {activity.type}
                                    </span>
                                  </div>
                                  <div className="text-right">
                                    <div className="text-2xl font-bold text-gray-900">{activity.estimatedCost}</div>
                                    <div className="text-sm text-gray-600">per person</div>
                                  </div>
                                </div>
                                <p className="text-gray-700 mb-4 text-sm">{activity.description}</p>
                                <div className="flex items-center justify-between">
                                  <div className="text-sm text-gray-600">
                                    🗓️ {activity.season} • 🎯 {activity.difficulty}
                                  </div>
                                  <button className="px-4 py-2 bg-gradient-to-r from-red-500 to-orange-500 text-white rounded-lg hover:opacity-90 text-sm font-medium">
                                    Details
                                  </button>
                                </div>
                              </motion.div>
                            ))}
                          </div>
                        </div>
                      )}
                    </div>
                  </div>
                )}
                
                {activeTab === 'food' && (
                  <div className="bg-white rounded-3xl shadow-xl border border-gray-200 p-8">
                    <div className="flex items-center gap-3 mb-8">
                      <div className="p-3 bg-gradient-to-br from-amber-500 to-orange-500 rounded-xl">
                        <Utensils className="w-6 h-6 text-white" />
                      </div>
                      <div>
                        <h3 className="text-2xl font-bold text-gray-900">Food & Cuisine</h3>
                        <p className="text-gray-600">Local flavors you must try</p>
                      </div>
                    </div>
                    
                    <div className="space-y-6">
                      {currentDestination.foodAndCuisine.map((food, index) => (
                        <motion.div
                          key={index}
                          whileHover={{ scale: 1.02 }}
                          className="p-6 rounded-2xl border border-gray-200 hover:border-amber-300 bg-gradient-to-r from-white to-amber-50/50"
                        >
                          <div className="flex items-start justify-between mb-6">
                            <div className="flex-1">
                              <div className="flex items-center gap-3 mb-3">
                                <h4 className="font-bold text-gray-900 text-xl">{food.name}</h4>
                                {food.mustTry && (
                                  <span className="px-3 py-1 bg-red-100 text-red-800 rounded-full text-sm font-bold">
                                    MUST TRY
                                  </span>
                                )}
                                <span className={`px-3 py-1 rounded-full text-sm font-medium ${
                                  food.type === 'Street Food' ? 'bg-yellow-100 text-yellow-800' :
                                  food.type === 'Local Dish' ? 'bg-green-100 text-green-800' :
                                  'bg-blue-100 text-blue-800'
                                }`}>
                                  {food.type}
                                </span>
                              </div>
                              <p className="text-gray-700 mb-4">{food.description}</p>
                            </div>
                            <Coffee className="w-12 h-12 text-amber-400 ml-4" />
                          </div>
                          
                          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                            <div>
                              <div className="font-semibold text-gray-900 mb-2">Where to Find</div>
                              <div className="flex flex-wrap gap-2">
                                {food.whereToFind.map((place, idx) => (
                                  <span key={idx} className="px-3 py-1 bg-gray-100 text-gray-700 rounded-full text-sm">
                                    {place}
                                  </span>
                                ))}
                              </div>
                            </div>
                            <div className="text-right">
                              <div className="text-3xl font-bold text-gray-900 mb-2">{food.priceRange}</div>
                              <div className="text-sm text-gray-600">Average price</div>
                            </div>
                          </div>
                          
                          <div className="mt-6 pt-6 border-t border-gray-200">
                            <button className="w-full py-3 bg-gradient-to-r from-amber-500 to-orange-500 text-white font-medium rounded-xl hover:opacity-90 transition-all">
                              Find Nearby Restaurants
                            </button>
                          </div>
                        </motion.div>
                      ))}
                    </div>
                  </div>
                )}
                
                {activeTab === 'tips' && (
                  <div className="bg-white rounded-3xl shadow-xl border border-gray-200 p-8">
                    <div className="flex items-center gap-3 mb-8">
                      <div className="p-3 bg-gradient-to-br from-emerald-500 to-green-500 rounded-xl">
                        <Sparkles className="w-6 h-6 text-white" />
                      </div>
                      <div>
                        <h3 className="text-2xl font-bold text-gray-900">Travel Tips</h3>
                        <p className="text-gray-600">Expert advice for your journey</p>
                      </div>
                    </div>
                    
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                      {currentDestination.travelTips.map((category, index) => (
                        <motion.div
                          key={index}
                          whileHover={{ y: -5 }}
                          className="p-6 rounded-2xl border border-gray-200 hover:border-emerald-300 bg-gradient-to-br from-white to-emerald-50/50"
                        >
                          <div className="flex items-center gap-3 mb-6">
                            <div className="p-3 bg-gradient-to-br from-emerald-500 to-green-500 rounded-lg">
                              <Shield className="w-5 h-5 text-white" />
                            </div>
                            <h4 className="font-bold text-gray-900 text-lg">{category.category}</h4>
                          </div>
                          
                          <ul className="space-y-3">
                            {category.tips.map((tip, tipIndex) => (
                              <li key={tipIndex} className="flex items-start gap-3">
                                <div className="w-6 h-6 bg-emerald-100 rounded-full flex items-center justify-center flex-shrink-0 mt-0.5">
                                  <CheckCircle className="w-4 h-4 text-emerald-600" />
                                </div>
                                <p className="text-gray-700">{tip}</p>
                              </li>
                            ))}
                          </ul>
                        </motion.div>
                      ))}
                    </div>
                    
                    {/* Budget Planning */}
                    <div className="mt-12 p-6 rounded-2xl bg-gradient-to-r from-blue-50 to-purple-50 border border-blue-100">
                      <div className="flex items-center gap-3 mb-6">
                        <div className="p-3 bg-gradient-to-br from-blue-500 to-purple-500 rounded-xl">
                          <Wallet className="w-6 h-6 text-white" />
                        </div>
                        <div>
                          <h4 className="font-bold text-gray-900 text-lg">Budget Planning</h4>
                          <p className="text-gray-600">Estimated daily expenses</p>
                        </div>
                      </div>
                      
                      <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
                        <div className="text-center p-4 bg-white rounded-xl border border-gray-200">
                          <div className="text-sm text-gray-600 mb-1">Accommodation</div>
                          <div className="font-bold text-gray-900">₹1500-3000</div>
                        </div>
                        <div className="text-center p-4 bg-white rounded-xl border border-gray-200">
                          <div className="text-sm text-gray-600 mb-1">Food</div>
                          <div className="font-bold text-gray-900">₹500-1500</div>
                        </div>
                        <div className="text-center p-4 bg-white rounded-xl border border-gray-200">
                          <div className="text-sm text-gray-600 mb-1">Activities</div>
                          <div className="font-bold text-gray-900">₹1000-3000</div>
                        </div>
                        <div className="text-center p-4 bg-white rounded-xl border border-gray-200">
                          <div className="text-sm text-gray-600 mb-1">Transport</div>
                          <div className="font-bold text-gray-900">₹500-2000</div>
                        </div>
                      </div>
                    </div>
                  </div>
                )}
                
                {activeTab === 'reviews' && (
                  <div className="bg-white rounded-3xl shadow-xl border border-gray-200 p-8">
                    <div className="flex items-center gap-3 mb-8">
                      <div className="p-3 bg-gradient-to-br from-yellow-500 to-amber-500 rounded-xl">
                        <Star className="w-6 h-6 text-white" />
                      </div>
                      <div>
                        <h3 className="text-2xl font-bold text-gray-900">Traveler Reviews</h3>
                        <p className="text-gray-600">Real experiences from fellow travelers</p>
                      </div>
                    </div>
                    
                    {/* Overall Rating */}
                    <div className="mb-12 p-8 rounded-2xl bg-gradient-to-r from-yellow-50 to-amber-50 border border-yellow-100">
                      <div className="flex items-center justify-between">
                        <div>
                          <div className="text-5xl font-bold text-gray-900 mb-2">{currentDestination.rating}</div>
                          <div className="flex items-center mb-3">
                            {[1, 2, 3, 4, 5].map((star) => (
                              <Star
                                key={star}
                                className={`w-8 h-8 ${
                                  star <= Math.floor(currentDestination.rating)
                                    ? 'text-yellow-500 fill-current'
                                    : 'text-gray-300'
                                }`}
                              />
                            ))}
                          </div>
                          <div className="text-gray-600">
                            Based on {currentDestination.reviewCount.toLocaleString()} reviews
                          </div>
                        </div>
                        <button className="px-8 py-4 bg-gradient-to-r from-yellow-500 to-amber-500 text-white font-bold rounded-xl hover:opacity-90 transition-all">
                          Write a Review
                        </button>
                      </div>
                    </div>
                    
                    {/* Reviews List */}
                    <div className="space-y-8">
                      {currentDestination.userReviews.map((review) => (
                        <motion.div
                          key={review.id}
                          initial={{ opacity: 0, y: 20 }}
                          animate={{ opacity: 1, y: 0 }}
                          className="p-6 rounded-2xl border border-gray-200 hover:border-yellow-300 transition-colors"
                        >
                          <div className="flex items-start justify-between mb-6">
                            <div className="flex items-center gap-4">
                              <img
                                src={review.userAvatar}
                                alt={review.userName}
                                className="w-14 h-14 rounded-xl"
                              />
                              <div>
                                <div className="font-bold text-gray-900 text-lg">{review.userName}</div>
                                <div className="flex items-center gap-3 mt-1">
                                  <div className="flex items-center">
                                    {[1, 2, 3, 4, 5].map((star) => (
                                      <Star
                                        key={star}
                                        className={`w-4 h-4 ${
                                          star <= review.rating
                                            ? 'text-yellow-500 fill-current'
                                            : 'text-gray-300'
                                        }`}
                                      />
                                    ))}
                                  </div>
                                  <span className="text-gray-500 text-sm">{review.date}</span>
                                  {review.verified && (
                                    <span className="px-2 py-1 bg-green-100 text-green-800 rounded-full text-xs font-bold">
                                      Verified
                                    </span>
                                  )}
                                </div>
                              </div>
                            </div>
                            <div className="flex items-center gap-2">
                              <button className="p-2 hover:bg-gray-100 rounded-xl transition-colors">
                                <ThumbsUp className="w-5 h-5 text-gray-400" />
                              </button>
                              <button className="p-2 hover:bg-gray-100 rounded-xl transition-colors">
                                <MessageSquare className="w-5 h-5 text-gray-400" />
                              </button>
                            </div>
                          </div>
                          
                          <p className="text-gray-700 mb-6 leading-relaxed">{review.review}</p>
                          
                          <div className="flex items-center justify-between">
                            <button className="text-blue-600 hover:text-blue-700 font-medium">
                              Read full review →
                            </button>
                            <div className="flex items-center gap-4">
                              <span className="text-gray-500 text-sm">
                                {review.helpful} people found this helpful
                              </span>
                              <button className="px-4 py-2 bg-blue-50 text-blue-600 rounded-xl hover:bg-blue-100 transition-colors text-sm font-medium">
                                Helpful
                              </button>
                            </div>
                          </div>
                        </motion.div>
                      ))}
                    </div>
                  </div>
                )}
              </motion.div>
            </AnimatePresence>
          </div>
          
          {/* Right Column - Chat & Planning */}
          <div className="lg:col-span-1 space-y-6">
            {/* AI Chat Assistant */}
            <motion.div
              initial={{ opacity: 0, x: 20 }}
              animate={{ opacity: 1, x: 0 }}
              className="bg-white rounded-3xl shadow-xl border border-gray-200 overflow-hidden"
            >
              <div className="bg-gradient-to-r from-blue-600 to-purple-600 p-6">
                <div className="flex items-center gap-4">
                  <div className="relative">
                    <div className="w-12 h-12 bg-white/20 backdrop-blur-sm rounded-2xl flex items-center justify-center">
                      <Bot className="w-6 h-6 text-white" />
                    </div>
                    <div className="absolute -top-1 -right-1 w-4 h-4 bg-green-400 rounded-full border-2 border-white" />
                  </div>
                  <div className="flex-1">
                    <h3 className="font-bold text-white text-lg">Destination AI</h3>
                    <p className="text-white/80 text-sm">Ask anything about {currentDestination.name}</p>
                  </div>
                  <button
                    onClick={clearChat}
                    className="p-2 hover:bg-white/10 rounded-xl transition-colors"
                  >
                    <RefreshCw className="w-5 h-5 text-white" />
                  </button>
                </div>
              </div>
              
              <div className="h-[300px] overflow-y-auto p-4 bg-gray-50">
                <AnimatePresence>
                  {chatMessages.filter(msg => msg.relatedTo === currentDestination.name).length === 0 ? (
                    <motion.div
                      initial={{ opacity: 0 }}
                      animate={{ opacity: 1 }}
                      className="text-center py-8"
                    >
                      <div className="w-16 h-16 bg-gradient-to-br from-blue-100 to-purple-100 rounded-full flex items-center justify-center mx-auto mb-4">
                        <MessageCircle className="w-8 h-8 text-blue-500" />
                      </div>
                      <p className="text-gray-600">
                        Ask questions about {currentDestination.name} for instant answers!
                      </p>
                    </motion.div>
                  ) : (
                    chatMessages.filter(msg => msg.relatedTo === currentDestination.name).map((message) => (
                      <motion.div
                        key={message.id}
                        initial={{ opacity: 0, y: 10 }}
                        animate={{ opacity: 1, y: 0 }}
                        className={`mb-4 ${message.sender === 'user' ? 'text-right' : ''}`}
                      >
                        <div
                          className={`inline-flex items-start gap-3 max-w-[90%] ${
                            message.sender === 'user'
                              ? 'bg-gradient-to-r from-blue-500 to-cyan-500 text-white rounded-2xl rounded-tr-none p-3 ml-auto'
                              : 'bg-white text-gray-900 rounded-2xl rounded-tl-none p-3 border border-gray-200 shadow-sm'
                          }`}
                        >
                          {message.sender === 'ai' && (
                            <div className="w-8 h-8 bg-gradient-to-r from-purple-500 to-pink-500 rounded-full flex items-center justify-center flex-shrink-0">
                              <Bot className="w-4 h-4 text-white" />
                            </div>
                          )}
                          <div className="flex-1">
                            <p className="text-sm leading-relaxed">{message.text}</p>
                            <div className={`text-xs mt-2 ${
                              message.sender === 'user' ? 'text-blue-100' : 'text-gray-500'
                            }`}>
                              {new Date(message.timestamp).toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' })}
                            </div>
                          </div>
                          {message.sender === 'user' && (
                            <div className="w-8 h-8 bg-gradient-to-r from-blue-500 to-cyan-500 rounded-full flex items-center justify-center flex-shrink-0">
                              <User className="w-4 h-4 text-white" />
                            </div>
                          )}
                        </div>
                      </motion.div>
                    ))
                  )}
                  
                  {isChatLoading && (
                    <motion.div
                      initial={{ opacity: 0 }}
                      animate={{ opacity: 1 }}
                      className="mb-4"
                    >
                      <div className="inline-flex items-start gap-3 max-w-[90%] bg-white text-gray-900 rounded-2xl rounded-tl-none p-3 border border-gray-200 shadow-sm">
                        <div className="w-8 h-8 bg-gradient-to-r from-purple-500 to-pink-500 rounded-full flex items-center justify-center flex-shrink-0">
                          <Bot className="w-4 h-4 text-white" />
                        </div>
                        <div className="flex items-center gap-3">
                          <div className="flex space-x-1">
                            <div className="w-2 h-2 bg-gradient-to-r from-blue-500 to-purple-500 rounded-full animate-pulse" />
                            <div className="w-2 h-2 bg-gradient-to-r from-blue-500 to-purple-500 rounded-full animate-pulse delay-150" />
                            <div className="w-2 h-2 bg-gradient-to-r from-blue-500 to-purple-500 rounded-full animate-pulse delay-300" />
                          </div>
                          <span className="text-sm text-gray-600">Thinking...</span>
                        </div>
                      </div>
                    </motion.div>
                  )}
                </AnimatePresence>
              </div>
              
              <div className="p-4 border-t border-gray-200">
                <div className="flex gap-3">
                  <div className="flex-1 relative">
                    <input
                      type="text"
                      value={chatInput}
                      onChange={(e) => setChatInput(e.target.value)}
                      onKeyPress={(e) => e.key === 'Enter' && handleChatSubmit()}
                      placeholder={`Ask about ${currentDestination.name}...`}
                      className="w-full pl-4 pr-12 py-3 bg-gray-100 rounded-xl border border-gray-300 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent text-sm"
                      disabled={isChatLoading}
                    />
                    <div className="absolute right-3 top-1/2 transform -translate-y-1/2 flex items-center gap-2">
                      <button className="p-1 hover:bg-gray-200 rounded">
                        <Mic className="w-4 h-4 text-gray-400" />
                      </button>
                      <button className="p-1 hover:bg-gray-200 rounded">
                        <Paperclip className="w-4 h-4 text-gray-400" />
                      </button>
                    </div>
                  </div>
                  <button
                    onClick={handleChatSubmit}
                    disabled={!chatInput.trim() || isChatLoading}
                    className={`p-3 rounded-xl ${
                      !chatInput.trim() || isChatLoading
                        ? 'bg-gray-300 text-gray-500 cursor-not-allowed'
                        : 'bg-gradient-to-r from-blue-600 to-purple-600 text-white hover:opacity-90'
                    }`}
                  >
                    <Send className="w-5 h-5" />
                  </button>
                </div>
                
                {/* Quick Questions */}
                <div className="mt-4">
                  <div className="text-xs text-gray-500 mb-2">Try asking:</div>
                  <div className="flex flex-wrap gap-2">
                    {[
                      "Best time to visit?",
                      "What to eat?",
                      "Hidden spots?",
                      "Budget tips?",
                      "Transport options?"
                    ].map((question, index) => (
                      <button
                        key={index}
                        onClick={() => setChatInput(question)}
                        className="px-3 py-1.5 bg-gray-100 text-gray-700 text-xs rounded-full hover:bg-gray-200 transition-colors"
                      >
                        {question}
                      </button>
                    ))}
                  </div>
                </div>
              </div>
            </motion.div>
            
            {/* Plan Your Trip */}
            <motion.div
              initial={{ opacity: 0, x: 20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ delay: 0.2 }}
              className="bg-gradient-to-br from-indigo-50 to-purple-50 rounded-3xl shadow-xl border border-indigo-100 p-6"
            >
              <div className="flex items-center gap-3 mb-6">
                <div className="p-3 bg-gradient-to-br from-indigo-500 to-purple-500 rounded-xl">
                  <Calendar className="w-6 h-6 text-white" />
                </div>
                <div>
                  <h3 className="font-bold text-gray-900">Plan Your Trip</h3>
                  <p className="text-gray-600 text-sm">Create your perfect itinerary</p>
                </div>
              </div>
              
              <div className="space-y-6">
                <div>
                  <h4 className="font-semibold text-gray-900 mb-3 flex items-center gap-2">
                    <Building className="w-5 h-5 text-indigo-500" />
                    Stay
                  </h4>
                  {currentDestination.accommodation.map((acc, index) => (
                    <div key={index} className="mb-3 p-4 bg-white/50 rounded-xl border border-indigo-100">
                      <div className="font-medium text-gray-900">{acc.type}</div>
                      <div className="text-sm text-gray-600 mt-1">{acc.priceRange}</div>
                      <div className="text-xs text-indigo-600 mt-2">
                        Areas: {acc.bestAreas.join(', ')}
                      </div>
                    </div>
                  ))}
                </div>
                
                <div>
                  <h4 className="font-semibold text-gray-900 mb-3 flex items-center gap-2">
                    <Navigation className="w-5 h-5 text-green-500" />
                    Travel
                  </h4>
                  {currentDestination.transportation.map((trans, index) => (
                    <div key={index} className="mb-3 p-4 bg-white/50 rounded-xl border border-green-100">
                      <div className="font-medium text-gray-900">{trans.mode}</div>
                      <div className="text-sm text-gray-600 mt-1">{trans.fromNearestCity}</div>
                      <div className="flex items-center justify-between text-xs text-gray-500 mt-2">
                        <span>⏱️ {trans.duration}</span>
                        <span>💰 {trans.cost}</span>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
              
              <button className="w-full mt-6 py-3 bg-gradient-to-r from-indigo-500 to-purple-500 text-white font-medium rounded-xl hover:opacity-90 transition-all">
                Create Itinerary
              </button>
            </motion.div>
            
            {/* Quick Actions */}
            <motion.div
              initial={{ opacity: 0, x: 20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ delay: 0.3 }}
              className="bg-white rounded-3xl shadow-xl border border-gray-200 p-6"
            >
              <h3 className="font-bold text-gray-900 mb-6">Quick Actions</h3>
              
              <div className="grid grid-cols-2 gap-3">
                <button className="p-4 bg-blue-50 text-blue-600 rounded-xl hover:bg-blue-100 transition-colors flex flex-col items-center gap-2">
                  <Map className="w-6 h-6" />
                  <span className="text-sm font-medium">Map View</span>
                </button>
                <button className="p-4 bg-purple-50 text-purple-600 rounded-xl hover:bg-purple-100 transition-colors flex flex-col items-center gap-2">
                  <Bookmark className="w-6 h-6" />
                  <span className="text-sm font-medium">Save Trip</span>
                </button>
                <button className="p-4 bg-green-50 text-green-600 rounded-xl hover:bg-green-100 transition-colors flex flex-col items-center gap-2">
                  <Download className="w-6 h-6" />
                  <span className="text-sm font-medium">Download Guide</span>
                </button>
                <button className="p-4 bg-amber-50 text-amber-600 rounded-xl hover:bg-amber-100 transition-colors flex flex-col items-center gap-2">
                  <Share2 className="w-6 h-6" />
                  <span className="text-sm font-medium">Share</span>
                </button>
              </div>
            </motion.div>
          </div>
        </div>
        
        {/* Image Modal */}
        <AnimatePresence>
          {selectedImage && (
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              className="fixed inset-0 bg-black/90 z-50 flex items-center justify-center p-4"
              onClick={() => setSelectedImage(null)}
            >
              <motion.div
                initial={{ scale: 0.9 }}
                animate={{ scale: 1 }}
                className="relative max-w-4xl max-h-[90vh]"
                onClick={(e) => e.stopPropagation()}
              >
                <img
                  src={selectedImage}
                  alt="Enlarged view"
                  className="w-full h-full object-contain rounded-2xl"
                />
                <button
                  onClick={() => setSelectedImage(null)}
                  className="absolute top-4 right-4 p-2 bg-black/50 text-white rounded-full hover:bg-black/70"
                >
                  <X className="w-6 h-6" />
                </button>
              </motion.div>
            </motion.div>
          )}
        </AnimatePresence>
      </div>
    </div>
  );
};