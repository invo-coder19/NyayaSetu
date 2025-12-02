import { useEffect } from "react";
import { X, CheckCircle } from "lucide-react";
import { Button } from "@/components/ui/button";

/**
 * SuccessCard Component
 * A centered modal card that displays success messages
 * 
 * @param {boolean} isOpen - Controls visibility of the card
 * @param {function} onClose - Callback when user closes the card
 * @param {string} message - Success message to display
 */
const SuccessCard = ({ isOpen, onClose, message }) => {
    // Handle ESC key press to close
    useEffect(() => {
        const handleEsc = (event) => {
            if (event.key === "Escape" && isOpen) {
                onClose();
            }
        };

        if (isOpen) {
            document.addEventListener("keydown", handleEsc);
            // Prevent body scroll when modal is open
            document.body.style.overflow = "hidden";
        }

        return () => {
            document.removeEventListener("keydown", handleEsc);
            document.body.style.overflow = "unset";
        };
    }, [isOpen, onClose]);

    if (!isOpen) return null;

    return (
        <div
            className="fixed inset-0 z-[100] flex items-center justify-center p-4 animate-fade-in"
            role="dialog"
            aria-modal="true"
            aria-labelledby="success-title"
        >
            {/* Backdrop */}
            <div
                className="absolute inset-0 bg-black/60 backdrop-blur-sm"
                onClick={onClose}
                aria-hidden="true"
            />

            {/* Success Card */}
            <div className="relative w-full max-w-md bg-white dark:bg-slate-900 rounded-2xl shadow-2xl animate-scale-fade-in overflow-hidden">
                {/* Header with gradient */}
                <div
                    className="relative px-6 py-4 text-white"
                    style={{
                        background: 'linear-gradient(135deg, #16a34a 0%, #22c55e 50%, #4ade80 100%)',
                    }}
                >
                    <div className="flex items-center justify-between">
                        <h2 id="success-title" className="text-xl font-semibold flex items-center gap-2">
                            <CheckCircle className="h-6 w-6" />
                            Success!
                        </h2>
                        <button
                            onClick={onClose}
                            className="w-8 h-8 rounded-full hover:bg-white/20 transition-colors flex items-center justify-center focus:outline-none focus:ring-2 focus:ring-white focus:ring-offset-2 focus:ring-offset-green-600"
                            aria-label="Close success message"
                        >
                            <X className="w-5 h-5" />
                        </button>
                    </div>
                </div>

                {/* Body */}
                <div className="p-6">
                    <p className="text-gray-800 dark:text-gray-200 text-center leading-relaxed">
                        {message}
                    </p>

                    {/* OK Button */}
                    <div className="mt-6 flex justify-center">
                        <Button
                            onClick={onClose}
                            className="px-8 bg-green-600 hover:bg-green-700 text-white"
                        >
                            OK
                        </Button>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default SuccessCard;
