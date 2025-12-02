import React, { useState } from 'react';
import { X, Send } from 'lucide-react';

const ChatbotWindow = ({ isOpen, onClose }) => {
    const [message, setMessage] = useState('');
    const [messages, setMessages] = useState([
        {
            type: 'bot',
            text: 'नमस्ते! Welcome to NyayaSetu Assistant. How can I help you today?',
            timestamp: new Date().toLocaleTimeString('en-IN', { hour: '2-digit', minute: '2-digit' })
        }
    ]);

    const handleSendMessage = () => {
        if (message.trim()) {
            // Add user message
            const newMessage = {
                type: 'user',
                text: message,
                timestamp: new Date().toLocaleTimeString('en-IN', { hour: '2-digit', minute: '2-digit' })
            };
            setMessages([...messages, newMessage]);
            setMessage('');

            // Simulate bot response (UI only, no actual logic)
            setTimeout(() => {
                setMessages(prev => [...prev, {
                    type: 'bot',
                    text: 'Thank you for your message. This is a UI demonstration.',
                    timestamp: new Date().toLocaleTimeString('en-IN', { hour: '2-digit', minute: '2-digit' })
                }]);
            }, 800);
        }
    };

    const handleKeyPress = (e) => {
        if (e.key === 'Enter' && !e.shiftKey) {
            e.preventDefault();
            handleSendMessage();
        }
    };

    return (
        <>
            {/* Backdrop */}
            {isOpen && (
                <div
                    className="fixed inset-0 bg-black bg-opacity-20 z-40 transition-opacity duration-300"
                    onClick={onClose}
                />
            )}

            {/* Chat Window */}
            <div
                className={`fixed bottom-6 right-6 z-50 w-[320px] h-[480px] rounded-2xl shadow-2xl transition-all duration-300 ease-out transform ${isOpen ? 'translate-y-0 opacity-100 scale-100' : 'translate-y-8 opacity-0 scale-95 pointer-events-none'
                    }`}
                style={{
                    background: 'linear-gradient(135deg, #f8fafc 0%, #e0f2fe 100%)',
                }}
            >
                {/* Dark mode variant (you can toggle this based on theme) */}
                <div className="flex flex-col h-full rounded-2xl overflow-hidden bg-white dark:bg-gradient-to-br dark:from-slate-900 dark:to-slate-800 border border-gray-200 dark:border-slate-700">

                    {/* Header */}
                    <div
                        className="relative px-5 py-4 text-white"
                        style={{
                            background: 'linear-gradient(135deg, #0d47a1 0%, #1e40af 50%, #2563eb 100%)',
                        }}
                    >
                        <div className="flex items-center justify-between">
                            <div className="flex items-center space-x-3">
                                <div className="w-10 h-10 rounded-full bg-white/20 backdrop-blur-sm flex items-center justify-center">
                                    <span className="text-lg font-bold">न्याय</span>
                                </div>
                                <div>
                                    <h3 className="font-semibold text-base">NyayaSetu Assistant</h3>
                                    <p className="text-xs text-blue-100">Always here to help</p>
                                </div>
                            </div>
                            <button
                                onClick={onClose}
                                className="w-8 h-8 rounded-full hover:bg-white/20 transition-colors flex items-center justify-center"
                                aria-label="Close chat"
                            >
                                <X className="w-5 h-5" />
                            </button>
                        </div>
                    </div>

                    {/* Messages Area */}
                    <div className="flex-1 overflow-y-auto p-4 space-y-3 bg-gradient-to-b from-blue-50/50 to-white dark:from-slate-800 dark:to-slate-900">
                        {messages.map((msg, index) => (
                            <div
                                key={index}
                                className={`flex ${msg.type === 'user' ? 'justify-end' : 'justify-start'} animate-slide-up`}
                            >
                                <div
                                    className={`max-w-[75%] rounded-2xl px-4 py-2.5 shadow-md ${msg.type === 'user'
                                            ? 'bg-gradient-to-r from-blue-600 to-blue-700 text-white rounded-br-sm'
                                            : 'bg-white dark:bg-slate-700 text-gray-800 dark:text-gray-100 rounded-bl-sm border border-gray-100 dark:border-slate-600'
                                        }`}
                                >
                                    <p className="text-sm leading-relaxed">{msg.text}</p>
                                    <p className={`text-xs mt-1 ${msg.type === 'user' ? 'text-blue-100' : 'text-gray-400 dark:text-gray-500'
                                        }`}>
                                        {msg.timestamp}
                                    </p>
                                </div>
                            </div>
                        ))}
                    </div>

                    {/* Input Area */}
                    <div className="p-4 bg-white dark:bg-slate-800 border-t border-gray-200 dark:border-slate-700">
                        <div className="flex items-center space-x-2">
                            <input
                                type="text"
                                value={message}
                                onChange={(e) => setMessage(e.target.value)}
                                onKeyPress={handleKeyPress}
                                placeholder="Type your message..."
                                className="flex-1 px-4 py-2.5 rounded-xl border border-gray-300 dark:border-slate-600 bg-gray-50 dark:bg-slate-700 text-gray-800 dark:text-gray-100 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent placeholder-gray-400 dark:placeholder-gray-500 text-sm transition-all"
                            />
                            <button
                                onClick={handleSendMessage}
                                disabled={!message.trim()}
                                className="w-10 h-10 rounded-xl bg-gradient-to-r from-blue-600 to-blue-700 hover:from-blue-700 hover:to-blue-800 disabled:from-gray-300 disabled:to-gray-400 dark:disabled:from-slate-600 dark:disabled:to-slate-700 text-white shadow-lg hover:shadow-xl transition-all duration-200 flex items-center justify-center disabled:cursor-not-allowed transform hover:scale-105 active:scale-95"
                                aria-label="Send message"
                            >
                                <Send className="w-5 h-5" />
                            </button>
                        </div>
                    </div>
                </div>
            </div>
        </>
    );
};

export default ChatbotWindow;
