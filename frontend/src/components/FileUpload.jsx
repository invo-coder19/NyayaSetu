import { useState, useRef, useEffect } from "react";
import { Button } from "@/components/ui/button";
import { FileText, Upload, X } from "lucide-react";

/**
 * FileUpload Component
 * 
 * A reusable file upload component with validation, preview, and accessibility features.
 * Supports both controlled and uncontrolled modes.
 * 
 * @param {string} id - Required. Used for input id and label association
 * @param {string} label - Required. Display label (e.g., "Caste Certificate (PDF/JPG)")
 * @param {string} helperText - Optional. Helper text (e.g., "Max 5MB")
 * @param {string} accept - Optional. File types to accept (default: 'application/pdf,image/*')
 * @param {number} maxSize - Optional. Max file size in bytes (default: 5MB)
 * @param {File|null} value - Optional. For controlled mode
 * @param {function} onFileChange - Callback function when file changes (file: File | null)
 * @param {boolean} required - Optional. Whether the field is required
 * @param {string} className - Optional. Additional CSS classes for container
 */
const FileUpload = ({
    id,
    label,
    helperText = "Max 5MB",
    accept = "application/pdf,image/*",
    maxSize = 5 * 1024 * 1024, // 5MB default
    value,
    onFileChange,
    required = false,
    className = "",
}) => {
    const [internalFile, setInternalFile] = useState(null);
    const [error, setError] = useState("");
    const [previewUrl, setPreviewUrl] = useState(null);
    const inputRef = useRef(null);

    // Determine if we're in controlled mode (value prop was explicitly passed)
    const isControlled = value !== undefined;
    const currentFile = isControlled ? value : internalFile;

    // Format bytes to human-readable size
    const formatBytes = (bytes) => {
        if (bytes === 0) return "0 Bytes";
        const k = 1024;
        const sizes = ["Bytes", "KB", "MB"];
        const i = Math.floor(Math.log(bytes) / Math.log(k));
        return Math.round((bytes / Math.pow(k, i)) * 100) / 100 + " " + sizes[i];
    };

    // Validate file type
    const isValidType = (file) => {
        const validTypes = ["application/pdf", "image/jpeg", "image/jpg", "image/png"];
        return validTypes.includes(file.type.toLowerCase());
    };

    // Handle file selection
    const handleFileChange = (e) => {
        const file = e.target.files?.[0];

        if (!file) return;

        // Clear previous error
        setError("");

        // Validate file type
        if (!isValidType(file)) {
            setError("Invalid file type. Please upload PDF or image (JPG/PNG).");
            e.target.value = ""; // Clear input
            return;
        }

        // Validate file size
        if (file.size > maxSize) {
            const maxSizeMB = Math.round(maxSize / (1024 * 1024));
            setError(`File is too large. Max size is ${maxSizeMB}MB.`);
            e.target.value = ""; // Clear input
            return;
        }

        // Create preview for images
        if (file.type.startsWith("image/")) {
            const url = URL.createObjectURL(file);
            setPreviewUrl(url);
        } else {
            setPreviewUrl(null);
        }

        // Update state
        if (!isControlled) {
            setInternalFile(file);
        }

        // Call callback
        if (onFileChange) {
            onFileChange(file);
        }
    };

    // Handle file removal
    const handleRemove = (e) => {
        e.stopPropagation(); // Prevent triggering file picker

        // Revoke preview URL
        if (previewUrl) {
            URL.revokeObjectURL(previewUrl);
            setPreviewUrl(null);
        }

        // Clear input
        if (inputRef.current) {
            inputRef.current.value = "";
        }

        // Clear error
        setError("");

        // Update state
        if (!isControlled) {
            setInternalFile(null);
        }

        // Call callback
        if (onFileChange) {
            onFileChange(null);
        }
    };

    // Open file picker
    const openFilePicker = () => {
        inputRef.current?.click();
    };

    // Keyboard accessibility for card
    const handleKeyDown = (e) => {
        if (e.key === "Enter" || e.key === " ") {
            e.preventDefault();
            openFilePicker();
        }
    };

    // Cleanup preview URL on unmount or file change
    useEffect(() => {
        return () => {
            if (previewUrl) {
                URL.revokeObjectURL(previewUrl);
            }
        };
    }, [previewUrl]);

    return (
        <div className={className}>
            {/* Hidden file input */}
            <input
                ref={inputRef}
                type="file"
                id={id}
                accept={accept}
                onChange={handleFileChange}
                className="hidden"
                required={required}
                aria-label={label}
            />

            {/* Upload card */}
            <div
                onClick={() => inputRef.current?.click()}
                onKeyDown={handleKeyDown}
                tabIndex={0}
                role="button"
                aria-label={`Upload ${label}`}
                className={`
          flex items-center justify-between p-4 border rounded-lg 
          cursor-pointer transition-all
          bg-background hover:bg-muted/50 hover:shadow-sm
          border-input focus-visible:outline-none focus-visible:ring-2 
          focus-visible:ring-ring focus-visible:ring-offset-2
          ${error ? "border-red-500" : ""}
        `}
            >
                {/* Left side: Icon + Label */}
                <div className="flex items-center gap-3 flex-1 min-w-0">
                    {/* Icon or Thumbnail */}
                    {currentFile && previewUrl ? (
                        <img
                            src={previewUrl}
                            alt="Preview"
                            className="w-12 h-12 rounded object-cover flex-shrink-0"
                        />
                    ) : (
                        <FileText className="h-5 w-5 text-muted-foreground flex-shrink-0" />
                    )}

                    {/* Label and helper text */}
                    <div className="flex-1 min-w-0">
                        <p className="font-medium text-sm">
                            {label}
                            {required && <span className="text-red-500 ml-1">*</span>}
                        </p>
                        <p className="text-xs text-muted-foreground">{helperText}</p>
                    </div>
                </div>

                {/* Right side: Upload button or file info */}
                {!currentFile ? (
                    <Button
                        type="button"
                        size="sm"
                        variant="outline"
                        onClick={(e) => {
                            e.stopPropagation();
                            e.preventDefault();
                            if (inputRef.current) {
                                inputRef.current.click();
                            }
                        }}
                        className="flex-shrink-0"
                    >
                        <Upload className="mr-2 h-4 w-4" />
                        Upload
                    </Button>
                ) : (
                    <div className="flex items-center gap-2 flex-shrink-0">
                        {/* File info pill */}
                        <div
                            className="flex items-center gap-2 bg-primary/10 text-primary px-3 py-1.5 rounded-full text-sm max-w-[220px]"
                            title={`${currentFile.name} (${formatBytes(currentFile.size)})`}
                            aria-label={`Selected file: ${currentFile.name}, ${formatBytes(currentFile.size)}`}
                        >
                            <span className="overflow-hidden text-ellipsis whitespace-nowrap">
                                {currentFile.name}
                            </span>
                            <span className="text-xs opacity-75 flex-shrink-0">
                                ({formatBytes(currentFile.size)})
                            </span>
                        </div>

                        {/* Remove button */}
                        <Button
                            type="button"
                            size="sm"
                            variant="ghost"
                            onClick={handleRemove}
                            className="h-8 w-8 p-0 flex-shrink-0 hover:bg-destructive hover:text-destructive-foreground"
                            aria-label="Remove file"
                        >
                            <X className="h-4 w-4" />
                        </Button>
                    </div>
                )}
            </div>

            {/* Error message */}
            {error && (
                <div
                    role="alert"
                    aria-live="assertive"
                    className="mt-2 text-sm text-red-600 dark:text-red-400 flex items-center gap-1"
                >
                    <span>⚠️</span>
                    <span>{error}</span>
                </div>
            )}
        </div>
    );
};

export default FileUpload;
