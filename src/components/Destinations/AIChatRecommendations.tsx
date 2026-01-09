// src/components/Destinations/AIChatRecommendations.tsx
import React, { useState, useRef, useEffect } from 'react';
import { 
  MessageSquare, 
  Send, 
  Bot, 
  User, 
  Sparkles, 
  X, 
  RefreshCw,
  MapPin,
  Star,
  Users,
  Calendar,
  Mic,
  Paperclip,
  Smile,
  Zap,
  Globe,
  TrendingUp
} from 'lucide-react';
import { motion, AnimatePresence } from 'framer-motion';
import { useDestinationStore } from '../../lib/store/destinations/useDestinationStore';

export const AIChatRecommendations: React.FC = () => {
  const [inputMessage, setInputMessage] = useState('');
  const [isLoading, setIsLoading] = useState(false);
  const [isExpanded, setIsExpanded] = useState(false);
  const messagesEndRef = useRef<HTMLDivElement>(null);
  
  const { 
    chatMessages, 
    addChatMessage, 
    clearChat,
    getChatRecommendedDestinations,
    searchDestinations 
  } = useDestinationStore();
  
  const chatDestinations = getChatRecommendedDestinations();
  
  useEffect(() => {
    messagesEndRef.current?.scrollIntoView({ behavior: 'smooth' });
  }, [chatMessages]);

  const handleSendMessage = async () => {
    if (!inputMessage.trim() || isLoading) return;
    
    const userMessage = inputMessage.trim();
    setInputMessage('');
    
    addChatMessage({
      text: userMessage,
      sender: 'user',
    });
    
    setIsLoading(true);
    
    setTimeout(() => {
      const foundDestinations = searchDestinations(userMessage);
      
      let aiResponse = '';
      if (foundDestinations.length > 0) {
        const destinationNames = foundDestinations.slice(0, 3).map(d => d.name).join(', ');
        aiResponse = `Perfect! Based on your description, I recommend ${destinationNames}. These match your preferences perfectly and are trending this season. Here's why you'll love them:`;
      } else {
        aiResponse = "Thanks for sharing more details! I've refined my search based on your preferences. Here are some hidden gems that might interest you:";
      }
      
      addChatMessage({
        text: aiResponse,
        sender: 'ai',
      });
      
      setIsLoading(false);
    }, 1200);
  };

  const handleKeyPress = (e: React.KeyboardEvent) => {
    if (e.key === 'Enter' && !e.shiftKey) {
      e.preventDefault();
      handleSendMessage();
    }
  };

  const handleClearChat = () => {
    clearChat();
  };

  const handleQuickQuery = (query: string) => {
    setInputMessage(query);
  };

  const quickQueries = [
    "🌊 Beach resorts with private pools",
    "🏔️ Mountain cabins with hot tubs",
    "🏙️ City views with rooftop access",
    "🌴 Tropical islands for couples",
    "🏰 Historic castles with modern amenities",
    "🎿 Ski-in ski-out luxury lodges",
  ];

  return (
    <div className="py-16 relative">
      {/* Background Pattern */}
      <div className="absolute inset-0 bg-gradient-to-br from-blue-50 via-purple-50 to-pink-50 opacity-50" />
      
      <div className="max-w-7xl mx-auto px-4 relative">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          className="text-center mb-16"
        >
          <div className="inline-flex items-center gap-3 bg-gradient-to-r from-blue-500 to-purple-500 text-white px-6 py-3 rounded-full mb-6">
            <Zap className="w-5 h-5" />
            <span className="font-semibold">AI-Powered Discovery</span>
          </div>
          
          <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4">
            Still Searching? Let's Chat!
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Describe your dream trip in natural language. Our AI will understand exactly what you're looking for.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 lg:grid-cols-5 gap-8">
          {/* Chat Interface - Takes 3 columns */}
          <div className="lg:col-span-3">
            <div className="bg-white rounded-3xl shadow-2xl border border-gray-200 overflow-hidden h-full">
              {/* Chat Header with Glass Morphism */}
              <div className="relative bg-gradient-to-r from-blue-600 via-purple-600 to-pink-600 p-6">
                <div className="absolute inset-0 bg-black/10" />
                <div className="relative flex items-center justify-between">
                  <div className="flex items-center gap-4">
                    <div className="relative">
                      <div className="w-12 h-12 bg-white/20 backdrop-blur-sm rounded-2xl flex items-center justify-center">
                        <Bot className="w-6 h-6 text-white" />
                      </div>
                      <div className="absolute -top-1 -right-1 w-4 h-4 bg-green-400 rounded-full border-2 border-white" />
                    </div>
                    <div>
                      <h3 className="text-xl font-bold text-white">Travel Genius AI</h3>
                      <p className="text-white/80 text-sm">Online • Always ready to help</p>
                    </div>
                  </div>
                  <div className="flex items-center gap-2">
                    <button
                      onClick={() => setIsExpanded(!isExpanded)}
                      className="p-2 hover:bg-white/10 rounded-xl transition-colors"
                      title={isExpanded ? 'Minimize' : 'Expand'}
                    >
                      <div className="w-5 h-5 text-white">
                        {isExpanded ? '−' : '+'}
                      </div>
                    </button>
                    <button
                      onClick={handleClearChat}
                      className="p-2 hover:bg-white/10 rounded-xl transition-colors"
                      title="Clear chat"
                    >
                      <RefreshCw className="w-5 h-5 text-white" />
                    </button>
                  </div>
                </div>
              </div>

              {/* Chat Messages */}
              <div className="h-[500px] overflow-y-auto p-6 bg-gradient-to-b from-gray-50 to-white">
                <AnimatePresence>
                  {/* Initial greeting */}
                  {chatMessages.length === 0 && (
                    <motion.div
                      initial={{ opacity: 0, scale: 0.9 }}
                      animate={{ opacity: 1, scale: 1 }}
                      className="text-center py-12"
                    >
                      <div className="relative inline-block mb-6">
                        <div className="w-32 h-32 bg-gradient-to-br from-blue-500/10 to-purple-500/10 rounded-full flex items-center justify-center">
                          <Sparkles className="w-16 h-16 text-blue-500" />
                        </div>
                        <div className="absolute -top-2 -right-2 w-10 h-10 bg-gradient-to-r from-yellow-400 to-orange-400 rounded-full flex items-center justify-center animate-bounce">
                          <Zap className="w-5 h-5 text-white" />
                        </div>
                      </div>
                      <h3 className="text-2xl font-bold text-gray-900 mb-3">
                        Can't decide? I can help!
                      </h3>
                      <p className="text-gray-600 mb-8 max-w-md mx-auto">
                        Tell me about your ideal vacation. I'll analyze thousands of options to find your perfect match.
                      </p>
                      <div className="grid grid-cols-2 gap-3 max-w-sm mx-auto">
                        <div className="bg-blue-50 rounded-xl p-4">
                          <div className="text-sm text-blue-600 font-semibold">🎯 95% Accuracy</div>
                          <div className="text-xs text-gray-600">Precise matching</div>
                        </div>
                        <div className="bg-purple-50 rounded-xl p-4">
                          <div className="text-sm text-purple-600 font-semibold">🚀 Instant Results</div>
                          <div className="text-xs text-gray-600">Real-time suggestions</div>
                        </div>
                      </div>
                    </motion.div>
                  )}

                  {/* Chat messages */}
                  {chatMessages.map((message, index) => (
                    <motion.div
                      key={message.id}
                      initial={{ opacity: 0, y: 10 }}
                      animate={{ opacity: 1, y: 0 }}
                      transition={{ delay: index * 0.05 }}
                      className={`mb-6 ${message.sender === 'user' ? 'text-right' : ''}`}
                    >
                      <div
                        className={`inline-flex max-w-[85%] ${
                          message.sender === 'user'
                            ? 'flex-row-reverse ml-auto'
                            : ''
                        }`}
                      >
                        <div className={`flex-shrink-0 w-8 h-8 rounded-full flex items-center justify-center ${
                          message.sender === 'user'
                            ? 'bg-gradient-to-r from-blue-500 to-cyan-500 ml-3'
                            : 'bg-gradient-to-r from-purple-500 to-pink-500 mr-3'
                        }`}>
                          {message.sender === 'user' ? (
                            <User className="w-4 h-4 text-white" />
                          ) : (
                            <Bot className="w-4 h-4 text-white" />
                          )}
                        </div>
                        <div
                          className={`rounded-2xl p-4 ${
                            message.sender === 'user'
                              ? 'bg-gradient-to-r from-blue-500 to-cyan-500 text-white rounded-tr-none'
                              : 'bg-gray-100 text-gray-900 rounded-tl-none'
                          }`}
                        >
                          <p className="text-sm leading-relaxed">{message.text}</p>
                          <div className={`text-xs mt-2 ${
                            message.sender === 'user' ? 'text-blue-100' : 'text-gray-500'
                          }`}>
                            {new Date(message.timestamp).toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' })}
                          </div>
                        </div>
                      </div>
                    </motion.div>
                  ))}

                  {/* Loading indicator */}
                  {isLoading && (
                    <motion.div
                      initial={{ opacity: 0 }}
                      animate={{ opacity: 1 }}
                      className="mb-6"
                    >
                      <div className="inline-flex max-w-[85%]">
                        <div className="flex-shrink-0 w-8 h-8 rounded-full bg-gradient-to-r from-purple-500 to-pink-500 flex items-center justify-center mr-3">
                          <Bot className="w-4 h-4 text-white" />
                        </div>
                        <div className="bg-gray-100 text-gray-900 rounded-2xl rounded-tl-none p-4">
                          <div className="flex items-center gap-3">
                            <div className="flex space-x-1">
                              <div className="w-2 h-2 bg-gradient-to-r from-blue-500 to-purple-500 rounded-full animate-pulse" />
                              <div className="w-2 h-2 bg-gradient-to-r from-blue-500 to-purple-500 rounded-full animate-pulse delay-150" />
                              <div className="w-2 h-2 bg-gradient-to-r from-blue-500 to-purple-500 rounded-full animate-pulse delay-300" />
                            </div>
                            <span className="text-sm text-gray-600">Analyzing your preferences...</span>
                          </div>
                        </div>
                      </div>
                    </motion.div>
                  )}
                </AnimatePresence>
                <div ref={messagesEndRef} />
              </div>

              {/* Quick Queries */}
              <div className="p-4 border-t border-gray-200 bg-white">
                <div className="mb-4">
                  <div className="flex items-center gap-2 mb-3">
                    <Sparkles className="w-4 h-4 text-purple-500" />
                    <p className="text-sm font-medium text-gray-700">Quick suggestions:</p>
                  </div>
                  <div className="flex flex-wrap gap-2">
                    {quickQueries.map((query, index) => (
                      <motion.button
                        key={index}
                        whileHover={{ scale: 1.02 }}
                        whileTap={{ scale: 0.98 }}
                        onClick={() => handleQuickQuery(query)}
                        className="px-4 py-2 bg-gradient-to-r from-blue-50 to-purple-50 hover:from-blue-100 hover:to-purple-100 border border-blue-100 text-gray-700 text-sm rounded-full transition-all"
                      >
                        {query}
                      </motion.button>
                    ))}
                  </div>
                </div>

                {/* Input Area */}
                <div className="relative">
                  <div className="flex items-center gap-3 mb-2">
                    <button className="p-2 hover:bg-gray-100 rounded-lg transition-colors">
                      <Paperclip className="w-5 h-5 text-gray-500" />
                    </button>
                    <button className="p-2 hover:bg-gray-100 rounded-lg transition-colors">
                      <Mic className="w-5 h-5 text-gray-500" />
                    </button>
                    <button className="p-2 hover:bg-gray-100 rounded-lg transition-colors">
                      <Smile className="w-5 h-5 text-gray-500" />
                    </button>
                  </div>
                  
                  <div className="flex gap-3">
                    <div className="flex-1 relative">
                      <input
                        type="text"
                        value={inputMessage}
                        onChange={(e) => setInputMessage(e.target.value)}
                        onKeyPress={handleKeyPress}
                        placeholder="Describe your dream vacation... (e.g., 'a quiet beach resort with yoga classes and organic food')"
                        className="w-full px-6 py-4 bg-gray-50 rounded-2xl border-2 border-gray-200 text-gray-900 placeholder-gray-500 focus:outline-none focus:border-blue-500 focus:ring-4 focus:ring-blue-500/10 transition-all"
                        disabled={isLoading}
                      />
                      {inputMessage && (
                        <button
                          onClick={() => setInputMessage('')}
                          className="absolute right-4 top-1/2 transform -translate-y-1/2 text-gray-400 hover:text-gray-600"
                        >
                          <X className="w-5 h-5" />
                        </button>
                      )}
                    </div>
                    <motion.button
                      onClick={handleSendMessage}
                      disabled={!inputMessage.trim() || isLoading}
                      whileHover={{ scale: 1.05 }}
                      whileTap={{ scale: 0.95 }}
                      className={`px-8 py-4 rounded-2xl font-semibold flex items-center gap-2 ${
                        !inputMessage.trim() || isLoading
                          ? 'bg-gray-300 text-gray-500 cursor-not-allowed'
                          : 'bg-gradient-to-r from-blue-600 to-purple-600 text-white hover:shadow-lg hover:shadow-blue-500/25'
                      }`}
                    >
                      <Send className="w-5 h-5" />
                      Send
                    </motion.button>
                  </div>
                  <p className="text-xs text-gray-500 mt-3 px-2">
                    Press Enter to send • Be as detailed as possible for better recommendations
                  </p>
                </div>
              </div>
            </div>
          </div>

          {/* Recommendations Sidebar - Takes 2 columns */}
          <div className="lg:col-span-2 space-y-8">
            {/* Live Recommendations */}
            <div className="bg-gradient-to-br from-white to-gray-50 rounded-3xl shadow-2xl border border-gray-200 p-6 sticky top-6">
              <div className="flex items-center gap-3 mb-6">
                <div className="p-3 bg-gradient-to-br from-green-500 to-emerald-500 rounded-2xl shadow-lg">
                  <MapPin className="w-6 h-6 text-white" />
                </div>
                <div>
                  <h3 className="text-xl font-bold text-gray-900">Live AI Picks</h3>
                  <p className="text-sm text-gray-600">
                    {chatDestinations.length} destinations matching your conversation
                  </p>
                </div>
              </div>

              <AnimatePresence mode="wait">
                {chatDestinations.length === 0 ? (
                  <motion.div
                    key="empty"
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    exit={{ opacity: 0 }}
                    className="text-center py-8"
                  >
                    <div className="w-20 h-20 bg-gradient-to-br from-gray-100 to-gray-200 rounded-full flex items-center justify-center mx-auto mb-4">
                      <Sparkles className="w-10 h-10 text-gray-400" />
                    </div>
                    <p className="text-gray-600">
                      Start chatting to see personalized recommendations appear here
                    </p>
                  </motion.div>
                ) : (
                  <motion.div
                    key="results"
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    exit={{ opacity: 0 }}
                    className="space-y-4"
                  >
                    {chatDestinations.map((destination, index) => (
                      <motion.div
                        key={destination.id}
                        initial={{ opacity: 0, x: -20 }}
                        animate={{ opacity: 1, x: 0 }}
                        transition={{ delay: index * 0.1 }}
                        className="group p-4 rounded-2xl border border-gray-200 hover:border-blue-300 hover:shadow-lg bg-white transition-all cursor-pointer"
                      >
                        <div className="flex gap-4">
                          <div className="relative flex-shrink-0">
                            <div className="w-16 h-16 rounded-xl overflow-hidden">
                              <img
                                src={destination.image}
                                alt={destination.name}
                                className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-300"
                              />
                            </div>
                            <div className="absolute -top-2 -right-2 bg-gradient-to-r from-blue-500 to-purple-500 text-white text-xs font-bold px-2 py-1 rounded-full shadow-lg">
                              {Math.round(destination.rating)}
                            </div>
                          </div>
                          <div className="flex-1 min-w-0">
                            <div className="flex items-start justify-between mb-2">
                              <h4 className="font-bold text-gray-900 text-sm truncate">
                                {destination.name}
                              </h4>
                              <div className="text-xs font-semibold px-2 py-1 rounded-full bg-gradient-to-r from-blue-50 to-purple-50 text-blue-700">
                                {destination.priceRange}
                              </div>
                            </div>
                            <div className="flex items-center gap-2 text-gray-600 text-xs mb-3">
                              <MapPin className="w-3 h-3" />
                              <span className="truncate">{destination.location}</span>
                            </div>
                            <div className="flex items-center justify-between">
                              <div className="flex items-center gap-4">
                                <div className="flex items-center gap-1 text-xs">
                                  <Users className="w-3 h-3 text-gray-400" />
                                  <span className="text-gray-600">{destination.travelers?.length || 0}</span>
                                </div>
                                <div className="flex items-center gap-1 text-xs">
                                  <Calendar className="w-3 h-3 text-gray-400" />
                                  <span className="text-gray-600">{destination.duration}</span>
                                </div>
                              </div>
                              <button className="text-xs font-medium text-blue-600 hover:text-blue-700">
                                View →
                              </button>
                            </div>
                          </div>
                        </div>
                      </motion.div>
                    ))}
                  </motion.div>
                )}
              </AnimatePresence>

              {/* Stats */}
              {chatDestinations.length > 0 && (
                <motion.div
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  className="mt-8 pt-6 border-t border-gray-200"
                >
                  <div className="grid grid-cols-3 gap-4">
                    <div className="text-center">
                      <div className="text-2xl font-bold text-gray-900 mb-1">
                        {chatDestinations.length}
                      </div>
                      <div className="text-xs text-gray-600">Matches</div>
                    </div>
                    <div className="text-center">
                      <div className="text-2xl font-bold text-gray-900 mb-1">
                        {Math.round(
                          chatDestinations.reduce((acc, dest) => acc + dest.rating, 0) / 
                          chatDestinations.length
                        ).toFixed(1)}
                      </div>
                      <div className="text-xs text-gray-600">Avg Rating</div>
                    </div>
                    <div className="text-center">
                      <div className="text-2xl font-bold text-gray-900 mb-1">
                        94%
                      </div>
                      <div className="text-xs text-gray-600">Accuracy</div>
                    </div>
                  </div>
                </motion.div>
              )}
            </div>

            {/* AI Stats Card */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.3 }}
              className="bg-gradient-to-br from-blue-900 to-purple-900 rounded-3xl p-6 text-white"
            >
              <div className="flex items-center gap-3 mb-6">
                <div className="p-2 bg-white/20 rounded-xl">
                  <Zap className="w-6 h-6" />
                </div>
                <div>
                  <h4 className="font-bold text-lg">AI Travel Genius</h4>
                  <p className="text-white/80 text-sm">Powered by advanced algorithms</p>
                </div>
              </div>
              
              <div className="space-y-4">
                <div className="flex items-center justify-between">
                  <div className="flex items-center gap-3">
                    <div className="w-8 h-8 bg-white/10 rounded-lg flex items-center justify-center">
                      <Globe className="w-4 h-4" />
                    </div>
                    <div>
                      <div className="text-sm text-white/90">Destinations Analyzed</div>
                      <div className="text-2xl font-bold">10,000+</div>
                    </div>
                  </div>
                </div>
                
                <div className="flex items-center justify-between">
                  <div className="flex items-center gap-3">
                    <div className="w-8 h-8 bg-white/10 rounded-lg flex items-center justify-center">
                      <TrendingUp className="w-4 h-4" />
                    </div>
                    <div>
                      <div className="text-sm text-white/90">Success Rate</div>
                      <div className="text-2xl font-bold">96.7%</div>
                    </div>
                  </div>
                </div>
                
                <div className="pt-4 border-t border-white/20">
                  <p className="text-white/80 text-sm">
                    Our AI analyzes thousands of data points including seasonality, reviews, and current trends to find your perfect match.
                  </p>
                </div>
              </div>
            </motion.div>
          </div>
        </div>
      </div>
    </div>
  );
};