import React from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import './PhotoGallery.css';

// Importing gallery images
import gallary from '../assets/gallary.jpg';
import gallary0 from '../assets/gallary0.jpg';
import gallary00 from '../assets/gallary00.jpg';
import gallary1 from '../assets/gallary1.jpg';
import gallary11 from '../assets/gallary11.jpg';
import gallary2 from '../assets/gallary2.jpg';

const PhotoGallery = () => {
  const [currentIndex, setCurrentIndex] = React.useState(0);
  
  const photos = [
    { src: gallary, alt: 'Wedding Moment 1' },
    { src: gallary0, alt: 'Wedding Moment 2' },
    { src: gallary1, alt: 'Wedding Moment 3' },
    { src: gallary00, alt: 'Wedding Moment 4' },
    { src: gallary11, alt: 'Wedding Moment 5' },
    { src: gallary2, alt: 'Wedding Moment 6' },
  ];

  React.useEffect(() => {
    const timer = setInterval(() => {
      setCurrentIndex((prev) => (prev + 1) % photos.length);
    }, 4000); // Change every 4 seconds
    return () => clearInterval(timer);
  }, [photos.length]);

  return (
    <div className="gallery-container">
      <motion.div 
        className="gallery-header"
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.8 }}
      >
        <span className="gallery-subtitle">OUR JOURNEY</span>
        <h2 className="gallery-title script-font">Beautiful Memories</h2>
      </motion.div>

      <div className="gallery-autoflow-wrapper">
        <AnimatePresence mode="wait">
          <motion.div 
            key={currentIndex}
            className="gallery-slide-auto"
            initial={{ opacity: 0, scale: 1.1, rotate: 2 }}
            animate={{ opacity: 1, scale: 1, rotate: currentIndex % 2 === 0 ? -1 : 1 }}
            exit={{ opacity: 0, scale: 0.9, rotate: -2 }}
            transition={{ duration: 1.5, ease: "easeInOut" }}
          >
            <div className="gallery-item-organic">
              <div className="photo-wrapper-organic">
                <motion.img 
                  src={photos[currentIndex].src} 
                  alt={photos[currentIndex].alt} 
                  className="gallery-photo-organic"
                  animate={{ 
                    scale: [1, 1.1],
                    x: [0, -10],
                    y: [0, -5]
                  }}
                  transition={{ 
                    duration: 5, 
                    ease: "linear",
                    repeat: 0
                  }}
                />
              </div>
            </div>
          </motion.div>
        </AnimatePresence>

        {/* Decorative background cards to make it look less formal */}
        <div className="bg-card card-1" />
        <div className="bg-card card-2" />
      </div>
      
    </div>
  );
};

export default PhotoGallery;
