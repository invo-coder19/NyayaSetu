import React from 'react';
import { MessageCircle } from 'lucide-react';

const ChatbotButton = ({ onClick, isOpen }) => {
    return (
        <button
            onClick={onClick}
            className={`fixed bottom-6 right-6 z-50 w-16 h-16 rounded-full shadow-2xl transition-all duration-300 ease-out transform hover:scale-110 active:scale-95 ${isOpen ? 'opacity-0 pointer-events-none' : 'opacity-100'
                }`}
            style={{
                background: 'linear-gradient(135deg, #0d47a1 0%, #1e40af 50%, #2563eb 100%)',
            }}
            aria-label="Open NyayaSetu Assistant"
        >
            {/* Pulsing glow effect */}
            <div className="absolute inset-0 rounded-full bg-blue-400 opacity-75 animate-pulse-glow"></div>

            {/* Icon */}
            <div className="relative flex items-center justify-center w-full h-full">
                <MessageCircle className="w-7 h-7 text-white" strokeWidth={2} />
            </div>
        </button>
    );
};

export default ChatbotButton;
