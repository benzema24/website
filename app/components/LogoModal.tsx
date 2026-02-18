import { motion, AnimatePresence } from 'motion/react';
import { X } from 'lucide-react';
import { useState } from 'react';

interface LogoModalProps {
  isOpen: boolean;
  onClose: () => void;
  brandName: string;
  descriptor: string;
  images: string[];
  tags: string[];
}

export function LogoModal({ isOpen, onClose, brandName, descriptor, images, tags }: LogoModalProps) {
  const [selectedImageIndex, setSelectedImageIndex] = useState(0);

  return (
    <AnimatePresence>
      {isOpen && (
        <>
          {/* Backdrop */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={onClose}
            className="fixed inset-0 bg-black/90 backdrop-blur-xl z-50"
          />

          {/* Modal Container */}
          <div 
            className="fixed inset-0 z-50 flex items-center justify-center p-4 md:p-8"
            onClick={onClose}
          >
            <motion.div
              initial={{ opacity: 0, scale: 0.9, y: 20 }}
              animate={{ opacity: 1, scale: 1, y: 0 }}
              exit={{ opacity: 0, scale: 0.9, y: 20 }}
              transition={{ duration: 0.3, ease: [0.22, 1, 0.36, 1] }}
              className="relative w-full max-w-6xl max-h-[90vh] overflow-y-auto bg-gradient-to-b from-slate-900 via-slate-900/95 to-black border border-cyan-500/30 rounded-3xl shadow-2xl shadow-cyan-500/20"
              onClick={(e) => e.stopPropagation()}
            >
              {/* Close Button */}
              <button
                onClick={onClose}
                className="absolute top-4 right-4 z-10 p-2 bg-black/50 hover:bg-black/80 border border-white/10 hover:border-cyan-500/50 rounded-full transition-all duration-300 group"
              >
                <X className="w-6 h-6 text-white/70 group-hover:text-cyan-400 transition-colors" />
              </button>

              {/* Header */}
              <div className="p-8 border-b border-white/10">
                <div className="flex flex-wrap gap-2 mb-4">
                  {tags.map((tag, index) => (
                    <span
                      key={index}
                      className="px-3 py-1 bg-cyan-500/10 border border-cyan-500/30 rounded-full text-xs text-cyan-400"
                    >
                      {tag}
                    </span>
                  ))}
                </div>
                <h2 className="text-3xl md:text-4xl font-bold text-white mb-2">{brandName}</h2>
                <p className="text-gray-400 text-lg">{descriptor}</p>
              </div>

              {/* Main Image */}
              <div className="p-8">
                <motion.div
                  key={selectedImageIndex}
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  transition={{ duration: 0.3 }}
                  className="relative aspect-video rounded-2xl overflow-hidden bg-gradient-to-br from-slate-800 to-slate-900 border border-cyan-500/20"
                >
                  <img
                    src={images[selectedImageIndex]}
                    alt={`${brandName} - Image ${selectedImageIndex + 1}`}
                    className="w-full h-full object-contain"
                  />
                  
                  {/* Bottom glow */}
                  <div className="absolute bottom-0 left-0 right-0 h-32 bg-gradient-to-t from-cyan-500/20 via-blue-500/10 to-transparent blur-2xl pointer-events-none" />
                </motion.div>

                {/* Thumbnail Gallery */}
                {images.length > 1 && (
                  <div className="mt-6 grid grid-cols-2 md:grid-cols-4 gap-4">
                    {images.map((image, index) => (
                      <motion.button
                        key={index}
                        onClick={() => setSelectedImageIndex(index)}
                        whileHover={{ scale: 1.05 }}
                        whileTap={{ scale: 0.95 }}
                        className={`relative aspect-video rounded-lg overflow-hidden border-2 transition-all duration-300 ${
                          selectedImageIndex === index
                            ? 'border-cyan-500 shadow-lg shadow-cyan-500/50'
                            : 'border-white/10 hover:border-cyan-500/50'
                        }`}
                      >
                        <img
                          src={image}
                          alt={`${brandName} thumbnail ${index + 1}`}
                          className="w-full h-full object-cover"
                        />
                        
                        {/* Active indicator */}
                        {selectedImageIndex === index && (
                          <motion.div
                            layoutId="activeIndicator"
                            className="absolute inset-0 bg-cyan-500/10"
                          />
                        )}
                      </motion.button>
                    ))}
                  </div>
                )}

                {/* Image Counter */}
                {images.length > 1 && (
                  <div className="mt-6 text-center">
                    <span className="text-sm text-gray-400">
                      {selectedImageIndex + 1} / {images.length}
                    </span>
                  </div>
                )}
              </div>

              {/* Bottom glow effect */}
              <div className="absolute bottom-0 left-0 right-0 h-32 bg-gradient-to-t from-cyan-500/10 via-transparent to-transparent blur-2xl pointer-events-none rounded-b-3xl" />
            </motion.div>
          </div>
        </>
      )}
    </AnimatePresence>
  );
}